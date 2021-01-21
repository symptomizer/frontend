import { makeExecutableSchema } from "@graphql-tools/schema";
import gql from "graphql-tag";
import { typeDefs as scalarTypeDefs } from "./types/scalars";
import { typeDefs as relayTypeDefs } from "./types/relay";
import { typeDefs as externalSourceTypeDefs } from "./types/externalSource";
import { typeDefs as documentTypeDefs } from "./types/document";
import {
  typeDefs as searchResultTypeDefs,
  resolvers as searchResultResolvers,
} from "./types/searchResult";

const typeDefs = gql`
  type Query {
    hello: String!
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
    externalSourceTypeDefs,
    documentTypeDefs,
    searchResultTypeDefs,
  ],
  resolvers: [resolvers, searchResultResolvers],
});
