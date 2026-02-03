import { MemoryCard } from "@/types";
import { FaHeart } from "react-icons/fa6";

const memoryCards: MemoryCard[] = [
  {
    id: 1,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyEFXGCTZjhQeFo_n6CTmdIXlUhxmIKOit8uH5dvDYdQsT0MVvtvSDEELiWzvMWA4FApHl73ApBqXDFg_acKYo9-WM5qXvg0rIeYOwp6d2ZGU7QrmBJlEfqviayyx8zomUwmfhI3NXbLdMEiDteXv4FaO91mh7FNq87DPy7aFWAHYcPgQDvAQD9TOt0yS6xV_p4hfdSOuPssf89a_SR4WOBOg7ht0_3RrxEg9Gyrdd1cdjENUW3zwq4k2wGAOA0G3hWrM6RfmsqZE",
    altText: "Holding hands during a sunset walk",
    title: "Holding hands",
  },
  {
    id: 2,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7YnwKJnTMz7H4ABHto0j-pYRCqhSxZbRhVoyOV2ooqZe6q9GTpjM16zSQqv2WY7gNbU9bxW6q_8AFR0d84m0Y91mD4qCenMl534OlWizYBnAvJxjU6ZrpchWEWPWOcIjI2hh9Mtgf7IASHDbFnm6jFrHMloog_DLBPMr_6cuMXZq1_wWBb2O8MTZMzW3ebm8cmW-ipdwixkDCevPWqIqo5pSg3y8PY1TaM7WDopYXqsYfWKx7eoeNxQXHoQ1wH8WNyTC5Svd3dfU",
    altText: "Couple kissing under a sunset sky",
    title: "Sunset kisses",
  },
];

export default function MemoryGrid() {
  return (
    <div className="px-4 pb-10 max-w-4xl mx-auto">
      <h4 className="text-pink-300 font-bold px-2 pb-6 text-center text-xl md:text-2xl">
        <FaHeart className="inline-block text-red-500 mr-3" />
        More Memories
        <FaHeart className="inline-block text-red-500 ml-3" />
      </h4>
      <p className="text-white/80 text-center italic mb-6">
        More collections of cherished moments to be captured in time, each will
        tell its own unique story.
      </p>
      <div className="grid grid-cols-2 px-4 gap-4 md:gap-6">
        {memoryCards.map((card) => (
          <div
            key={card.id}
            className="relative bg-cover bg-center flex flex-col rounded-xl justify-end p-6 aspect-3/4 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url('${card.imageUrl}')`,
            }}
            role="img"
            aria-label={card.altText}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            <p className="text-white text-lg md:text-xl font-bold leading-tight relative z-10 group-hover:scale-105 transition-transform">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
