"use client";

import { FaHeart } from "react-icons/fa";

export default function VisualCenterpiece(): React.ReactElement {
  const imageUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBgiAlm0lviQ9x6Prxo6sHN5kFTo6nj_yyj_FuDuj1wuFyUyjJiYo3NtE8j8etbXR2JQf9fzk-0IBW1tbXOEfZOWcTXKxDxFz_4UnfIlAhjtofdmFB61pXaxw_tOH7B7vPSCqifMhLJcj2pr3RDE8uVoBxhM0xhRTFpR7TBF4eUegvtEL5sE-sbrJfojcPPJiISWuEGtbncDIFK3kb-4-LJhITQlGprp346-AtMsYanZz3UrFa18yEtf73McTImdTfk4_RUCB0nb04";

  return (
    <div className="relative w-full max-w-70 sm:max-w-[320px] md:max-w-90 aspect-square flex items-center justify-center my-4">
      {/* Outer Glow Rings */}
      <div className="absolute inset-0 rounded-full border-4 border-red-500/20 scale-110 opacity-50"></div>
      <div className="absolute inset-0 rounded-full border-2 border-red-400/30 scale-125 opacity-30"></div>

      {/* Main Image Container */}
      <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-red-500/10 ring-offset-4 ring-offset-background-dark">
        <div
          className="w-full h-full bg-center bg-cover transform hover:scale-105 transition-transform duration-700 ease-out"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-label="A romantic heart shape made of red rose petals on a dark surface"
        >
          {/* Gradient Overlay for depth */}
          <div className="absolute inset-0 bg-linear-to-t from-red-500/40 to-transparent mix-blend-overlay"></div>
        </div>
      </div>

      {/* Floating Icon Badge */}
      <div className="absolute -bottom-2 -right-2 bg-gray-900/40 border border-white/10 p-3 rounded-full shadow-lg">
        <FaHeart className="text-red-500 text-2xl" />
      </div>
    </div>
  );
}
