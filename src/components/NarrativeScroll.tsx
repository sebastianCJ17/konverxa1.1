import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Workflow, Target, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOMENTS = [
  {
    id: '01',
    tabLabel: 'Pregunta Clave',
    title: 'Si el negocio exige resultados.\n¿Por qué conformarse con promesas?',
    subtitle: 'Una pregunta que desafía el statu quo del outsourcing tradicional.',
  },
  {
    id: '02',
    tabLabel: 'Criterio Operativo',
    title: 'El problema no es tercerizar.',
    subtitle: 'Es confundir el tamaño del proveedor con su estándar operativo.',
    secondaryText: 'Posiciones, Tecnología y Volumen demuestran capacidad, pero no garantizan Método, Control y Consistencia.',
  },
  {
    id: '03',
    tabLabel: 'Estándar y Gobernanza',
    title: 'El tamaño absorbe volumen.\nEl estándar protege resultados.',
    subtitle: 'El estándar vive en cómo organizamos, dirigimos y controlamos la ejecución del negocio.',
  },
  {
    id: '04',
    tabLabel: 'Método Operativo',
    title: 'Los resultados empiezan mucho antes de hacerse visibles.',
    subtitle: 'Detrás de cada resultado consistente hay una operación pensada, organizada y gobernada con criterio.',
    cards: [
      {
        icon: Search,
        label: 'DIAGNOSTICAR',
        desc: 'Entender el negocio, el cliente y el contexto.',
        color: 'border-slate-300'
      },
      {
        icon: Workflow,
        label: 'COORDINAR',
        desc: 'Alinear organización, procesos y tecnología.',
        color: 'border-slate-300'
      },
      {
        icon: Target,
        label: 'EJECUTAR',
        desc: 'Gestionar la operación con método y control.',
        color: 'border-slate-300'
      }
    ]
  }
];

export default function NarrativeScroll() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % MOMENTS.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + MOMENTS.length) % MOMENTS.length);
  };

  // Optional subtle auto-rotation if not interacted
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % MOMENTS.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const activeMoment = MOMENTS[currentStep];

  return (
    <section className="relative w-full py-16 sm:py-20 bg-slate-100 text-slate-900 overflow-hidden font-sans border-b border-slate-200">
      
      {/* Background Soft Texture & Ambient Tone - Bloque 02 Photo */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-38">
        <img
          src="/bloque2.png"
          alt="Análisis y Visualización Operacional KONVERXA"
          className="w-full h-full object-cover filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/95 via-slate-100/85 to-slate-100/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Grid: Left Narrative + Right Static Sequence Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct and Elevated Content */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            
            {/* Top Moments Navigation Tabs (Clean and direct) */}
            <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
              {MOMENTS.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => setCurrentStep(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                    idx === currentStep
                      ? 'bg-slate-950 text-white shadow-sm'
                      : 'bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  <span>{m.tabLabel}</span>
                </button>
              ))}
            </div>

            {/* Elevated Content with Smooth Motion Transition */}
            <div className="min-h-[300px] sm:min-h-[320px] flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMoment.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-5"
                >
                  
                  {/* Main Title - Cleanly elevated at the top */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] whitespace-pre-line">
                    {activeMoment.title}
                  </h2>

                  {/* Subtitle 01 */}
                  {activeMoment.subtitle && (
                    <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl pt-1">
                      {activeMoment.subtitle}
                    </p>
                  )}

                  {/* Secondary Text for Point 02 */}
                  {activeMoment.secondaryText && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-300/90 shadow-xs max-w-2xl mt-3">
                      <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                        {activeMoment.secondaryText}
                      </p>
                    </div>
                  )}

                  {/* 3 Core Cards for Slide 04: DIAGNOSTICAR, COORDINAR, EJECUTAR */}
                  {activeMoment.cards && (
                    <div className="pt-3 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                        {activeMoment.cards.map((card, idx) => {
                          const IconComp = card.icon;
                          return (
                            <div
                              key={idx}
                              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2 hover:border-slate-400 hover:shadow-md transition-all group"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <span className="font-black text-xs sm:text-sm tracking-wider text-slate-950 uppercase">
                                  {card.label}
                                </span>
                              </div>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {card.desc}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      <div className="pt-2">
                        <Link
                          to="/modelo"
                          className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-black uppercase tracking-wider group"
                        >
                          <span>Profundizar en nuestra metodología</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: Static, non-jumping sequence navigator */}
          <div className="lg:col-span-4 bg-white/90 backdrop-blur-xs p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between self-start w-full">
            
            <div className="space-y-3">
              {/* Static list without vertical jumps */}
              <div className="flex flex-col gap-2.5">
                {MOMENTS.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => setCurrentStep(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all duration-200 flex items-center justify-between group ${
                      idx === currentStep
                        ? 'bg-slate-950 text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-tight">
                        {m.tabLabel}
                      </span>
                    </div>

                    <div className={`w-2 h-2 rounded-full ${idx === currentStep ? 'bg-white' : 'bg-slate-300 group-hover:bg-slate-400'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-end">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-950 hover:text-white text-slate-700 flex items-center justify-center transition-all"
                  aria-label="Momento anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-950 hover:text-white text-slate-700 flex items-center justify-center transition-all"
                  aria-label="Momento siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
