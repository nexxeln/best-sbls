import ResultRow from "./ResultRow";

const ResultGrid = () => {
  return (
    <div>
      <ResultRow
        src="/images/part-1.png"
        alt="part-1"
        slug="Some Boring, Love Stories"
        percentage={90}
      />
      <ResultRow
        src="/images/part-2.png"
        alt="part-2"
        slug="Some Boring, Love Stories, Pt.2"
        percentage={90}
      />
      <ResultRow
        src="/images/part-3.png"
        alt="part-3"
        slug="Some Boring, Love Stories, Pt.3"
        percentage={90}
      />
      <ResultRow
        src="/images/part-4.png"
        alt="part-4"
        slug="some boring love stories, pt.4"
        percentage={90}
      />
      <ResultRow
        src="/images/part-5.png"
        alt="part-5"
        slug="some boring love stories pt 5"
        percentage={90}
      />
    </div>
  );
};

export default ResultGrid;
