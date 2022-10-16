/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
};

export type Patient = {
  __typename?: 'Patient';
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  prescriptions: Array<Prescription>;
};

export type Prescription = {
  __typename?: 'Prescription';
  dosage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  medication?: Maybe<Scalars['String']>;
  patient?: Maybe<Patient>;
  patientId: Scalars['ID'];
  status?: Maybe<PrescriptionStatus>;
};

export enum PrescriptionStatus {
  Filled = 'FILLED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type Query = {
  __typename?: 'Query';
  patient?: Maybe<Patient>;
  patients: Array<Patient>;
  prescription?: Maybe<Prescription>;
  prescriptions: Array<Prescription>;
};

export type QueryPatientArgs = {
  id: Scalars['ID'];
};

export type QueryPrescriptionArgs = {
  id: Scalars['ID'];
};

export type PatientsQueryVariables = Exact<{ [key: string]: never }>;

export type PatientsQuery = {
  __typename?: 'Query';
  patients: Array<{
    __typename?: 'Patient';
    id: string;
    firstName?: string | null;
    lastName?: string | null;
  }>;
};

export const PatientsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Patients' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'patients' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PatientsQuery, PatientsQueryVariables>;

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
  Patient: ResolverTypeWrapper<Patient>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Prescription: ResolverTypeWrapper<Prescription>;
  PrescriptionStatus: PrescriptionStatus;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Patient: Patient;
  String: Scalars['String'];
  ID: Scalars['ID'];
  Prescription: Prescription;
  Query: {};
  Boolean: Scalars['Boolean'];
};

export type PatientResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Patient'] = ResolversParentTypes['Patient']
> = {
  firstName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prescriptions?: Resolver<
    Array<ResolversTypes['Prescription']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrescriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Prescription'] = ResolversParentTypes['Prescription']
> = {
  dosage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  medication?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  patient?: Resolver<Maybe<ResolversTypes['Patient']>, ParentType, ContextType>;
  patientId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<
    Maybe<ResolversTypes['PrescriptionStatus']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  patient?: Resolver<
    Maybe<ResolversTypes['Patient']>,
    ParentType,
    ContextType,
    RequireFields<QueryPatientArgs, 'id'>
  >;
  patients?: Resolver<
    Array<ResolversTypes['Patient']>,
    ParentType,
    ContextType
  >;
  prescription?: Resolver<
    Maybe<ResolversTypes['Prescription']>,
    ParentType,
    ContextType,
    RequireFields<QueryPrescriptionArgs, 'id'>
  >;
  prescriptions?: Resolver<
    Array<ResolversTypes['Prescription']>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = any> = {
  Patient?: PatientResolvers<ContextType>;
  Prescription?: PrescriptionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};
