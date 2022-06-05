import { trpc } from "../utils/trpc";
import VoteImage from "./VoteImage";

const VoteImageGrid = () => {
  const createVote = trpc.useMutation(["votes.add-vote"]);

  if (createVote.status === "success") {
    // temporary
    return <h1 className="text-2xl text-neutral-200">Thank you for voting!</h1>;
  }

  return (
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
  );
};

export default VoteImageGrid;
