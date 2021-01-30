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
import { typeDefs as suggestStringTypeDefs } from "./types/suggestString";
import { typeDefs as userTypeDefs } from "./types/user";

const typeDefs = gql`
  type Query {
    hello: String!
  }

  type Mutation {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },
  Mutation: {
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
    suggestStringTypeDefs,
    userTypeDefs,
  ],
  resolvers: [resolvers, searchResultResolvers],
});
