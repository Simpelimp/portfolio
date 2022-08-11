import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/layout";
import theme from "../lib/theme";
import {AnimatePresence} from "framer-motion";

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
      <Layout>
          <AnimatePresence
              exitBeforeEnter
              initial={true}
          >
              <Component {...pageProps} />
          </AnimatePresence>
      </Layout>
  </ChakraProvider>
}

export default MyApp
