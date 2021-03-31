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

  Router.on("/graphql", async ({ request }) => {
    if (request.method === "OPTIONS")
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });

    const response = await graphQLHandler(request);
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  });
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
