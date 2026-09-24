import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';
import PageBanner from '../components/PageBanner';
import SectionSwitcherBar from '../components/SectionSwitcherBar';
import { ONEX_PILLARS, INTEGRALX_PHASES, EXCELENCIA_DIMENSIONS, ONEX_DIMENSIONS, CIK_PHASES } from '../data/model';
import { Layers, Target, Users, Cpu, BarChart3, ShieldCheck, CheckCircle2, ArrowRight, Building2, Activity, Scale, ChevronLeft, ChevronRight } from 'lucide-react';

const PILLAR_ICONS: Record<string, any> = {
  Target, Users, Cpu, BarChart3, ShieldCheck
};

const DIMENSION_ICONS: Record<string, any> = {
  Target, Users, Building2, Activity, Scale, ShieldCheck
};

const CIK_ICONS = [Target, Cpu, ArrowRight, Activity, BarChart3, Users, CheckCircle2];

type ModeloSectionKey = 'vision-general' | 'excelencia-integral' | 'onex' | 'cik' | 'integralx';

interface ModeloBannerConfig {
  title: string;
  watermark: string;
  watermarkFilled?: boolean;
  badge: string;
  headline: string;
  description: string;
  breadcrumbLabel: string;
  tabLabel?: string;
  image: string;
  imageAlt: string;
}

const MODELO_SECTIONS: Record<ModeloSectionKey, ModeloBannerConfig> = {
  'vision-general': {
    title: 'MODELO',
    watermark: 'MODELO',
    watermarkFilled: true,
    badge: 'ARQUITECTURA OPERATIVA',
    headline: 'Modelo Operativo KONVERXA · MOK',
    description: 'Un sistema propio para organizar, dirigir y controlar cada operación con un mismo criterio y siempre al servicio de los objetivos del negocio.',
    breadcrumbLabel: 'Visión General',
    image: '/banners/banner-vision-general.png',
    imageAlt: 'Modelo Operativo KONVERXA · MOK'
  },
  'excelencia-integral': {
    title: 'EXCELENCIA INTEGRAL',
    watermark: 'EXCELENCIA',
    watermarkFilled: true,
    badge: 'ESTÁNDAR OPERATIVO',
    headline: 'La excelencia como estándar de operación',
    description: 'Tres dimensiones inseparables —operativa, organizacional y ética— que determinan si una operación está realmente bien gobernada.',
    breadcrumbLabel: 'Excelencia Integral',
    image: '/banners/banner-excelencia-integral.png',
    imageAlt: 'La excelencia como estándar de operación'
  },
  'onex': {
    title: 'ONEX',
    watermark: 'ONEX',
    watermarkFilled: true,
    badge: 'LECTURA y EVIDENCIA',
    headline: 'Sistema de Lectura y Evidencia Operativa',
    description: 'KONVERXA utiliza OneX para observar, interpretar y medir la realidad de cada operación, produciendo la evidencia que permite comprender su desempeño y orientar las decisiones.',
    breadcrumbLabel: 'OneX',
    tabLabel: 'OneX',
    image: '/banners/banner-modelo-onex.png',
    imageAlt: 'Sistema de Lectura y Evidencia Operativa'
  },
  'cik': {
    title: 'CIK',
    watermark: 'CIK',
    watermarkFilled: true,
    badge: 'COMPONENTE MOK',
    headline: 'Ciclo de Intervención KONVERXA',
    description: 'Siete fases que se activan, se articulan y se retroalimentan para responder a las necesidades de cada operación, sostener su desempeño y orientar su evolución.',
    breadcrumbLabel: 'CIK',
    tabLabel: 'CIK',
    image: '/banners/banner-ciclo-integralx.png',
    imageAlt: 'Ciclo de Intervención KONVERXA · CIK'
  },
  'integralx': {
    title: 'INTEGRALX™',
    watermark: 'INTEGRALX',
    watermarkFilled: true,
    badge: 'ACREDITACIÓN OPERATIVA',
    headline: 'Sello de Acreditación · IntegralX™',
    description: 'IntegralX™ es el sello con el que KONVERXA reconoce que una operación funciona bajo su estándar. No acredita intenciones ni esfuerzo: solo lo que la evidencia permite demostrar.',
    breadcrumbLabel: 'IntegralX™',
    tabLabel: 'IntegralX™',
    image: '/banners/banner-integralx.png',
    imageAlt: 'Sello de Acreditación · IntegralX™'
  }
};

