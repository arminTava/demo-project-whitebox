/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  query coreCalendarQuery($offerId: String) {\n    coreCalendar(offerId: $offerId) {\n      isBinding\n      offerId\n      itemId\n      memberId\n      categoryId\n      start_date\n      end_date\n      coreCalendarType {\n        title\n      }\n    }\n  }\n":
    types.CoreCalendarQueryDocument,
  "\n  query coreMemberQuery($memberId: String!) {\n    coreMember(memberId: $memberId) {\n      companyName\n      address\n      zip\n      city\n    }\n  }\n":
    types.CoreMemberQueryDocument,
  "\n  query coreOfferQuery($offerNumber: String!) {\n    coreOffer(offerNumber: $offerNumber) {\n      offerNumber\n      offerId\n      customerLastName\n      customerFirstName\n      address\n      zip\n      city\n      projectStatus\n      coreOfferLog {\n        type\n        createdAt\n      }\n    }\n  }\n":
    types.CoreOfferQueryDocument,
  "\n  query coreOfferExistQuery($offerNumber: String!, $zip: String!) {\n    coreOfferExist(offerNumber: $offerNumber, zip: $zip) {\n      offerId\n      memberId\n      memberIdMatched\n      responsibleMatchedUserId\n      responsibleUserId\n    }\n  }\n":
    types.CoreOfferExistQueryDocument,
  "\n  query coreSubuserQuery($userId: String, $memberId: String) {\n    coreSubUser(userId: $userId, memberId: $memberId) {\n      firstName\n      lastName\n      email\n      phone\n      mobile\n    }\n  }\n":
    types.CoreSubuserQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query coreCalendarQuery($offerId: String) {\n    coreCalendar(offerId: $offerId) {\n      isBinding\n      offerId\n      itemId\n      memberId\n      categoryId\n      start_date\n      end_date\n      coreCalendarType {\n        title\n      }\n    }\n  }\n"
): typeof documents["\n  query coreCalendarQuery($offerId: String) {\n    coreCalendar(offerId: $offerId) {\n      isBinding\n      offerId\n      itemId\n      memberId\n      categoryId\n      start_date\n      end_date\n      coreCalendarType {\n        title\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query coreMemberQuery($memberId: String!) {\n    coreMember(memberId: $memberId) {\n      companyName\n      address\n      zip\n      city\n    }\n  }\n"
): typeof documents["\n  query coreMemberQuery($memberId: String!) {\n    coreMember(memberId: $memberId) {\n      companyName\n      address\n      zip\n      city\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query coreOfferQuery($offerNumber: String!) {\n    coreOffer(offerNumber: $offerNumber) {\n      offerNumber\n      offerId\n      customerLastName\n      customerFirstName\n      address\n      zip\n      city\n      projectStatus\n      coreOfferLog {\n        type\n        createdAt\n      }\n    }\n  }\n"
): typeof documents["\n  query coreOfferQuery($offerNumber: String!) {\n    coreOffer(offerNumber: $offerNumber) {\n      offerNumber\n      offerId\n      customerLastName\n      customerFirstName\n      address\n      zip\n      city\n      projectStatus\n      coreOfferLog {\n        type\n        createdAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query coreOfferExistQuery($offerNumber: String!, $zip: String!) {\n    coreOfferExist(offerNumber: $offerNumber, zip: $zip) {\n      offerId\n      memberId\n      memberIdMatched\n      responsibleMatchedUserId\n      responsibleUserId\n    }\n  }\n"
): typeof documents["\n  query coreOfferExistQuery($offerNumber: String!, $zip: String!) {\n    coreOfferExist(offerNumber: $offerNumber, zip: $zip) {\n      offerId\n      memberId\n      memberIdMatched\n      responsibleMatchedUserId\n      responsibleUserId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query coreSubuserQuery($userId: String, $memberId: String) {\n    coreSubUser(userId: $userId, memberId: $memberId) {\n      firstName\n      lastName\n      email\n      phone\n      mobile\n    }\n  }\n"
): typeof documents["\n  query coreSubuserQuery($userId: String, $memberId: String) {\n    coreSubUser(userId: $userId, memberId: $memberId) {\n      firstName\n      lastName\n      email\n      phone\n      mobile\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
