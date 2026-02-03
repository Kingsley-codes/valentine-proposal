// components/HeartfeltMessage.tsx
import { IoSparkles } from "react-icons/io5";
import CTAButton from "../memories/CTAButton";

type Props = {
  onNext: () => void;
};

export default function HeartfeltMessage({ onNext }: Props) {
  return (
    <div className="py-10 mx-auto w-full bg-linear-to-b from-pink-950 via-red-950 to-pink-950">
      <div className="flex justify-center mb-6">
        <div className="h-0.5 w-44 md:w-60 bg-linear-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
      </div>
      <p className="text-gray-200 dark:text-gray-200 text-lg font-normal px-8 leading-relaxed text-center italic">
        &quot;From the moment we met, every day has felt like a beautiful dream.
        You bring so much light and joy into my life, and I can&apos;t imagine
        spending this special day with anyone else but you.&quot;
      </p>
      <div className="mt-8 flex justify-center items-center gap-4 text-primary/60">
        <IoSparkles className="text-sm text-pink-600" />
        <IoSparkles className="text-sm text-pink-600" />
        <p className="text-2xl">❤️</p>
        <IoSparkles className="text-sm text-pink-600" />
        <IoSparkles className="text-sm text-pink-600" />
      </div>

      <div className="mt-12">
        <CTAButton onClick={onNext} />
      </div>
    </div>
  );
}
