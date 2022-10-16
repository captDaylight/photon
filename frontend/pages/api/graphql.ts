import { createServer, GraphQLYogaError } from '@graphql-yoga/node';
import { join } from 'path';
import { readFileSync } from 'fs';
import axios from 'axios';
import { Resolvers } from '../../src/gql/graphql';

const API_URL = 'http://localhost:4000';

const typeDefs = readFileSync(
  join(process.cwd(), 'src/schema/schema.graphql'),
  {
    encoding: 'utf-8',
  }
);

const resolvers: Resolvers = {
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
  },
};

const server = createServer({
  endpoint: '/api/graphql',
  schema: {
    typeDefs,
    resolvers,
  },
});

export default server.requestListener;
