import { ServerContext } from "@fab/runtime";
import { ContextValueMaker } from "@glenstack/cf-workers-graphql";
import cookie from "cookie";
import { JWTPayload, verifyJWT } from "../auth/jwt";

export type Context = {
  version: string;
  jwt?: JWTPayload;
};

export const makeContextValueMaker = ({
  bundle_id,
}: ServerContext): ContextValueMaker => async (
  request: Request
): Promise<Context> => {
  let jwtPayload = undefined;
  try {
    const jwt = cookie.parse(request.headers.get("Cookie"))["jwt"];
    jwtPayload = await verifyJWT(jwt);
  } catch {}

  return { version: bundle_id, jwt: jwtPayload };
};
