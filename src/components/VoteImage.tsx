import Image from "next/image";

type VoteImageProps = {
  src:
    | "/images/part-1.png"
    | "/images/part-2.png"
    | "/images/part-3.png"
    | "/images/part-4.png"
    | "/images/part-5.png";
  alt: string;
};

const VoteImage: React.FC<VoteImageProps> = ({ src, alt }) => {
  return (
    <>
      <Image src={src} alt={alt} width={200} height={200} />
    </>
  );
};

export default VoteImage;
