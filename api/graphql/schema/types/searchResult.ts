import { connectionArgs } from "graphql-relay-tools";
import gql from "graphql-tag";

export const typeDefs = gql`
  type SearchResult {
    documents${connectionArgs()}: DocumentConnection!
  }

  extend type Query {
    search(query: String!): SearchResult!
  }
`;
