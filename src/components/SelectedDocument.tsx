import { gql, useQuery } from "@apollo/client";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { SearchDocuments_search_documents_edges_node } from "../pages/__generated__/SearchDocuments";
import { truncate } from "../utils/truncate";
import { RelatedDocuments } from "./__generated__/RelatedDocuments";

const RELATED_DOCUMENTS = gql`
  query RelatedDocuments($id: ID!) {
    relatedDocuments(id: $id) {
      id
      title
      url
    }
  }
`;

const Authors = ({
  authors,
}: {
  authors: SearchDocuments_search_documents_edges_node["authors"];
}) =>
  authors.length > 0 ? (
    <div className="py-3 flex justify-between text-sm font-medium">
      <dt className="text-gray-500">Authors</dt>
      <dd className="text-gray-900">
        <ul>
          {authors.map((author) => (
            <li key={author.email}>
              {author.email ? (
                <a href={`mailto:${author.email}`} className="underline">
                  {author.name}
                </a>
              ) : (
                author.name
              )}
            </li>
          ))}
        </ul>
      </dd>
    </div>
  ) : (
    <></>
  );

const DOI = ({ doi }: { doi?: string }) => (
  <div className="py-3 flex justify-between text-sm font-medium">
    <dt className="text-gray-500">DOI</dt>
    <dd className="text-gray-900 underline">
      <a href={`https://doi.org/${doi}`} target="_blank" rel="noreferrer">
        {doi}
      </a>
    </dd>
  </div>
);

export const SelectedDocument = ({
  selectedDocument: document,
}: {
  selectedDocument?: SearchDocuments_search_documents_edges_node;
}) => {
  const relatedDocuments = useQuery<RelatedDocuments>(RELATED_DOCUMENTS, {
    variables: { id: document?.id || "" },
  });

  if (!document) return <></>;

  const description = truncate(
    document.description ||
      document.alternateDescription ||
      document.content.reduce((a, b) => a + b, ""),
    320
  );

  const image = document.images[0] ? (
    <div className="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
      <img src={document.images[0]?.url} alt="" className="object-cover"></img>
    </div>
  ) : (
    <></>
  );

  return (
    <aside className="hidden w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block">
      <div className="pb-16 space-y-6">
        <div>
          {image}
          <div className="mt-4 flex items-start justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                <span className="sr-only">Details for </span>
                {document.title}
              </h2>
              <p className="text-sm font-medium text-gray-500">{description}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Metadata</h3>
          <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
            <Authors authors={document.authors} />
            <div className="py-3 flex justify-between text-sm font-medium">
              <dt className="text-gray-500">Date Indexed</dt>
              <dd className="text-gray-900">
                {new Date(document.dateIndexed).toDateString()}
              </dd>
            </div>
            {document.datePublished ? (
              <div className="py-3 flex justify-between text-sm font-medium">
                <dt className="text-gray-500">Date Published</dt>
                <dd className="text-gray-900">
                  {new Date(document.datePublished).toDateString()}
                </dd>
              </div>
            ) : (
              <></>
            )}
            <DOI doi={document.doi} />
          </dl>
        </div>
        <div className="flex">
          <a
            href={document.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 bg-cyan-600 py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            View <ExternalLinkIcon className="ml-3 -mr-1 h-5 w-5" />
          </a>
        </div>
        <div>
          <details>
            <summary className="font-medium text-gray-900 mb-2 cursor-pointer">
              Related Documents
            </summary>

            <ul className="space-y-2 list-disc">
              {relatedDocuments.loading ? "Loading..." : ""}
              {relatedDocuments.data?.relatedDocuments.map((document) => (
                <li className="text-sm text-gray-700 underline">
                  <a href={document.url} target="_blank" rel="noreferrer">
                    {document.title}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
        <div>
          <details>
            <summary className="font-medium text-gray-900 mb-2 cursor-pointer">
              Document Content
            </summary>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 italic">{document.content}</p>
            </div>
          </details>
        </div>
      </div>
    </aside>
  );
};
