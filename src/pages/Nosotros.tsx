import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';
import PageBanner from '../components/PageBanner';
import SectionSwitcherBar from '../components/SectionSwitcherBar';
import QuienesSomosView from '../components/QuienesSomosView';
import { COMPANY_INFO } from '../data/company';
import { Building2, ShieldCheck, Target, Heart, Cpu, ArrowRight, Award, CheckCircle2, Globe, Leaf, Users } from 'lucide-react';

const VALUE_ICONS: Record<string, any> = {
  Target, Heart, Cpu, ShieldCheck, CheckCircle2, Building2, Users
};

type NosotrosSectionKey = 'quienes-somos' | 'fundamentos' | 'mision-vision' | 'certificaciones' | 'sostenibilidad' | 'ubicacion';

interface NosotrosBannerConfig {
  title: string;
  watermark: string;
  badge: string;
  headline: string;
  description: string;
  breadcrumbLabel: string;
  image: string;
  imageAlt: string;
}

const FILOSOFIA_DECLARACIONES = [
  {
    fase: 1,
    descriptor: 'QUÉ CREEMOS',
    nombre: 'Convicción',
    texto: 'Las organizaciones sólidas no se improvisan. Se construyen.',
  },
  {
    fase: 2,
    descriptor: 'POR QUÉ EXISTIMOS',
    nombre: 'Convicción',
    texto: 'Ayudar a las organizaciones a construir la solidez necesaria para cerrar la brecha entre lo que prometen y lo que pueden sostener, alineando su promesa, sus personas y su capacidad.',
  },
  {
    fase: 3,
    descriptor: 'QUÉ HACEMOS',
    nombre: 'Misión',
    texto: 'Hacemos que las organizaciones cumplan y sostengan su promesa de negocio. Desarrollamos la capacidad organizacional necesaria para generar resultados consistentes, evolucionar con solidez y mantener su desempeño desde dentro, de manera estructural.',
  },
  {
    fase: 4,
    descriptor: 'QUÉ ASPIRAMOS A DEMOSTRAR',
    nombre: 'Visión',
    texto: 'Convertirnos en la evidencia de que es posible construir organizaciones sólidas, capaces de crecer y afrontar nuevas etapas de complejidad sin perder la coherencia de sus decisiones, la confianza en sus relaciones ni los fundamentos que sostienen su evolución.',
  },
];

