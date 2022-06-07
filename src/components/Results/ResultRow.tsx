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
    <div className="flex items-center justify-center gap-16 p-4 m-4 border-2 rounded border-neutral-400">
      <Image src={src} alt={alt} width={100} height={100} />
      <h1 className="text-xs md:text-lg text-neutral-300">{slug}</h1>
      <p className="text-neutral-300">{percentage}%</p>
    </div>
  );
};

export default ResultRow;
