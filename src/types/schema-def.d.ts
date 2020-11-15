import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bug = {
  __typename?: 'Bug';
  catchPhrase?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  museumPhrase?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  northernMonths?: Maybe<Array<Maybe<Scalars['Int']>>>;
  price?: Maybe<Scalars['String']>;
  priceFlick?: Maybe<Scalars['String']>;
  southernMonths?: Maybe<Array<Maybe<Scalars['Int']>>>;
  timeArray?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Fish = {
  __typename?: 'Fish';
  catchPhrase?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  museumPhrase?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  northernMonths?: Maybe<Array<Maybe<Scalars['Int']>>>;
  price?: Maybe<Scalars['String']>;
  priceCJ?: Maybe<Scalars['String']>;
  shadow?: Maybe<Scalars['String']>;
  southernMonths?: Maybe<Array<Maybe<Scalars['Int']>>>;
  timeArray?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type SeaCreature = {
  __typename?: 'SeaCreature';
  catchPhrase?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  museumPhrase?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  northernMonths?: Maybe<Array<Maybe<Scalars['Int']>>>;
  price?: Maybe<Scalars['String']>;
  southernMonths?: Maybe<Array<Maybe<Scalars['Int']>>>;
  speed?: Maybe<Scalars['String']>;
  timeArray?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Query = {
  __typename?: 'Query';
  seaCreature?: Maybe<SeaCreature>;
  seaCreatures?: Maybe<Array<Maybe<SeaCreature>>>;
  bug?: Maybe<Bug>;
  bugs?: Maybe<Array<Maybe<Bug>>>;
  fish?: Maybe<Fish>;
  fishes?: Maybe<Array<Maybe<Fish>>>;
};


export type QuerySeaCreatureArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QuerySeaCreaturesArgs = {
  month?: Maybe<Scalars['Int']>;
  isSouthern?: Maybe<Scalars['Boolean']>;
};


export type QueryBugArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryBugsArgs = {
  month?: Maybe<Scalars['Int']>;
  isSouthern?: Maybe<Scalars['Boolean']>;
};


export type QueryFishArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryFishesArgs = {
  month?: Maybe<Scalars['Int']>;
  isSouthern?: Maybe<Scalars['Boolean']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Bug: ResolverTypeWrapper<Bug>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Fish: ResolverTypeWrapper<Fish>;
  SeaCreature: ResolverTypeWrapper<SeaCreature>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Bug: Bug;
  String: Scalars['String'];
  Int: Scalars['Int'];
  Fish: Fish;
  SeaCreature: SeaCreature;
  Query: {};
  Boolean: Scalars['Boolean'];
};

export type BugResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bug'] = ResolversParentTypes['Bug']> = {
  catchPhrase?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  museumPhrase?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  northernMonths?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceFlick?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  southernMonths?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  timeArray?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FishResolvers<ContextType = any, ParentType extends ResolversParentTypes['Fish'] = ResolversParentTypes['Fish']> = {
  catchPhrase?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  museumPhrase?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  northernMonths?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceCJ?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shadow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  southernMonths?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  timeArray?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeaCreatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['SeaCreature'] = ResolversParentTypes['SeaCreature']> = {
  catchPhrase?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  museumPhrase?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  northernMonths?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  southernMonths?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  speed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timeArray?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  seaCreature?: Resolver<Maybe<ResolversTypes['SeaCreature']>, ParentType, ContextType, RequireFields<QuerySeaCreatureArgs, never>>;
  seaCreatures?: Resolver<Maybe<Array<Maybe<ResolversTypes['SeaCreature']>>>, ParentType, ContextType, RequireFields<QuerySeaCreaturesArgs, never>>;
  bug?: Resolver<Maybe<ResolversTypes['Bug']>, ParentType, ContextType, RequireFields<QueryBugArgs, never>>;
  bugs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Bug']>>>, ParentType, ContextType, RequireFields<QueryBugsArgs, never>>;
  fish?: Resolver<Maybe<ResolversTypes['Fish']>, ParentType, ContextType, RequireFields<QueryFishArgs, never>>;
  fishes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Fish']>>>, ParentType, ContextType, RequireFields<QueryFishesArgs, never>>;
};

export type Resolvers<ContextType = any> = {
  Bug?: BugResolvers<ContextType>;
  Fish?: FishResolvers<ContextType>;
  SeaCreature?: SeaCreatureResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