export default function Modelo() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<ModeloSectionKey>('vision-general');
  const [selectedPillar, setSelectedPillar] = useState(ONEX_PILLARS[0].id);
  const [selectedDimension, setSelectedDimension] = useState(EXCELENCIA_DIMENSIONS[0].id);
  const [selectedOneXDim, setSelectedOneXDim] = useState(ONEX_DIMENSIONS[0].id);
  const [selectedCikPhase, setSelectedCikPhase] = useState(CIK_PHASES[0].number);

  // Sync active section with URL hash and ensure top banner is visible
  useEffect(() => {
    if (hash) {
      const clean = hash.replace('#', '');
      if (clean in MODELO_SECTIONS) {
        setActiveSection(clean as ModeloSectionKey);
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [hash]);

  const currentBanner = MODELO_SECTIONS[activeSection] || MODELO_SECTIONS['vision-general'];
  const activePillarObj = ONEX_PILLARS.find((p) => p.id === selectedPillar) || ONEX_PILLARS[0];
  const activeDimensionObj = EXCELENCIA_DIMENSIONS.find((d) => d.id === selectedDimension) || EXCELENCIA_DIMENSIONS[0];
  const activeOneXDimObj = ONEX_DIMENSIONS.find((d) => d.id === selectedOneXDim) || ONEX_DIMENSIONS[0];
  const activeCikPhaseObj = CIK_PHASES.find((p) => p.number === selectedCikPhase) || CIK_PHASES[0];

  const currentPillarIndex = ONEX_PILLARS.findIndex((p) => p.id === selectedPillar);
  const handlePrevPillar = () => {
    const prevIndex = (currentPillarIndex - 1 + ONEX_PILLARS.length) % ONEX_PILLARS.length;
    setSelectedPillar(ONEX_PILLARS[prevIndex].id);
  };
  const handleNextPillar = () => {
    const nextIndex = (currentPillarIndex + 1) % ONEX_PILLARS.length;
    setSelectedPillar(ONEX_PILLARS[nextIndex].id);
  };

  const currentDimensionIndex = EXCELENCIA_DIMENSIONS.findIndex((d) => d.id === selectedDimension);
  const handlePrevDimension = () => {
    const prevIndex = (currentDimensionIndex - 1 + EXCELENCIA_DIMENSIONS.length) % EXCELENCIA_DIMENSIONS.length;
    setSelectedDimension(EXCELENCIA_DIMENSIONS[prevIndex].id);
  };
  const handleNextDimension = () => {
    const nextIndex = (currentDimensionIndex + 1) % EXCELENCIA_DIMENSIONS.length;
    setSelectedDimension(EXCELENCIA_DIMENSIONS[nextIndex].id);
  };

  const currentOneXDimIndex = ONEX_DIMENSIONS.findIndex((d) => d.id === selectedOneXDim);
  const handlePrevOneXDim = () => {
    const prevIndex = (currentOneXDimIndex - 1 + ONEX_DIMENSIONS.length) % ONEX_DIMENSIONS.length;
    setSelectedOneXDim(ONEX_DIMENSIONS[prevIndex].id);
  };
  const handleNextOneXDim = () => {
    const nextIndex = (currentOneXDimIndex + 1) % ONEX_DIMENSIONS.length;
    setSelectedOneXDim(ONEX_DIMENSIONS[nextIndex].id);
  };

  const currentCikIndex = CIK_PHASES.findIndex((p) => p.number === selectedCikPhase);
  const handlePrevCikPhase = () => {
    const prevIndex = (currentCikIndex - 1 + CIK_PHASES.length) % CIK_PHASES.length;
    setSelectedCikPhase(CIK_PHASES[prevIndex].number);
  };
  const handleNextCikPhase = () => {
    const nextIndex = (currentCikIndex + 1) % CIK_PHASES.length;
    setSelectedCikPhase(CIK_PHASES[nextIndex].number);
  };

  const handleSectionSelect = (key: ModeloSectionKey) => {
    setActiveSection(key);
    navigate(`/modelo#${key}`, { replace: true });
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead
        title={`${currentBanner.headline} | KONVERXA`}
        description={currentBanner.description}
      />

      {/* Header Banner with Dynamic Section Title, Watermark & Local Image */}
      <PageBanner
        title={currentBanner.title}
        watermark={currentBanner.watermark}
        watermarkFilled={currentBanner.watermarkFilled}
        titleAccentColor="text-slate-900"
        badge={currentBanner.badge}
        headline={currentBanner.headline}
        description={currentBanner.description}
        breadcrumbs={
          activeSection === 'vision-general'
            ? [
                { label: 'Inicio', path: '/' },
                { label: 'Modelo', path: '/modelo' },
                { label: 'Visión General' }
              ]
            : activeSection === 'excelencia-integral'
            ? [
                { label: 'Inicio', path: '/' },
                { label: 'Modelo', path: '/modelo' },
                { label: 'Excelencia Integral' }
              ]
            : activeSection === 'onex'
            ? [
                { label: 'Inicio', path: '/' },
                { label: 'Modelo', path: '/modelo' },
                { label: 'OneX' }
              ]
            : activeSection === 'cik'
            ? [
                { label: 'Inicio', path: '/' },
                { label: 'Modelo', path: '/modelo' },
                { label: 'CIK' }
              ]
            : activeSection === 'integralx'
            ? [
                { label: 'Inicio', path: '/' },
                { label: 'Modelo', path: '/modelo' },
                { label: 'IntegralX™' }
              ]
            : [
                { label: 'Inicio', path: '/' },
                { label: 'Modelo Operativo', path: '/modelo' },
                { label: currentBanner.breadcrumbLabel }
              ]
        }
        image={currentBanner.image}
        imageAlt={currentBanner.imageAlt}
        showDownloadBtn={true}
      />

      {/* Quick Section Switcher Bar */}
      <SectionSwitcherBar
        items={(Object.keys(MODELO_SECTIONS) as ModeloSectionKey[]).map((key) => {
          const shortModelLabels: Record<string, string> = {
            'vision-general': 'Visión',
            'excelencia-integral': 'Excelencia',
            'onex': 'OneX',
            'cik': 'CIK',
            'integralx': 'IntegralX™'
          };
          return {
            id: key,
            label: shortModelLabels[key] || MODELO_SECTIONS[key].tabLabel || MODELO_SECTIONS[key].breadcrumbLabel
          };
        })}
        activeId={activeSection}
        onSelect={(id) => handleSectionSelect(id as ModeloSectionKey)}
      />

      {/* 01. VISIÓN GENERAL */}
      {activeSection === 'vision-general' && (
        <>
          {/* Visión General - Bloque 02: De la operación convencional al MOK */}
          <section id="vision-general" className="py-20 bg-white relative overflow-hidden">
            {/* Subtle Visual Aid: Dot grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
              <div className="text-center mx-auto max-w-5xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-800 border border-zinc-300 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                  VISIÓN GENERAL
                </div>
                <div className="space-y-1.5 max-w-5xl mx-auto text-center">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-slate-500 block text-center">
                    MODELO OPERATIVO
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight leading-tight text-black text-center whitespace-normal lg:whitespace-nowrap">
                    De la operación convencional al Modelo Operativo KONVERXA
                  </h2>
                </div>
                <p className="text-base sm:text-lg leading-relaxed max-w-4xl mx-auto text-center text-slate-600">
                  En la externalización, la decisión suele tomarse por tamaño y precio. El Modelo Operativo KONVERXA introduce otro criterio: cómo se organiza, se dirige y se controla la operación.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Bloque Izquierda */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                    <p>
                      Cada operación se gobierna bajo un mismo modelo: un estándar que define qué significa operar con excelencia, un sistema que lee la realidad y produce evidencia, un ciclo que ordena la intervención y una acreditación que reconoce, sobre esa evidencia, el cumplimiento del estándar.
                    </p>
                  </div>

                  {/* 01 Solo Cajón con la misma medida del bloque izquierdo */}
                  <div className="w-full p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <p className="text-slate-800 text-xs sm:text-sm font-semibold leading-relaxed">
                      El resultado es una operación gobernada por criterio, intervenida con base en evidencia y capaz de demostrar que cumple el estándar.
                    </p>
                  </div>
                </div>

                {/* Bloque Derecha */}
                <div className="lg:col-span-6">
                  <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg relative space-y-6">
                    <h3 className="text-xl font-black text-black border-b border-slate-200 pb-4">
                      Componentes del MOK
                    </h3>

                    <ul className="space-y-5 text-sm text-slate-700">
                      <li className="flex items-start gap-3.5">
                        <CheckCircle2 className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <strong className="text-black block font-bold text-sm sm:text-base">
                            Excelencia Integral
                          </strong>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            Define qué significa excelencia en tres dimensiones inseparables: Operativa, Organizacional y Ética.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3.5">
                        <CheckCircle2 className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <strong className="text-black block font-bold text-sm sm:text-base">
                            OneX
                          </strong>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            El sistema que observa, mide y produce la evidencia. No interviene.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3.5">
                        <CheckCircle2 className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <strong className="text-black block font-bold text-sm sm:text-base">
                            Ciclo de Intervención KONVERXA · CIK
                          </strong>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            Convierte la evidencia en intervención: diagnosticar, diseñar, implementar, operar, medir, aprender y mejorar, de forma continua.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3.5">
                        <CheckCircle2 className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <strong className="text-black block font-bold text-sm sm:text-base">
                            IntegralX™
                          </strong>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            Acredita que la operación funciona bajo un estándar, con datos, hechos y resultados que lo demuestran.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visión General - Bloque 03: Capacidades de Ejecución */}
          <section id="capacidades-ejecucion" className="py-20 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionTitle
                badge="EJECUCIÓN OPERATIVA"
                title="Capacidades de Ejecución"
                subtitle="Cinco capacidades transversales que permiten desplegar el modelo y sostener su ejecución."
                centered
              />

              {/* Interactive Tabs */}
              <div className="mt-12 flex flex-wrap justify-center gap-2.5 sm:gap-3">
                {ONEX_PILLARS.map((p) => {
                  const IconComp = PILLAR_ICONS[p.icon] || Target;
                  const isActive = p.id === selectedPillar;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPillar(p.id)}
                      className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-normal uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 border ${
                        isActive
                          ? 'bg-black text-white border-black shadow-md'
                          : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <IconComp className="w-4 h-4 shrink-0" />
                      <span className="whitespace-nowrap uppercase">{p.tabLabel || p.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Detail View (Slide con flechas de navegación externas) */}
              <div className="relative mt-10 max-w-6xl mx-auto">
                {/* Flecha Anterior (Por fuera del slide) */}
                <button
                  type="button"
                  onClick={handlePrevPillar}
                  aria-label="Capacidad anterior"
                  title="Capacidad anterior"
                  className="absolute -left-3 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white border border-slate-300 shadow-xl text-slate-800 hover:bg-black hover:text-white hover:border-black flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 group"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>

                {/* Flecha Siguiente (Por fuera del slide) */}
                <button
                  type="button"
                  onClick={handleNextPillar}
                  aria-label="Capacidad siguiente"
                  title="Capacidad siguiente"
                  className="absolute -right-3 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white border border-slate-300 shadow-xl text-slate-800 hover:bg-black hover:text-white hover:border-black flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 group"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <motion.div
                  key={activePillarObj.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-7 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-xs font-normal uppercase tracking-widest text-slate-800 block">
                      {activePillarObj.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-normal uppercase tracking-tight text-black">{activePillarObj.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{activePillarObj.description}</p>

                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-normal uppercase text-slate-400 tracking-wider block">
                        Atributos Clave:
                      </span>
                      <div className="flex flex-col gap-2.5 w-full">
                        {activePillarObj.keyPoints.map((point, idx) => (
                          <div
                            key={idx}
                            className="w-full flex items-center gap-3.5 px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-normal"
                          >
                            <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mx-auto shadow-md">
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-normal uppercase text-black">
                      {activePillarObj.impactTitle || 'Impacto de Negocio'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                      {activePillarObj.impactDescription}
                    </p>
                  </div>
                </motion.div>

                {/* Controles de paginación e indicador */}
                <div className="flex items-center justify-between mt-4 px-2">
                  <span className="text-xs font-normal tracking-wider text-slate-500 uppercase">
                    Capacidad {currentPillarIndex + 1} de {ONEX_PILLARS.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrevPillar}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-normal uppercase text-slate-700 shadow-2xs transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Anterior</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNextPillar}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-normal uppercase text-slate-700 shadow-2xs transition-colors"
                    >
                      <span>Siguiente</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA Final Bloque 01: Visión General */}
              <div className="mt-12 text-center">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-normal text-sm shadow-md transition-all border border-zinc-800"
                >
                  <span>Hablemos de tu Negocio</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      {/* 02. EXCELENCIA INTEGRAL */}
      {activeSection === 'excelencia-integral' && (
        <section id="excelencia-integral" className="py-20 bg-white relative overflow-hidden">
          {/* Subtle Visual Aid */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
            <div className="text-center mx-auto max-w-5xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-800 border border-zinc-300 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                LAS TRES DIMENSIONES
              </div>
              <div className="space-y-1.5 max-w-5xl mx-auto text-center">
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-slate-500 block text-center">
                  EXCELENCIA INTEGRAL
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[40px] font-black tracking-tight leading-tight text-black text-center whitespace-normal md:whitespace-nowrap">
                  Tres dimensiones, un solo estándar
                </h2>
              </div>
              <p className="text-base sm:text-lg leading-relaxed max-w-4xl mx-auto text-center text-slate-600 whitespace-normal md:whitespace-nowrap">
                Cada dimensión establece una exigencia distinta y complementaria. El estándar solo se cumple cuando las tres concurren.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="mt-12 flex flex-wrap justify-center gap-2.5 sm:gap-3">
              {EXCELENCIA_DIMENSIONS.map((dim) => {
                const IconComp = DIMENSION_ICONS[dim.icon] || ShieldCheck;
                const isActive = dim.id === selectedDimension;
                return (
                  <button
                    key={dim.id}
                    onClick={() => setSelectedDimension(dim.id)}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-normal uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 border ${
                      isActive
                        ? 'bg-black text-white border-black shadow-md'
                        : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <IconComp className="w-4 h-4 shrink-0" />
                    <span className="whitespace-nowrap uppercase">{dim.tabLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Detail View (Slide con flechas de navegación externas) */}
            <div className="relative mt-10 max-w-6xl mx-auto">
              {/* Flecha Anterior (Por fuera del slide) */}
              <button
                type="button"
                onClick={handlePrevDimension}
                aria-label="Dimensión anterior"
                title="Dimensión anterior"
                className="absolute -left-3 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white border border-slate-300 shadow-xl text-slate-800 hover:bg-black hover:text-white hover:border-black flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 group"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Flecha Siguiente (Por fuera del slide) */}
              <button
                type="button"
                onClick={handleNextDimension}
                aria-label="Dimensión siguiente"
                title="Dimensión siguiente"
                className="absolute -right-3 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white border border-slate-300 shadow-xl text-slate-800 hover:bg-black hover:text-white hover:border-black flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 group"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <motion.div
                key={activeDimensionObj.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-7 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-normal uppercase tracking-widest text-slate-800 block">
                    {activeDimensionObj.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-normal uppercase tracking-tight text-black">{activeDimensionObj.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{activeDimensionObj.description}</p>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-normal uppercase text-slate-400 tracking-wider block">
                      Atributos Clave:
                    </span>
                    <div className="flex flex-col gap-2.5 w-full">
                      {activeDimensionObj.keyPoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="w-full flex items-center gap-3.5 px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-normal"
                        >
                          <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                          <span className="leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mx-auto shadow-md">
                    {(() => {
                      const DimIcon = DIMENSION_ICONS[activeDimensionObj.icon] || Layers;
                      return <DimIcon className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <h4 className="text-lg sm:text-xl font-normal uppercase text-black">
                    {activeDimensionObj.impactTitle || 'Impacto de Negocio'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                    {activeDimensionObj.impactDescription}
                  </p>
                </div>
              </motion.div>

              {/* Controles de paginación e indicador */}
              <div className="flex items-center justify-between mt-4 px-2">
                <span className="text-xs font-normal tracking-wider text-slate-500 uppercase">
                  Dimensión {currentDimensionIndex + 1} de {EXCELENCIA_DIMENSIONS.length}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevDimension}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-normal uppercase text-slate-700 shadow-2xs transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Anterior</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextDimension}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-normal uppercase text-slate-700 shadow-2xs transition-colors"
                  >
                    <span>Siguiente</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Final Bloque 02: Excelencia */}
            <div className="mt-12 text-center">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-normal text-sm shadow-md transition-all border border-zinc-800"
              >
                <span>Hablemos de tu Negocio</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 03. ONEX - LECTURA Y EVIDENCIA */}
      {activeSection === 'onex' && (
        <section id="onex" className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center mx-auto max-w-5xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-800 border border-zinc-300 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                LECTURA DE TRES DIMENSIONES
              </div>

              <div className="space-y-1.5 max-w-5xl mx-auto text-center">
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-slate-500 block text-center">
                  ONEX
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[40px] font-black tracking-tight leading-tight text-black text-center whitespace-normal md:whitespace-nowrap">
                  Tres dimensiones, una sola realidad operativa
                </h2>
              </div>

              <p className="text-base sm:text-lg leading-relaxed max-w-4xl mx-auto text-center text-slate-600 whitespace-normal md:whitespace-nowrap">
                Cada dimensión responde una pregunta distinta y necesaria. Ninguna describe por sí sola la realidad de una operación.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="mt-12 flex flex-wrap justify-center gap-2.5 sm:gap-3">
              {ONEX_DIMENSIONS.map((d) => {
                const IconComp = DIMENSION_ICONS[d.icon] || Target;
                const isActive = d.id === selectedOneXDim;
                return (
                  <button
                    key={d.id}
                    onClick={() => setSelectedOneXDim(d.id)}
                    className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-normal uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 border ${
                      isActive
                        ? 'bg-black text-white border-black shadow-md'
                        : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <IconComp className="w-4 h-4 shrink-0" />
                    <span className="whitespace-nowrap uppercase">{d.tabLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Detail View (Slide con flechas de navegación externas) */}
            <div className="relative mt-10 max-w-6xl mx-auto">
              {/* Flecha Anterior (Por扩大 del slide) */}
              <button
                type="button"
                onClick={handlePrevOneXDim}
                aria-label="Dimensión anterior"
                title="Dimensión anterior"
                className="absolute -left-3 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white border border-slate-300 shadow-xl text-slate-800 hover:bg-black hover:text-white hover:border-black flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 group"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Flecha Siguiente (Por fuera del slide) */}
              <button
                type="button"
                onClick={handleNextOneXDim}
                aria-label="Dimensión siguiente"
                title="Dimensión siguiente"
                className="absolute -right-3 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white border border-slate-300 shadow-xl text-slate-800 hover:bg-black hover:text-white hover:border-black flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 group"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <motion.div
                key={activeOneXDimObj.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-7 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-normal uppercase tracking-widest text-slate-800 block">
                    {activeOneXDimObj.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-normal uppercase tracking-tight text-black">{activeOneXDimObj.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{activeOneXDimObj.description}</p>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-normal uppercase text-slate-400 tracking-wider block">
                      Atributos Clave:
                    </span>
                    <div className="flex flex-col gap-2.5 w-full">
                      {activeOneXDimObj.keyPoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="w-full flex items-center gap-3.5 px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-normal"
                        >
                          <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                          <span className="leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mx-auto shadow-md">
                    {(() => {
                      const DimIcon = DIMENSION_ICONS[activeOneXDimObj.icon] || Target;
                      return <DimIcon className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <h4 className="text-lg sm:text-xl font-normal uppercase text-black">
                    {activeOneXDimObj.impactTitle || 'Impacto de Negocio'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                    {activeOneXDimObj.impactDescription}
                  </p>
                </div>
              </motion.div>

              {/* Controles de paginación e indicador */}
              <div className="flex items-center justify-between mt-4 px-2">
                <span className="text-xs font-normal tracking-wider text-slate-500 uppercase">
                  Dimensión {currentOneXDimIndex + 1} de {ONEX_DIMENSIONS.length}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevOneXDim}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-normal uppercase text-slate-700 shadow-2xs transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Anterior</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextOneXDim}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-normal uppercase text-slate-700 shadow-2xs transition-colors"
                  >
                    <span>Siguiente</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Final Bloque 03: OneX */}
            <div className="mt-12 text-center">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-normal text-sm shadow-md transition-all border border-zinc-800"
              >
                <span>Hablemos de tu Negocio</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 04. CIK - CICLO DE INTERVENCIÓN */}
      {activeSection === 'cik' && (
        <section id="cik" className="py-20 bg-slate-50/70 border-y border-slate-200 relative overflow-hidden">
          {/* Subtle Visual Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
            <div className="text-center mx-auto max-w-5xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-800 border border-zinc-300 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                INTERVENCIÓN OPERATIVA
              </div>
              <div className="space-y-1.5 max-w-5xl mx-auto text-center">
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-slate-500 block text-center">
                  CIK
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[40px] font-black tracking-tight leading-tight text-black text-center whitespace-normal md:whitespace-nowrap">
                  Fases de Intervención Continua
                </h2>
              </div>
              <p className="text-base sm:text-lg leading-relaxed max-w-4xl mx-auto text-center text-slate-600 whitespace-normal md:whitespace-nowrap">
                Siete funciones distintas dentro de una misma lógica de intervención.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="mt-12 flex flex-wrap justify-center gap-2.5 sm:gap-3">
              {CIK_PHASES.map((phase, idx) => {
                const IconComp = CIK_ICONS[idx % CIK_ICONS.length] || Target;
                const isActive = phase.number === selectedCikPhase;
                return (
                  <button
                    key={phase.number}
                    onClick={() => setSelectedCikPhase(phase.number)}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-normal uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 border ${
                      isActive
                        ? 'bg-black text-white border-black shadow-md'
                        : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <IconComp className="w-4 h-4 shrink-0" />
                    <span className="whitespace-nowrap uppercase">{phase.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Detail View (Slide con flechas de navegación externas) */}
            <div className="relative mt-10 max-w-6xl mx-auto">
              {/* Flecha Anterior (Por fuera del slide) */}
              <button
                type="button"
                onClick={handlePrevCikPhase}
                aria-label="Fase anterior"
                title="Fase anterior"
                className="absolute -left-3 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white border border-slate-300 shadow-xl text-slate-800 hover:bg-black hover:text-white hover:border-black flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 group"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Flecha Siguiente (Por fuera del slide) */}
              <button
                type="button"
                onClick={handleNextCikPhase}
                aria-label="Fase siguiente"
                title="Fase siguiente"
                className="absolute -right-3 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white border border-slate-300 shadow-xl text-slate-800 hover:bg-black hover:text-white hover:border-black flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 group"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <motion.div
                key={activeCikPhaseObj.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-7 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-normal uppercase tracking-widest text-slate-800 block">
                    FASE 0{activeCikPhaseObj.number} · {activeCikPhaseObj.descriptor}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-normal uppercase tracking-tight text-black">
                    {activeCikPhaseObj.name}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {activeCikPhaseObj.text}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-normal uppercase text-slate-400 tracking-wider block">
                      Criterio de Intervención:
                    </span>
                    <div className="flex flex-col gap-2.5 w-full">
                      <div className="w-full flex items-center gap-3.5 px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-normal">
                        <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                        <span>Propósito: {activeCikPhaseObj.descriptor}</span>
                      </div>
                      <div className="w-full flex items-center gap-3.5 px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-normal">
                        <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                        <span>Intervención continua y trazable bajo el estándar KONVERXA</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mx-auto shadow-md">
                    {(() => {
                      const PhaseIcon = CIK_ICONS[currentCikIndex % CIK_ICONS.length] || Target;
                      return <PhaseIcon className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <h4 className="text-lg sm:text-xl font-normal uppercase text-black">
                    {activeCikPhaseObj.descriptor}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Fase 0{activeCikPhaseObj.number} del ciclo continuo para diagnosticar, actuar y sostener la operación.
                  </p>
                </div>
              </motion.div>

              {/* Controles de paginación e indicador */}
              <div className="flex items-center justify-between mt-4 px-2">
                <span className="text-xs font-normal tracking-wider text-slate-500 uppercase">
                  Fase {currentCikIndex + 1} de {CIK_PHASES.length}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevCikPhase}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-normal uppercase text-slate-700 shadow-2xs transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Anterior</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextCikPhase}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-normal uppercase text-slate-700 shadow-2xs transition-colors"
                  >
                    <span>Siguiente</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Final Bloque 04: CIK */}
            <div className="pt-8 text-center">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-normal text-sm shadow-md transition-all border border-zinc-800"
              >
                <span>Hablemos de tu Negocio</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 05. CICLO INTEGRALX */}
      {activeSection === 'integralx' && (
        <section id="integralx" className="py-20 bg-white relative overflow-hidden">
          {/* Subtle Visual Aid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          {/* Bloque 02: Sello + Pastilla + Palabra Principal + Titular + Bajada */}
          <div className="text-center mx-auto max-w-5xl space-y-4">
            {/* LOGO SELLO sobre la pastilla */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <img
                src="/integralxlogo.png"
                alt="Sello IntegralX™ Acreditación Operativa"
                className="h-44 sm:h-52 md:h-60 w-auto object-contain drop-shadow-md"
              />
            </div>

            {/* PASTILLA */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-800 border border-zinc-300 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              ACREDITACIÓN OPERATIVA
            </div>

            {/* PALABRA PRINCIPAL NEGRA + TITULAR GRANDE */}
            <div className="space-y-1.5 max-w-5xl mx-auto text-center">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-slate-500 block text-center">
                INTEGRALX™
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[40px] font-black tracking-tight leading-tight text-black text-center whitespace-normal md:whitespace-nowrap">
                Construido para sostener tu promesa de negocio
              </h2>
            </div>

            {/* BAJADA */}
            <p className="text-base sm:text-lg leading-relaxed max-w-4xl mx-auto text-center text-slate-600 whitespace-normal md:whitespace-nowrap">
              Operamos con un estándar propio y con un sistema que demuestra que se cumple.
            </p>
          </div>

          <div className="space-y-8">
            {INTEGRALX_PHASES.map((phase, idx) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50/90 backdrop-blur-xs border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-slate-300 transition-all shadow-xs"
              >
                {/* IZQUIERDA: Subtítulo de Fase + Título (sin número) + Línea separatoria */}
                <div className="lg:col-span-4 lg:border-r border-slate-200/90 lg:pr-8 pb-6 lg:pb-0 border-b lg:border-b-0">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 block">
                    {phase.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-black mt-2 leading-tight tracking-tight">
                    {phase.name}
                  </h3>
                </div>

                {/* DERECHA: Arriba (Pregunta en formato de Entregables + Bajada) y Abajo (LO QUE OBTIENES : + 01 Pastilla) */}
                <div className="lg:col-span-8 space-y-6">
                  {/* DERECHA - ARRIBA */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">
                      {phase.question}
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                      {phase.description}
                    </p>
                  </div>

                  {/* DERECHA - ABAJO */}
                  <div className="pt-5 border-t border-slate-200/80 space-y-3">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      LO QUE OBTIENES :
                    </h5>
                    <div>
                      {phase.deliverables.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 py-3 px-4 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm shadow-2xs hover:border-slate-300 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0" />
                          <span className="font-normal text-slate-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Final Bloque 05: IntegralX */}
          <div className="pt-8 text-center">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-normal text-sm shadow-md transition-all border border-zinc-800"
            >
              <span>Hablemos de tu Negocio</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

        </div>
      </section>
      )}

    </div>
  );
}
