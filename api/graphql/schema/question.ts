import gql from "graphql-tag";
import { prepare } from "./utils/general";
import { client } from "./utils/searchClient";

export const typeDefs = gql`
  type QuestionResponse {
    answer: String!
    confidence: Float!
  }

  extend type Query {
    question(query: String!): QuestionResponse!
  }
`;

export const resolvers = {
  Query: {
    question: async (obj, { query }: { query: string }) => {
      const { data } = await client({
        query: `
query ($query: String!) {
  qa(q: $query) {
    answer
    confidence
  }
}`,
      });

      return {
        answer: prepare(data.qa.answer),
        confidence: data.qa.confidence,
      };
    },
  },
};
