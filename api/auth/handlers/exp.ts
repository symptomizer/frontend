import { JWS } from "node-jose";
import { decodeJWS } from "../jws";
import { Handler } from "./index";

export const createExpVerifier = (tolerance: number = 0): Handler => {
  const expOkay = (exp: number) =>
    exp - new Date().getTime() / 1000 > -tolerance;

  return {
    complete: (jws: JWS.VerificationResult) =>
      new Promise((resolve, reject) => {
        const { exp: expClaim } = decodeJWS(jws);

        if (expOkay(expClaim)) {
          resolve(undefined);
          return;
        }

        reject();
      }),
  };
};
