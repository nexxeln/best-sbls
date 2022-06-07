import Image from "next/image";

import { ImageAndSlug } from "../../types/types";

const VoteImage: React.FC<ImageAndSlug> = ({ src, alt, slug }) => {
  return (
    <div className="flex flex-col p-3 transition-all duration-200 cursor-pointer hover:scale-105">
      <Image src={src} alt={alt} width={250} height={250} />
      <p className="px-2 pt-1 pb-3 text-center text-neutral-300">{slug}</p>
    </div>
  );
};

export default VoteImage;
