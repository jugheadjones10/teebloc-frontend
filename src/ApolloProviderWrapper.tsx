import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth } from "@clerk/clerk-react";
import { useMemo, useEffect, useState } from "react";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";

function destructureArgs(args: any) {
  const {
    where: {
      question_topics: {
        topic: {
          topicname: { _in: topicnames },
        },
      },
      level: {
        level: { _in: levels },
      },
      paper: {
        paper: { _in: papers },
      },
      assessment: {
        assessmentname: { _in: assessmentnames },
      },
      school: {
        schoolname: { _in: schoolnames },
      },
      isactive: { _in: isactiveFilter } = { _in: [true] },
    },
    offset,
    limit,
  } = args;

  return {
    topicnames,
    levels,
    papers,
    assessmentnames,
    schoolnames,
    isactiveFilter,
    offset,
    limit,
  };
}

export const ApolloProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { getToken } = useAuth();
  const [cacheRestored, setCacheRestored] = useState(false);

  const apolloClient = useMemo(() => {
    const authMiddleware = setContext(async (req, { headers }) => {
      const adminSecret = import.meta.env.VITE_X_HASURA_ADMIN_SECRET;

      if (adminSecret) {
        // Dev: use admin secret
        return {
          headers: {
            ...headers,
            "x-hasura-admin-secret": adminSecret,
          },
        };
      }

      // Prod: use Clerk JWT
      const token = await getToken({ template: "hasura" });
      return {
        headers: {
          ...headers,
          ...(token && { authorization: `Bearer ${token}` }),
        },
      };
    });

    const httpLink = new HttpLink({
      uri: import.meta.env.VITE_GRAPHQL_URI,
    });

    const cache = new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // Aggressive caching for GET_ALL_OPTIONS fields
            levels: {
              merge: false, // Replace existing data rather than merging
            },
            subjects: {
              merge: false,
            },
            topics: {
              merge: false,
            },
            papers: {
              merge: false,
            },
            assessments: {
              merge: false,
            },
            schools: {
              merge: false,
            },
            questions: {
              keyArgs: false,
              read(existing, { args, readField }) {
                if (!args) return undefined;
                try {
                  if (args.where.id && existing) {
                  const ids = args.where.id._in;
                  const homeQs = [];
                  if (existing["home"]) {
                    for (const [key, value] of Object.entries(
                      existing["home"],
                    )) {
                      homeQs.push(...(value as any[]));
                    }
                  }

                  let allQs;
                  if (existing["questions"]) {
                    allQs = [
                      ...homeQs,
                      ...Object.values(existing["questions"]),
                    ];
                  } else {
                    allQs = homeQs;
                  }

                  const uniqueIds = new Set();
                  const filteredQuestions = allQs.filter((q) => {
                    const q_id = readField("id", q);
                    if (uniqueIds.has(q_id)) {
                      return false;
                    }
                    if (ids.includes(q_id)) {
                      uniqueIds.add(q_id);
                      return true;
                    }
                  });
                  return filteredQuestions;
                } else if (
                  args.where.question_topics &&
                  args.where.level &&
                  args.where.paper &&
                  args.where.assessment &&
                  args.where.school
                ) {
                  const {
                    where: {
                      question_topics: {
                        topic: {
                          topicname: { _in: topicnames },
                        },
                      },
                      level: {
                        level: { _in: levels },
                      },
                      paper: {
                        paper: { _in: papers },
                      },
                      assessment: {
                        assessmentname: { _in: assessmentnames },
                      },
                      school: {
                        schoolname: { _in: schoolnames },
                      },
                      isactive: { _in: isactiveFilter } = { _in: [true] },
                    },
                    offset,
                    limit,
                  } = args;

                  const key = JSON.stringify([
                    ...(topicnames || []),
                    ...(levels || []),
                    ...(papers || []),
                    ...(assessmentnames || []),
                    ...(schoolnames || []),
                    ...(isactiveFilter || [true]),
                  ]);

                  return existing?.["home"]?.[key];
                }

                return undefined;
                } catch {
                  return undefined;
                }
              },
              merge(existing = {}, incoming, { args, readField }) {
                if (!args) return existing;
                // This is for the questions query in the app homepage
                if (
                  args.hasOwnProperty("offset") &&
                  args.hasOwnProperty("limit")
                ) {
                  const {
                    topicnames,
                    levels,
                    papers,
                    assessmentnames,
                    schoolnames,
                    isactiveFilter,
                    offset,
                    limit,
                  } = destructureArgs(args);

                  const key = JSON.stringify([
                    ...(topicnames || []),
                    ...(levels || []),
                    ...(papers || []),
                    ...(assessmentnames || []),
                    ...(schoolnames || []),
                    ...(isactiveFilter || [true]),
                  ]);

                  const existingCopy = JSON.parse(JSON.stringify(existing));

                  existingCopy["home"] ??= {};
                  existingCopy["home"][key] ??= [];

                  const merged = existingCopy["home"][key];

                  for (let i = 0; i < incoming.length; ++i) {
                    merged[offset + i] = incoming[i];
                  }

                  existingCopy["home"][key] = merged;
                  return existingCopy;
                } else {
                  // This is questions merge in the cart page and also questions in the worksheets page
                  const existingCopy = JSON.parse(JSON.stringify(existing));

                  existingCopy["questions"] ??= [];

                  const existingCart = existingCopy["questions"];
                  // const existingIds = existingCart.map((q) => {
                  //   const questionId = readField("id", q);
                  //   return questionId;
                  // });

                  for (const question of incoming) {
                    existingCart.push(question);
                  }

                  return existingCopy;
                }
              },
            },
          },
        },
      },
    });

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache,
    });
  }, [getToken]);

  // Local storage caching so that data like ALL_DATA can immediately be used
  // to show the options.
  useEffect(() => {
    const initializeCache = async () => {
      try {
        localStorage.removeItem("teebloc-apollo-cache");

        await persistCache({
          cache: apolloClient.cache,
          storage: new LocalStorageWrapper(window.localStorage),
          key: "teebloc-apollo-cache-v2",
          maxSize: 1024 * 1024 * 5, // 5MB
          serialize: true,
          trigger: "write", // Persist on every cache write
        });
        setCacheRestored(true);
      } catch (error) {
        console.error("Error restoring Apollo cache:", error);
        localStorage.removeItem("teebloc-apollo-cache-v2");
        setCacheRestored(true);
      }
    };

    initializeCache();
  }, [apolloClient]); // Run whenever apolloClient changes

  // Don't render until cache is restored
  if (!cacheRestored) {
    return <div>Loading...</div>; // Or your loading component
  }

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
