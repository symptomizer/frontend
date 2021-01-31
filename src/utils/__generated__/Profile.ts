/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Profile
// ====================================================

export interface Profile_me {
  __typename: "User";
  name: string | null;
  emailAddress: any;
  imageURL: any | null;
}

export interface Profile {
  me: Profile_me | null;
}
