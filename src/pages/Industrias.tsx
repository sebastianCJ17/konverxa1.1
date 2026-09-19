import { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import SEOHead from '../components/SEOHead';
import PageBanner from '../components/PageBanner';
import SectionSwitcherBar from '../components/SectionSwitcherBar';
import IndustryCarousel from '../components/IndustryCarousel';
import { INDUSTRIES_DATA } from '../data/industries';
import {
  Radio, ShoppingBag, Cpu, ShieldCheck, Activity, Truck, Zap, Landmark,
  Building2, ArrowRight, CheckCircle2, AlertCircle, Shield,
  Sparkles, Layers, PhoneCall, ChevronRight, ChevronLeft
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Radio, ShoppingBag, Cpu, ShieldCheck, Activity, Truck, Zap, Landmark
};

const INDUSTRY_ALIAS_MAP: Record<string, string> = {
  'telecomunicaciones': 'telecomunicaciones',
  'retail': 'retail-ecommerce',
  'ecommerce': 'retail-ecommerce',
  'retail-ecommerce': 'retail-ecommerce',
  'tecnologia': 'tecnologia-digital',
  'tecnologia-digital': 'tecnologia-digital',
  'seguros': 'seguros',
  'salud': 'salud',
  'movilidad': 'movilidad-transporte',
  'transporte': 'movilidad-transporte',
  'logistica': 'movilidad-transporte',
  'movilidad-transporte': 'movilidad-transporte',
  'energia': 'energia-servicios',
  'energia-servicios': 'energia-servicios',
  'banca': 'banca-fintech',
  'fintech': 'banca-fintech',
  'banca-fintech': 'banca-fintech'
};

const SWITCHER_ITEMS = [
  { id: 'telecomunicaciones', label: 'Telecomunicaciones' },
  { id: 'retail-ecommerce', label: 'Retail & eCommerce' },
  { id: 'tecnologia-digital', label: 'Tecnología' },
  { id: 'seguros', label: 'Seguros' },
  { id: 'salud', label: 'Salud' },
  { id: 'movilidad-transporte', label: 'Movilidad' },
  { id: 'energia-servicios', label: 'Energía' },
  { id: 'banca-fintech', label: 'Banca & Fintech' }
];

interface IndustriasProps {
  initialSlug?: string;
}

export default function Industrias({ initialSlug }: IndustriasProps) {
  const { hash } = useLocation();
  const params = useParams<{ slug?: string }>();

  // Determine initial slug from props, params or hash
  const getResolvedSlug = (): string => {
    const rawTarget = initialSlug || params.slug || (hash ? hash.replace('#', '') : 'telecomunicaciones');
    return INDUSTRY_ALIAS_MAP[rawTarget] || 'telecomunicaciones';
  };

  const [activeSlug, setActiveSlug] = useState<string>(getResolvedSlug);

  // Sync state with URL changes (hash or route param)
  useEffect(() => {
    const resolved = getResolvedSlug();
    if (resolved && resolved !== activeSlug) {
      setActiveSlug(resolved);
    }
  }, [hash, params.slug, initialSlug]);

  const activeIndex = INDUSTRIES_DATA.findIndex((ind) => ind.slug === activeSlug);
  const safeIndex = activeIndex !== -1 ? activeIndex : 0;
  const activeIndustry = INDUSTRIES_DATA[safeIndex] || INDUSTRIES_DATA[0];
  const IconComp = ICON_MAP[activeIndustry.iconName] || Building2;

  const currentBanner = activeIndustry.bannerInfo || {
    title: activeIndustry.name.toUpperCase(),
    watermark: activeIndustry.name.toUpperCase(),
    badge: 'SECTOR ESTRATÉGICO',
    headline: activeIndustry.shortDesc,
    description: activeIndustry.fullDesc,
    breadcrumbLabel: activeIndustry.name,
    image: activeIndustry.heroImage,
    imageAlt: activeIndustry.name
  };

  const handleSelectIndustry = (slug: string) => {
    const resolved = INDUSTRY_ALIAS_MAP[slug] || slug;
    setActiveSlug(resolved);
    window.history.replaceState(null, '', `/industrias#${resolved}`);
  };

  const handlePrevIndustry = () => {
    const nextIdx = (safeIndex - 1 + INDUSTRIES_DATA.length) % INDUSTRIES_DATA.length;
    handleSelectIndustry(INDUSTRIES_DATA[nextIdx].slug);
  };

  const handleNextIndustry = () => {
    const nextIdx = (safeIndex + 1) % INDUSTRIES_DATA.length;
    handleSelectIndustry(INDUSTRIES_DATA[nextIdx].slug);
  };

  // Helper to cleanly format bold lead-in titles: "Concepto: Detalle"
  const renderItemText = (text: string, isSolution = false) => {
    const colonIdx = text.indexOf(':');
    if (colonIdx !== -1) {
      const lead = text.slice(0, colonIdx);
      const rest = text.slice(colonIdx + 1).trim();
      return (
        <span className="text-sm leading-relaxed">
          <strong className={isSolution ? 'font-bold text-slate-900' : 'font-bold text-slate-900'}>
            {lead}:
          </strong>{' '}
          <span className={isSolution ? 'text-slate-700' : 'text-slate-600'}>
            {rest}
          </span>
        </span>
      );
    }
    return <span className="text-sm text-slate-700">{text}</span>;
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead
        title={`${currentBanner.title} - Sectores y Mercados | KONVERXA`}
        description={currentBanner.description}
      />

      {/* 1. Header Banner */}
      <PageBanner
        title={currentBanner.title}
        watermark={currentBanner.watermark}
        watermarkFilled={true}
        titleAccentColor="text-slate-900"
        badge={currentBanner.badge}
        headline={currentBanner.headline}
        description={currentBanner.description}
        breadcrumbs={[
          { label: 'Inicio', path: '/' },
          { label: 'Mercados', path: '/industrias' },
          { label: currentBanner.breadcrumbLabel }
        ]}
        image={currentBanner.image}
        imageAlt={currentBanner.imageAlt}
        showDownloadBtn={true}
      />

      {/* 2. Internal Submenu Switcher Bar */}
      <SectionSwitcherBar
        items={SWITCHER_ITEMS}
        activeId={activeIndustry.slug}
        onSelect={handleSelectIndustry}
      />

      {/* 3. Showcase & Detailed Information Section */}
      <section id="detalle-industria" className="py-12 sm:py-16 bg-white relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          {/* Main Showcase Split Card (Matching user reference layout with distinct photo) */}
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px] lg:h-[560px]">
              
              {/* Left Column: Information, Key Capabilities, CTA & Controls */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between h-full space-y-6">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndustry.slug}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 14 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5 flex flex-col justify-start"
                  >
                    {/* Top Pill Badge */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-200/80 shadow-2xs">
                        <IconComp className="w-3.5 h-3.5 text-blue-600" />
                        <span>{activeIndustry.showcaseTag || 'Omnicanalidad 24/7'}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-400">
                        0{safeIndex + 1} / 0{INDUSTRIES_DATA.length}
                      </span>
                    </div>

                    {/* Title & Short Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                        {activeIndustry.name}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-slate-700 mt-1.5 leading-relaxed">
                        {activeIndustry.shortDesc}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {activeIndustry.fullDesc}
                    </p>

                    {/* Key Capabilities Checklist */}
                    <div className="space-y-3 pt-3 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                        CAPACIDADES CLAVE:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                        {(activeIndustry.keyCapabilities || [
                          'Operación Inbound y Outbound 24/7',
                          'Gestión estricta de SLAs y FCR',
                          'Supervisión y control en tiempo real',
                          'Resolución integral de requerimientos'
                        ]).map((cap, i) => (
                          <div key={i} className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 shrink-0 text-blue-600" />
                            <span className="font-medium text-slate-800">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>

                {/* Bottom Actions Row: Button + Slider Navigation Arrows */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm group w-fit"
                  >
                    <span>VER DETALLES DE LA SOLUCIÓN</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      onClick={handlePrevIndustry}
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-950 hover:text-white text-slate-800 flex items-center justify-center transition-all shadow-2xs"
                      aria-label="Industria anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextIndustry}
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-950 hover:text-white text-slate-800 flex items-center justify-center transition-all shadow-2xs"
                      aria-label="Industria siguiente"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: High-Res Distinct Photo with Operational Standard Overlay */}
              <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-full min-h-[320px] overflow-hidden bg-slate-950">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndustry.slug}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={activeIndustry.showcaseImage}
                      alt={`Operación en ${activeIndustry.name}`}
                      className="w-full h-full object-cover filter brightness-95 saturate-[1.1] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent lg:block hidden"></div>
                    
                    {/* Bottom Operational Standard Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                      <div className="p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 shadow-lg">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 block">
                          ESTÁNDAR OPERATIVO
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                          {activeIndustry.operationalStandard || activeIndustry.complianceBadge || 'Control de SLA, supervisión en vivo y medición continua.'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* Matriz 1-a-1: Desafíos Operativos vs. Solución KONVERXA */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <div>
                <h4 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
                  Enfoque Operativo y Resolutivo
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  Comparativa directa entre los retos habituales del sector y la respuesta KONVERXA.
                </p>
              </div>
            </div>

            {/* Direct 2-Column Scannable Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              
              {/* Desafíos habituales del sector */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 text-slate-800 pb-2 border-b border-slate-100">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Puntos de Dolor en {activeIndustry.name}
                  </span>
                </div>

                <ul className="space-y-3.5">
                  {activeIndustry.keyChallenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                      <div>{renderItemText(challenge, false)}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solución KONVERXA */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-300/80 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 text-slate-900 pb-2 border-b border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Capacidad y Solución KONVERXA
                  </span>
                </div>

                <ul className="space-y-3.5">
                  {activeIndustry.solutions.map((sol, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <div>{renderItemText(sol, true)}</div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Alcance Operacional (Chips limpios y sutiles) */}
          {activeIndustry.operationalScope && activeIndustry.operationalScope.length > 0 && (
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2 text-slate-800 shrink-0">
                <Layers className="w-4 h-4 text-slate-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Alcances gestionados:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeIndustry.operationalScope.map((scope, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200/80"
                  >
                    {scope}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Servicios Aplicados (Compact 4-grid with clean links) */}
          {activeIndustry.appliedServices && activeIndustry.appliedServices.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Servicios KONVERXA Aplicados a este Sector
                </span>
                <Link
                  to="/servicios"
                  className="text-xs font-semibold text-slate-700 hover:text-black inline-flex items-center gap-1"
                >
                  <span>Ver catálogo completo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeIndustry.appliedServices.map((srv, sIdx) => (
                  <Link
                    key={sIdx}
                    to={srv.link}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-900/30 hover:bg-slate-50/50 transition-all flex flex-col justify-between group shadow-2xs"
                  >
                    <div className="space-y-1">
                      <h5 className="font-bold text-sm text-slate-950 group-hover:text-black">
                        {srv.title}
                      </h5>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {srv.desc}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-slate-900 group-hover:translate-x-0.5 transition-transform">
                      <span>Ver servicio</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. Explorador de Mercados (Carrusel 3D posicionado ABAJO de la información) */}
      <section id="carrusel-mercados" className="py-14 sm:py-18 bg-slate-50 border-t border-b border-slate-200/80 relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-200/80 text-slate-700 border border-slate-300/60 mb-2">
              <Sparkles className="w-3 h-3 text-slate-700" />
              Explorador de Mercados
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">
              Conoce Todos Nuestros Sectores Estratégicos
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Haz clic en cualquiera de las tarjetas para cambiar de sector y actualizar su ficha técnica.
            </p>
          </div>

          <IndustryCarousel
            activeSlug={activeIndustry.slug}
            onSelectIndustry={(slug) => {
              handleSelectIndustry(slug);
              const el = document.getElementById('detalle-industria');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            isInternalPage={true}
          />
        </div>
      </section>

      {/* 5. Contact CTA Banner */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-xl relative z-10">
              <h4 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                ¿Tienes operaciones críticas en {activeIndustry.name}?
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Estructuremos juntos un modelo con talento especializado, tecnología integrada y cumplimiento estricto de SLAs.
              </p>
            </div>

            <div className="shrink-0 relative z-10">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <span>Hablar con un Especialista</span>
                <PhoneCall className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
