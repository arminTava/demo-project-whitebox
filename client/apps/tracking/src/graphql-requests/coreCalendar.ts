import { graphql } from "gql";

export const coreCalendarQueryDocument = graphql(/* GraphQL */ `
  query coreCalendarQuery($offerId: String) {
    coreCalendar(offerId: $offerId) {
      isBinding
      offerId
      itemId
      memberId
      categoryId
      start_date
      end_date
      coreCalendarType {
        title
      }
    }
  }
`);
