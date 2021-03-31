/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RelatedDocuments
// ====================================================

export interface RelatedDocuments_relatedDocuments {
  __typename: "Document";
  id: string;
  title: string;
  url: any;
}

export interface RelatedDocuments {
  relatedDocuments: RelatedDocuments_relatedDocuments[];
}

export interface RelatedDocumentsVariables {
  id: string;
}
