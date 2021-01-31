import { makeExecutableSchema } from "@graphql-tools/schema";
import gql from "graphql-tag";
import {
  typeDefs as scalarTypeDefs,
  resolvers as scalarResolvers,
} from "./scalars";
import { typeDefs as relayTypeDefs } from "./relay";
import { typeDefs as authTypeDefs, resolvers as authResolvers } from "./auth";
import { typeDefs as externalSourceTypeDefs } from "./types/externalSource";
import { typeDefs as documentTypeDefs } from "./types/document";
import {
  typeDefs as searchResultTypeDefs,
  resolvers as searchResultResolvers,
} from "./types/searchResult";
import { typeDefs as suggestStringTypeDefs } from "./types/suggestString";
import { Context } from "../context";

const typeDefs = gql`
  type Query {
    hello: String!
    version: String!
  }

  type Mutation {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
    version: (parent, args, context: Context) => context.version,
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
    authTypeDefs,
    externalSourceTypeDefs,
    documentTypeDefs,
    searchResultTypeDefs,
    suggestStringTypeDefs,
  ],
  resolvers: [
    resolvers,
    ...scalarResolvers,
    authResolvers,
    searchResultResolvers,
  ],
});
