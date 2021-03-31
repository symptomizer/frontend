/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Question
// ====================================================

export interface Question_question {
  __typename: "QuestionResponse";
  answer: string;
  confidence: number;
}

export interface Question {
  question: Question_question;
}

export interface QuestionVariables {
  query: string;
}
