import { FaChevronLeft } from "react-icons/fa6";

type HeaderProps = {
  onBack: () => void;
};

export default function Header({ onBack }: HeaderProps): React.ReactElement {
  return (
    <div>
      <div className="flex px-6 md:px-10 w-screen items-start">
        <button
          onClick={onBack}
          className="text-primary flex size-12 shrink-0 items-center justify-start cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Go back"
        >
          <FaChevronLeft className="text-xl text-red-300" />
        </button>
      </div>
      <div className="text-center space-y-2">
        <h1 className="font-imperial text-4xl md:text-7xl lg:text-8xl font-bold tracking-wide gold-text-gradient drop-shadow-sm pb-0.5 p-2">
          Dearest Josephine
        </h1>
        <div className="h-0.5 w-36 bg-linear-to-r from-transparent via-red-500/50 to-transparent mx-auto mb-10 rounded-full"></div>
      </div>
    </div>
  );
}
