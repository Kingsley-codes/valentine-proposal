"use client";

import { FaHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<
    Array<{ id: number; top: string; left: string; size: number }>
  >([]);

  useEffect(() => {
    // Generate heart positions
    const newHearts = [
      { id: 1, top: "15%", left: "10%", size: 24 },
      { id: 2, top: "45%", left: "95%", size: 32 },
      { id: 3, top: "85%", left: "15%", size: 18 },
      { id: 4, top: "70%", left: "85%", size: 28 },
      { id: 5, top: "30%", left: "5%", size: 20 },
      { id: 6, top: "60%", left: "90%", size: 22 },
    ];
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10 opacity-20">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-pulse"
          style={{
            top: heart.top,
            left: heart.left,
            transform: "translateX(-50%)",
          }}
        >
          <FaHeart className="text-red-500" size={heart.size} />
        </div>
      ))}
    </div>
  );
}
