import { z } from "zod";

import { prisma } from "../../db/client";
import { createRouter } from "../createRouter";

export const voteRouter = createRouter().mutation("add-vote", {
  input: z.object({
    choice: z.number().min(1).max(5),
  }),
  async resolve({ input }) {
    try {
      await prisma.vote.create({
        data: {
          choice: input.choice,
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Error creating vote");
    }
  },
});
