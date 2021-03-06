import { QueryResult } from "@apollo/client";
import {
  SearchDocuments,
  SearchDocuments_search_documents_edges_node,
} from "../pages/__generated__/SearchDocuments";
import classNames from "classnames";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import { truncate } from "../utils/truncate";
import { Transition } from "@headlessui/react";

const SearchResult = ({
  node,
  selected,
  setSelectedDocument,
}: {
  node: SearchDocuments_search_documents_edges_node;
  selected: boolean;
  setSelectedDocument: (
    document?: SearchDocuments_search_documents_edges_node
  ) => void;
}) => (
  <li key={node.id} onClick={() => setSelectedDocument(node)}>
    <div
      className={classNames(
        "block hover:bg-gray-50 border-l-4 border-white cursor-pointer",
        selected ? "border-cyan-400" : "hover:border-gray-50"
      )}
    >
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-cyan-600 truncate">
            {node.title}
          </p>
          <div className="ml-2 flex-shrink-0 flex">
            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
              {node.type}
            </p>
          </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex max-w-full">
            <p className="flex items-center text-sm text-gray-500">
              {truncate(
                node.content.reduce((a, b) => a + b, ""),
                140
              )}
              ...
            </p>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
            <BadgeCheckIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
            <p>{node.source.name}</p>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export const SearchResults = ({
  loading,
  error,
  data,
  selectedDocument,
  setPagination,
  setSelectedDocument,
}: QueryResult<SearchDocuments> & {
  selectedDocument?: SearchDocuments_search_documents_edges_node;
  setPagination: ({
    before,
    after,
  }: {
    before?: string;
    after?: string;
  }) => void;
  setSelectedDocument: (
    document?: SearchDocuments_search_documents_edges_node
  ) => void;
}) => {
  if (loading)
    return (
      <Transition
        appear={true}
        show={loading}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="mt-4 border border-gray-200 shadow rounded-md mb-4 p-4 w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-2 py-1 ">
              <div className="space-y-2 border-b-1">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div className="space-y-2 border-b-1">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    );

  if (error || !data)
    return (
      <div>
        A critical (and never seen before) error has occurred! Please let us
        know and we will quickly try to fix it. Thank you!
      </div>
    );

  const documentEdges = data.search.documents.edges || [];
  return (
    <div className="mt-8 mb-16 bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {documentEdges.map(
          (edge) =>
            edge &&
            edge.node && (
              <SearchResult
                node={edge.node}
                selected={edge.node.id === selectedDocument?.id}
                setSelectedDocument={setSelectedDocument}
              />
            )
        )}
      </ul>
      {/* <nav
        className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
        aria-label="Pagination"
      >
        <div className="flex-1 flex justify-between sm:justify-end">
          <button
            // disabled={!data.search.documents.pageInfo.hasPreviousPage}
            onClick={() =>
              setPagination({
                before: data.search.documents.pageInfo.startCursor || undefined,
              })
            }
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:cursor-not-allowed disabled:bg-gray-50"
          >
            Previous
          </button>
          <button
            // disabled={!data.search.documents.pageInfo.hasNextPage}
            onClick={() =>
              setPagination({
                after: data.search.documents.pageInfo.endCursor || undefined,
              })
            }
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:cursor-not-allowed disabled:bg-gray-50"
          >
            Next
          </button>
        </div>
      </nav> */}
    </div>
  );
};
