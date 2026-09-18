export default function CardContainer({ cards, onCardClick }) {
  return (
    <main className="grid grid-cols-4 gap-2 justify-center items-center">
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => onCardClick(card)}
          className="group relative w-full bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-lg p-1.5 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_8px_rgba(34,211,238,0.06)] shadow-sm touch-manipulation overflow-hidden"
        >
          {/* Micro Image Frame Canvas */}
          <div className="w-full h-14 sm:h-16 bg-slate-900/40 rounded-md overflow-hidden flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-[1.02]">
            <img
              src={card.image}
              alt={card.name}
              className="max-w-full max-h-full object-contain filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
              loading="lazy"
            />
          </div>

          {/* Character Text Element */}
          <h3 className="text-[9px] sm:text-[10px] font-semibold text-center tracking-wide text-slate-400 group-hover:text-cyan-400 transition-colors duration-200 line-clamp-1 w-full px-0.5 mt-1 shrink-0">
            {card.name}
          </h3>
        </div>
      ))}
    </main>
  );
}