const NOSOTROS_SECTIONS: Record<NosotrosSectionKey, NosotrosBannerConfig> = {
  'quienes-somos': {
    title: 'ORIGEN',
    watermark: 'ORIGEN',
    badge: 'Quiénes Somos',
    headline: 'Veinte años de gestión convertidos en una forma de operar.',
    description: 'KONVERXA nace de la experiencia de gestionar negocios, equipos y operaciones, y de traducir ese recorrido en un modelo propio, documentado y gobernado por criterios explícitos.',
    breadcrumbLabel: 'Quiénes Somos',
    image: '/banners/banner-quienes-somos.png',
    imageAlt: 'Equipo y liderazgo KONVERXA'
  },
  'fundamentos': {
    title: 'FUNDAMENTOS',
    watermark: 'FUNDAMENTOS',
    badge: 'PRINCIPIOS DE GESTIÓN',
    headline: 'Fundamentos que orientan cómo decidimos y operamos.',
    description: 'Responsabilidad, evidencia, disciplina, separación de funciones y capacidad organizacional forman el marco que orienta nuestras decisiones y la forma en que gestionamos cada operación.',
    breadcrumbLabel: 'Fundamentos',
    image: '/banners/banner-fundamentos.png',
    imageAlt: 'Fundamentos y principios de gestión KONVERXA'
  },
  'mision-vision': {
    title: 'RUMBO',
    watermark: 'RUMBO',
    badge: 'DIRECCIÓN INSTITUCIONAL',
    headline: 'Nuestra Misión y Visión',
    description: 'La misión define lo que hacemos. La visión, aquello que el trabajo debe llegar a demostrar.',
    breadcrumbLabel: 'Misión y Visión',
    image: '/banners/banner-vision-general.png',
    imageAlt: 'Dirección institucional, misión y visión KONVERXA'
  },
  'certificaciones': {
    title: 'CERTIFICACIONES',
    watermark: 'CALIDAD ISO',
    badge: 'Gobernanza & Cumplimiento',
    headline: 'Estándares de Calidad Internacional & Seguridad',
    description: 'Garantizamos seguridad de la información, protección de datos personales y rigurosidad operacional avalada por certificaciones internacionales.',
    breadcrumbLabel: 'Certificaciones',
    image: '/banners/banner-certificaciones.png',
    imageAlt: 'Certificaciones de calidad KONVERXA'
  },
  'sostenibilidad': {
    title: 'SOSTENIBILIDAD',
    watermark: 'IMPACTO RSE',
    badge: 'Responsabilidad Social',
    headline: 'Compromiso Humano, Social y Ambiental',
    description: 'Generamos empleo digno de calidad, promovemos la inclusión y operamos con prácticas sostenibles que impactan positivamente nuestras comunidades.',
    breadcrumbLabel: 'Sostenibilidad',
    image: '/banners/banner-sostenibilidad.png',
    imageAlt: 'Sostenibilidad y RSE KONVERXA'
  },
  'ubicacion': {
    title: 'PRESENCIA',
    watermark: 'PRESENCIA',
    badge: 'PRESENCIA INTERNACIONAL',
    headline: 'Distintas geografías. Un mismo estándar.',
    description: 'Operamos desde Colombia, Perú y España para atender América Latina, Europa y Estados Unidos con una misma forma de organizar, dirigir y controlar la operación.',
    breadcrumbLabel: 'Ubicación',
    image: '/banners/banner-contacto.png',
    imageAlt: 'Ubicación y presencia internacional KONVERXA'
  }
};

