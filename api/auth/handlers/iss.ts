import { JWS } from "node-jose";
import { decodeJWS } from "../jws";
import { Handler } from "./index";

export const createIssVerifier = (iss?: string): Handler => {
  if (iss === undefined) return { complete: () => Promise.resolve() };

  return {
    complete: (jws: JWS.VerificationResult) =>
      new Promise((resolve, reject) => {
        const { iss: issClaim } = decodeJWS(jws);

        if (issClaim === iss) {
          resolve(undefined);
          return;
        }

        reject();
      }),
  };
};
