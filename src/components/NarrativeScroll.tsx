import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Workflow, Target, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOMENTS = [
  {
    id: '01',
    tabLabel: 'PREGUNTA CLAVE',
    title: 'Si el negocio exige resultados,\n¿por qué conformarse con promesas?',
    subtitle: 'La pregunta con la que debería empezar cualquier decisión de tercerización.',
  },
  {
    id: '02',
    tabLabel: 'CRITERIO OPERATIVO',
    title: 'El problema no es tercerizar.\nEs confundir el tamaño del proveedor con su estándar operativo.',
    subtitle: 'Posiciones, Tecnología y Volumen demuestran capacidad, pero no garantizan Método, Control y Consistencia.',
  },
  {
    id: '03',
    tabLabel: 'ESTÁNDAR Y GOBERNANZA',
    title: 'El tamaño absorbe volumen.\nEl estándar protege resultados.',
    subtitle: 'El estándar vive en cómo organizamos, dirigimos y controlamos la ejecución del negocio.',
  },
  {
    id: '04',
    tabLabel: 'MÉTODO OPERATIVO',
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

  const activeMoment = MOMENTS[currentStep];

  return (
    <section className="relative w-full py-16 sm:py-20 bg-slate-100 text-slate-900 overflow-hidden font-sans border-b border-slate-200">
      
      {/* Background Soft Texture & Ambient Tone - 20 Años Photo with reduced overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-60">
        <img
          src="/20años.jpg"
          alt="20 Años de Trayectoria KONVERXA"
          className="w-full h-full object-cover filter brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/75 via-slate-100/50 to-slate-100/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Grid: Left Narrative + Right Static Sequence Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct and Elevated Content */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            
            {/* Top Moments Navigation Tabs (Misma forma que Modelo: rounded-xl, tamaño compacto en una sola línea) */}
            <div className="flex flex-nowrap items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto pb-1 max-w-full">
              {MOMENTS.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => setCurrentStep(idx)}
                  className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl font-normal uppercase tracking-wider text-[11px] sm:text-xs transition-all duration-300 border shrink-0 whitespace-nowrap ${
                    idx === currentStep
                      ? 'bg-black text-white border-black shadow-md'
                      : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span className="whitespace-nowrap uppercase">{m.tabLabel}</span>
                </button>
              ))}
            </div>

            {/* Elevated Content with Smooth Motion Transition - Uniform height across all slides */}
            <div className="min-h-[540px] sm:min-h-[440px] lg:min-h-[410px] flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMoment.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="space-y-4 sm:space-y-5 flex flex-col justify-start w-full"
                >
                  
                  {/* Main Title - Cleanly elevated at the top */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] whitespace-pre-line">
                    {activeMoment.title}
                  </h2>

                  {/* Subtitle 01 */}
                  {activeMoment.subtitle && (
                    <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl pt-1 text-justify">
                      {activeMoment.subtitle}
                    </p>
                  )}

                  {/* 3 Core Cards for Slide 04: DIAGNOSTICAR, COORDINAR, EJECUTAR */}
                  {activeMoment.cards && (
                    <div className="pt-2 space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                        {activeMoment.cards.map((card, idx) => {
                          const IconComp = card.icon;
                          return (
                            <div
                              key={idx}
                              className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-1 hover:border-slate-400 hover:shadow-sm transition-all group"
                            >
                              <div className="flex items-center gap-1.5">
                                <div className="w-6 h-6 rounded-md bg-slate-950 text-white flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                                  <IconComp className="w-3 h-3" />
                                </div>
                                <span className="font-black text-[11px] tracking-wider text-slate-950 uppercase">
                                  {card.label}
                                </span>
                              </div>
                              <p className="text-[11px] sm:text-xs text-slate-600 leading-snug">
                                {card.desc}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: Static, non-jumping sequence navigator */}
          <div className="lg:col-span-4 bg-white/95 backdrop-blur-xs p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between self-start w-full">
            
            <div className="space-y-3">
              {/* Static list without vertical jumps */}
              <div className="flex flex-col gap-2.5">
                {MOMENTS.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => setCurrentStep(idx)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                      idx === currentStep
                        ? 'bg-black text-white border-black shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-normal uppercase tracking-wider">
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
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-black hover:text-white text-slate-700 flex items-center justify-center transition-all border border-slate-200"
                  aria-label="Momento anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-black hover:text-white text-slate-700 flex items-center justify-center transition-all border border-slate-200"
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
