import { createAuthenticator, JWTPayload } from "@glenstack/cf-workers-access";

const AUTHENTICATION_DOMAIN = "gregbrimble.cloudflareaccess.com";
const POLICY_AUD =
  "95c32a0c3411d058a18ae26e96f95b09f30f59da55f17973018f7f14a7eb6aca";

export const authenticateRequest = async (
  request: Request
): Promise<false | JWTPayload> => {
  const authenticator = await createAuthenticator(AUTHENTICATION_DOMAIN, {
    aud: POLICY_AUD,
  });
  return await authenticator(request);
};
