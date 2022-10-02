import { AppProps } from "next/app";
import { globalStyles } from '../../styles/global';

import { ApolloProvider } from '@apollo/client';
import { client } from '../config/client-graphql';

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp

