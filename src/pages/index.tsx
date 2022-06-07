import type { NextPage } from "next";
import Head from "next/head";

import VoteImageGrid from "../components/Vote/VoteImageGrid";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Best SBLS</title>
        <meta
          name="description"
          content="What is the best some boring love stories album?"
        />
        <meta property="og:image" content="/images/powfu.png" />
      </Head>
      <div className="flex flex-col items-center w-4/5 min-h-screen mx-auto">
        <div className="mt-6" />
        <h1 className="text-4xl font-medium text-center uppercase text-neutral-300">
          What is the best Some Boring Love Stories album?
        </h1>

        <p className="mt-4 text-neutral-400">
          Click on the images to vote. Please be cool and vote only once!
        </p>

        <div className="my-6 md:my-16" />

        <VoteImageGrid />
      </div>
    </>
  );
};

export default Home;
