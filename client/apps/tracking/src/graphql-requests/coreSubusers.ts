import { graphql } from "gql";

export const coreSubuserQueryDocument = graphql(/* GraphQL */ `
  query coreSubuserQuery($userId: String, $memberId: String) {
    coreSubUser(userId: $userId, memberId: $memberId) {
      firstName
      lastName
      email
      phone
      mobile
    }
  }
`);
