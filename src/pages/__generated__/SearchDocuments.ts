/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchDocuments
// ====================================================

export interface SearchDocuments_search_documents_edges_node {
  __typename: "Document";
  id: string;
  title: string;
}

export interface SearchDocuments_search_documents_edges {
  __typename: "DocumentEdge";
  node: SearchDocuments_search_documents_edges_node | null;
}

export interface SearchDocuments_search_documents {
  __typename: "DocumentConnection";
  edges: (SearchDocuments_search_documents_edges | null)[] | null;
}

export interface SearchDocuments_search {
  __typename: "SearchResult";
  documents: SearchDocuments_search_documents;
}

export interface SearchDocuments {
  search: SearchDocuments_search;
}

export interface SearchDocumentsVariables {
  query: string;
}
