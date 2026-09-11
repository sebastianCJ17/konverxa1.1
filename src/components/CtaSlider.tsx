import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ROTATING_WORDS = [
  'CRITERIO',
  'MÉTODO',
  'CONTROL',
  'CONSISTENCIA',
  'ESTÁNDAR'
];

export default function CtaSlider() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[620px] flex items-center justify-center overflow-hidden bg-black text-white font-sans">
      
      {/* Background Contact Center Operations Image with Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/contact-center-operations.jpg"
          alt="Operación de Contact Center y BPO KONVERXA"
          className="w-full h-full object-cover object-center filter brightness-[0.68] contrast-[1.08]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('operations-overview.jpg')) {
              target.src = '/operations-overview.jpg';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/85 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-28 sm:pt-28 sm:pb-36 flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        
        {/* Main Phrase with exact typography from Bloque 05 Mercados title */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight text-white whitespace-nowrap">
            Los resultados se construyen
          </h2>

          {/* Subtitle: - con - en blanco y sin cursiva */}
          <p className="text-white text-sm sm:text-base font-normal tracking-widest pt-1">
            – con –
          </p>
        </div>

        {/* Dynamic Rotating Words - Larger than the phrase but with refined, elegant weight */}
        <div className="h-16 sm:h-20 md:h-24 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={ROTATING_WORDS[wordIndex]}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -22 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wider text-white uppercase drop-shadow-md"
            >
              {ROTATING_WORDS[wordIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Single Solid CTA Button */}
        <div className="pt-3 sm:pt-5">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-xl bg-white hover:bg-slate-100 text-black font-bold text-sm sm:text-base transition-all duration-300 shadow-2xl hover:scale-[1.02] border border-white group cursor-pointer"
          >
            <span>Hablemos de tu negocio</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

    </section>
  );
}
