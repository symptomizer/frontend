import { JWS } from "node-jose";

export const decodeJWS = (jws: JWS.VerificationResult) =>
  JSON.parse(String.fromCharCode(...jws.payload));
