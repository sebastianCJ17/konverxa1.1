import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getLocalVideoBlob } from '../utils/videoStorage';

const ROTATING_WORDS = [
  'CRITERIO',
  'MÉTODO',
  'CONTROL',
  'CONSISTENCIA',
  'ESTÁNDAR'
];

export default function CtaSlider() {
  const [wordIndex, setWordIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string>('/videoweb.mp4');
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Si hay un video local en IndexedDB, usarlo también
    getLocalVideoBlob().then((blob) => {
      if (blob && blob.size > 1000) {
        const localUrl = URL.createObjectURL(blob);
        setVideoSrc(localUrl);
        setVideoError(false);
      }
    });
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay diferido
        });
      }
    }
  }, [videoSrc]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[620px] flex items-center justify-center overflow-hidden bg-black text-white font-sans">
      
      {/* Background Video con fallback de imagen y overlay cinematográfico */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
        {/* Imagen fallback mientras carga o si falla el video */}
        <img
          src="/modern-operations-hub.jpg?v=3"
          alt="Operación de BPO y Contact Center Moderno KONVERXA"
          className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.08] transition-opacity duration-700 ${
            isVideoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
          }`}
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            target.src = '/contact-center-operations.jpg';
          }}
        />

        {!videoError && (
          <video
            key={videoSrc}
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => {
              setIsVideoLoaded(true);
              setVideoError(false);
            }}
            onCanPlay={() => {
              setIsVideoLoaded(true);
              setVideoError(false);
            }}
            onError={() => {
              setVideoError(true);
              setIsVideoLoaded(false);
            }}
            className={`absolute inset-0 w-full h-full object-cover filter brightness-[0.70] contrast-[1.1] saturate-[1.05] transition-opacity duration-700 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/85 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-28 sm:pt-28 sm:pb-36 flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        
        {/* Main Phrase with exact typography from Bloque 05 Mercados title */}
        <div className="space-y-2 text-center flex flex-col items-center justify-center w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight text-white whitespace-nowrap text-center">
            Los resultados se construyen
          </h2>

          {/* Subtitle: - con - en blanco y sin cursiva, estrictamente centrado */}
          <div className="w-full text-center flex items-center justify-center">
            <p className="text-white text-sm sm:text-base font-normal tracking-widest pt-1 !text-center text-center">
              – con –
            </p>
          </div>
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
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-xl bg-white hover:bg-slate-100 text-black font-normal text-sm sm:text-base transition-all duration-300 shadow-2xl hover:scale-[1.02] border border-white group cursor-pointer"
          >
            <span>Hablemos de tu Negocio</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

    </section>
  );
}
