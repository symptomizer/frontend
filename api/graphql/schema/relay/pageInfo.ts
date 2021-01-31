import gql from "graphql-tag";
import { pageInfoType } from "graphql-relay-tools";

export const typeDefs = gql`
  ${pageInfoType}
`;
