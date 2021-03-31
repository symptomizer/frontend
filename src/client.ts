import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://symptomize.me/graphql",
  cache: new InMemoryCache(),
});
