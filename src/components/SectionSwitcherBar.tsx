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
  gridCols?: string;
}

export default function SectionSwitcherBar({
  badgeLabel,
  items,
  activeId,
  onSelect,
  gridCols,
}: SectionSwitcherBarProps) {
  const containerClass = gridCols
    ? `grid ${gridCols} gap-1.5 sm:gap-2 w-full py-1`
    : `flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-1 -my-1 px-1 -mx-1`;

  return (
    <div className="bg-slate-100 border-b border-slate-200 sticky top-16 sm:top-18 z-20 backdrop-blur-md bg-slate-100/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className={containerClass}>
          {/* Pastilla condicional si se requiere */}
          {badgeLabel && (
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-normal uppercase tracking-wider shrink-0 shadow-2xs mr-1">
              {badgeLabel}
            </div>
          )}

          {/* Botones de navegación de sección */}
          {items.map((item) => {
            const isActive = activeId === item.id;
            const isDisabled = !!item.disabled;

            if (isDisabled) {
              return (
                <div
                  key={item.id}
                  title="Sección en consolidación"
                  className={`min-w-max h-10 sm:h-11 px-2.5 sm:px-3 rounded-lg text-xs sm:text-[13px] font-normal flex items-center justify-center text-center bg-slate-100/70 text-slate-400 border border-slate-200/60 cursor-not-allowed select-none opacity-60 ${
                    gridCols ? 'w-full' : 'flex-1 shrink-0 lg:shrink'
                  }`}
                >
                  <span className="whitespace-nowrap uppercase tracking-wider">{item.label}</span>
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={`h-10 sm:h-11 px-2.5 sm:px-3 lg:px-2 rounded-lg text-xs sm:text-[13px] font-normal uppercase tracking-wider transition-all duration-200 flex items-center justify-center text-center ${
                  gridCols ? 'w-full' : 'flex-1 min-w-max shrink-0 lg:shrink'
                } ${
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