export default function Nosotros() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<NosotrosSectionKey>('quienes-somos');

  useEffect(() => {
    if (hash) {
      const clean = hash.replace('#', '') as NosotrosSectionKey;
      if (clean === 'ubicacion') {
        navigate('/contacto');
        return;
      }
      if (clean === 'certificaciones' || clean === 'sostenibilidad') {
        // Redirigir a quiénes somos si se intenta acceder directamente a las secciones deshabilitadas
        setActiveSection('quienes-somos');
        return;
      }
      if (clean in NOSOTROS_SECTIONS) {
        setActiveSection(clean);
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [hash, navigate]);

  const currentBanner = NOSOTROS_SECTIONS[activeSection] || NOSOTROS_SECTIONS['quienes-somos'];

  const handleSectionSelect = (key: NosotrosSectionKey) => {
    if (key === 'ubicacion') {
      navigate('/contacto');
      return;
    }
    if (key === 'certificaciones' || key === 'sostenibilidad') {
      return;
    }
    setActiveSection(key);
    navigate(`/nosotros#${key}`, { replace: true });
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead
        title={`${currentBanner.title} - Sobre Nosotros | KONVERXA`}
        description={currentBanner.description}
      />

      {/* Header Banner with Dynamic Section Title, Watermark & Downloadable Image */}
      <PageBanner
        title={currentBanner.title}
        watermark={currentBanner.watermark}
        titleAccentColor="text-slate-900"
        badge={currentBanner.badge}
        headline={currentBanner.headline}
        description={currentBanner.description}
        breadcrumbs={
          activeSection === 'quienes-somos'
            ? [
                { label: 'Inicio', path: '/' },
                { label: 'Nosotros', path: '/nosotros' },
                { label: 'Quiénes Somos' }
              ]
            : [
                { label: 'Inicio', path: '/' },
                { label: 'Nosotros', path: '/nosotros' },
                { label: currentBanner.breadcrumbLabel }
              ]
        }
        image={currentBanner.image}
        imageAlt={currentBanner.imageAlt}
        showDownloadBtn={true}
      />

      {/* Quick Section Switcher Bar */}
      <SectionSwitcherBar
        items={(Object.keys(NOSOTROS_SECTIONS) as NosotrosSectionKey[]).map((key) => {
          const shortNosotrosLabels: Record<string, string> = {
            'quienes-somos': 'Origen',
            'fundamentos': 'Fundamentos',
            'mision-vision': 'Rumbo',
            'certificaciones': 'Certificación',
            'sostenibilidad': 'Sostenibilidad',
            'ubicacion': 'Ubicación'
          };
          const isDisabled = key === 'certificaciones' || key === 'sostenibilidad';
          return {
            id: key,
            label: shortNosotrosLabels[key] || NOSOTROS_SECTIONS[key].breadcrumbLabel,
            disabled: isDisabled
          };
        })}
        activeId={activeSection}
        onSelect={(id) => handleSectionSelect(id as NosotrosSectionKey)}
      />

      {/* 01. QUIÉNES SOMOS */}
      {activeSection === 'quienes-somos' && (
        <section id="quienes-somos" className="bg-white relative overflow-hidden">
          <QuienesSomosView />
        </section>
      )}

      {/* 02. FUNDAMENTOS */}
      {activeSection === 'fundamentos' && (
        <section id="fundamentos" className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionTitle
              badge="PRINCIPIOS DE GESTIÓN"
              title="Nuestros Fundamentos"
              subtitle="Son los 5 criterios con los que trabajamos y con los que evaluamos a las organizaciones que acompañamos."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {COMPANY_INFO.values.map((val, idx) => {
                const IconComp = VALUE_ICONS[val.icon] || Target;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-7 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between space-y-5 hover:border-black/40 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 text-black border border-slate-300 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-black text-black tracking-tight">{val.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{val.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Final Fundamentos */}
            <div className="pt-8 text-center">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-bold text-sm shadow-md transition-all border border-zinc-800"
              >
                <span>Hablemos de tu Negocio</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 03. DECLARACIONES INSTITUCIONALES - MISIÓN Y VISIÓN (2 BLOQUES CON FOTO Y CONTENIDO VERTICAL) */}
      {activeSection === 'mision-vision' && (
        <section id="mision-vision" className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
            
            {/* Cabecera centrada y justificada con el título */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-900 border border-slate-200/80 mx-auto shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                DECLARACIONES INSTITUCIONALES
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Nuestra Filosofía
              </h2>
              
              {/* Bloque de Convicción y Propósito justificado y centrado con el título */}
              <div className="max-w-3xl mx-auto pt-4 text-center">
                <div className="space-y-2 pb-8 text-center">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block text-center">
                    QUÉ CREEMOS — Convicción
                  </span>
                  <p className="text-lg sm:text-xl font-normal text-slate-950 leading-snug text-center">
                    «Las organizaciones sólidas no se improvisan. Se construyen»
                  </p>
                </div>

                <div className="space-y-2 pt-8 border-t border-slate-200 text-center">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block text-center">
                    POR QUÉ EXISTIMOS — Propósito
                  </span>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal text-center">
                    Ayudar a las organizaciones a construir la solidez necesaria para cerrar la brecha entre lo que prometen y lo que pueden sostener, alineando su promesa, sus personas y su capacidad.
                  </p>
                </div>
              </div>
            </div>

            {/* 2 BLOQUES CON FOTO DE LONGITUD Y CONTENIDO VERTICAL A LA DERECHA */}
            <div className="space-y-12 max-w-6xl mx-auto">
              
              {/* BLOQUE 1: MISIÓN */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:border-black/30 hover:shadow-md transition-all duration-300"
              >
                {/* Columna Izquierda: Foto con longitud vertical */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[460px] bg-slate-200 overflow-hidden">
                  <img
                    src="/images/mision-portrait.jpg"
                    alt="Propósito y convicción institucional KONVERXA"
                    className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden"></div>
                </div>

                {/* Columna Derecha: Información en vertical */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black text-white">
                      QUÉ HACEMOS
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                      Misión
                    </h3>

                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-2">
                      Hacemos que las organizaciones cumplan y sostengan su promesa de negocio. Desarrollamos la capacidad organizacional necesaria para generar resultados consistentes, evolucionar con solidez y mantener su desempeño desde dentro, de manera estructural.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Enfoque Operacional
                    </span>
                    <p className="text-sm font-semibold text-slate-900">
                      Capacidad organizacional, solidez estructural y consistencia en el tiempo.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* BLOQUE 2: VISIÓN */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:border-black/30 hover:shadow-md transition-all duration-300"
              >
                {/* Columna Izquierda: Foto con longitud vertical */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[460px] bg-slate-200 overflow-hidden">
                  <img
                    src="/images/vision-strategic.jpg"
                    alt="Visión estratégica institucional KONVERXA"
                    className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden"></div>
                </div>

                {/* Columna Derecha: Información en vertical */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black text-white">
                      QUÉ ASPIRAMOS A DEMOSTRAR
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                      Visión
                    </h3>

                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-2">
                      Convertirnos en la evidencia de que es posible construir organizaciones sólidas, capaces de crecer y afrontar nuevas etapas de complejidad sin perder la coherencia de sus decisiones, la confianza en sus relaciones ni los fundamentos que sostienen su evolución.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Aspiración Estratégica
                    </span>
                    <p className="text-sm font-semibold text-slate-900">
                      Crecimiento sostenible, coherencia en las decisiones y confianza indestructible.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* CIERRE: FRASE EN 1 SOLA LÍNEA Y CTA */}
            <div className="border-t border-b border-slate-200 py-16 lg:py-20 text-center space-y-6">
              <p className="w-full text-center text-xl sm:text-2xl lg:text-3xl font-light text-slate-900 tracking-tight max-w-5xl mx-auto whitespace-normal lg:whitespace-nowrap leading-snug">
                «Las organizaciones sólidas no se improvisan. Se construyen»
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-bold text-sm shadow-md transition-all border border-zinc-800"
                >
                  <span>Hablemos de tu Negocio</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 04. CERTIFICACIONES */}
      {activeSection === 'certificaciones' && (
        <section id="certificaciones" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
            <SectionTitle
              badge="Gobernanza & Cumplimiento"
              title="Estándares de Calidad Internacional"
              subtitle="Garantizamos seguridad informática, protección de datos personales y rigurosidad operativa."
              centered
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMPANY_INFO.certifications.map((cert, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
                  <Award className="w-8 h-8 text-black mx-auto mb-2" />
                  <h4 className="text-lg font-black text-black">{cert.name}</h4>
                  <p className="text-xs text-slate-600">{cert.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-8 text-center">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-black/75 hover:bg-black/90 text-white font-bold text-sm border border-zinc-700 shadow-md transition-all"
              >
                <span>Conectar con un Ejecutivo Corporativo</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 05. SOSTENIBILIDAD & RSE */}
      {activeSection === 'sostenibilidad' && (
        <section id="sostenibilidad" className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
            <SectionTitle
              badge="Responsabilidad Social Corporativa"
              title="Sostenibilidad e Impacto Comunitario"
              subtitle="El crecimiento empresarial solo tiene sentido cuando genera bienestar social, inclusión laboral y respeto por el medio ambiente."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-black border border-slate-300 flex items-center justify-center">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-xl font-black text-black">Empleo Digno e Inclusión</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Priorizamos la vinculación laboral de jóvenes en su primer empleo y madres cabeza de hogar, con capacitación continua en la Universidad Konverxa y planes de carrera claros.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-black border border-slate-300 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-xl font-black text-black">Bienestar y Salud Mental</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Programas permanentes de acompañamiento psicosocial, pausas activas, zonas de relajación y balance vida-trabajo para todos nuestros colaboradores.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-black border border-slate-300 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-xl font-black text-black">Operación Cero Papel</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Centros de contacto 100% digitalizados, eficiencia energética y reducción sostenida de huella de carbono en todas nuestras instalaciones operativas.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
