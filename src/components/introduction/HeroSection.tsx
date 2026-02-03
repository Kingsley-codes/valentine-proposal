// components/HeroSection.tsx
import { FaHeart } from "react-icons/fa";

export default function HeroSection() {
  const backgroundImage =
    "https://res.cloudinary.com/dbeyl29fl/image/upload/v1769982839/x37kxnqjinfma7ktyq49.png";

  return (
    <div className="w-full">
      <div
        className="relative w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden @[480px]:rounded-xl min-h-112.5 shadow-2xl shadow-primary/20"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(34, 16, 21, 0) 0%, rgba(34, 16, 21, 0.9) 100%), url("${backgroundImage}")`,
        }}
      >
        <div className="p-6 pb-12 text-center">
          <div className="mb-4 inline-flex animate-pulse items-center justify-center w-12 h-12 rounded-full bg-pink-600/30 text-primary">
            <FaHeart className="w-6 h-6 text-pink-600" />
          </div>
          <h1 className="text-white tracking-tight text-4xl font-extrabold leading-tight">
            Hi Josephine
          </h1>
        </div>
      </div>
    </div>
  );
}

// ❤️
