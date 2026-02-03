import BackgroundLayers from "./BackgroundLayers";
import Header from "./Header";
import VisualCenterpiece from "./VisualCenterpiece";
import Message from "./Message";
import ProposalSection from "../introduction/ProposalSection";

export default function Proposal() {
  return (
    <>
      <BackgroundLayers />

      {/* Main Scrollable Content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-between px-4 sm:px-6 py-6 md:py-8 lg:py-12">
        {/* Top Section: Header & Image */}
        <div className="flex w-full flex-col items-center gap-6 md:gap-8 mt-2 md:mt-4">
          <Header />
          <VisualCenterpiece />
        </div>

        {/* Middle Section: Message */}
        <div className="w-screen mt-12 relative py-4 bg-pink-950 flex justify-center">
          <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] rounded-full bg-red-500 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40vh] h-[40vh] rounded-full bg-red-500 blur-[100px]"></div>
          <Message />
        </div>

        {/* Bottom Section: CTA & Footer */}
        <ProposalSection />
      </div>
    </>
  );
}
