import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import {
  CoreOfferExtend,
  CoreCalendarExtend,
  CoreCalendarTypes,
} from "../../prisma/prismaTypes";
import {
  core_sub_users,
  core_members,
} from "../../node_modules/.prisma/client";
import { GraphQLContext } from "../context";
export type Maybe<T> = T | null;
export type InputMaybe<T> = undefined | T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  _FieldSet: any;
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
  CoreCalendar: ResolverTypeWrapper<CoreCalendarExtend>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  CoreCalendarType: ResolverTypeWrapper<CoreCalendarTypes>;
  CoreMember: ResolverTypeWrapper<core_members>;
  CoreOffer: ResolverTypeWrapper<CoreOfferExtend>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  CoreOfferLog: ResolverTypeWrapper<CoreOfferLog>;
  CoreSubUser: ResolverTypeWrapper<core_sub_users>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  Query: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CoreCalendar: CoreCalendarExtend;
  String: Scalars["String"];
  Boolean: Scalars["Boolean"];
  CoreCalendarType: CoreCalendarTypes;
  CoreMember: core_members;
  CoreOffer: CoreOfferExtend;
  ID: Scalars["ID"];
  CoreOfferLog: CoreOfferLog;
  CoreSubUser: core_sub_users;
  DateTime: Scalars["DateTime"];
  Query: {};
};

export type CoreCalendarResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["CoreCalendar"] = ResolversParentTypes["CoreCalendar"]
> = {
  categoryId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  coreCalendarType?: Resolver<
    Maybe<ResolversTypes["CoreCalendarType"]>,
    ParentType,
    ContextType
  >;
  end_date?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  isBinding?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  itemId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  memberId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  offerId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  start_date?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoreCalendarTypeResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["CoreCalendarType"] = ResolversParentTypes["CoreCalendarType"]
> = {
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoreMemberResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["CoreMember"] = ResolversParentTypes["CoreMember"]
> = {
  address?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  companyName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  memberId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoreOfferResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["CoreOffer"] = ResolversParentTypes["CoreOffer"]
> = {
  address?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  coreOfferLog?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["CoreOfferLog"]>>>,
    ParentType,
    ContextType
  >;
  customerFirstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  customerLastName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  memberId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  memberIdMatched?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  offerId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  offerNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  projectStatus?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  responsibleMatchedUserId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  responsibleUserId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  zip?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoreOfferLogResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["CoreOfferLog"] = ResolversParentTypes["CoreOfferLog"]
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoreSubUserResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["CoreSubUser"] = ResolversParentTypes["CoreSubUser"]
> = {
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lastName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  memberId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  mobile?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type QueryResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  coreCalendar?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["CoreCalendar"]>>>,
    ParentType,
    ContextType,
    Partial<QueryCoreCalendarArgs>
  >;
  coreMember?: Resolver<
    Maybe<ResolversTypes["CoreMember"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCoreMemberArgs, "memberId">
  >;
  coreOffer?: Resolver<
    Maybe<ResolversTypes["CoreOffer"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCoreOfferArgs, "offerNumber">
  >;
  coreOfferExist?: Resolver<
    Maybe<ResolversTypes["CoreOffer"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCoreOfferExistArgs, "offerNumber">
  >;
  coreSubUser?: Resolver<
    Maybe<ResolversTypes["CoreSubUser"]>,
    ParentType,
    ContextType,
    Partial<QueryCoreSubUserArgs>
  >;
};

export type Resolvers<ContextType = GraphQLContext> = {
  CoreCalendar?: CoreCalendarResolvers<ContextType>;
  CoreCalendarType?: CoreCalendarTypeResolvers<ContextType>;
  CoreMember?: CoreMemberResolvers<ContextType>;
  CoreOffer?: CoreOfferResolvers<ContextType>;
  CoreOfferLog?: CoreOfferLogResolvers<ContextType>;
  CoreSubUser?: CoreSubUserResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
};
