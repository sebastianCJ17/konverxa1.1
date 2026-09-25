import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';
import PageBanner from '../components/PageBanner';
import SectionSwitcherBar from '../components/SectionSwitcherBar';
import { SERVICES_DATA } from '../data/services';
import { Headphones, TrendingUp, Workflow, FileText, Bot, CheckCircle2, ArrowRight, ShieldCheck, Users } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Headphones, TrendingUp, ShieldCheck, Workflow, FileText, Bot, Users
};

interface ServiceBannerInfo {
  title: string;
  watermark: string;
  badge: string;
  headline: string;
  description: string;
  breadcrumbLabel: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
}

const SERVICE_BANNER_MAP: Record<string, ServiceBannerInfo> = {
  'atencion-experiencia-cliente': {
    title: 'ATENCIÓN',
    watermark: 'ATENCIÓN AL CLIENTE',
    badge: 'EXPERIENCIA Y RESOLUCIÓN',
    headline: 'Cada interacción pone a prueba la promesa.',
    description:
      'Gestionamos cada contacto con criterios claros de resolución, continuidad y control para sostener una experiencia consistente en cada punto de interacción.',
    breadcrumbLabel: 'Atención al Cliente',
    image: '/banners/banner-atencion-cliente.png',
    imageAlt: 'Atención al Cliente KONVERXA'
  },
  'ventas-fidelizacion': {
    title: 'VENTAS',
    watermark: 'VENTAS Y FIDELIZACIÓN',
    badge: 'CONVERSIÓN y PERMANENCIA',
    headline: 'Vender inicia una relación. Fidelizar la construye.',
    description:
      'Gestionamos cada oportunidad comercial con criterios claros de conversión, seguimiento y permanencia para generar resultados consistentes y relaciones a largo plazo.',
    breadcrumbLabel: 'Ventas y Fidelización',
    image: '/banners/banner-ventas-fidelizacion.png',
    imageAlt: 'Ventas y Fidelización KONVERXA'
  },
  'cobranzas': {
    title: 'COBRANZAS',
    watermark: 'COBRANZAS',
    badge: 'CARTERA y RECUPERACIÓN',
    headline: 'Recuperar también es conservar al cliente.',
    description:
      'Gestionamos cada caso con criterio para alcanzar acuerdos viables, recuperar saldos y dar continuidad a una relación de confianza con los clientes.',
    breadcrumbLabel: 'Cobranzas',
    image: '/banners/banner-cobranzas.png',
    imageAlt: 'Cobranzas KONVERXA'
  },
  'soporte-tecnico': {
    title: 'SOPORTE TÉCNICO',
    watermark: 'SOPORTE',
    badge: 'DIAGNÓSTICO Y RESOLUCIÓN',
    headline: 'Resolver una incidencia es devolver continuidad a la experiencia.',
    description:
      'Gestionamos cada incidencia con criterio técnico y seguimiento hasta el cierre, para que el problema se resuelva y no vuelva a aparecer.',
    breadcrumbLabel: 'Soporte Técnico',
    image: '/banners/banner-soporte-tecnico.png',
    imageAlt: 'Soporte Técnico KONVERXA'
  },
  'bo-gestion-procesos': {
    title: 'BACK OFFICE',
    watermark: 'BACK OFFICE',
    badge: 'PROCESOS Y CONTROL',
    headline: 'Lo que no se ve también sostiene la promesa',
    description:
      'Procesos administrativos con criterio y trazabilidad, para que cada expediente avance sin esperas, ni reprocesos.',
    breadcrumbLabel: 'Back Office',
    image: '/banners/banner-backoffice-bpo.png',
    imageAlt: 'Back Office KONVERXA'
  },
  'omnicanalidad-bots': {
    title: 'OMNICANALIDAD y BOTS',
    watermark: 'OMNICANALIDAD',
    badge: 'CANALES Y CONTINUIDAD',
    headline: 'Muchos canales. Una sola conversación',
    description:
      'Cada canal conserva el contexto para que la conversación continúe, aunque cambie el medio. Los bots amplían la capacidad de respuesta y la disponibilidad del servicio, manteniendo una atención consistente.',
    breadcrumbLabel: 'Omnicanalidad y BOTS',
    image: '/banners/banner-capacidades-integradas.png',
    imageAlt: 'Omnicanalidad y BOTS KONVERXA'
  },
  'rrhh-apoyo-psicosocial': {
    title: 'TALENTO HUMANO',
    watermark: 'GESTIÓN HUMANA',
    badge: 'RRHH Y APOYO PSICOSOCIAL',
    headline: 'El bienestar del equipo sostiene la calidad operativa.',
    description:
      'Acompañamiento continuo, programas de bienestar y contención psicosocial para consolidar equipos comprometidos y con alta estabilidad en cada servicio.',
    breadcrumbLabel: 'Talento Humano',
    image: '/talento2.jpg',
    imageAlt: 'RRHH y Talento Humano KONVERXA',
    imageClassName: 'object-top object-right'
  }
};

