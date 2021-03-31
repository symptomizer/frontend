import { makeExecutableSchema } from "@graphql-tools/schema";
import gql from "graphql-tag";
import {
  typeDefs as scalarTypeDefs,
  resolvers as scalarResolvers,
} from "./scalars";
import { typeDefs as relayTypeDefs } from "./relay";
import { typeDefs as authTypeDefs, resolvers as authResolvers } from "./auth";
import {
  typeDefs as documentSourceTypeDefs,
  resolvers as documentSourceResolvers,
} from "./documentSource";
import { typeDefs as documentTypeDefs } from "./document";
import {
  typeDefs as searchResultTypeDefs,
  resolvers as searchResultResolvers,
} from "./searchResult";
import { typeDefs as infoboxTypeDefs } from "./infobox";
import { Context } from "../context";

const typeDefs = gql`
  type Query {
    hello: String!
    version: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
    version: (parent, args, context: Context) => context.version,
  },
};

export const schema = makeExecutableSchema({
  typeDefs: [
    typeDefs,
    ...scalarTypeDefs,
    ...relayTypeDefs,
    authTypeDefs,
    documentSourceTypeDefs,
    documentTypeDefs,
    searchResultTypeDefs,
    infoboxTypeDefs,
  ],
  resolvers: [
    resolvers,
    ...scalarResolvers,
    authResolvers,
    documentSourceResolvers,
    searchResultResolvers,
  ],
});
