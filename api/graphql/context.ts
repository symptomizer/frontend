import { ServerContext } from "@fab/runtime";
import { ContextValueMaker } from "@glenstack/cf-workers-graphql";

export type Context = {
  version: string;
};

export const makeContextValueMaker = ({
  bundle_id,
}: ServerContext): ContextValueMaker => async (
  request: Request
): Promise<Context> => ({
  version: bundle_id,
});
