export interface SwitcherItem {
  id: string;
  label: string;
}

export interface SectionSwitcherBarProps {
  badgeLabel?: string;
  items: SwitcherItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function SectionSwitcherBar({
  badgeLabel,
  items,
  activeId,
  onSelect,
}: SectionSwitcherBarProps) {
  return (
    <div className="bg-slate-100 border-b border-slate-200 sticky top-16 sm:top-18 z-20 backdrop-blur-md bg-slate-100/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-2 sm:gap-3 overflow-x-auto scrollbar-none">
        {/* Pastilla condicional si se requiere */}
        {badgeLabel && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider shrink-0 shadow-2xs">
            {badgeLabel}
          </div>
        )}

        {/* Cajones justificados a lo ancho, ocupando el espacio de forma equilibrada */}
        <div className="flex items-center justify-between gap-1.5 sm:gap-2.5 w-full overflow-x-auto scrollbar-none py-0.5">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={`flex-1 min-w-[100px] sm:min-w-0 h-9 px-2 sm:px-3 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center text-center ${
                  isActive
                    ? 'bg-black text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 hover:text-black border border-slate-200'
                }`}
              >
                <span className="truncate whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
