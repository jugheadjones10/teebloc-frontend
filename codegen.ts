import { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const config: CodegenConfig = {
  schema: {
    [process.env.HASURA_GRAPHQL_URL || "https://teebloc.hasura.app/v1/graphql"]: {
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET || "",
      },
    },
  },
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
