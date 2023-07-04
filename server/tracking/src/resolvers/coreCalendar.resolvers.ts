import { DateTimeResolver } from "graphql-scalars";

import { Resolvers } from "../generated/graphql";

export const coreCalendarResolvers: Resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    coreCalendar: async (parent, { offerId }, { prisma }) => {
      const coreCalendars = await prisma.core_calendar.findMany({
        where: {
          AND: [
            { offerId: offerId },
            { isDeleted: false },
            { isBinding: true },
          ],
        },
        orderBy: {
          start_date: "desc",
        },
      });
      // categoryID
      const coreCalendarTypes = await prisma.core_calendar_types.findMany({
        where: {
          OR: coreCalendars.map((cc) => {
            return { categoryId: cc.categoryId ?? "" };
          }),
        },
      });
      const coreCalendarExtented = coreCalendars.map((calendar) => {
        const coreCalendarType = coreCalendarTypes.find(
          (calendarType) => calendarType.categoryId === calendar.categoryId
        );
        return { ...calendar, coreCalendarType: coreCalendarType };
      });
      return coreCalendarExtented;
    },
  },
};
