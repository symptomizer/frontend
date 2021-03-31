import gql from "graphql-tag";

export const typeDefs = gql`
  type DocumentSource implements Node {
    id: ID!
    name: String!
    description: String!
    url: URL!
  }

  extend type Query {
    documentSource(id: ID!): DocumentSource
    documentSources: [DocumentSource!]!
  }
`;

const documentSources = [
  {
    id: "nhs_med",
    name: "NHS Medicines A to Z",
    description:
      "Find out how your medicine works, how and when to take it, possible side effects and answers to your common questions.",
    url: "https://www.nhs.uk/medicines/",
  },
  {
    id: "nhs_covid19",
    name: "NHS Coronavirus (COVID-19)",
    description:
      "Get the latest advice about coronavirus, including information about symptoms, self-isolation and testing.",
    url: "https://www.nhs.uk/conditions/coronavirus-covid-19/",
  },
  {
    id: "nhs_az",
    name: "NHS Health A to Z",
    description:
      "Your complete guide to conditions, symptoms and treatments, including what to do and when to get help.",
    url: "https://www.nhs.uk/conditions/",
  },
  {
    id: "bnf",
    name: "British National Formulary (BNF)",
    description:
      "The British National Formulary (BNF) is a United Kingdom (UK) pharmaceutical reference book that contains a wide spectrum of information and advice on prescribing and pharmacology, along with specific facts and details about many medicines available on the UK National Health Service (NHS).",
    url: "https://bnf.nice.org.uk/drug/",
  },
  {
    id: "who_iris",
    name: "WHO IRIS",
    description:
      "World Health Organization Intitutional Repository for Information Sharing",
    url: "https://apps.who.int/iris/",
  },
];

export const resolvers = {
  Query: {
    documentSource: (obj, { id: searchID }: { id: string }) =>
      documentSources.find(({ id }) => id === searchID),
    documentSources: () => documentSources,
  },
};
