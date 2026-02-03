// components/ProposalSection.tsx
"use client";

import { useState } from "react";

export default function ProposalSection() {
  const [showMaybeMessage, setShowMaybeMessage] = useState(false);

  const handleYesClick = () => {
    alert("🎉 Yay! I'm the happiest person alive! ❤️");
  };

  const handleMaybeClick = () => {
    setShowMaybeMessage(!showMaybeMessage);
  };

  return (
    <div className="w-screen border-y border-red-500/10 py-12 mb-8">
      <div className="px-6">
        <h2 className="text-red-200 font-imperial dark:text-white text-5xl font-bold leading-tight tracking-[-0.015em] text-center pb-8 pt-2">
          Will you be my Valentine?
        </h2>

        {/* Button Group */}
        <div className="flex justify-center">
          <div className="flex flex-1 gap-4 max-w-100px flex-col w-full">
            {/* Primary Action */}
            <button
              onClick={handleYesClick}
              className="relative group flex cursor-pointer items-center justify-center overflow-hidden mx-auto rounded-full h-16 px-14 bg-primary text-white text-lg font-bold leading-normal shadow-lg shadow-red-500/30 active:scale-95 animate-pulse transition-all duration-300 hover:bg-red-500/90"
            >
              <span className="truncate z-10">Yes, I&apos;d love to!</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            {/* Secondary Playful Action */}
            <button
              onClick={handleMaybeClick}
              className="flex mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-22 bg-gray-200 dark:bg-[#48232c] text-gray-700 dark:text-primary text-base font-bold leading-normal border border-red-500/20 hover:scale-[0.98] active:scale-95 transition-all duration-300"
            >
              <span className="truncate">Maybe?</span>
            </button>

            {/* Hidden message for "Maybe?" click */}
            {showMaybeMessage && (
              <div className="mt-4 p-4 bg-primary/10 rounded-xl text-center animate-fadeIn">
                <p className="text-red-200 dark:text-white font-medium">
                  I&apos;ll keep trying until it&apos;s a definite
                  &quot;Yes&quot;! 😊
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
