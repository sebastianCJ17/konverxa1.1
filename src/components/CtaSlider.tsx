import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getLocalVideoBlob } from '../utils/videoStorage';

const WORDS_LIST = [
  'CRITERIO',
  'MÉTODO',
  'CONTROL',
  'CONSISTENCIA',
  'ESTÁNDAR'
];

export default function CtaSlider() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string>('/videoweb.mp4');
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

  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[620px] flex items-center justify-center overflow-hidden bg-black text-white font-sans">
      
      {/* Background Video con overlay cinematográfico claro */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
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
            onError={() => {
              setVideoError(true);
            }}
            className="absolute inset-0 w-full h-full object-cover filter brightness-[1.0] contrast-[1.02] saturate-[1.05]"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/45 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-28 sm:pt-28 sm:pb-36 flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        
        {/* Main Phrase with exact typography from Bloque 05 Mercados title */}
        <div className="space-y-2 text-center flex flex-col items-center justify-center w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight text-white whitespace-nowrap text-center drop-shadow-md">
            Los resultados se construyen
          </h2>

          {/* Subtitle: - con - en blanco y sin cursiva, estrictamente centrado */}
          <div className="w-full text-center flex items-center justify-center">
            <p className="text-white/90 text-sm sm:text-base font-normal tracking-widest pt-1 !text-center text-center drop-shadow-sm">
              – con –
            </p>
          </div>
        </div>

        {/* Palabras a lo ancho en una misma línea separadas por puntos */}
        <div className="w-full max-w-5xl mx-auto px-2 pt-2">
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-2 text-center">
            {WORDS_LIST.map((word, idx) => (
              <div key={word} className="inline-flex items-center">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.2em] sm:tracking-[0.25em] text-white uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] select-none hover:text-white/80 transition-colors">
                  {word}
                </span>
                {idx < WORDS_LIST.length - 1 && (
                  <span className="ml-3 sm:ml-4 md:ml-6 text-white/50 text-xl sm:text-2xl md:text-3xl select-none" aria-hidden="true">
                    •
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Single Solid CTA Button - Mayor separación vertical para que no quede pegado */}
        <div className="pt-12 sm:pt-16 md:pt-20">
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
