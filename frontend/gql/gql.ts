/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query PatientQuery($id: ID!) {\n    patient(id: $id) {\n      id\n      firstName\n      lastName\n      prescriptions {\n        id\n        medication\n        dosage\n        status\n        medication\n      }\n    }\n  }\n": types.PatientQueryDocument,
    "\n  query PrescriptionsQuery {\n    prescriptions {\n      id\n      medication\n      status\n      dosage\n      status\n      patient {\n        id\n      }\n    }\n  }\n": types.PrescriptionsQueryDocument,
    "\n  query PrescriptionQuery($id: ID!) {\n    prescription(id: $id) {\n      id\n      patientId\n      medication\n      dosage\n      status\n      patient {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n": types.PrescriptionQueryDocument,
    "\n  query PatientsQuery {\n    patients {\n      id\n      firstName\n      lastName\n    }\n  }\n": types.PatientsQueryDocument,
};

export function graphql(source: "\n  query PatientQuery($id: ID!) {\n    patient(id: $id) {\n      id\n      firstName\n      lastName\n      prescriptions {\n        id\n        medication\n        dosage\n        status\n        medication\n      }\n    }\n  }\n"): (typeof documents)["\n  query PatientQuery($id: ID!) {\n    patient(id: $id) {\n      id\n      firstName\n      lastName\n      prescriptions {\n        id\n        medication\n        dosage\n        status\n        medication\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query PrescriptionsQuery {\n    prescriptions {\n      id\n      medication\n      status\n      dosage\n      status\n      patient {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query PrescriptionsQuery {\n    prescriptions {\n      id\n      medication\n      status\n      dosage\n      status\n      patient {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query PrescriptionQuery($id: ID!) {\n    prescription(id: $id) {\n      id\n      patientId\n      medication\n      dosage\n      status\n      patient {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  query PrescriptionQuery($id: ID!) {\n    prescription(id: $id) {\n      id\n      patientId\n      medication\n      dosage\n      status\n      patient {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query PatientsQuery {\n    patients {\n      id\n      firstName\n      lastName\n    }\n  }\n"): (typeof documents)["\n  query PatientsQuery {\n    patients {\n      id\n      firstName\n      lastName\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;