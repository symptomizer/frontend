import gql from "graphql-tag";
import { nodeInterface, nodeField } from "graphql-relay-tools";

export const typeDefs = gql`
  ${nodeInterface}

  extend type Query {
    ${nodeField}
  }
`;
