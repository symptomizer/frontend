import { connectionArgs, connectionFromArray } from "graphql-relay-tools";
import gql from "graphql-tag";

export const typeDefs = gql`
  type SearchResult {
    documents${connectionArgs()}: DocumentConnection!
  }

  extend type Query {
    search(query: String!): SearchResult!
  }
`;

const nhs = {
  id: "nhs",
  name: "NHS",
  description: "National Health Service",
  url: "https://nhs.uk/",
};

const documents = [
  {
    id: "a",
    name: "A Document",
    description: "A Description",
    url: "https://a.a/",
    externalSource: nhs,
  },
  {
    id: "b",
    name: "B Document",
    description: "B Document",
    url: "https://b.b/",
    externalSource: nhs,
  },
  {
    id: "abba",
    name: "ABBA Document",
    description: "Swedish pop group",
    url: "https://ab.ba/",
    externalSource: nhs,
  },
];

export const resolvers = {
  Query: {
    search: async (obj, { query }: { query: string }) => {
      return {
        documents: async args =>
          connectionFromArray(
            documents.filter(
              document =>
                document.name.toLowerCase().indexOf(query.toLowerCase()) > -1
            ),
            args
          ),
      };
    },
  },
};
