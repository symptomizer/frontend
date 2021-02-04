import { JWS } from "node-jose";
import { decodeJWS } from "../jws";
import { Handler } from "./index";

export const createNbfVerifier = (tolerance: number = 0): Handler => {
  const nbfOkay = (nbf: number) =>
    nbf - new Date().getTime() / 1000 <= tolerance;

  return {
    complete: (jws: JWS.VerificationResult) =>
      new Promise((resolve, reject) => {
        const { nbf: nbfClaim } = decodeJWS(jws);

        if (nbfOkay(nbfClaim)) {
          resolve(undefined);
          return;
        }

        reject();
      }),
  };
};
