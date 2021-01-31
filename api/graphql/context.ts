import { ServerContext } from "@fab/runtime";
import { JWTPayload } from "@glenstack/cf-workers-access";
import { ContextValueMaker } from "@glenstack/cf-workers-graphql";
import { authenticateRequest } from "../auth/authenticator";

export type Context = {
  version: string;
  jwt?: JWTPayload;
};

export const makeContextValueMaker = ({
  bundle_id,
}: ServerContext): ContextValueMaker => async (
  request: Request
): Promise<Context> => {
  const jwt = (await authenticateRequest(request)) || undefined;
  return { version: bundle_id, jwt };
};
