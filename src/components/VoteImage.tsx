import Image from "next/image";

type VoteImageProps = {
  src:
    | "/images/part-1.png"
    | "/images/part-2.png"
    | "/images/part-3.png"
    | "/images/part-4.png"
    | "/images/part-5.png";
  alt: "part-1" | "part-2" | "part-3" | "part-4" | "part-5";
  slug:
    | "Some Boring, Love Stories"
    | "Some Boring, Love Stories, Pt.2"
    | "Some Boring, Love Stories, Pt.3"
    | "some boring love stories, pt.4"
    | "some boring love stories pt 5";
};

const VoteImage: React.FC<VoteImageProps> = ({ src, alt, slug }) => {
  return (
    <div className="flex flex-col p-3 transition-all duration-200 cursor-pointer hover:scale-105">
      <Image src={src} alt={alt} width={250} height={250} />
      <p className="px-2 pt-1 pb-3 text-center text-neutral-300">{slug}</p>
    </div>
  );
};

export default VoteImage;
