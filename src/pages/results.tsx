import type { GetStaticProps, NextPage } from "next";

import { prisma } from "../db/client";

const getVotes = async () => {
  const votes1 = await prisma.vote.count({
    where: {
      choice: {
        equals: 1,
      },
    },
  });

  const votes2 = await prisma.vote.count({
    where: {
      choice: {
        equals: 2,
      },
    },
  });
  const votes3 = await prisma.vote.count({
    where: {
      choice: {
        equals: 3,
      },
    },
  });
  const votes4 = await prisma.vote.count({
    where: {
      choice: {
        equals: 4,
      },
    },
  });
  const votes5 = await prisma.vote.count({
    where: {
      choice: {
        equals: 5,
      },
    },
  });

  return {
    votes1,
    votes2,
    votes3,
    votes4,
    votes5,
  };
};

const computePercentages = (
  votes1: number,
  votes2: number,
  votes3: number,
  votes4: number,
  votes5: number
) => {
  const totalVotes = votes1 + votes2 + votes3 + votes4 + votes5;

  return {
    votes1: Math.round((votes1 / totalVotes) * 100),
    votes2: Math.round((votes2 / totalVotes) * 100),
    votes3: Math.round((votes3 / totalVotes) * 100),
    votes4: Math.round((votes4 / totalVotes) * 100),
    votes5: Math.round((votes5 / totalVotes) * 100),
  };
};

const Home: NextPage = ({ percentages }: any) => {
  console.log(percentages);
  return (
    <>
      <div className="flex flex-col items-center w-4/5 min-h-screen mx-auto">
        <div className="mt-6" />
        <h1 className="text-4xl font-medium text-center uppercase text-neutral-300">
          Results
        </h1>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { votes1, votes2, votes3, votes4, votes5 } = await getVotes();
  const percentages = computePercentages(
    votes1,
    votes2,
    votes3,
    votes4,
    votes5
  );

  return {
    props: {
      percentages,
    },
    // revalidate: 6 * 60 * 60,
  };
};
