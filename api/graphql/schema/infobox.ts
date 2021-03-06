import gql from "graphql-tag";
import { listify } from "./utils/general";

const INFOBOX_API_URL = "http://api.symptomize.me/info";

type InfoBoxResponse = {
  aliases: string[];
  extext?: string;
  images: string[];
  infobox: {
    cause?: string;
    complications?: string;
    deaths?: string;
    diagnosis?: string;
    duration?: string;
    frequency?: string;
    name?: string;
    prevention?: string;
    symptoms?: string;
    treatment?: string;
    onset?: string;
    bioavailability?: string;
    boiling_point?: string;
    density?: string;
    excretion?: string;
    melting_high?: string;
    melting_point?: string;
    metabolism?: string;
    metabolites?: string;
    pregnancy_category?: string;
    protein_bound?: string;
    routes_of_administration?: string;
    solubility?: string;
    tradename?: string;
  };
};

export const typeDefs = gql`
  type InfoboxDetails {
    cause: String
    complications: String
    deaths: String
    diagnosis: String
    duration: String
    frequency: String
    name: String
    prevention: String
    symptoms: String
    treatment: String
    onset: String
    bioavailability: String
    boiling_point: String
    density: String
    excretion: String
    melting_high: String
    melting_point: String
    metabolism: String
    metabolites: String
    pregnancy_category: String
    protein_bound: String
    routes_of_administration: String
    solubility: String
    tradename: String
  }

  type Infobox {
    aliases: [String!]!
    extext: String
    images: [URL!]!
    infobox: InfoboxDetails!
  }
`;

export const infobox = async (query: string): Promise<InfoBoxResponse> => {
  const url = new URL(INFOBOX_API_URL);
  url.searchParams.set("search", query);
  const response = await fetch(url.toString(), {
    headers: { "X-Port": "8889" },
  });
  const json = await response.json();
  if (json.status !== 200) return undefined;

  const data: InfoBoxResponse = json.data;
  data.aliases = listify(data.aliases);
  data.images = listify(data.images);
  data.infobox = data.infobox || {};
  return data;
};
