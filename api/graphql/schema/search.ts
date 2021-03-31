import { client } from "./utils/searchClient";
import { connectionArgs, connectionFromArray } from "graphql-relay-tools";
import gql from "graphql-tag";
import { mapDocument } from "./document";
import { infobox } from "./infobox";
import { incrementSearchCounter } from "./utils/incrementSearchCounter";
import { document } from "./utils/fragments";

export const typeDefs = gql`
  type SearchResult {
    documents${connectionArgs()}: DocumentConnection!
    infobox: Infobox
  }

  extend type Query {
    search(query: String!): SearchResult!
  }
`;

export const resolvers = {
  Query: {
    search: async (obj, { query }: { query: string }) => {
      await incrementSearchCounter();

      return {
        documents: async (args) => {
          args.first = args.first || 20;
          const limit = args.after ? args.first : 100;

          const { data } = await client({
            query: `
query ($query: String!, $language: String!, $limit: Int) {
  search(q: $query, language: $language, limit: $limit) { # TODO: type
    documents {
      ${document}
    }
  }
}`,
            variables: { query, language: "en", limit },
          });
          const documents = data.search.documents.map(mapDocument);
          return connectionFromArray(documents, args);
        },
        infobox: async () => await infobox(query),
      };
    },
  },
};
