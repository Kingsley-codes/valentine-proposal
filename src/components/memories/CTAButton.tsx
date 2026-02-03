"use client";

import { FaArrowRight } from "react-icons/fa6";

type CTAButtonProps = {
  onClick: () => void;
  label?: string;
};

export default function CTAButton({
  onClick,
  label = "Continue",
}: CTAButtonProps) {
  return (
    <div className="px-6 pb-12 md:pb-20 max-w-md mx-auto">
      <button
        onClick={onClick}
        className="w-full bg-red-500 text-white py-4 px-6 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
      >
        <span>{label}</span>
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
