import { coreCalendarResolvers } from "./coreCalendar.resolvers";
import { coreMemberResolvers } from "./coreMembers.resolvers";
import { coreOfferResolvers } from "./coreOffers.resolvers";
import { coreSubUserResolvers } from "./coreSubUser.resolvers";

// eslint-disable-next-line import/no-default-export
export default [
  coreOfferResolvers,
  coreSubUserResolvers,
  coreMemberResolvers,
  coreCalendarResolvers,
];
