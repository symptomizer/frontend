/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchInfobox
// ====================================================

export interface SearchInfobox_search_infobox_infobox {
  __typename: "InfoboxDetails";
  cause: string | null;
  complications: string | null;
  deaths: string | null;
  diagnosis: string | null;
  duration: string | null;
  frequency: string | null;
  name: string | null;
  prevention: string | null;
  symptoms: string | null;
  treatment: string | null;
  onset: string | null;
  bioavailability: string | null;
  boiling_point: string | null;
  density: string | null;
  excretion: string | null;
  melting_high: string | null;
  melting_point: string | null;
  metabolism: string | null;
  metabolites: string | null;
  pregnancy_category: string | null;
  protein_bound: string | null;
  routes_of_administration: string | null;
  solubility: string | null;
  tradename: string | null;
}

export interface SearchInfobox_search_infobox {
  __typename: "Infobox";
  aliases: string[];
  extext: string | null;
  images: any[];
  infobox: SearchInfobox_search_infobox_infobox;
}

export interface SearchInfobox_search {
  __typename: "SearchResult";
  infobox: SearchInfobox_search_infobox | null;
}

export interface SearchInfobox {
  search: SearchInfobox_search;
}

export interface SearchInfoboxVariables {
  query: string;
}
