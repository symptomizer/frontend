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

export const resolvers = {
  Query: {
    search: async (obj, { query }: { query: string }) => {
      // TODO: Tidy up to use a real client
      const response = await fetch(
        "https://ttds.gregbrimble.computer/graphql",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query:
              "query Search($query: String!) {\n  search(q: $query) {\n    documents {\n      id\n      name\n      description\n    }\n  }\n}",
            variables: { query },
            operationName: "Search",
          }),
        }
      );
      const json = await response.json();
      const documents = json.data.search.documents;
      // TODO: Not monkey-patch junk
      documents.map((document) => (document.url = "https://gregbrimble.com/"));
      documents.map((document) => (document.id = document.name));
      documents.map((document) => (document.externalSource = nhs));
      return {
        documents: async (args) => connectionFromArray(documents, args),
      };
    },
  },
};
