import { parse } from "graphql";
import { DateTimeTypeDefinition } from "graphql-scalars";

import { coreCalendarTypeDef } from "./coreCalendar.typeDef";
import { coreMemebersTypeDef } from "./coreMembers.typeDef";
import { coreOffersTypeDef } from "./coreOffers.typeDef";
import { coreSubUsersTypeDef } from "./coreSubUser.typeDef";

// eslint-disable-next-line import/no-default-export
export default [
  parse(DateTimeTypeDefinition),
  coreOffersTypeDef,
  coreSubUsersTypeDef,
  coreMemebersTypeDef,
  coreCalendarTypeDef,
];
