"use client";

import { FaArrowRight } from "react-icons/fa6";

export default function CTAButton() {
  const handleContinue = () => {
    // In a real app, this would navigate to the next page
    alert("Continuing the story...");
  };

  return (
    <div className="px-6 pb-12 md:pb-20 max-w-md mx-auto">
      <button
        onClick={handleContinue}
        className="w-full bg-red-500 text-white py-4 px-6 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
      >
        <span>Continue</span>
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
