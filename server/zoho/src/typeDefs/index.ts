import { parse } from "graphql";
import { DateTimeTypeDefinition } from "graphql-scalars";

import { searchTicketTypeDef } from "./searchTicket.typeDef";

// eslint-disable-next-line import/no-default-export
export default [parse(DateTimeTypeDefinition), searchTicketTypeDef];
