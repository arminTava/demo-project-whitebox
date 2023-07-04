import type { CodegenConfig } from "@graphql-codegen/cli";
import { DateTimeTypeDefinition } from "graphql-scalars";

const config: CodegenConfig = {
  overwrite: true,
  schema: ["./src/typeDefs/*.ts", DateTimeTypeDefinition],
  generates: {
    "./src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-resolvers"],
      config: {
        // inputMaybeValue: "undefined | T",
        // outputMaybeValue: "undefined | T",
        // contextType: "../context#GraphQLContext",
        scalars: {
          DateTime: "string",
        },
      },
    },
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
