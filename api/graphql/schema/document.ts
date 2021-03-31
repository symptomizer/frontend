import { connectionDefinitions } from "graphql-relay-tools";
import gql from "graphql-tag";
import { resolvers as documentSourceResolvers } from "./documentSource";
import {
  prepare,
  nullable,
  listify,
  removeNulls,
  snakeCase,
} from "./utils/general";

const { connectionType: DocumentConnection } = connectionDefinitions({
  name: "Document",
});

export const typeDefs = gql`
  type Author {
    name: String!
    email: EmailAddress
  }

  type Image {
    url: URL!
    description: String
    provider: String
  }

  type JournalReference {
    title: String
    volume: String
    issue: String
    start: String
    end: String
  }

  enum DocumentType {
    GUIDANCE
    OVERVIEW
    PUBLICATION
    BOOK
    ADMINISTRATION
    OTHER
    UNKNOWN
  }

  type Document implements Node {
    id: ID!
    alternateDescription: String
    alternateTitle: [String!]!
    authors: [Author!]!
    content: [String!]!
    dateIndexed: DateTime!
    datePublished: DateTime
    description: String
    directURL: URL!
    doi: DOI
    fileName: String
    images: [Image!]!
    isbn: ISBN
    issn: ISSN
    journalReference: JournalReference
    keywords: [String!]!
    language: String!
    meshHeadings: [String!]!
    meshQualifiers: [String!]!
    pmcID: PMCID
    publisher: String
    pubMedID: PubMedID
    rights: String
    source: DocumentSource!
    title: String!
    type: DocumentType!
    url: URL!
  }

  ${DocumentConnection}
`;

export const mapDocument = (document) => {
  document.alternateDescription = nullable(document.alternateDescription);
  document.alternateTitle = removeNulls(listify(document.alternateTitle));
  document.authors = listify(document.authors).map((author) => ({
    name: author.name || "Unknown",
    email: nullable(author.email),
  }));
  document.content = removeNulls(listify(document.content));
  document.dateIndexed = new Date(document.dateIndexed).toISOString();
  document.datePublished = nullable(document.datePublished);
  document.datePublished = document.datePublished
    ? new Date(document.datePublished).toISOString()
    : undefined;
  document.description = prepare(document.description);
  document.doi = nullable(document.doi);
  document.fileName = nullable(document.fileName);
  document.images = removeNulls(
    listify(document.imageURLs).map((image) => {
      const url = nullable(image.url);
      if (url)
        return {
          url,
          description: nullable(image.description),
          provider: nullable(image.provider),
        };

      return undefined;
    })
  );
  document.isbn = nullable(document.isbn);
  document.issn = nullable(document.issn);
  if (
    document.journalReference &&
    (document.journalReference.title ||
      document.journalReference.volume ||
      document.journalReference.issue ||
      document.journalReference.start ||
      document.journalReference.end)
  ) {
    document.journalReference = {
      title: nullable(document.journalReference.title),
      volume: nullable(document.journalReference.volume),
      issue: nullable(document.journalReference.issue),
      start: nullable(document.journalReference.start),
      end: nullable(document.journalReference.end),
    };
  }
  document.keywords = removeNulls(listify(document.keywords));
  document.meshHeadings = removeNulls(listify(document.meshHeadings));
  document.meshQualifiers = removeNulls(listify(document.meshQualifiers));
  document.pmcID = nullable(document.pmcID);
  document.publisher = nullable(document.publisher);
  document.pubMedID = nullable(document.pubMedID);
  document.rights = nullable(document.rights);
  document.source = documentSourceResolvers.Query.documentSource(null, {
    id: document.source.id,
  });
  document.title = prepare(document.title);
  document.type = document.type_;

  switch (document.source.id) {
    case "nhs_med": {
      document.url =
        document.url +
        document.directURL.split("https://api.nhs.uk/medicines/")[1];
      break;
    }
    case "nhs_covid19": {
      document.url = document.directURL.split(
        "https://www.nhs.uk/conditions/coronavirus-covid-19"
      )[1];
      break;
    }
    case "nhs_az": {
      document.url =
        document.url +
        document.directURL.split("https://api.nhs.uk/conditions/")[1];
      break;
    }
    case "bnf": {
      document.url = `${document.url}/${snakeCase(document.title)}.html`;
      break;
    }
    case "who_iris": {
      // The URL is correctly formatted. No action needed.
    }
  }

  return document;
};
