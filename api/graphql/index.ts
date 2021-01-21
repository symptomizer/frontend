import { FABRuntime } from "@fab/core";
import { makeGraphQLHandler } from "@glenstack/cf-workers-graphql";
import { schema } from "./schema/index";
import { voyager } from "./voyager";

const graphQLHandler = makeGraphQLHandler(schema);

export default function graphql({ Router }: FABRuntime) {
  Router.on("/graphql", ({ request }) => graphQLHandler(request));
  Router.on(
    "/voyager",
    async () =>
      new Response(voyager, { headers: { "Content-Type": "text/html" } })
  );
}
