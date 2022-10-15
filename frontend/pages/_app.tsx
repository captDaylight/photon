import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Head>
      <title>Photon</title>
      <meta name="description" content="Photon Takehome test" />
      <link rel="icon" href="/images/favicon.png" />
    </Head>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
