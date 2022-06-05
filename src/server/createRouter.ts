import * as trpc from "@trpc/server";

import type { Context } from "./context";

export function createRouter() {
  return trpc.router<Context>();
}
