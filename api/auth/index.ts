import { FABRuntime } from "@fab/core";
import cookie from "cookie";
import { verifyJWT } from "./jwt";

const loginHandler = async (request: Request): Promise<Response> => {
  switch (request.method.toUpperCase()) {
    case "GET":
      return new Response(null, {
        status: 302,
        headers: {
          Location:
            "https://ease.homepages.inf.ed.ac.uk/s1429087/ease-jwt-gateway?redirect_url=https://symptomize.me/login",
        },
      });
    case "POST":
      const formData = await request.formData();
      const jwt = formData.get("jwt").toString();
      const jwtPayload = await verifyJWT(jwt);
      if (jwtPayload)
        return new Response(null, {
          status: 302,
          headers: {
            Location: "/search",
            "Set-Cookie": cookie.serialize("jwt", jwt, {
              httpOnly: true,
              expires: new Date(jwtPayload.exp * 1000),
            }),
          },
        });
  }

  return new Response(null, {
    status: 302,
    headers: { Location: "/login" },
  });
};

export default function login({ Router, ServerContext }: FABRuntime) {
  Router.on("/login", ({ request }) => loginHandler(request));
}
