import { GraphQLYogaError } from '@graphql-yoga/node';
import axios from 'axios';
import { Resolvers } from '../../gql/graphql';
import { API_URL } from '../constants';

export const resolvers: Resolvers = {
  // Mutations: {},
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
  },
  Patient: {
    prescriptions: async (patient) => {
      const { data: prescriptions } = await axios.get(
        `${API_URL}/patients/${patient.id}/prescriptions`
      );

      return prescriptions || [];
    },
  },
};
