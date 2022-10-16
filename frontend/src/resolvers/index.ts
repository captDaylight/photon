import { GraphQLYogaError } from '@graphql-yoga/node';
import axios from 'axios';
import { Resolvers } from '../../gql/graphql';
import { API_URL } from '../constants';

export const resolvers: Resolvers = {
  Query: {
    patients: async () => {
      const { data: patients } = await axios.get(`${API_URL}/patients`);

      return patients || [];
    },
    patient: async (_: any, { id }) => {
      const { data: patient } = await axios.get(`${API_URL}/patients/${id}`);

      if (!patient) {
        throw new GraphQLYogaError(`Patient with ${id} not found.`);
      }

      return patient;
    },
    prescriptions: async () => {
      const { data: prescriptions } = await axios.get(
        `${API_URL}/prescriptions`
      );

      return prescriptions || [];
    },
    prescription: async (_: any, { id }) => {
      const { data: prescription } = await axios.get(
        `${API_URL}/prescriptions/${id}`
      );

      if (!prescription) {
        throw new GraphQLYogaError(`Prescription with ${id} not found.`);
      }

      return prescription;
    },
  },
  Mutation: {
    createPatient: async (_: any, { firstName, lastName }) => {
      const { data: patient } = await axios.post(`${API_URL}/patients`, {
        firstName,
        lastName,
      });

      if (!patient) {
        throw new GraphQLYogaError(
          `Failed to create patient ${firstName} ${lastName}`
        );
      }

      return patient;
    },
    createPrescription: async (_: any, { patientId, medication, dosage }) => {
      const { data: prescription } = await axios.post(
        `${API_URL}/prescriptions`,
        {
          patientId,
          medication,
          dosage,
        }
      );

      if (!prescription) {
        throw new GraphQLYogaError(
          `Failed to create prescription for patient ${patientId}`
        );
      }

      return prescription;
    },
    updatePrescription: async (_: any, { id, status }) => {
      const { data: prescription } = await axios.patch(
        `${API_URL}/prescriptions/${id}`,
        {
          status,
        }
      );

      if (!prescription) {
        throw new GraphQLYogaError(`Failed to update prescription ${id}`);
      }

      return prescription;
    },
  },
  Patient: {
    prescriptions: async (patient) => {
      const { data: prescriptions } = await axios.get(
        `${API_URL}/patients/${patient.id}/prescriptions`
      );

      return prescriptions || [];
    },
  },
  Prescription: {
    patient: async (prescription) => {
      const { data: patient } = await axios.get(
        `${API_URL}/patients/${prescription.patientId}`
      );

      return patient;
    },
  },
};
