import Image from "next/image";

type VoteImageProps = {
  src: string;
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
