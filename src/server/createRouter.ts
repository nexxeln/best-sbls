import * as trpc from "@trpc/server";

export function createRouter() {
  return trpc.router();
}
