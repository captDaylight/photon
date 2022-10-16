import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import client from '../src/apolloClient';

const App = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <ChakraProvider>
      <Head>
        <title>Photon</title>
        <meta name="description" content="Photon Takehome test" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  </ApolloProvider>
);

export default App;
