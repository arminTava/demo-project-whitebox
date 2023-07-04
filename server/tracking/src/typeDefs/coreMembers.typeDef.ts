import { parse } from "graphql";

export const coreMemebersTypeDef = parse(/* GraphQL */ `
  type CoreMember {
    companyName: String
    address: String
    zip: String
    memberId: String
    city: String
  }

  extend type Query {
    coreMember(memberId: String!): CoreMember
  }
`);
