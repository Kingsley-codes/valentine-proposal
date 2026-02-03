"use client";

import { useState } from "react";
import { IoSparkles } from "react-icons/io5";

export default function Message(): React.ReactElement {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-md my-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 text-center space-y-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-4xl p-6 md:p-8 shadow-2xl shadow-black/10">
        <div className="relative z-10 text-center space-y-4">
          <p className="text-red-200 pt-5 dark:text-gray-200 text-base md:text-lg lg:text-xl font-light leading-relaxed tracking-wide">
            Every moment with you feels like a dream I never want to wake up
            from. You are my best friend and my greatest love.
          </p>

          <div className="mt-8 flex justify-center items-center gap-4 text-primary/60">
            <IoSparkles className="text-sm text-red-600" />
            <IoSparkles className="text-sm text-red-600" />
            <p className="text-2xl">❤️</p>
            <IoSparkles className="text-sm text-red-600" />
            <IoSparkles className="text-sm text-red-600" />
          </div>
        </div>
        {/* Decorative corner glow */}
        <div
          className={`absolute -bottom-10 -right-10 w-20 h-20 bg-primary/20 blur-xl rounded-full transition-colors duration-300 ${
            isHovered ? "bg-primary/30" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}
