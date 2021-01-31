import { FABRuntime } from "@fab/core";
import auth from "./auth";
import graphql from "./graphql";

export default function api(runtime: FABRuntime) {
  auth(runtime);
  graphql(runtime);
}
