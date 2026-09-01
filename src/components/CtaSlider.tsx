import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  SearchCheck,
  Cpu,
  TrendingUp,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface SlideData {
  id: number;
  badgeIcon: any;
  badgeText: string;
  title: string;
  subtitle: string;
  bgImage: string;
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    badgeIcon: ShieldCheck,
    badgeText: 'Transición Operativa Sin Riesgo',
    title: '¿Listo para Elevar la Eficiencia y Experiencia de tu Operación?',
    subtitle:
      'Solicita un diagnóstico de madurez operacional y descubre cómo el modelo de KONVERXA puede optimizar tus costes y elevar la satisfacción de tus clientes.',
    bgImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: 2,
    badgeIcon: SearchCheck,
    badgeText: 'Diagnóstico & Análisis Estratégico',
    title: '¿Listo para Elevar la Eficiencia y Experiencia de tu Operación?',
    subtitle:
      'Evaluamos tu operación actual, identificamos oportunidades clave y diseñamos un plan de mejora a la medida de tus objetivos.',
    bgImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: 3,
    badgeIcon: Cpu,
    badgeText: 'Tecnología, Procesos & Talento',
    title: '¿Listo para Elevar la Eficiencia y Experiencia de tu Operación?',
    subtitle:
      'Implementamos soluciones operativas con tecnología, procesos y talento especializado para generar resultados medibles y sostenibles.',
    bgImage:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: 4,
    badgeIcon: TrendingUp,
    badgeText: 'Gobernanza & Resultados Continuos',
    title: '¿Listo para Elevar la Eficiencia y Experiencia de tu Operación?',
    subtitle:
      'Acompañamiento continuo, gobernanza corporativa e innovación para liderar tu sector con los más altos estándares de calidad y servicio.',
    bgImage:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80'
  }
];

export default function CtaSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const slide = SLIDES[currentIndex];
  const BadgeIcon = slide.badgeIcon;

  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-neutral-950 text-white font-sans">
      {/* Background Image Carousel with Crystal Clear Visibility */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-105 contrast-105"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            {/* Lighter, elegant gradient overlay to keep background images bright and clearly visible */}
            <div className="absolute inset-0 bg-slate-950/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-slate-950/30 to-black/60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.65)_100%)]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle Ambient Grid Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-10" />

      {/* Main Slide Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Dynamic Badge in Neutral Gray / Silver */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700/80 text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-200 shadow-xl">
              <BadgeIcon className="w-4 h-4 text-slate-300" />
              <span>{slide.badgeText}</span>
            </div>

            {/* Slide Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto drop-shadow-lg">
              {slide.title}
            </h2>

            {/* Slide Subtitle */}
            <p className="text-slate-200 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
              {slide.subtitle}
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contacto"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-200 text-black font-extrabold text-base shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-3 group transform hover:-translate-y-0.5"
              >
                <span>Agendar Sesión Consultiva</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/servicios"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black/60 hover:bg-black/80 text-white font-bold text-base border border-neutral-600 hover:border-white shadow-lg backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-slate-300" />
                <span>Conoce Nuestros Servicios</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Slide anterior"
        className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-2xl bg-black/50 hover:bg-white text-white hover:text-black border border-white/20 backdrop-blur-md transition-all duration-300 shadow-xl focus:outline-hidden"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Siguiente slide"
        className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-2xl bg-black/50 hover:bg-white text-white hover:text-black border border-white/20 backdrop-blur-md transition-all duration-300 shadow-xl focus:outline-hidden"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators / Tabs in Neutral Gray / Silver */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {SLIDES.map((s, index) => {
          const isActive = currentIndex === index;
          return (
            <button
              key={s.id}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir al slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 focus:outline-hidden ${
                isActive
                  ? 'w-10 sm:w-12 bg-white shadow-lg shadow-white/40'
                  : 'w-2.5 sm:w-3 bg-white/40 hover:bg-white/70'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
