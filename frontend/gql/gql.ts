/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query PatientQuery($id: ID!) {\n    patient(id: $id) {\n      id\n      firstName\n      lastName\n      prescriptions {\n        id\n        medication\n        dosage\n        status\n        medication\n      }\n    }\n  }\n": types.PatientQueryDocument,
    "\n  query Patients {\n    patients {\n      id\n      firstName\n      lastName\n    }\n  }\n": types.PatientsDocument,
};

export function graphql(source: "\n  query PatientQuery($id: ID!) {\n    patient(id: $id) {\n      id\n      firstName\n      lastName\n      prescriptions {\n        id\n        medication\n        dosage\n        status\n        medication\n      }\n    }\n  }\n"): (typeof documents)["\n  query PatientQuery($id: ID!) {\n    patient(id: $id) {\n      id\n      firstName\n      lastName\n      prescriptions {\n        id\n        medication\n        dosage\n        status\n        medication\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query Patients {\n    patients {\n      id\n      firstName\n      lastName\n    }\n  }\n"): (typeof documents)["\n  query Patients {\n    patients {\n      id\n      firstName\n      lastName\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;