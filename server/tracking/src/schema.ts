import { buildSubgraphSchema } from "@apollo/subgraph";

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const [
  DateTimeTypeDefinition,
  coreOffersTypeDef,
  coreSubUsersTypeDef,
  coreMemebersTypeDef,
  coreCalendarTypeDef,
] = typeDefs;

const [
  coreOfferResolvers,
  coreSubUserResolvers,
  coreMemberResolvers,
  coreCalendarResolvers,
] = resolvers;

export const schema = buildSubgraphSchema([
  { typeDefs: coreOffersTypeDef, resolvers: coreOfferResolvers },
  { typeDefs: coreSubUsersTypeDef, resolvers: coreSubUserResolvers },
  { typeDefs: coreMemebersTypeDef, resolvers: coreMemberResolvers },
  { typeDefs: coreCalendarTypeDef, resolvers: coreCalendarResolvers },
  { typeDefs: DateTimeTypeDefinition },
]);
