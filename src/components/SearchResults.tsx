import { QueryResult } from "@apollo/client";
import {
  Search,
  Search_search_documents_edges_node,
} from "../pages/__generated__/Search";

const SearchResult = ({
  node,
}: {
  node: Search_search_documents_edges_node;
}) => (
  <li className="py-4" key={node.id}>
    <a className="text-lg leading-6 font-medium text-gray-500" href={node.url}>
      {node.name}
    </a>
    <p className="mt-1 text-sm text-gray-500">{node.description}</p>
    <p className="mt-1 text-xs text-gray-500 text-right">
      Sourced from{" "}
      <a
        className="font-medium"
        href={node.externalSource.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {node.externalSource.name}
      </a>
    </p>
  </li>
);

export const SearchResults = ({
  loading,
  error,
  data,
}: QueryResult<Search>) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  const documentEdges = data?.search.documents.edges || [];
  return (
    <ul className="divide-y divide-gray-200">
      {documentEdges.map(
        (edge) => edge?.node && <SearchResult node={edge.node} />
      )}
    </ul>
  );
};
