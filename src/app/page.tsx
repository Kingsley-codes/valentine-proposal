// app/page.tsx
import Memories from "@/components/memories/MemoriesSlides";
import Introduction from "@/components/introduction/IntroductionComponent";
import Proposal from "@/components/proposal/ProposalComponent";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* <Introduction /> */}
      {/* <Memories /> */}
      <Proposal />
    </div>
  );
}
