export default function Scoreboard({ score, bestScore}) {
  return (
    <div className="flex gap-2 shrink-0">
      <div className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-0.5 text-center min-w-[55px] sm:min-w-[65px] shadow-md">
        <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-bold">Score</span>
        <span className="text-sm font-black text-cyan-400 leading-none">{score}</span>
      </div>
      <div className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-0.5 text-center min-w-[55px] sm:min-w-[65px] shadow-md">
        <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-bold">Best</span>
        <span className="text-sm font-black text-emerald-400 leading-none">{bestScore}</span>
      </div>
    </div>
  );
}
