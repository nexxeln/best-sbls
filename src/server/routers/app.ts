import superjson from "superjson";

import { createRouter } from "../createRouter";
import { voteRouter } from "./vote";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("votes.", voteRouter);

export type AppRouter = typeof appRouter;
