import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { inferAsyncReturnType } from "@trpc/server";

export async function createContext(ctxOptions?: CreateNextContextOptions) {
  return {
    token: ctxOptions?.req.cookies["token"],
    req: ctxOptions?.req,
    res: ctxOptions?.res,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
