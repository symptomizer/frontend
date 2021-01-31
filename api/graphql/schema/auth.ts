import gql from "graphql-tag";
import { Context } from "../context";
import { md5 } from "./utils/md5";

export const typeDefs = gql`
  type User {
    name: String
    emailAddress: EmailAddress!
    imageURL: URL
  }

  extend type Query {
    me: User
  }
`;

export const resolvers = {
  Query: {
    me: async (parent, args, context: Context) => {
      const jwt = context.jwt;

      if (jwt) {
        const hash = md5(jwt.email);
        const response = await fetch(`https://gravatar.com/${hash}.json`);
        const json = await response.json();
        const data = json.entry[0];
        return {
          emailAddress: jwt.email,
          name: data.displayName,
          imageURL: `https://www.gravatar.com/avatar/${hash}&d=mp`,
        };
      }
    },
  },
};
