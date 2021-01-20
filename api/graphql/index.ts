import { FABRuntime } from "@fab/core";
import { makeGraphQLHandler } from "@glenstack/cf-workers-graphql";
import { schema } from "./schema/index";

const graphQLHandler = makeGraphQLHandler(schema);

export default function graphql({ Router }: FABRuntime) {
  Router.on("/graphql", ({ request }) => graphQLHandler(request));
}
