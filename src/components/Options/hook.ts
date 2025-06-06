import { makeVar, useReactiveVar } from "@apollo/client";
import qs from "qs";
import { useCallback, useEffect, useMemo } from "react";
import { useLocation, useSearch } from "wouter";

export const questionsSearchParams = makeVar(
  localStorage.getItem("questionsSearchParams") || ""
);

export const useQueryParamsState = (query: string, initialValue: any) => {
  const [location, setLocation] = useLocation();
  const searchParams = useSearch();
  const questionsSearchParamsVar = useReactiveVar(questionsSearchParams);
  // What's the difference between searchParams and location?
  // useLocation simply returns the path. For example, /practice
  // useSearch returns the search params. For example, subject=123&topics=456

  // The questionsSearchParams reactive var is our main "source of truth". Location will always
  // reflect the value of questionsSearchParamsVar.
  useEffect(() => {
    setLocation(
      `${location.split("?")[0]}${
        questionsSearchParamsVar ? `?${questionsSearchParamsVar}` : ""
      }`
    );
  }, [questionsSearchParamsVar]);

  // Only use searchParams to set questionsSearchParams on first load
  // We need this so that even if the search param changes when user navigates to another page in the app,
  // we can recover the state of the user's filters and re-populate the url search params.
  useEffect(() => {
    if (searchParams) {
      questionsSearchParams(searchParams);
    }
  }, []);

  const parsedValue = useMemo(() => {
    // From the qs docs:
    // qs will also limit specifying indices in an array to a maximum index of 20.
    // Any array members with an index of greater than 20 will instead be converted to an object with the index as the key.
    // This is needed to handle cases when someone sent, for example, a[999999999] and it will take significant time to iterate over this huge array.
    const parsed = qs.parse(searchParams, {
      ignoreQueryPrefix: true,
      arrayLimit: 100,
    });
    return parsed[query] || initialValue;
  }, [searchParams, query]);

  // If value is an array, return an array of objects with value and label. If not, just return one <object data="
  return parsedValue;
};

export function useQueryUpdater() {
  const [location, setLocation] = useLocation();
  const searchParams = useSearch();

  const setQueries = useCallback(
    (updates: Record<string, any>) => {
      const existingQueries = qs.parse(searchParams, {
        ignoreQueryPrefix: true,
      });

      console.log("existingQueries", existingQueries);

      const transformedUpdates = Object.entries(updates).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value,
        }),
        {}
      );

      const queryString = qs.stringify(
        {
          ...existingQueries,
          ...transformedUpdates,
        },
        { skipNulls: true }
      );

      console.log("queryString", queryString);

      questionsSearchParams(queryString);
      if (queryString !== "")
        localStorage.setItem("questionsSearchParams", queryString);
    },
    [setLocation, location, searchParams]
  );

  return { setQueries };
}
