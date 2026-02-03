export default function BackgroundLayers(): React.ReactElement {
  return (
    <div className="fixed inset-0 z-0 bg-pink-950 dark:bg-background-dark">
      {/* Silk/Noise Texture Overlay */}
      <div className="absolute inset-0 silk-overlay opacity-30 mix-blend-overlay pointer-events-none"></div>

      {/* Ambient Color Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] rounded-full bg-red-500 blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vh] h-[40vh] rounded-full bg-red-500 blur-[100px]"></div>

      {/* Floating Petals (Static Representation) */}
      <div className="absolute top-[15%] left-[10%] w-6 h-6 bg-red-500/30 rounded-tr-xl rounded-bl-xl -rotate-12 blur-[1px]"></div>
      <div className="absolute top-[25%] right-[15%] w-4 h-4 bg-red-500/20 rounded-tl-xl rounded-br-xl rotate-45 blur-[0.5px]"></div>
      <div className="absolute bottom-[30%] left-[8%] w-5 h-5 bg-red-500/25 rounded-full rotate-90 blur-[1px]"></div>
      <div className="absolute bottom-[10%] right-[20%] w-8 h-8 bg-red-500/15 rounded-tr-3xl rounded-bl-3xl -rotate-30 blur-[2px]"></div>
    </div>
  );
}
