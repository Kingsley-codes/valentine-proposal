"use client";

import { useEffect, useState } from "react";
import Memories from "@/components/memories/MemoriesSlides";
import Introduction from "@/components/introduction/IntroductionComponent";
import Proposal from "@/components/proposal/ProposalComponent";

type Step = "intro" | "memories" | "proposal";

export default function Home() {
  const [step, setStep] = useState<Step>("intro");

  // Scroll to top whenever step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {step === "intro" && <Introduction onNext={() => setStep("memories")} />}

      {step === "memories" && <Memories onNext={() => setStep("proposal")} />}

      {step === "proposal" && <Proposal />}
    </div>
  );
}
