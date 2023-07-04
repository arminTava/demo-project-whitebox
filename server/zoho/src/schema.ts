import { buildSubgraphSchema } from "@apollo/subgraph";

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const [DateTimeTypeDefinition, TicketTypeDef] = typeDefs;

const [ticketResolvers] = resolvers;

export const schema = buildSubgraphSchema([
  { typeDefs: TicketTypeDef, resolvers: ticketResolvers },
  { typeDefs: DateTimeTypeDefinition },
]);
