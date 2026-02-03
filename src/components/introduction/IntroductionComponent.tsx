import HeroSection from "./HeroSection";
import HeartfeltMessage from "./HeartfeltMessage";
import FloatingHearts from "./FloatingHearts";

export default function Introduction({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <HeroSection />
      <HeartfeltMessage onNext={onNext} />
      <FloatingHearts />
    </div>
  );
}
