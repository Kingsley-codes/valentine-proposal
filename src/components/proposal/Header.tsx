export default function Header(): React.ReactElement {
  return (
    <div className="text-center space-y-2">
      <h1 className="font-pinyon text-4xl md:text-7xl lg:text-8xl font-normal tracking-wide gold-text-gradient drop-shadow-sm pb-0.5 p-2">
        Dearest Josephine
      </h1>
      <div className="h-0.5 w-36 bg-linear-to-r from-transparent via-red-500/50 to-transparent mx-auto mb-10 rounded-full"></div>
    </div>
  );
}
