import { graphql } from "gql";

export const TicketsQueryDocument = graphql(/* GraphQL */ `
  query searchTicketQuery($orderNumber: String) {
    searchTicket(orderNumber: $orderNumber) {
      data {
        subject
        createdTime
        status
        ticketNumber
        webUrl
      }
    }
  }
`);
