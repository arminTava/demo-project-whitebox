import type { CodegenConfig } from "@graphql-codegen/cli";
import { DateTimeTypeDefinition } from "graphql-scalars";

const config: CodegenConfig = {
  overwrite: true,
  schema: ["./src/typeDefs/*.ts", DateTimeTypeDefinition],
  generates: {
    "./src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-resolvers"],
      config: {
        mappers: {
          CoreOffer: "../../prisma/prismaTypes#CoreOfferExtend",
          CoreSubUser: "../../node_modules/.prisma/client#core_sub_users",
          CoreMember: "../../node_modules/.prisma/client#core_members",
          CoreCalendar: "../../prisma/prismaTypes#CoreCalendarExtend",
          CoreCalendarType: "../../prisma/prismaTypes#CoreCalendarTypes",
        },
        inputMaybeValue: "undefined | T",
        federation: true,
        outputMaybeValue: "undefined | T",
        contextType: "../context#GraphQLContext",
        scalars: {
          DateTime: "string",
        },
      },
    },
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
