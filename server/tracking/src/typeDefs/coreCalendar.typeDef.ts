import { parse } from "graphql";

export const coreCalendarTypeDef = parse(/* GraphQL */ `
  type CoreCalendarType {
    title: String
  }

  type CoreCalendar {
    isBinding: Boolean
    offerId: String
    itemId: String
    memberId: String
    categoryId: String
    start_date: DateTime
    end_date: DateTime
    coreCalendarType: CoreCalendarType
  }

  type Query {
    coreCalendar(offerId: String): [CoreCalendar]
  }
`);
