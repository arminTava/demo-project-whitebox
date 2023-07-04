import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  documents: ["src/**/*.tsx", "src/**/*.ts", "!src/gql/**/*"],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};
// eslint-disable-next-line import/no-default-export
export default config;
