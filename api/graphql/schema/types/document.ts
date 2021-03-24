import { connectionDefinitions } from "graphql-relay-tools";
import gql from "graphql-tag";

const { connectionType: DocumentConnection } = connectionDefinitions({
  name: "Document",
});

export const typeDefs = gql`
  type JournalReference {
    title: String
    volume: String
    issue: String
    start: String
    end: String
  }

  type DocumentContent {
    id: ID!
    url: URL!
    text: String!
  }

  enum DocumentType {
    "A clinical guidance document"
    GUIDANCE
    "An overview of a condition, drug or treatment which is typically patient-facing"
    OVERVIEW
  }

  type Document implements Node {
    id: ID!
    title: String!
    description: String!
    content: [String!]!
    url: URL!
    source: String!
  }

  ${DocumentConnection}
`;
