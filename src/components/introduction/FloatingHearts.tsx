// components/FloatingHearts.tsx
import { FaHeart } from "react-icons/fa";

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20 dark:opacity-10">
      <div className="absolute top-[10%] left-[5%] text-red-500 transform rotate-12 animate-float">
        <FaHeart className="text-4xl" />
      </div>
      <div className="absolute top-[60%] right-[10%] text-red-500 transform -rotate-12 animate-float-delayed">
        <FaHeart className="text-6xl" />
      </div>
      <div className="absolute bottom-[20%] left-[15%] text-red-500 transform rotate-45 animate-float-slow">
        <FaHeart className="text-3xl" />
      </div>
    </div>
  );
}
