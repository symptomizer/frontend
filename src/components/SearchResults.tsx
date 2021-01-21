import { QueryResult } from "@apollo/client";
import { Search } from "../pages/__generated__/Search";

export const SearchResults = ({
  loading,
  error,
  data,
}: QueryResult<Search>) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <ul className="divide-y divide-gray-200">
      {data?.search.documents.edges?.map(edge => (
        <li className="py-4">{edge?.node?.name}</li>
      ))}
    </ul>
  );
};
