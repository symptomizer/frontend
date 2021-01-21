import { makeExecutableSchema } from "@graphql-tools/schema";
import gql from "graphql-tag";
import { typeDefs as scalarTypeDefs } from "./types/scalars";
import { typeDefs as relayTypeDefs } from "./types/relay";
import { typeDefs as documentTypeDefs } from "./types/document";
import { typeDefs as searchResultTypeDefs } from "./types/searchResult";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },
};

export const schema = makeExecutableSchema({
  typeDefs: [
    typeDefs,
    ...scalarTypeDefs,
    ...relayTypeDefs,
    documentTypeDefs,
    searchResultTypeDefs,
  ],
  resolvers: [resolvers],
});
