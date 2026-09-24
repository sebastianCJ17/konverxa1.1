import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data/services';
import {
  Headphones, TrendingUp, ShieldCheck, Workflow, FileText, Bot, Users,
  ChevronLeft, ChevronRight, ArrowRight, CheckCircle2
} from 'lucide-react';

const SERVICE_ICONS: Record<string, any> = {
  Headphones, TrendingUp, ShieldCheck, Workflow, FileText, Bot, Users
};

const SERVICE_SHORT_LABELS: Record<string, string> = {
  'atencion-experiencia-cliente': 'ATENCIÓN',
  'ventas-fidelizacion': 'VENTAS',
  'cobranzas': 'COBRANZAS',
  'soporte-tecnico': 'SOPORTE TÉCNICO',
  'bo-gestion-procesos': 'BACK OFFICE',
  'omnicanalidad-bots': 'OMNICANALIDAD',
  'rrhh-apoyo-psicosocial': 'TALENTO HUMANO'
};

export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = SERVICES_DATA[activeIndex] || SERVICES_DATA[0];
  const IconComp = SERVICE_ICONS[activeService.iconName] || Headphones;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % SERVICES_DATA.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + SERVICES_DATA.length) % SERVICES_DATA.length);
  };

  return (
    <div className="w-full relative">
      {/* Barra de menú en el mismo formato de las páginas internas */}
      <div className="bg-slate-100 border border-slate-200 rounded-2xl p-1.5 mb-8 shadow-2xs">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5 sm:gap-2 w-full">
          {SERVICES_DATA.map((service, idx) => {
            const isActive = idx === activeIndex;
            const label = SERVICE_SHORT_LABELS[service.id] || service.title.toUpperCase();
            return (
              <button
                key={service.id}
                onClick={() => setActiveIndex(idx)}
                className={`h-9.5 sm:h-10 px-2.5 sm:px-3 rounded-lg text-xs font-normal uppercase tracking-wider transition-all duration-200 flex items-center justify-center text-center ${
                  isActive
                    ? 'bg-black text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 hover:text-black border border-slate-200'
                }`}
              >
                <span className="whitespace-nowrap uppercase">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tarjeta Principal Unificada en el mismo formato de Servicios */}
      <motion.div
        key={activeService.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
      >
        {/* Columna Izquierda: Información + Capacidades Clave */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            {/* Pastilla institucional */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-widest shadow-2xs">
              <IconComp className="w-3.5 h-3.5 text-slate-700" />
              <span>{activeService.title}</span>
            </div>

            {/* Titular Principal */}
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              {activeService.title}
            </h2>

            {/* Subheadline / Tagline */}
            <p className="text-slate-800 font-semibold text-base">
              {activeService.tagline}
            </p>

            {/* Descripción */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
              {activeService.description}
            </p>
          </div>

          {/* Capacidades de Operación */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              CAPACIDADES DE OPERACIÓN
            </h4>
            <div className="space-y-2.5">
              {activeService.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                  <span className="font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Acciones inferiores y Controles del Carrusel */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Link
              to={`/servicios#${activeService.id}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-950 hover:bg-black text-white text-xs sm:text-sm font-normal transition-all shadow-sm group w-fit"
            >
              <span>Ver detalles de la Solución</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Flechas de Navegación */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-white hover:bg-slate-950 hover:text-white text-slate-800 border border-slate-200 flex items-center justify-center transition-all shadow-2xs"
                aria-label="Solución anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-white hover:bg-slate-950 hover:text-white text-slate-800 border border-slate-200 flex items-center justify-center transition-all shadow-2xs"
                aria-label="Solución siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Fotografía y Caja Enmarcada de Estándar Operativo */}
        <div className="lg:col-span-5 flex flex-col h-full gap-5 sm:gap-6">
          {/* Fotografía de la solución */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex-1 min-h-[220px] min-h-0">
            <img
              src={activeService.image}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80';
              }}
              alt={activeService.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Tarjeta Enmarcada: Estándar Operativo */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-2xs shrink-0">
            <div className="flex items-center gap-2 text-slate-800 text-xs font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-slate-700 shrink-0" />
              <span>ESTÁNDAR OPERATIVO</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {activeService.operationalStandard || activeService.benefits[1] || 'Garantía de SLAs, supervisión en vivo y medición continua en cada punto de interacción.'}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
