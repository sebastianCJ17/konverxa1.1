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
  description: string;
  breadcrumbs: BreadcrumbItem[];
  image: string;
  imageAlt?: string;
  showDownloadBtn?: boolean;
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
}: PageBannerProps) {
  const displayWatermark = watermark || title;
  const isLongWatermark = displayWatermark.length > 11;

  return (
    <section className="relative w-full min-h-[380px] sm:min-h-[400px] lg:h-[430px] lg:min-h-[430px] lg:max-h-[430px] flex items-center bg-white text-slate-900 overflow-hidden font-sans border-b border-slate-200">
      
      {/* Right Side Team / Professional Image with Ultra-Smooth White Diffusion Blend */}
      <div
        className="absolute top-0 right-0 w-full lg:w-[64%] xl:w-[60%] h-full pointer-events-none overflow-hidden"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.01) 8%, rgba(0,0,0,0.06) 18%, rgba(0,0,0,0.18) 30%, rgba(0,0,0,0.42) 46%, rgba(0,0,0,0.72) 65%, rgba(0,0,0,0.92) 82%, black 95%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.01) 8%, rgba(0,0,0,0.06) 18%, rgba(0,0,0,0.18) 30%, rgba(0,0,0,0.42) 46%, rgba(0,0,0,0.72) 65%, rgba(0,0,0,0.92) 82%, black 95%)',
        }}
      >
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover object-top sm:object-center filter brightness-[0.98] contrast-[1.02]"
        />
        {/* Layer 1: Broad multi-stop white-to-transparent progressive gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 via-white/40 to-transparent"></div>
        
        {/* Layer 2: Extra soft horizontal feathering on the left blend zone */}
        <div className="absolute inset-0 w-3/5 bg-gradient-to-r from-white via-white/70 to-transparent"></div>

        {/* Layer 3: Top and Bottom subtle blends to dissolve cleanly into section borders */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent"></div>

        {/* Layer 4: Mobile & Tablet overlay ensuring pristine legibility */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
      </div>

      {/* Massive Watermark Typography behind - Relleno y menos visible */}
      <div
        className="absolute top-1/2 left-0 -translate-y-[45%] pointer-events-none select-none overflow-hidden z-0 pl-4 sm:pl-8 lg:pl-12 max-w-full"
        aria-hidden="true"
      >
        <span
          className={`${
            isLongWatermark
              ? 'text-[11vw] sm:text-[9vw] lg:text-[7.5vw]'
              : 'text-[15vw] sm:text-[14vw] lg:text-[12vw]'
          } font-black uppercase tracking-tight leading-none block whitespace-nowrap ${
            watermarkFilled
              ? 'text-slate-900/[0.038] sm:text-slate-900/[0.042]'
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 lg:pt-14 pb-6">
        <div className="max-w-2xl lg:max-w-3xl space-y-3.5 sm:space-y-4">
          
          {/* Breadcrumb Navigation (Miga de pan) */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Miga de pan"
            className="flex items-center flex-wrap gap-1.5 text-xs font-semibold text-slate-500"
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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold tracking-wider shadow-2xs"
            >
              {badge}
            </motion.div>
          )}

          {/* Prominent Colored Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-1.5"
          >
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none ${titleAccentColor}`}>
              {title}
            </h1>

            {/* Main Headline */}
            {headline && (
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
                {headline}
              </h2>
            )}
          </motion.div>

          {/* Descriptive Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-2xl"
          >
            {description}
          </motion.p>

        </div>
      </div>

    </section>
  );
}
