import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

import { trpc } from "../../utils/trpc";
import VoteImage from "./VoteImage";

const notify = () => toast("Casting Vote...");

const VoteImageGrid = () => {
  const router = useRouter();
  const createVote = trpc.useMutation(["votes.add-vote"]);

  if (createVote.status === "loading") {
    notify();
  }

  if (createVote.status === "success") {
    router.push("/results");
  }

  return (
    <>
      <div className="grid grid-flow-row md:grid-flow-col">
        <div onClick={() => createVote.mutate({ choice: 1 })}>
          <VoteImage
            src="/images/part-1.png"
            alt="part-1"
            slug="Some Boring, Love Stories"
          />
        </div>

        <div onClick={() => createVote.mutate({ choice: 2 })}>
          <VoteImage
            src="/images/part-2.png"
            alt="part-2"
            slug="Some Boring, Love Stories, Pt.2"
          />
        </div>

        <div onClick={() => createVote.mutate({ choice: 3 })}>
          <VoteImage
            src="/images/part-3.png"
            alt="part-3"
            slug="Some Boring, Love Stories, Pt.3"
          />
        </div>

        <div onClick={() => createVote.mutate({ choice: 4 })}>
          <VoteImage
            src="/images/part-4.png"
            alt="part-4"
            slug="some boring love stories, pt.4"
          />
        </div>

        <div onClick={() => createVote.mutate({ choice: 5 })}>
          <VoteImage
            src="/images/part-5.png"
            alt="part-5"
            slug="some boring love stories pt 5"
          />
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default VoteImageGrid;
