import { createServer, GraphQLYogaError } from '@graphql-yoga/node';
import { join } from 'path';
import { readFileSync } from 'fs';
import axios from 'axios';

const API_URL = 'http://localhost:4000';

const typeDefs = readFileSync(
  join(process.cwd(), 'src/schema/schema.graphql'),
  {
    encoding: 'utf-8',
  }
);

type Patient = {
  id: string;
  firstName: string;
  lastName: string;
};

type PatientResponse = {
  data: Patient;
};
const resolvers = {
  Query: {
    patient: async (_, { id }) => {
      const { data: patient } = await axios.get<PatientResponse>(
        `${API_URL}/patients/${id}`
      );

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
