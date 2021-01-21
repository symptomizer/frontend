/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Search
// ====================================================

export interface Search_search_documents_edges_node {
  __typename: "Document";
  name: string;
  description: string | null;
  url: any;
}

export interface Search_search_documents_edges {
  __typename: "DocumentEdge";
  node: Search_search_documents_edges_node | null;
}

export interface Search_search_documents {
  __typename: "DocumentConnection";
  edges: (Search_search_documents_edges | null)[] | null;
}

export interface Search_search {
  __typename: "SearchResult";
  documents: Search_search_documents;
}

export interface Search {
  search: Search_search;
}

export interface SearchVariables {
  term: string;
}
