import { FABRuntime } from "@fab/core";
import { makeGraphQLHandler } from "@glenstack/cf-workers-graphql";
import { makeContextValueMaker } from "./context";
import { playground } from "./playground";
import { schema } from "./schema/index";
import { voyager } from "./voyager";

export default function graphql({ Router, ServerContext }: FABRuntime) {
  const graphQLHandler = makeGraphQLHandler(schema, {
    makeContextValue: makeContextValueMaker(ServerContext),
  });

  Router.on("/graphql", ({ request }) => graphQLHandler(request));
  Router.on(
    "/voyager",
    async () =>
      new Response(voyager, { headers: { "Content-Type": "text/html" } })
  );
  Router.on(
    "/graphiql",
    async () =>
      new Response(playground, { headers: { "Content-Type": "text/html" } })
  );
}
