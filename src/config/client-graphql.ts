import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'http://test.frontend.api.brainny.cc/graphql',
  cache: new InMemoryCache(),
});