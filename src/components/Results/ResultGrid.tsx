import ResultRow from "./ResultRow";

const ResultGrid = ({
  votes1,
  votes2,
  votes3,
  votes4,
  votes5,
}: {
  votes1: number;
  votes2: number;
  votes3: number;
  votes4: number;
  votes5: number;
}) => {
  return (
    <div>
      <ResultRow
        src="/images/part-1.png"
        alt="part-1"
        slug="Some Boring, Love Stories"
        percentage={votes1}
      />
      <ResultRow
        src="/images/part-2.png"
        alt="part-2"
        slug="Some Boring, Love Stories, Pt.2"
        percentage={votes2}
      />
      <ResultRow
        src="/images/part-3.png"
        alt="part-3"
        slug="Some Boring, Love Stories, Pt.3"
        percentage={votes3}
      />
      <ResultRow
        src="/images/part-4.png"
        alt="part-4"
        slug="some boring love stories, pt.4"
        percentage={votes4}
      />
      <ResultRow
        src="/images/part-5.png"
        alt="part-5"
        slug="some boring love stories pt 5"
        percentage={votes5}
      />
    </div>
  );
};

export default ResultGrid;
