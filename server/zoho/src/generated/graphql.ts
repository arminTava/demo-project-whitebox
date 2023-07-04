import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
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
  DateTime: string;
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Assignee: ResolverTypeWrapper<Assignee>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Cf: ResolverTypeWrapper<Cf>;
  Contact: ResolverTypeWrapper<Contact>;
  Data: ResolverTypeWrapper<Data>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  Department: ResolverTypeWrapper<Department>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Query: ResolverTypeWrapper<{}>;
  SearchTicket: ResolverTypeWrapper<SearchTicket>;
  SharedDepartments: ResolverTypeWrapper<SharedDepartments>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Team: ResolverTypeWrapper<Team>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Assignee: Assignee;
  Boolean: Scalars["Boolean"];
  Cf: Cf;
  Contact: Contact;
  Data: Data;
  DateTime: Scalars["DateTime"];
  Department: Department;
  Int: Scalars["Int"];
  Query: {};
  SearchTicket: SearchTicket;
  SharedDepartments: SharedDepartments;
  String: Scalars["String"];
  Team: Team;
};

export type AssigneeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Assignee"] = ResolversParentTypes["Assignee"]
> = {
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  photoURL?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Cf"] = ResolversParentTypes["Cf"]
> = {
  cf_auftraggeber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  cf_entnahmeliste_1?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  cf_entnahmeliste_1_1?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  cf_ganze_zahl_1?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  cf_leistung?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  cf_link_im_board?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  cf_name_beschwerdegeber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  cf_name_endkunde?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  cf_tel_1?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  cf_tel_agent?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  cf_wohnort?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Contact"] = ResolversParentTypes["Contact"]
> = {
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lastName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Data"] = ResolversParentTypes["Data"]
> = {
  approvalCount?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  assignee?: Resolver<
    Maybe<ResolversTypes["Assignee"]>,
    ParentType,
    ContextType
  >;
  assigneeId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  attachmentCount?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  category?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  cf?: Resolver<Maybe<ResolversTypes["Cf"]>, ParentType, ContextType>;
  channel?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  channelCode?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  classification?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  closedTime?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  commentCount?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  contact?: Resolver<Maybe<ResolversTypes["Contact"]>, ParentType, ContextType>;
  contactId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdTime?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  customerResponseTime?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  department?: Resolver<
    Maybe<ResolversTypes["Department"]>,
    ParentType,
    ContextType
  >;
  departmentId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  dueDate?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  entitySkills?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  isEscalated?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isOverDue?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isSpam?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  isTrashed?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  modifiedTime?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  onholdTime?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  phone?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  productId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  resolution?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  secondaryContacts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  sharedDepartments?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["SharedDepartments"]>>>,
    ParentType,
    ContextType
  >;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  statusType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  subCategory?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  subject?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  taskCount?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  team?: Resolver<Maybe<ResolversTypes["Team"]>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  threadCount?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  ticketNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  timeEntryCount?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  webUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type DepartmentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Department"] = ResolversParentTypes["Department"]
> = {
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  searchTicket?: Resolver<
    Maybe<ResolversTypes["SearchTicket"]>,
    ParentType,
    ContextType,
    Partial<QuerySearchTicketArgs>
  >;
};

export type SearchTicketResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SearchTicket"] = ResolversParentTypes["SearchTicket"]
> = {
  count?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  data?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Data"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SharedDepartmentsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SharedDepartments"] = ResolversParentTypes["SharedDepartments"]
> = {
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Team"] = ResolversParentTypes["Team"]
> = {
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Assignee?: AssigneeResolvers<ContextType>;
  Cf?: CfResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  Data?: DataResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Department?: DepartmentResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SearchTicket?: SearchTicketResolvers<ContextType>;
  SharedDepartments?: SharedDepartmentsResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
};
