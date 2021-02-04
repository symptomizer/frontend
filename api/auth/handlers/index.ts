import { JWS } from "node-jose";

export type Handler =
  | ((jws: JWS.VerificationResult) => Promise<unknown>)
  | { complete(jws: JWS.VerificationResult): Promise<unknown> }
  | undefined;
