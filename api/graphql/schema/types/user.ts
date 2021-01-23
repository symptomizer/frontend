import gql from "graphql-tag";

export const typeDefs = gql`
  type User implements Node {
    id: ID!
    firstName: String!
    lastName: String!
    email: EmailAddress!
  }

  scalar AuthToken

  type LoginResponse {
    user: User!
    authToken: AuthToken!
  }

  input RegisterInput {
    firstName: String!
    lastName: String!
    email: EmailAddress!
  }

  extend type Mutation {
    login(email: EmailAddress!): LoginResponse!
    register(input: RegisterInput!): LoginResponse!
  }

  extend type Query {
    me: User!
  }
`;
