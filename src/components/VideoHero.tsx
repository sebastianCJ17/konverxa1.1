import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import LinkedInIcon from './LinkedInIcon';
import { COMPANY_INFO } from '../data/company';
import { getLocalVideoBlob } from '../utils/videoStorage';

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string>('/videoweb.mp4');
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Check if there is a locally saved custom video blob in IndexedDB
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
          // Fallback if autoplay is deferred by browser
        });
      }
    }
  }, [videoSrc]);

  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-black text-white font-sans">
      
      {/* Background Video with dark Overlay and Fallback poster */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-black">
        {/* Fallback operations imagery if video is loading or unplayable */}
        <img
          src="/operations-overview.jpg"
          alt="KONVERXA Centro Operativo"
          className={`absolute inset-0 w-full h-full object-cover filter brightness-[0.75] contrast-[1.05] transition-opacity duration-700 ${
            isVideoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
          }`}
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
            className={`w-full h-full object-cover filter brightness-[0.92] saturate-[1.05] transition-opacity duration-700 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        {/* Gradient Overlay: Solid black on the left for text contrast, fading out to reveal the contact center clearly on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/15 sm:via-black/70 sm:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-3xl space-y-8">
          
          {/* Main Hero Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] drop-shadow-md">
              Los resultados <br />
              no se improvisan. <br />
              Se construyen.
            </h1>
          </motion.div>

          {/* Hero CTAs - Single Discover Model button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="pt-2"
          >
            <Link
              to="/modelo"
              className="inline-flex items-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-white hover:bg-slate-100 text-black font-bold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl group border border-slate-200"
            >
              <span>Descubre nuestro Modelo</span>
              <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Bottom Hero Bar: Institutional Tag & Operational Focus */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 pb-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <span className="text-[11px] sm:text-xs md:text-sm font-normal uppercase tracking-wider text-zinc-300">
              BPO · Contact Center
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-zinc-400 font-normal">
          <span className="font-normal text-zinc-400">Operaciones Globales</span>
          <span className="text-zinc-600">·</span>
          <span className="font-normal text-zinc-300">España · Colombia · Perú</span>
        </div>
      </div>

    </section>
  );
}
