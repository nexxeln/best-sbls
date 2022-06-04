import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center w-1/2 min-h-screen mx-auto">
        <div className="mt-6" />
        <h1 className="text-4xl font-medium text-center uppercase">
          What is the best Some Boring Love Stories album?
        </h1>

        {/* <VoteImage /> */}
      </div>
    </>
  );
};

export default Home;
