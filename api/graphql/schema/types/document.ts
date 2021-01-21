import { connectionDefinitions } from "graphql-relay-tools";
import gql from "graphql-tag";

const { connectionType: DocumentConnection } = connectionDefinitions({
  name: "Document",
});

export const typeDefs = gql`
  type Document implements Node {
    id: ID!
    name: String!
    description: String
    url: URL!
    externalSource: ExternalSource!
  }

  ${DocumentConnection}
`;
