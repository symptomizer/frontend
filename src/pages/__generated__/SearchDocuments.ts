/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DocumentType } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: SearchDocuments
// ====================================================

export interface SearchDocuments_search_documents_edges_node_authors {
  __typename: "Author";
  name: string;
  email: any | null;
}

export interface SearchDocuments_search_documents_edges_node_images {
  __typename: "Image";
  url: any;
  description: string | null;
  provider: string | null;
}

export interface SearchDocuments_search_documents_edges_node_journalReference {
  __typename: "JournalReference";
  title: string | null;
  volume: string | null;
  issue: string | null;
  start: string | null;
  end: string | null;
}

export interface SearchDocuments_search_documents_edges_node_source {
  __typename: "DocumentSource";
  id: string;
  name: string;
  description: string;
  url: any;
}

export interface SearchDocuments_search_documents_edges_node {
  __typename: "Document";
  id: string;
  alternateDescription: string | null;
  alternateTitle: string[];
  authors: SearchDocuments_search_documents_edges_node_authors[];
  content: string[];
  dateIndexed: any;
  datePublished: any | null;
  description: string | null;
  directURL: any;
  doi: any | null;
  fileName: string | null;
  images: SearchDocuments_search_documents_edges_node_images[];
  isbn: any | null;
  issn: any | null;
  journalReference: SearchDocuments_search_documents_edges_node_journalReference | null;
  keywords: string[];
  language: string;
  meshHeadings: string[];
  meshQualifiers: string[];
  pmcID: any | null;
  publisher: string | null;
  pubMedID: any | null;
  rights: string | null;
  source: SearchDocuments_search_documents_edges_node_source;
  title: string;
  type: DocumentType;
  url: any;
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
