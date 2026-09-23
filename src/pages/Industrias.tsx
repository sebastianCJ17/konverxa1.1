import { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEOHead from '../components/SEOHead';
import PageBanner from '../components/PageBanner';
import SectionSwitcherBar from '../components/SectionSwitcherBar';
import { INDUSTRIES_DATA, OTRAS_INDUSTRIAS_DATA } from '../data/industries';
import {
  Radio, ShoppingBag, Cpu, ShieldCheck, Activity, Truck, Zap, Landmark,
  Building2, ArrowRight, CheckCircle2, ChevronRight
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Radio, ShoppingBag, Cpu, ShieldCheck, Activity, Truck, Zap, Landmark
};

const INDUSTRY_ALIAS_MAP: Record<string, string> = {
  'telecomunicaciones': 'telecomunicaciones',
  'banca': 'banca-fintech',
  'fintech': 'banca-fintech',
  'banca-fintech': 'banca-fintech',
  'banca-servicios-financieros': 'banca-fintech',
  'banca-y-servicios-financieros': 'banca-fintech',
  'servicios-financieros': 'banca-fintech',
  'retail': 'retail-ecommerce',
  'ecommerce': 'retail-ecommerce',
  'retail-ecommerce': 'retail-ecommerce',
  'retail-y-comercio-electronico': 'retail-ecommerce',
  'retail-comercio-electronico': 'retail-ecommerce',
  'tecnologia': 'tecnologia-digital',
  'tecnologia-digital': 'tecnologia-digital',
  'tecnologia-y-negocios-digitales': 'tecnologia-digital',
  'tecnologia-negocios-digitales': 'tecnologia-digital',
  'seguro': 'seguros',
  'seguros': 'seguros',
  'salud': 'salud',
  'salud-farmacia': 'salud',
  'salud-y-farmacia': 'salud',
  'farmacia': 'salud',
  'movilidad': 'movilidad-transporte',
  'transporte': 'movilidad-transporte',
  'logistica': 'movilidad-transporte',
  'movilidad-transporte': 'movilidad-transporte',
  'movilidad-y-transporte': 'movilidad-transporte',
  'energia': 'energia-servicios',
  'energia-servicios': 'energia-servicios',
  'energia-y-servicios-publicos': 'energia-servicios',
  'energia-servicios-publicos': 'energia-servicios',
  'servicios-publicos': 'energia-servicios'
};

const SWITCHER_ITEMS = [
  { id: 'telecomunicaciones', label: 'TELECOMUNICACIONES' },
  { id: 'banca-fintech', label: 'BANCA' },
  { id: 'retail-ecommerce', label: 'RETAIL' },
  { id: 'tecnologia-digital', label: 'TECNOLOGÍA' },
  { id: 'seguros', label: 'SEGUROS' },
  { id: 'salud', label: 'SALUD' },
  { id: 'movilidad-transporte', label: 'MOVILIDAD' },
  { id: 'energia-servicios', label: 'ENERGÍA' }
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
    badge: 'SECTORES ESTRATÉGICOS',
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

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead
        title={`${currentBanner.title} - Sectores Estratégicos | KONVERXA`}
        description={currentBanner.description}
      />

      {/* ========================================================================= */}
      {/* BLOQUE 01: BANNER PRINCIPAL + MIGA DE PAN + SWITCHER DE LOS 8 MERCADOS    */}
      {/* ========================================================================= */}
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
          { label: currentBanner.parentBreadcrumbLabel || 'Industrias y Mercados', path: '/industrias' },
          { label: currentBanner.breadcrumbLabel }
        ]}
        image={currentBanner.image}
        imageAlt={currentBanner.imageAlt}
        showDownloadBtn={true}
      />

      {/* Botones de navegación en mayúsculas y emparejados con servicios */}
      <SectionSwitcherBar
        items={SWITCHER_ITEMS}
        activeId={activeIndustry.slug}
        onSelect={handleSelectIndustry}
      />

      {/* ========================================================================= */}
      {/* BLOQUE 02: ALCANCE OPERATIVO + 4 BARRAS DE CAPACIDADES + FOTO & CIERRE   */}
      {/* ========================================================================= */}
      <section id="alcance-operativo" className="py-12 sm:py-16 bg-white relative overflow-hidden">
        {/* Subtle dot pattern matching servicios */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            key={activeIndustry.slug}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          >
            {/* Columna Izquierda: Información + Capacidades en 4 Barras */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:space-y-0">
              <div className="space-y-4">
                {/* Pastilla */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-widest shadow-2xs">
                  <IconComp className="w-3.5 h-3.5 text-slate-700" />
                  <span>ALCANCE OPERATIVO</span>
                </div>

                {/* Titular Principal */}
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  {activeIndustry.block2Title || activeIndustry.name}
                </h2>

                {/* Descripción / Tagline */}
                <p className="text-slate-800 font-bold text-sm sm:text-base tracking-wide uppercase">
                  {activeIndustry.subHeadline || activeIndustry.shortDesc}
                </p>

                {/* Bajada */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                  {activeIndustry.fullDesc}
                </p>
              </div>

              {/* Capacidades para la industria en 4 barras como en servicios */}
              <div className="space-y-3 pt-4 lg:pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Capacidades para la Industria:
                </h4>
                <div className="space-y-2.5">
                  {(activeIndustry.capabilitiesBars || [
                    'Facturación y Consumo',
                    'Renovaciones, Ventas y Fidelización',
                    'Soporte Técnico e Incidencias',
                    'Activaciones y Back Office'
                  ]).map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-800 shadow-2xs hover:border-slate-300 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna Derecha: Fotografía y Cierre Evolución Operativa */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6 h-full">
              {/* Fotografía representativa de la operación con altura fija y uniforme */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-[240px] sm:h-[260px] lg:h-[270px] w-full bg-slate-900 shrink-0">
                <img
                  src={activeIndustry.showcaseImage}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80';
                  }}
                  alt={`Operación en ${activeIndustry.name}`}
                  className="w-full h-full object-cover filter brightness-95"
                />
              </div>

              {/* Pie de la fotografía: Cierre Evolución Operativa (sin CTA para uniformidad total de altura) */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-2xs flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-slate-900 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-slate-800 shrink-0" />
                  <span>{activeIndustry.footerClosing?.tag || 'EVOLUCIÓN OPERATIVA'}</span>
                </div>
                <h5 className="text-sm sm:text-base font-bold text-slate-950">
                  {activeIndustry.footerClosing?.title || 'Adaptamos la operación. No el estándar.'}
                </h5>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeIndustry.footerClosing?.text ||
                    'Cada industria exige procesos, riesgos y momentos críticos distintos. Los integramos bajo un mismo criterio de gestión, control y evidencia para sostener una ejecución consistente.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOQUE 03: OTRAS INDUSTRIAS (4 MICROTARJETAS)                              */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Cabecera de Sección */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-slate-200/90 text-slate-800 border border-slate-300">
              OTRAS INDUSTRIAS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950">
              Otros sectores con necesidades operativas específicas
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Adaptamos nuestro modelo integral para estructurar y sostener procesos críticos en sectores especializados.
            </p>
          </div>

          {/* 4 Microtarjetas en Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OTRAS_INDUSTRIAS_DATA.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Fotografía de la Microtarjeta */}
                <div className="h-44 w-full overflow-hidden relative bg-slate-100">
                  <img
                    src={item.image}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        target.src = (item as any).fallbackImage || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80';
                      }
                    }}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                </div>

                {/* Contenido de la Microtarjeta */}
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-base font-black text-slate-950 tracking-tight group-hover:text-black">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      to="/contacto"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 group-hover:text-black group-hover:translate-x-1 transition-all"
                    >
                      <span>Consultar sector</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOQUE 04: CIERRE                                                         */}
      {/* ========================================================================= */}
      <section className="pt-14 sm:pt-16 pb-20 sm:pb-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-slate-950 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-slate-800/40 rounded-full blur-3xl pointer-events-none"></div>

            {/* Titular y Bajada a la Izquierda */}
            <div className="space-y-3 max-w-2xl relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-3xl font-black tracking-tight text-white leading-snug">
                La experiencia del sector adquiere valor cuando se convierte en ejecución.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Aplicamos método y control sobre los procesos que sostienen la relación con tus clientes.
              </p>
            </div>

            {/* CTA en la Derecha: Más pequeño y alineado con el texto de abajo */}
            <div className="shrink-0 relative z-10 w-full sm:w-auto">
              <Link
                to="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-bold text-sm shadow-md hover:shadow-lg transition-all group"
              >
                <span>Hablemos de tu Negocio</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
