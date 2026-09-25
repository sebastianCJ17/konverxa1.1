import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getLocalVideoBlob } from '../utils/videoStorage';

const WORDS_LIST = [
  'MÉTODO',
  'CRITERIO',
  'CONSISTENCIA',
  'ESTÁNDAR',
  'CONTROL'
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

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-28 sm:pt-28 sm:pb-36 flex flex-col items-center justify-center space-y-6 sm:space-y-7">
        
        {/* Main Title: Exacto como en la imagen de referencia */}
        <div className="text-center flex flex-col items-center justify-center w-full">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight leading-tight text-white whitespace-nowrap text-center drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
            Los resultados se construyen
          </h2>
        </div>

        {/* Palabras en una sola línea continua exactamente como en la imagen */}
        <div className="w-full mx-auto px-2 pt-1">
          <div className="flex items-center justify-center gap-x-3 sm:gap-x-5 md:gap-x-7 lg:gap-x-9 w-full text-center whitespace-nowrap">
            {WORDS_LIST.map((word, idx) => (
              <div key={word} className="inline-flex items-center">
                <span className="text-xs xs:text-sm sm:text-base md:text-xl lg:text-[22px] font-medium tracking-[0.18em] sm:tracking-[0.22em] text-white uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] select-none">
                  {word}
                </span>
                {idx < WORDS_LIST.length - 1 && (
                  <span className="ml-3 sm:ml-5 md:ml-7 lg:ml-9 text-white/50 text-xs sm:text-sm md:text-base select-none" aria-hidden="true">
                    •
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button centrado con el formato exacto de la imagen */}
        <div className="pt-20 sm:pt-28 md:pt-36">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-medium text-sm sm:text-base transition-all duration-300 shadow-xl hover:scale-[1.02] border border-white/90 group cursor-pointer"
          >
            <span>Hablemos de tu Negocio</span>
            <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-900 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
