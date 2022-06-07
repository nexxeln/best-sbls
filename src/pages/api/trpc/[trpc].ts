import { createNextApiHandler } from "@trpc/server/adapters/next";

import { appRouter } from "../../../server/routers/app";

export default createNextApiHandler({
  router: appRouter,
});
