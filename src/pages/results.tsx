import type { NextPage } from "next";

const Home: NextPage = () => {
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
