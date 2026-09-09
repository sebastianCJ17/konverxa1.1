import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data/services';
import {
  Headphones, TrendingUp, ShieldCheck, Workflow, FileText, Bot,
  ChevronLeft, ChevronRight, ArrowRight, CheckCircle2
} from 'lucide-react';

const SERVICE_ICONS: Record<string, any> = {
  Headphones, TrendingUp, ShieldCheck, Workflow, FileText, Bot
};

// Rich color accents for each solution to add vibrancy
const SERVICE_THEMES = [
  { color: '#2563eb', bgLight: 'bg-blue-50', textCol: 'text-blue-600', borderCol: 'border-blue-200', tag: 'Omnicanalidad 24/7' },
  { color: '#d97706', bgLight: 'bg-amber-50', textCol: 'text-amber-600', borderCol: 'border-amber-200', tag: 'Conversión B2B/B2C' },
  { color: '#059669', bgLight: 'bg-emerald-50', textCol: 'text-emerald-600', borderCol: 'border-emerald-200', tag: 'Recuperación de Cartera' },
  { color: '#7c3aed', bgLight: 'bg-purple-50', textCol: 'text-purple-600', borderCol: 'border-purple-200', tag: 'Mesa de Ayuda N1/N2' },
  { color: '#0284c7', bgLight: 'bg-sky-50', textCol: 'text-sky-600', borderCol: 'border-sky-200', tag: 'Back Office Crítico' },
  { color: '#e11d48', bgLight: 'bg-rose-50', textCol: 'text-rose-600', borderCol: 'border-rose-200', tag: 'IA Generativa & RPA' }
];

export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = SERVICES_DATA[activeIndex] || SERVICES_DATA[0];
  const theme = SERVICE_THEMES[activeIndex % SERVICE_THEMES.length];
  const IconComp = SERVICE_ICONS[activeService.iconName] || Headphones;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % SERVICES_DATA.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + SERVICES_DATA.length) % SERVICES_DATA.length);
  };

  return (
    <div className="w-full relative">
      {/* 1-Row Interactive Solution Switcher Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {SERVICES_DATA.map((service, idx) => {
          const isActive = idx === activeIndex;
          const ServiceIcon = SERVICE_ICONS[service.iconName] || Headphones;
          return (
            <button
              key={service.id}
              onClick={() => setActiveIndex(idx)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2.5 shrink-0 ${
                isActive
                  ? 'bg-slate-950 text-white shadow-md scale-102'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-xs'
              }`}
            >
              <ServiceIcon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
              <span>{service.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Single Showcase Card (Split Grid: Details + High-Res Image) */}
      <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          
          {/* Left Column: Solution Detail with Color Accents */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${theme.bgLight} ${theme.textCol} border ${theme.borderCol}`}>
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{theme.tag}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                    {activeService.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600 mt-1.5">
                    {activeService.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {activeService.description}
                </p>

                {/* Key Features Chips */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Capacidades Clave:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {activeService.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${theme.textCol}`} />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Bottom Actions & Slider Controls */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              <Link
                to={`/servicios#${activeService.id}`}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-950 hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm group w-fit"
              >
                <span>Ver detalles de la solución</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-950 hover:text-white text-slate-800 flex items-center justify-center transition-all shadow-2xs"
                  aria-label="Solución anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-950 hover:text-white text-slate-800 flex items-center justify-center transition-all shadow-2xs"
                  aria-label="Solución siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: High-Quality Representative Photograph with Gradient */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[460px] overflow-hidden bg-slate-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={activeService.image}
                  onError={(e) => {
                    // Fallback to high quality photography if custom local file fails to load
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80';
                  }}
                  alt={activeService.title}
                  className="w-full h-full object-cover filter brightness-95 saturate-[1.1] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent lg:block hidden"></div>
                
                {/* Bottom Image Tag Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <div className="p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-lg">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 block">
                      Estándar Operativo
                    </span>
                    <p className="text-xs font-semibold text-white mt-0.5">
                      Garantía de SLAs, supervisión en vivo y medición continua.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

    </div>
  );
}
