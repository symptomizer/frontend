import { FABRuntime } from "@fab/core";
import { authenticateRequest } from "./authenticator";

const loginHandler = async (request: Request): Promise<Response> => {
  const jwt = await authenticateRequest(request);

  if (jwt)
    return new Response(null, {
      status: 301,
      headers: { Location: "/search" },
    });

  return new Response(null, { status: 301, headers: { Location: "/" } });
};

export default function login({ Router, ServerContext }: FABRuntime) {
  Router.on("/login", ({ request }) => loginHandler(request));
  Router.on("/logout", ({ request }) =>
    Promise.resolve(
      new Response(null, {
        status: 301,
        headers: { Location: "/cdn-cgi/access/logout" },
      })
    )
  );
}
