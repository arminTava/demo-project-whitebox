import { parse } from "graphql";

export const coreOffersTypeDef = parse(/* GraphQL */ `
  type CoreOfferLog {
    type: String
    createdAt: DateTime
  }

  type CoreOffer {
    id: ID!
    offerNumber: String
    offerId: String
    memberId: String
    zip: String
    city: String
    customerFirstName: String
    customerLastName: String
    address: String
    memberIdMatched: String
    responsibleMatchedUserId: String
    responsibleUserId: String
    projectStatus: String
    coreOfferLog: [CoreOfferLog]
  }

  extend type Query {
    coreOffer(offerNumber: String!): CoreOffer
    coreOfferExist(offerNumber: String!, zip: String): CoreOffer
  }
`);
