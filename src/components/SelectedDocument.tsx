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
          <h3 className="font-medium text-gray-900">Information</h3>
          <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
            <div className="py-3 flex justify-between text-sm font-medium">
              <dt className="text-gray-500">Uploaded by</dt>
              <dd className="text-gray-900">Marie Culver</dd>
            </div>
            <div className="py-3 flex justify-between text-sm font-medium">
              <dt className="text-gray-500">Created</dt>
              <dd className="text-gray-900">June 8, 2020</dd>
            </div>
            <div className="py-3 flex justify-between text-sm font-medium">
              <dt className="text-gray-500">Last modified</dt>
              <dd className="text-gray-900">June 8, 2020</dd>
            </div>
            <div className="py-3 flex justify-between text-sm font-medium">
              <dt className="text-gray-500">Dimensions</dt>
              <dd className="text-gray-900">4032 x 3024</dd>
            </div>
            <div className="py-3 flex justify-between text-sm font-medium">
              <dt className="text-gray-500">Resolution</dt>
              <dd className="text-gray-900">72 x 72</dd>
            </div>
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
        {/* <div>
          <h3 className="font-medium text-gray-900">Shared with</h3>
          <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
            <li className="py-3 flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <p className="ml-4 text-sm font-medium text-gray-900">
                  Aimee Douglas
                </p>
              </div>
              <button
                type="button"
                className="ml-6 bg-white rounded-md text-sm font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Remove<span className="sr-only"> Aimee Douglas</span>
              </button>
            </li>
            <li className="py-3 flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixqx=fFTBXALF4O&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <p className="ml-4 text-sm font-medium text-gray-900">
                  Andrea McMillan
                </p>
              </div>
              <button
                type="button"
                className="ml-6 bg-white rounded-md text-sm font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Remove<span className="sr-only"> Andrea McMillan</span>
              </button>
            </li>
            <li className="py-2 flex justify-between items-center">
              <button
                type="button"
                className="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <span className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                  <!-- Heroicon name: solid/plus -->
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span className="ml-4 text-sm font-medium text-cyan-600 group-hover:text-cyan-500">
                  Share
                </span>
              </button>
            </li>
          </ul>
        </div> */}
      </div>
    </aside>
  );
};
