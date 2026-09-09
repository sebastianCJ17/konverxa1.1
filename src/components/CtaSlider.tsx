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
    <section className="relative w-full min-h-[540px] sm:min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-white font-sans border-t border-zinc-900">
      
      {/* Dark Ambient Background with subtle grain and light glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-slate-800/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 flex flex-col items-center justify-center space-y-8">
        
        {/* Main Title 01 */}
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.08]">
            LOS RESULTADOS <br />
            SE CONSTRUYEN
          </h2>

          {/* Subtitle 01: - con - */}
          <p className="text-slate-400 text-lg sm:text-2xl font-light italic tracking-widest pt-2">
            – con –
          </p>
        </div>

        {/* Subtitle 02: Dynamic Rotating Word (CRITERIO · MÉTODO · CONTROL · CONSISTENCIA · ESTÁNDAR) */}
        <div className="h-16 sm:h-20 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={ROTATING_WORDS[wordIndex]}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-wider text-white uppercase"
            >
              {ROTATING_WORDS[wordIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Single Solid CTA Button pointing to /contacto */}
        <div className="pt-4">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-3 px-9 py-4.5 rounded-xl bg-white hover:bg-slate-100 text-black font-extrabold text-base sm:text-lg transition-all duration-300 shadow-2xl hover:scale-[1.02] border border-white group cursor-pointer"
          >
            <span>Hablemos de tu negocio</span>
            <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

    </section>
  );
}
