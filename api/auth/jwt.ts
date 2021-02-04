import { createExpVerifier } from "./handlers/exp";
import { createNbfVerifier } from "./handlers/nbf";
import { createIssVerifier } from "./handlers/iss";
import { JWK, JWS } from "node-jose";
import { decodeJWS } from "./jws";

export type JWTPayload = {
  iss: string;
  sub: string;
  iat: number;
  nbf: number;
  exp: number;
};

const handlers = {
  handlers: {
    iss: createIssVerifier("https://www.ease.ed.ac.uk/"),
    nbf: createNbfVerifier(),
    exp: createExpVerifier(),
  },
};

const getKeystore = async () => {
  const response = await fetch(
    "https://ease.homepages.inf.ed.ac.uk/s1429087/ease-jwt-gateway/keys"
  );
  const jwk = await response.json();
  return await JWK.asKeyStore(jwk);
};

export const verifyJWT = async (jwt: string): Promise<false | JWTPayload> => {
  const keystore = await getKeystore();
  const verifier = JWS.createVerify(keystore, handlers);

  try {
    const jws = await verifier.verify(jwt);
    return decodeJWS(jws);
  } catch (e) {}

  return false;
};
