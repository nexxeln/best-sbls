import VoteImage from "./VoteImage";

const VoteImageGrid = () => {
  return (
    <div className="grid grid-flow-row md:grid-flow-col">
      <div>
        <VoteImage
          src="/images/part-1.png"
          alt="part-1"
          slug="Some Boring, Love Stories"
        />
      </div>

      <div>
        <VoteImage
          src="/images/part-2.png"
          alt="part-2"
          slug="Some Boring, Love Stories, Pt.2"
        />
      </div>

      <div>
        <VoteImage
          src="/images/part-3.png"
          alt="part-3"
          slug="Some Boring, Love Stories, Pt.3"
        />
      </div>

      <div>
        <VoteImage
          src="/images/part-4.png"
          alt="part-4"
          slug="some boring love stories, pt.4"
        />
      </div>

      <div>
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
