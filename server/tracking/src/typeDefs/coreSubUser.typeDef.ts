import { parse } from "graphql";

export const coreSubUsersTypeDef = parse(/* GraphQL */ `
  type CoreSubUser {
    memberId: String
    firstName: String
    lastName: String
    email: String
    phone: String
    mobile: String
  }

  extend type Query {
    coreSubUser(userId: String, memberId: String): CoreSubUser
  }
`);
