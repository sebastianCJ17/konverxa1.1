import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface PageBannerProps {
  title: string;
  watermark?: string;
  watermarkFilled?: boolean;
  titleAccentColor?: string;
  badge?: string;
  headline?: string;
  description: React.ReactNode;
  breadcrumbs: BreadcrumbItem[];
  image: string;
  imageAlt?: string;
  imageClassName?: string;
  showDownloadBtn?: boolean;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export default function PageBanner({
  title,
  watermark,
  watermarkFilled = true,
  titleAccentColor = 'text-slate-900',
  badge,
  headline,
  description,
  breadcrumbs,
  image,
  imageAlt = 'KONVERXA',
  imageClassName,
  ctaText,
  ctaHref,
  onCtaClick,
}: PageBannerProps) {
  const displayWatermark = watermark || title;
  const isVeryLongWatermark = displayWatermark.length > 20;
  const isLongWatermark = displayWatermark.length > 11;

  // Resolve to clean banner background to ensure crisp photographic fade without burned-in text collision
  const resolvedImage = image.includes('/banners/banner-') && !image.includes('-sin-texto')
    ? image.replace(/(\/banners\/banner-[^.]+)\.png$/, '$1-sin-texto.png')
    : image;

  return (
    <section className="relative w-full min-h-[410px] h-auto pb-6 sm:pb-0 sm:h-[430px] sm:min-h-[430px] sm:max-h-[430px] lg:h-[430px] lg:min-h-[430px] lg:max-h-[430px] flex flex-col justify-start bg-white text-slate-900 overflow-hidden font-sans border-b border-slate-200">
      
      {/* Right Side Team / Professional Image with Identical Fade & Uniform Positioning */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, transparent 10%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.5) 45%, black 70%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, transparent 10%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.5) 45%, black 70%)',
        }}
      >
        <img
          src={resolvedImage}
          alt={imageAlt}
          className={`w-full h-full object-cover filter brightness-[1.02] contrast-[1.02] ${imageClassName || 'object-right'}`}
        />

        {/* Desktop smooth blend overlay: sutil para garantizar lectura a la izquierda sin tapar la foto a la derecha */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/40 via-30% to-transparent pointer-events-none" />

        {/* Mobile & Tablet blend overlay: balance óptimo de visibilidad de foto y contraste de texto */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-r from-white via-white/80 via-40% to-transparent pointer-events-none" />

        {/* Subtle top & bottom edge blending */}
        <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
      </div>

      {/* Massive Watermark Typography behind - Relleno y menos visible */}
      <div
        className="absolute top-1/2 left-0 -translate-y-[45%] pointer-events-none select-none overflow-hidden z-0 pl-4 sm:pl-8 lg:pl-12 max-w-full"
        aria-hidden="true"
      >
        <span
          className={`${
            isVeryLongWatermark
              ? 'text-[8vw] sm:text-[6.5vw] lg:text-[5vw]'
              : isLongWatermark
              ? 'text-[11vw] sm:text-[9vw] lg:text-[7.5vw]'
              : 'text-[15vw] sm:text-[14vw] lg:text-[12vw]'
          } font-black uppercase tracking-tight leading-none block whitespace-nowrap ${
            watermarkFilled
              ? 'text-slate-900/[0.032] sm:text-slate-900/[0.036]'
              : 'text-transparent opacity-40 sm:opacity-45'
          }`}
          style={watermarkFilled ? undefined : {
            WebkitTextStroke: '1.5px rgba(203, 213, 225, 0.55)',
            textStroke: '1.5px rgba(203, 213, 225, 0.55)',
          }}
        >
          {displayWatermark}
        </span>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-[82px] sm:pt-[90px] lg:pt-[96px] pb-6">
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl space-y-2.5 sm:space-y-3">
          
          {/* Breadcrumb Navigation (Miga de pan) */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Miga de pan"
            className="flex items-center flex-wrap gap-1.5 text-xs font-semibold text-slate-500 h-5"
          >
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <div key={idx} className="flex items-center gap-1.5">
                  {crumb.path && !isLast ? (
                    <Link
                      to={crumb.path}
                      className="hover:text-slate-900 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? 'text-slate-900 font-bold' : ''}>
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  )}
                </div>
              );
            })}
          </motion.nav>

          {/* Badge / Tag if provided */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold tracking-wider shadow-2xs h-6"
            >
              {badge}
            </motion.div>
          )}

          {/* Prominent Colored Title: Single line on sm+ so long industry titles don't push description down */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-1.5"
          >
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight leading-none whitespace-normal sm:whitespace-nowrap ${titleAccentColor}`}>
              {title}
            </h1>

            {/* Main Headline */}
            {headline && (
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-950 tracking-tight leading-snug">
                {headline}
              </h2>
            )}
          </motion.div>

          {/* Descriptive Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed font-normal max-w-2xl sm:max-w-4xl"
          >
            {description}
          </motion.p>

          {/* Optional CTA Button */}
          {ctaText && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2"
            >
              {ctaHref ? (
                <Link
                  to={ctaHref}
                  className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-black hover:bg-zinc-800 text-white font-normal text-xs sm:text-sm tracking-wide shadow-md transition-all border border-zinc-800"
                >
                  <span>{ctaText}</span>
                </Link>
              ) : (
                <button
                  onClick={onCtaClick}
                  className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-black hover:bg-zinc-800 text-white font-normal text-xs sm:text-sm tracking-wide shadow-md transition-all border border-zinc-800"
                >
                  <span>{ctaText}</span>
                </button>
              )}
            </motion.div>
          )}

        </div>
      </div>

    </section>
  );
}
