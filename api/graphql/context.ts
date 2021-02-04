import { ServerContext } from "@fab/runtime";
import { ContextValueMaker } from "@glenstack/cf-workers-graphql";
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
  // const jwt = (await authenticateRequest(request)) || undefined;
  // console.log(jwt);
  return { version: bundle_id };
};
