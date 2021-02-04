import { FABRuntime } from "@fab/core";
import { verifyJWT } from "./jwt";

const loginHandler = async (request: Request): Promise<Response> => {
  switch (request.method.toUpperCase()) {
    case "GET":
      return new Response(null, {
        status: 301,
        headers: {
          Location:
            "https://ease.homepages.inf.ed.ac.uk/s1429087/ease-jwt-gateway?redirect_url=https://symptomize.me/login",
        },
      });
    case "POST":
      const formData = await request.formData();
      const jwtClaim = formData.get("jwt").toString();
      const jwt = await verifyJWT(jwtClaim);
      return new Response(JSON.stringify(jwt), {
        headers: { "Content-Type": "application/json" },
      });
  }

  return new Response(null, { status: 301, headers: { Location: "/" } });
};

export default function login({ Router, ServerContext }: FABRuntime) {
  Router.on("/login", ({ request }) => loginHandler(request));
}
