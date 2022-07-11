import "../styles/globals.css";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import '../styles/globals.css'

const colors = {
  neutral: {
    almostWhite: 'hsl(0, 0%, 98%)',
    mediumGray: 'hsl(0, 0%, 41%)',
    almostBlack: 'hsl(0, 0%, 8%)'
  },
};

const breakpoints = {
  mobile: '0px',
  desktop: '376px'
}

const theme = extendTheme({ colors, breakpoints });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
