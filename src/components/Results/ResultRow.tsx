import Image from "next/image";

import { ImageAndSlug } from "../../types/types";

interface ResultRowProps extends ImageAndSlug {
  percentage: number;
}

const ResultRow: React.FC<ResultRowProps> = ({
  src,
  alt,
  slug,
  percentage,
}) => {
  return (
    <div className="flex items-center justify-between gap-16 p-2 mx-4 transition-colors duration-300 border border-neutral-800 bg-zinc-900 hover:bg-zinc-800">
      <Image src={src} alt={alt} width={80} height={80} />
      <h1 className="text-xs md:text-lg text-neutral-300">{slug}</h1>
      <p className="text-neutral-300">{percentage}%</p>
    </div>
  );
};

export default ResultRow;
