import { connectionArgs, connectionDefinitions } from "graphql-relay-tools";
import gql from "graphql-tag";

const { connectionType: ExternalSourceConnection } = connectionDefinitions({
  name: "ExternalSource",
});

export const typeDefs = gql`
  type ExternalSource implements Node {
    id: ID!
    name: String!
    description: String!
    url: URL!
  }

  ${ExternalSourceConnection}

  extend type Query {
    externalSources${connectionArgs()}: ExternalSourceConnection!
  }
`;
