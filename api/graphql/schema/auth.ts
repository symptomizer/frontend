import { cyrb53 } from "./utils/cyrb53";
import gql from "graphql-tag";
import { Context } from "../context";

export const typeDefs = gql`
  type User {
    id: ID!
    imageURL: URL!
  }

  extend type Query {
    me: User
  }
`;

const avatars = [
  "blackonwhite.png",
  "blueonwhite.png",
  "bright-blue.png",
  "bright-pink.png",
  "burgundy.png",
  "corporate-blue.png",
  "corporate-red.png",
  "dark-green.png",
  "dark-jade.png",
  "muted-blue.png",
  "muted-brown.png",
  "purple.png",
  "spruce-grey.png",
].map((filename) => `https://symptomize.me/avatars/${filename}`);

export const resolvers = {
  Query: {
    me: async (parent, args, context: Context) => {
      const jwt = context.jwt;

      if (jwt) {
        const hash = cyrb53(jwt.sub);
        const imageURL = avatars[hash % avatars.length];
        return {
          id: jwt.sub,
          imageURL,
        };
      }
    },
  },
};
