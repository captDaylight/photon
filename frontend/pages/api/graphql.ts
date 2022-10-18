import { createServer } from '@graphql-yoga/node';
import { join } from 'path';
import { readFileSync } from 'fs';
import { resolvers } from '../../src/resolvers';

const typeDefs = readFileSync(
  join(process.cwd(), 'src/schema/schema.graphql'),
  {
    encoding: 'utf-8',
  }
);

const server = createServer({
  endpoint: '/api/graphql',
  schema: {
    typeDefs,
    resolvers,
  },
});

export default server.requestListener;
