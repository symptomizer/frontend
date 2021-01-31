import {
  EmailAddressTypeDefinition,
  EmailAddressResolver,
  URLTypeDefinition,
  URLResolver,
} from "graphql-scalars";

export const typeDefs = [EmailAddressTypeDefinition, URLTypeDefinition];
export const resolvers = [
  { EmailAddress: EmailAddressResolver },
  { URL: URLResolver },
];
