"use client";

import { FaHeart } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";

export default function TopAppBar() {
  const [liked, setLiked] = useState(false);

  const handleBack = () => {
    // In a real app, this would navigate back
    window.history.back();
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex items-center backdrop-blur-md sticky top-0 z-50 p-4 pb-2 justify-between">
      <button
        onClick={handleBack}
        className="text-primary flex size-12 shrink-0 items-center justify-start cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Go back"
      >
        <FaChevronLeft className="text-xl text-red-500" />
      </button>

      <h2 className="text-primary text-red-200 text-lg md:text-xl leading-tight tracking-[-0.015em] flex-1 text-center">
        OUR STORY
      </h2>

      <div className="flex w-12 items-center justify-end">
        <button
          onClick={handleLike}
          className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 w-12 bg-transparent text-red-500 hover:bg-primary/10 transition-colors"
          aria-label={liked ? "Unlike" : "Like"}
        >
          <FaHeart className={`text-xl ${liked ? "fill-primary" : ""}`} />
        </button>
      </div>
    </div>
  );
}
