/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query PatientQuery($id: ID!) {\n    patient(id: $id) {\n      id\n      firstName\n      lastName\n      prescriptions {\n        id\n        medication\n        dosage\n        status\n        medication\n      }\n    }\n  }\n": types.PatientQueryDocument,
    "\n  mutation CreatePrescription(\n    $dosage: String!\n    $medication: String!\n    $patientId: ID!\n  ) {\n    createPrescription(\n      dosage: $dosage\n      medication: $medication\n      patientId: $patientId\n    ) {\n      id\n      patientId\n      dosage\n      status\n      medication\n    }\n  }\n": types.CreatePrescriptionDocument,
    "\n  query PrescriptionsQuery {\n    prescriptions {\n      id\n      medication\n      status\n      dosage\n      status\n      patient {\n        id\n      }\n    }\n  }\n": types.PrescriptionsQueryDocument,
    "\n  mutation UpdatePrescription($id: ID!, $status: PrescriptionStatus!) {\n    updatePrescription(id: $id, status: $status) {\n      id\n      status\n    }\n  }\n": types.UpdatePrescriptionDocument,
    "\n  query PrescriptionQuery($id: ID!) {\n    prescription(id: $id) {\n      id\n      patientId\n      medication\n      dosage\n      status\n      patient {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n": types.PrescriptionQueryDocument,
    "\n  query PatientsQuery {\n    patients {\n      id\n      firstName\n      lastName\n    }\n  }\n": types.PatientsQueryDocument,
    "\n  mutation CreatePatient($firstName: String!, $lastName: String!) {\n    createPatient(firstName: $firstName, lastName: $lastName) {\n      id\n      firstName\n      lastName\n    }\n  }\n": types.CreatePatientDocument,
};

export function graphql(source: "\n  query PatientQuery($id: ID!) {\n    patient(id: $id) {\n      id\n      firstName\n      lastName\n      prescriptions {\n        id\n        medication\n        dosage\n        status\n        medication\n      }\n    }\n  }\n"): (typeof documents)["\n  query PatientQuery($id: ID!) {\n    patient(id: $id) {\n      id\n      firstName\n      lastName\n      prescriptions {\n        id\n        medication\n        dosage\n        status\n        medication\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation CreatePrescription(\n    $dosage: String!\n    $medication: String!\n    $patientId: ID!\n  ) {\n    createPrescription(\n      dosage: $dosage\n      medication: $medication\n      patientId: $patientId\n    ) {\n      id\n      patientId\n      dosage\n      status\n      medication\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePrescription(\n    $dosage: String!\n    $medication: String!\n    $patientId: ID!\n  ) {\n    createPrescription(\n      dosage: $dosage\n      medication: $medication\n      patientId: $patientId\n    ) {\n      id\n      patientId\n      dosage\n      status\n      medication\n    }\n  }\n"];
export function graphql(source: "\n  query PrescriptionsQuery {\n    prescriptions {\n      id\n      medication\n      status\n      dosage\n      status\n      patient {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query PrescriptionsQuery {\n    prescriptions {\n      id\n      medication\n      status\n      dosage\n      status\n      patient {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation UpdatePrescription($id: ID!, $status: PrescriptionStatus!) {\n    updatePrescription(id: $id, status: $status) {\n      id\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePrescription($id: ID!, $status: PrescriptionStatus!) {\n    updatePrescription(id: $id, status: $status) {\n      id\n      status\n    }\n  }\n"];
export function graphql(source: "\n  query PrescriptionQuery($id: ID!) {\n    prescription(id: $id) {\n      id\n      patientId\n      medication\n      dosage\n      status\n      patient {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  query PrescriptionQuery($id: ID!) {\n    prescription(id: $id) {\n      id\n      patientId\n      medication\n      dosage\n      status\n      patient {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query PatientsQuery {\n    patients {\n      id\n      firstName\n      lastName\n    }\n  }\n"): (typeof documents)["\n  query PatientsQuery {\n    patients {\n      id\n      firstName\n      lastName\n    }\n  }\n"];
export function graphql(source: "\n  mutation CreatePatient($firstName: String!, $lastName: String!) {\n    createPatient(firstName: $firstName, lastName: $lastName) {\n      id\n      firstName\n      lastName\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePatient($firstName: String!, $lastName: String!) {\n    createPatient(firstName: $firstName, lastName: $lastName) {\n      id\n      firstName\n      lastName\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;