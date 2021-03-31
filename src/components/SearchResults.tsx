import { QueryResult } from "@apollo/client";
import {
  SearchDocuments,
  SearchDocuments_search_documents_edges_node,
} from "../pages/__generated__/SearchDocuments";

const SearchResult = ({
  node,
}: {
  node: SearchDocuments_search_documents_edges_node;
}) => (
  <li key={node.id} onClick={() => {}}>
    <div className="block hover:bg-gray-50">
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-cyan-600 truncate">
            Back End Developer
          </p>
          <div className="ml-2 flex-shrink-0 flex">
            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
              Full-time
            </p>
          </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex">
            <p className="flex items-center text-sm text-gray-500">
              Engineering
            </p>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
            {/* <!-- Heroicon name: solid/calendar --> */}
            <svg
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
            <p>NHS</p>
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
}: QueryResult<SearchDocuments>) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  const documentEdges = data?.search.documents.edges || [];
  return (
    <div className="mt-8 mb-16 bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {documentEdges.map(
          (edge) => edge && edge.node && <SearchResult node={edge.node} />
        )}
      </ul>
    </div>
  );
};