export default function Servicios() {
  const { hash } = useLocation();
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);

  useEffect(() => {
    if (hash) {
      const cleanHash = hash.replace('#', '');
      const aliasMap: Record<string, string> = {
        'atencion-al-cliente': 'atencion-experiencia-cliente',
        'ventas-telemarketing': 'ventas-fidelizacion',
        'backoffice-bpo': 'bo-gestion-procesos'
      };
      const resolvedId = aliasMap[cleanHash] || cleanHash;
      const match = SERVICES_DATA.find((s) => s.id === resolvedId || s.slug === resolvedId || s.id === cleanHash);
      if (match) {
        setActiveTab(match.id);
      }
    }
  }, [hash]);

  const activeService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];
  const IconComp = ICON_MAP[activeService.iconName] || Headphones;
  const currentBannerInfo = SERVICE_BANNER_MAP[activeService.id] || {
    title: activeService.title,
    watermark: activeService.title.toUpperCase(),
    badge: 'Soluciones Corporativas BPO',
    headline: activeService.tagline,
    description: activeService.description,
    breadcrumbLabel: activeService.title,
    image: activeService.image || '/banners/banner-atencion-cliente.png',
    imageAlt: activeService.title
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead
        title={`${currentBannerInfo.title} - Servicios BPO | KONVERXA`}
        description={currentBannerInfo.description}
      />

      {/* Header Banner with Dynamic Service Title, Outlined/Filled Watermark & Downloadable Image */}
      <PageBanner
        title={currentBannerInfo.title}
        watermark={currentBannerInfo.watermark}
        watermarkFilled={true}
        titleAccentColor="text-slate-900"
        badge={currentBannerInfo.badge}
        headline={currentBannerInfo.headline}
        description={currentBannerInfo.description}
        breadcrumbs={[
          { label: 'Inicio', path: '/' },
          { label: 'Servicios', path: '/servicios' },
          { label: currentBannerInfo.breadcrumbLabel }
        ]}
        image={currentBannerInfo.image}
        imageAlt={currentBannerInfo.imageAlt}
        imageClassName={currentBannerInfo.imageClassName}
        showDownloadBtn={true}
      />

      {/* Quick Service Switcher Bar */}
      <SectionSwitcherBar
        gridCols="grid-cols-2 sm:grid-cols-4 lg:grid-cols-7"
        items={[
          { id: 'atencion-experiencia-cliente', label: 'ATENCIÓN' },
          { id: 'ventas-fidelizacion', label: 'VENTAS' },
          { id: 'cobranzas', label: 'COBRANZAS' },
          { id: 'soporte-tecnico', label: 'SOPORTE TÉCNICO' },
          { id: 'bo-gestion-procesos', label: 'BACK OFFICE' },
          { id: 'omnicanalidad-bots', label: 'OMNICANALIDAD' },
          { id: 'rrhh-apoyo-psicosocial', label: 'TALENTO HUMANO' }
        ]}
        activeId={activeTab}
        onSelect={(id) => setActiveTab(id)}
      />

      {/* Active Service Deep Dive View */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
        {/* Subtle Visual Aid: Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
          >
            {/* Left Info Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-widest shadow-2xs">
                  <IconComp className="w-3.5 h-3.5 text-slate-700" />
                  <span>{activeService.title}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
                  {activeService.title}
                </h2>

                <p className="text-slate-800 font-semibold text-base">
                  {activeService.tagline}
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                  {activeService.description}
                </p>
              </div>

              {/* Capacidades de Operación */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  CAPACIDADES DE OPERACIÓN
                </h4>
                <div className="space-y-2.5">
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image & Quality Card - Misma medida exacta que la columna izquierda */}
            <div className="lg:col-span-5 flex flex-col h-full gap-5 sm:gap-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex-1 min-h-[220px] min-h-0">
                <img
                  src={activeService.image}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80';
                  }}
                  alt={activeService.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-2xs shrink-0">
                <div className="flex items-center gap-2 text-slate-800 text-xs font-extrabold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-slate-700 shrink-0" />
                  <span>CALIDAD BASADA EN EVIDENCIA</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {activeService.evidenceQualityText ||
                    'El análisis de interacciones permite identificar qué se resuelve, qué vuelve a generar contacto y dónde se concentra la fricción.'}
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* Cierre inferior compartido para todas las pestañas de servicio */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3.5 max-w-6xl text-center mx-auto">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-800 border border-zinc-300 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                EVOLUCIÓN OPERATIVA
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-black tracking-tight leading-tight text-center text-black whitespace-normal md:whitespace-nowrap">
              Una estructura diseñada para evolucionar con tu negocio.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed max-w-4xl mx-auto text-center text-slate-600">
              Incorpora nuevas capacidades a medida que cambian las necesidades de cada operación.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-normal border border-zinc-800 transition-colors shadow-md text-sm"
            >
              <span>Hablemos de tu Negocio</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
