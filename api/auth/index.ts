import { createAuthenticator } from "@glenstack/cf-workers-access";
import { FABRuntime } from "@fab/core";

const AUTHENTICATION_DOMAIN = "gregbrimble.cloudflareaccess.com";
const POLICY_AUD =
  "95c32a0c3411d058a18ae26e96f95b09f30f59da55f17973018f7f14a7eb6aca";

const loginHandler = async (request: Request): Promise<Response> => {
  const authenticator = await createAuthenticator(AUTHENTICATION_DOMAIN, {
    aud: POLICY_AUD,
  });

  const jwt = await authenticator(request);

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
