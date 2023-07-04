import { graphql } from "gql";

export const coreMemberQueryDocument = graphql(/* GraphQL */ `
  query coreMemberQuery($memberId: String!) {
    coreMember(memberId: $memberId) {
      companyName
      address
      zip
      city
    }
  }
`);
