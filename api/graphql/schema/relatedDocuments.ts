import gql from "graphql-tag";
import { mapDocument } from "./document";
import { document } from "./utils/fragments";
import { client } from "./utils/searchClient";

export const typeDefs = gql`
  extend type Query {
    relatedDocuments(id: ID!): [Document!]!
  }
`;

export const resolvers = {
  Query: {
    relatedDocuments: async (obj, { id }: { id: string }) => {
      const { data } = await client({
        query: `
query ($id: String!) {
  moreDocs(id: $id) {
    documents {
      ${document}
    }
  }
}
`,
        variables: { id },
      });

      return (data?.moreDocs?.documents || []).map(mapDocument);
    },
  },
};
