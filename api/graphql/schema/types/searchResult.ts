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

export const resolvers = {
  Query: {
    search: async (obj, { query }: { query: string }) => {
      if (query.indexOf("?") > -1) {
        // Do QA search
      }

      // TODO: Tidy up to use a real client
      const response = await fetch("http://35.214.36.96:8000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `query Search($query: String!) {
              qa(q: $query) {
                answer
                confidence
              }
              search(q: $query) { # TODO: language, type
                documents {
                  id
                  title
                  description
                  content
                  rights
                  url
                  language
                  type
                  directURL
                  datePublished
                  dateAdded
                }
              }
            } `,
          variables: { query },
          operationName: "Search",
        }),
      });
      const json = await response.json();
      const documents = json.data.search.documents;
      return {
        documents: async (args) => connectionFromArray(documents, args),
      };
    },
  },
};
