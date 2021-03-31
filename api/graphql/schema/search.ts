import { connectionArgs, connectionFromArray } from "graphql-relay-tools";
import gql from "graphql-tag";
import { mapDocument } from "./document";
import { infobox } from "./infobox";
import { incrementSearchCounter } from "./utils/incrementSearchCounter";

export const typeDefs = gql`
  type SearchResult {
    documents${connectionArgs()}: DocumentConnection!
    infobox: Infobox
  }

  extend type Query {
    search(query: String!): SearchResult!
  }
`;

const API_HOST = "http://35.214.36.96:8000";

export const client = async (body: {
  query: string;
  variables?: Record<string, any>;
}) => {
  const response = await fetch(`${API_HOST}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return await response.json();
};

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
          id
          alternateDescription
          alternateTitle
          authors {
            name
            email
          }
          content
          dateIndexed
          datePublished
          description
          directURL
          doi
          fileName
          isbn
          issn
          keywords
          language
          meshHeadings
          meshQualifiers
          rights
          source {
            id
          }
          title
          type_
          url

          # imageURLs: [Image!]!
          # pubMedID: PubMedID
          # pmcID: PMCID
          # journalReference: JournalReference
          # publisher: String
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