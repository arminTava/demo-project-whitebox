/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CoreCalendar = {
  __typename?: "CoreCalendar";
  categoryId?: Maybe<Scalars["String"]>;
  coreCalendarType?: Maybe<CoreCalendarType>;
  end_date?: Maybe<Scalars["DateTime"]>;
  isBinding?: Maybe<Scalars["Boolean"]>;
  itemId?: Maybe<Scalars["String"]>;
  memberId?: Maybe<Scalars["String"]>;
  offerId?: Maybe<Scalars["String"]>;
  start_date?: Maybe<Scalars["DateTime"]>;
};

export type CoreCalendarType = {
  __typename?: "CoreCalendarType";
  title?: Maybe<Scalars["String"]>;
};

export type CoreMember = {
  __typename?: "CoreMember";
  address?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  companyName?: Maybe<Scalars["String"]>;
  memberId?: Maybe<Scalars["String"]>;
  zip?: Maybe<Scalars["String"]>;
};

export type CoreOffer = {
  __typename?: "CoreOffer";
  address?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  coreOfferLog?: Maybe<Array<Maybe<CoreOfferLog>>>;
  customerFirstName?: Maybe<Scalars["String"]>;
  customerLastName?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  memberId?: Maybe<Scalars["String"]>;
  memberIdMatched?: Maybe<Scalars["String"]>;
  offerId?: Maybe<Scalars["String"]>;
  offerNumber?: Maybe<Scalars["String"]>;
  projectStatus?: Maybe<Scalars["String"]>;
  responsibleMatchedUserId?: Maybe<Scalars["String"]>;
  responsibleUserId?: Maybe<Scalars["String"]>;
  zip?: Maybe<Scalars["String"]>;
};

export type CoreOfferLog = {
  __typename?: "CoreOfferLog";
  createdAt?: Maybe<Scalars["DateTime"]>;
  type?: Maybe<Scalars["String"]>;
};

export type CoreSubUser = {
  __typename?: "CoreSubUser";
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  memberId?: Maybe<Scalars["String"]>;
  mobile?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  coreCalendar?: Maybe<Array<Maybe<CoreCalendar>>>;
  coreMember?: Maybe<CoreMember>;
  coreOffer?: Maybe<CoreOffer>;
  coreOfferExist?: Maybe<CoreOffer>;
  coreSubUser?: Maybe<CoreSubUser>;
};

export type QueryCoreCalendarArgs = {
  offerId?: InputMaybe<Scalars["String"]>;
};

export type QueryCoreMemberArgs = {
  memberId: Scalars["String"];
};

export type QueryCoreOfferArgs = {
  offerNumber: Scalars["String"];
};

export type QueryCoreOfferExistArgs = {
  offerNumber: Scalars["String"];
  zip?: InputMaybe<Scalars["String"]>;
};

export type QueryCoreSubUserArgs = {
  memberId?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type CoreCalendarQueryQueryVariables = Exact<{
  offerId?: InputMaybe<Scalars["String"]>;
}>;

export type CoreCalendarQueryQuery = {
  __typename?: "Query";
  coreCalendar?: Array<{
    __typename?: "CoreCalendar";
    isBinding?: boolean | null;
    offerId?: string | null;
    itemId?: string | null;
    memberId?: string | null;
    categoryId?: string | null;
    start_date?: any | null;
    end_date?: any | null;
    coreCalendarType?: {
      __typename?: "CoreCalendarType";
      title?: string | null;
    } | null;
  } | null> | null;
};

export type CoreMemberQueryQueryVariables = Exact<{
  memberId: Scalars["String"];
}>;

export type CoreMemberQueryQuery = {
  __typename?: "Query";
  coreMember?: {
    __typename?: "CoreMember";
    companyName?: string | null;
    address?: string | null;
    zip?: string | null;
    city?: string | null;
  } | null;
};

export type CoreOfferQueryQueryVariables = Exact<{
  offerNumber: Scalars["String"];
}>;

export type CoreOfferQueryQuery = {
  __typename?: "Query";
  coreOffer?: {
    __typename?: "CoreOffer";
    offerNumber?: string | null;
    offerId?: string | null;
    customerLastName?: string | null;
    customerFirstName?: string | null;
    address?: string | null;
    zip?: string | null;
    city?: string | null;
    projectStatus?: string | null;
    coreOfferLog?: Array<{
      __typename?: "CoreOfferLog";
      type?: string | null;
      createdAt?: any | null;
    } | null> | null;
  } | null;
};

export type CoreOfferExistQueryQueryVariables = Exact<{
  offerNumber: Scalars["String"];
  zip: Scalars["String"];
}>;

export type CoreOfferExistQueryQuery = {
  __typename?: "Query";
  coreOfferExist?: {
    __typename?: "CoreOffer";
    offerId?: string | null;
    memberId?: string | null;
    memberIdMatched?: string | null;
    responsibleMatchedUserId?: string | null;
    responsibleUserId?: string | null;
  } | null;
};

export type CoreSubuserQueryQueryVariables = Exact<{
  userId?: InputMaybe<Scalars["String"]>;
  memberId?: InputMaybe<Scalars["String"]>;
}>;

export type CoreSubuserQueryQuery = {
  __typename?: "Query";
  coreSubUser?: {
    __typename?: "CoreSubUser";
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    phone?: string | null;
    mobile?: string | null;
  } | null;
};

export const CoreCalendarQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "coreCalendarQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offerId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "coreCalendar" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "offerId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offerId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isBinding" } },
                { kind: "Field", name: { kind: "Name", value: "offerId" } },
                { kind: "Field", name: { kind: "Name", value: "itemId" } },
                { kind: "Field", name: { kind: "Name", value: "memberId" } },
                { kind: "Field", name: { kind: "Name", value: "categoryId" } },
                { kind: "Field", name: { kind: "Name", value: "start_date" } },
                { kind: "Field", name: { kind: "Name", value: "end_date" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "coreCalendarType" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CoreCalendarQueryQuery,
  CoreCalendarQueryQueryVariables
>;
export const CoreMemberQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "coreMemberQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "memberId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "coreMember" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "memberId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "memberId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "companyName" } },
                { kind: "Field", name: { kind: "Name", value: "address" } },
                { kind: "Field", name: { kind: "Name", value: "zip" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CoreMemberQueryQuery,
  CoreMemberQueryQueryVariables
>;
export const CoreOfferQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "coreOfferQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offerNumber" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "coreOffer" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "offerNumber" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offerNumber" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "offerNumber" } },
                { kind: "Field", name: { kind: "Name", value: "offerId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "customerLastName" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "customerFirstName" },
                },
                { kind: "Field", name: { kind: "Name", value: "address" } },
                { kind: "Field", name: { kind: "Name", value: "zip" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "projectStatus" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "coreOfferLog" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CoreOfferQueryQuery, CoreOfferQueryQueryVariables>;
export const CoreOfferExistQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "coreOfferExistQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offerNumber" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "zip" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "coreOfferExist" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "offerNumber" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offerNumber" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "zip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "zip" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "offerId" } },
                { kind: "Field", name: { kind: "Name", value: "memberId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "memberIdMatched" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsibleMatchedUserId" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsibleUserId" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CoreOfferExistQueryQuery,
  CoreOfferExistQueryQueryVariables
>;
export const CoreSubuserQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "coreSubuserQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "memberId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "coreSubUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "memberId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "memberId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
                { kind: "Field", name: { kind: "Name", value: "lastName" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "phone" } },
                { kind: "Field", name: { kind: "Name", value: "mobile" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CoreSubuserQueryQuery,
  CoreSubuserQueryQueryVariables
>;
