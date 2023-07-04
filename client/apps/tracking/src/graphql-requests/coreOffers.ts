import { graphql } from "gql";

export const coreOfferQueryDocument = graphql(/* GraphQL */ `
  query coreOfferQuery($offerNumber: String!) {
    coreOffer(offerNumber: $offerNumber) {
      offerNumber
      offerId
      customerLastName
      customerFirstName
      address
      zip
      city
      projectStatus
      coreOfferLog {
        type
        createdAt
      }
    }
  }
`);

export const coreOfferExistQueryDocument = graphql(/* GraphQL */ `
  query coreOfferExistQuery($offerNumber: String!, $zip: String!) {
    coreOfferExist(offerNumber: $offerNumber, zip: $zip) {
      offerId
      memberId
      memberIdMatched
      responsibleMatchedUserId
      responsibleUserId
    }
  }
`);
