export interface SwitcherItem {
  id: string;
  label: string;
  disabled?: boolean;
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-1 -my-1 px-1 -mx-1">
          {/* Pastilla condicional si se requiere */}
          {badgeLabel && (
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider shrink-0 shadow-2xs mr-1">
              {badgeLabel}
            </div>
          )}

          {/* Cajones justificados a lo ancho, ocupando el espacio de forma equilibrada */}
          {items.map((item) => {
            const isActive = activeId === item.id;
            const isDisabled = !!item.disabled;

            if (isDisabled) {
              return (
                <div
                  key={item.id}
                  title="Sección en consolidación"
                  className="flex-1 min-w-max h-9 px-3 rounded-lg text-xs font-bold flex items-center justify-center text-center bg-slate-100/70 text-slate-400 border border-slate-200/60 cursor-not-allowed select-none opacity-60 shrink-0 lg:shrink"
                >
                  <span className="whitespace-nowrap uppercase">{item.label}</span>
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={`flex-1 min-w-max h-9.5 sm:h-10 px-2.5 sm:px-3 lg:px-3.5 rounded-lg text-[11px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-200 flex items-center justify-center text-center shrink-0 lg:shrink ${
                  isActive
                    ? 'bg-black text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 hover:text-black border border-slate-200'
                }`}
              >
                <span className="whitespace-nowrap uppercase">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
