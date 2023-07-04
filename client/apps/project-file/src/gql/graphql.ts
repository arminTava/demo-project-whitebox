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

export type Assignee = {
  __typename?: "Assignee";
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  photoURL?: Maybe<Scalars["String"]>;
};

export type Cf = {
  __typename?: "Cf";
  cf_auftraggeber?: Maybe<Scalars["String"]>;
  cf_entnahmeliste_1?: Maybe<Scalars["String"]>;
  cf_entnahmeliste_1_1?: Maybe<Scalars["String"]>;
  cf_ganze_zahl_1?: Maybe<Scalars["String"]>;
  cf_leistung?: Maybe<Scalars["String"]>;
  cf_link_im_board?: Maybe<Scalars["String"]>;
  cf_name_beschwerdegeber?: Maybe<Scalars["String"]>;
  cf_name_endkunde?: Maybe<Scalars["String"]>;
  cf_tel_1?: Maybe<Scalars["String"]>;
  cf_tel_agent?: Maybe<Scalars["String"]>;
  cf_wohnort?: Maybe<Scalars["String"]>;
};

export type Contact = {
  __typename?: "Contact";
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
};

export type Data = {
  __typename?: "Data";
  approvalCount?: Maybe<Scalars["String"]>;
  assignee?: Maybe<Assignee>;
  assigneeId?: Maybe<Scalars["String"]>;
  attachmentCount?: Maybe<Scalars["String"]>;
  category?: Maybe<Scalars["String"]>;
  cf?: Maybe<Cf>;
  channel?: Maybe<Scalars["String"]>;
  channelCode?: Maybe<Scalars["String"]>;
  classification?: Maybe<Scalars["String"]>;
  closedTime?: Maybe<Scalars["String"]>;
  commentCount?: Maybe<Scalars["String"]>;
  contact?: Maybe<Contact>;
  contactId?: Maybe<Scalars["String"]>;
  createdTime?: Maybe<Scalars["String"]>;
  customerResponseTime?: Maybe<Scalars["String"]>;
  department?: Maybe<Department>;
  departmentId?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dueDate?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  entitySkills?: Maybe<Array<Maybe<Scalars["String"]>>>;
  id?: Maybe<Scalars["String"]>;
  isEscalated?: Maybe<Scalars["Boolean"]>;
  isOverDue?: Maybe<Scalars["Boolean"]>;
  isSpam?: Maybe<Scalars["Boolean"]>;
  isTrashed?: Maybe<Scalars["Boolean"]>;
  modifiedTime?: Maybe<Scalars["String"]>;
  onholdTime?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  priority?: Maybe<Scalars["String"]>;
  product?: Maybe<Scalars["String"]>;
  productId?: Maybe<Scalars["String"]>;
  resolution?: Maybe<Scalars["String"]>;
  secondaryContacts?: Maybe<Array<Maybe<Scalars["String"]>>>;
  sharedDepartments?: Maybe<Array<Maybe<SharedDepartments>>>;
  status?: Maybe<Scalars["String"]>;
  statusType?: Maybe<Scalars["String"]>;
  subCategory?: Maybe<Scalars["String"]>;
  subject?: Maybe<Scalars["String"]>;
  taskCount?: Maybe<Scalars["String"]>;
  team?: Maybe<Team>;
  teamId?: Maybe<Scalars["String"]>;
  threadCount?: Maybe<Scalars["String"]>;
  ticketNumber?: Maybe<Scalars["String"]>;
  timeEntryCount?: Maybe<Scalars["String"]>;
  webUrl?: Maybe<Scalars["String"]>;
};

export type Department = {
  __typename?: "Department";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  searchTicket?: Maybe<SearchTicket>;
};

export type QuerySearchTicketArgs = {
  orderNumber?: InputMaybe<Scalars["String"]>;
};

export type SearchTicket = {
  __typename?: "SearchTicket";
  count?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<Data>>>;
};

export type SharedDepartments = {
  __typename?: "SharedDepartments";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type Team = {
  __typename?: "Team";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type SearchTicketQueryQueryVariables = Exact<{
  orderNumber?: InputMaybe<Scalars["String"]>;
}>;

export type SearchTicketQueryQuery = {
  __typename?: "Query";
  searchTicket?: {
    __typename?: "SearchTicket";
    data?: Array<{
      __typename?: "Data";
      subject?: string | null;
      createdTime?: string | null;
      status?: string | null;
      ticketNumber?: string | null;
      webUrl?: string | null;
    } | null> | null;
  } | null;
};

export const SearchTicketQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "searchTicketQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderNumber" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "searchTicket" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderNumber" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderNumber" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subject" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdTime" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "ticketNumber" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "webUrl" },
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
} as unknown as DocumentNode<
  SearchTicketQueryQuery,
  SearchTicketQueryQueryVariables
>;
