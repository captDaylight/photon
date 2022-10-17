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

export type Mutation = {
  __typename?: 'Mutation';
  createPatient?: Maybe<Patient>;
  createPrescription?: Maybe<Prescription>;
  updatePrescription?: Maybe<Prescription>;
};

export type MutationCreatePatientArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type MutationCreatePrescriptionArgs = {
  dosage: Scalars['String'];
  medication: Scalars['String'];
  patientId: Scalars['ID'];
};

export type MutationUpdatePrescriptionArgs = {
  id: Scalars['ID'];
  status: PrescriptionStatus;
};

export type Patient = {
  __typename?: 'Patient';
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  prescriptions: Array<Prescription>;
};

export type Prescription = {
  __typename?: 'Prescription';
  dosage: Scalars['String'];
  id: Scalars['ID'];
  medication: Scalars['String'];
  patient: Patient;
  patientId: Scalars['ID'];
  status: PrescriptionStatus;
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

export type PatientQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PatientQueryQuery = {
  __typename?: 'Query';
  patient?: {
    __typename?: 'Patient';
    id: string;
    firstName: string;
    lastName: string;
    prescriptions: Array<{
      __typename?: 'Prescription';
      id: string;
      medication: string;
      dosage: string;
      status: PrescriptionStatus;
    }>;
  } | null;
};

export type PrescriptionsQueryQueryVariables = Exact<{ [key: string]: never }>;

export type PrescriptionsQueryQuery = {
  __typename?: 'Query';
  prescriptions: Array<{
    __typename?: 'Prescription';
    id: string;
    medication: string;
    status: PrescriptionStatus;
    dosage: string;
    patient: { __typename?: 'Patient'; id: string };
  }>;
};

export type PrescriptionQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PrescriptionQueryQuery = {
  __typename?: 'Query';
  prescription?: {
    __typename?: 'Prescription';
    id: string;
    patientId: string;
    medication: string;
    dosage: string;
    status: PrescriptionStatus;
    patient: {
      __typename?: 'Patient';
      id: string;
      firstName: string;
      lastName: string;
    };
  } | null;
};

export type PatientsQueryQueryVariables = Exact<{ [key: string]: never }>;

export type PatientsQueryQuery = {
  __typename?: 'Query';
  patients: Array<{
    __typename?: 'Patient';
    id: string;
    firstName: string;
    lastName: string;
  }>;
};

export const PatientQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PatientQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'patient' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'prescriptions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'medication' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'dosage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'medication' },
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
} as unknown as DocumentNode<PatientQueryQuery, PatientQueryQueryVariables>;
export const PrescriptionsQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PrescriptionsQuery' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'prescriptions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medication' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dosage' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'patient' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
  PrescriptionsQueryQuery,
  PrescriptionsQueryQueryVariables
>;
export const PrescriptionQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PrescriptionQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'prescription' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'patientId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medication' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dosage' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'patient' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'firstName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastName' },
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
  PrescriptionQueryQuery,
  PrescriptionQueryQueryVariables
>;
export const PatientsQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PatientsQuery' },
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
} as unknown as DocumentNode<PatientsQueryQuery, PatientsQueryQueryVariables>;

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
  Mutation: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Patient: ResolverTypeWrapper<Patient>;
  Prescription: ResolverTypeWrapper<Prescription>;
  PrescriptionStatus: PrescriptionStatus;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Mutation: {};
  String: Scalars['String'];
  ID: Scalars['ID'];
  Patient: Patient;
  Prescription: Prescription;
  Query: {};
  Boolean: Scalars['Boolean'];
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createPatient?: Resolver<
    Maybe<ResolversTypes['Patient']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreatePatientArgs, 'firstName' | 'lastName'>
  >;
  createPrescription?: Resolver<
    Maybe<ResolversTypes['Prescription']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreatePrescriptionArgs,
      'dosage' | 'medication' | 'patientId'
    >
  >;
  updatePrescription?: Resolver<
    Maybe<ResolversTypes['Prescription']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePrescriptionArgs, 'id' | 'status'>
  >;
};

export type PatientResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Patient'] = ResolversParentTypes['Patient']
> = {
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  dosage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  medication?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  patient?: Resolver<ResolversTypes['Patient'], ParentType, ContextType>;
  patientId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes['PrescriptionStatus'],
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
  Mutation?: MutationResolvers<ContextType>;
  Patient?: PatientResolvers<ContextType>;
  Prescription?: PrescriptionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};
