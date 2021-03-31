import {
  DateTimeTypeDefinition,
  DateTimeResolver,
  EmailAddressTypeDefinition,
  EmailAddressResolver,
  // ISBNTypeDefinition,
  ISBNResolver,
  URLTypeDefinition,
  URLResolver,
} from "graphql-scalars";

export const typeDefs = [
  DateTimeTypeDefinition,
  EmailAddressTypeDefinition,
  // ISBNTypeDefinition,
  "scalar ISBN",
  "scalar ISSN",
  "scalar DOI",
  "scalar PubMedID",
  "scalar PMCID",
  URLTypeDefinition,
];
export const resolvers = [
  { DateTime: DateTimeResolver },
  { EmailAddress: EmailAddressResolver },
  { ISBN: ISBNResolver },
  { URL: URLResolver },
];
