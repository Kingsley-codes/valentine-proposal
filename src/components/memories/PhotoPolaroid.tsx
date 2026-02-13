import { Photo } from "@/types";
import { FaHeart } from "react-icons/fa6";

interface PhotoPolaroidProps extends Photo {
  position?: "left" | "right" | "center";
}

export default function PhotoPolaroid({
  imageUrl,
  altText,
  caption,
  subtext,
  aspectRatio,
  tilt,
  position = "center",
}: PhotoPolaroidProps) {
  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-video",
  };

  const positionClasses = {
    left: "md:items-start",
    right: "md:items-end",
    center: "md:items-center",
  };

  const tiltClasses = {
    left: "polaroid-tilt-left",
    right: "polaroid-tilt-right",
    none: "",
  };

  return (
    <div className={`flex flex-col items-center ${positionClasses[position]}`}>
      {/* <div className="animate-slide-up"> */}
      <div
        className={`
          bg-white
            p-3 pb-8 shadow-xl rounded-sm
            w-full max-w-70 md:max-w-90 lg:max-w-105
            hover:shadow-2xl transition-shadow duration-300
            animate-slide-up
            ${tiltClasses[tilt]}
          `}
      >
        <div
          className={`${aspectClasses[aspectRatio]} bg-cover bg-center rounded-sm mb-4`}
          style={{ backgroundImage: `url('${imageUrl}')` }}
          role="img"
          aria-label={altText}
        />
        <p className="text-[#1b0d11] text-center font-bold italic text-lg md:text-xl">
          {caption}
        </p>
        <p className="text-[#9b111e] text-xs md:text-sm text-center font-bold uppercase mt-1 tracking-wider">
          <FaHeart className="inline-block mr-1" />
          {subtext}
          <FaHeart className="inline-block ml-1" />
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}
