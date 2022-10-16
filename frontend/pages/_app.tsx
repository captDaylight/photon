import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import client from '../src/apolloClient';
import Layout from '../src/components/Layout';
import theme from '../src/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>
      <Head>
        <title>Photon</title>
        <meta name="description" content="Photon Takehome test" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </ApolloProvider>
);

export default App;
