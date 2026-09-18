export default function Header({ children }) {
  return (
    <header className="flex flex-row justify-between items-center border-b border-slate-700 pb-2 mb-3 gap-4 w-full">
      <div>
        <h1 className="text-lg font-black tracking-tight bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Futurama Memory Match
        </h1>
        <p className="text-slate-400 text-[10px] mt-0.5">
          Don't click the same character twice!
        </p>
      </div>
      {children}
    </header>
  );
}
