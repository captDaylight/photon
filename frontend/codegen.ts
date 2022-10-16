import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/api/graphql',
  documents: ['src/**/*', 'pages/**/*.tsx'],
  generates: {
    './gql': {
      preset: 'client',
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};

export default config;
