import type { GetStaticProps, NextPage } from "next";

import { prisma } from "../db/client";
import ResultGrid from "../components/Results/ResultGrid";

const getVotes = async () => {
  const votes = await prisma.vote.groupBy({
    by: ["choice"],
    _count: {
      choice: true,
    },
    orderBy: {
      choice: "asc",
    },
  });

  return votes;
};

const Home: NextPage = ({ percentages }: any) => {
  console.log(percentages);
  return (
    <>
      <div className="flex flex-col items-center min-h-screen mx-auto">
        <div className="mt-6" />
        <h1 className="text-4xl font-medium text-center uppercase text-neutral-300">
          Results
        </h1>

        <ResultGrid />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const votes = await getVotes();

  const votes1num = votes[0]!._count.choice;
  const votes2num = votes[1]!._count.choice;
  const votes3num = votes[2]!._count.choice;
  const votes4num = votes[3]!._count.choice;
  const votes5num = votes[4]!._count.choice;

  const totalVotes = votes1num + votes2num + votes3num + votes4num + votes5num;
  const votes1 = ((votes1num / totalVotes) * 100).toFixed(2);
  const votes2 = ((votes2num / totalVotes) * 100).toFixed(2);
  const votes3 = ((votes3num / totalVotes) * 100).toFixed(2);
  const votes4 = ((votes4num / totalVotes) * 100).toFixed(2);
  const votes5 = ((votes5num / totalVotes) * 100).toFixed(2);

  return {
    props: {
      percentages: {
        votes1,
        votes2,
        votes3,
        votes4,
        votes5,
      },
    },
  };
};
