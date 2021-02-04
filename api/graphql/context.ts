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
  const jwt = cookie.parse(request.headers.get("Cookie"))["jwt"];
  const jwtPayload = await verifyJWT(jwt);
  return { version: bundle_id, jwt: jwtPayload || undefined };
};
