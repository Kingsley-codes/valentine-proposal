import TopAppBar from "./TopAppBar";
import HeadlineSection from "./HeadlineSection";
import TimelineSection from "./TimelineSection";
import MessageSection from "./MessageSection";
import CTAButton from "./CTAButton";
import MemoryGrid from "./MemoryGrid";
import FloatingHearts from "./FloatingHearts";

type MemoriesProps = {
  onNext: () => void;
  onBack: () => void;
};

export default function Memories({ onNext, onBack }: MemoriesProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden scrapbook-bg bg-pink-950 text-[#1b0d11] dark:text-white transition-colors duration-300">
      <TopAppBar onBack={onBack} />

      <main className="flex-1">
        <HeadlineSection />
        <TimelineSection />
        <MessageSection />
        <CTAButton onClick={onNext} />
        <MemoryGrid />
      </main>

      <FloatingHearts />

      {/* Footer Padding */}
      <div className="h-10 bg-transparent" />
    </div>
  );
}
