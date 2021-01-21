import gql from "graphql-tag";
import { FC } from "react";
import { useQuery } from "@apollo/client";

const HELLO = gql`
  query Hello {
    hello
  }
`;

export const Hello: FC = () => {
  const { loading, data } = useQuery(HELLO);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <h1>{data.hello}</h1>;
};
