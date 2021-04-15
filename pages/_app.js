import Head from 'next/head';
import { ChakraProvider, GlobalStyle } from '@chakra-ui/react';
import { AuthProvider } from '@/lib/auth';
import { extendTheme } from '@chakra-ui/react';
import { styles, fontWeights, fonts } from '@/styles/theme';

const theme = extendTheme({
  fontWeights,
  fonts,
  styles,
});

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <ChakraProvider theme={theme} resetCSS>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
