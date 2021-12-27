import { ChakraProvider } from '@chakra-ui/react';
import { Amplify } from 'aws-amplify';
import type { AppProps } from 'next/app';
import awsConfigure from '../src/aws-exports';
import '../styles/globals.css';

Amplify.configure(awsConfigure);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
