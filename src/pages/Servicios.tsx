import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';
import PageBanner from '../components/PageBanner';
import { SERVICES_DATA } from '../data/services';
import { Headphones, TrendingUp, Workflow, FileText, Bot, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Headphones, TrendingUp, ShieldCheck, Workflow, FileText, Bot
};

const SERVICE_BANNER_MAP: Record<string, { title: string; watermark: string; badge: string; image: string; imageAlt: string }> = {
  'atencion-al-cliente': {
    title: 'ATENCIÓN AL CLIENTE',
    watermark: 'ATENCIÓN CX',
    badge: 'Experiencia y Resolución',
    image: '/banners/banner-atencion-cliente.png',
    imageAlt: 'Atención al Cliente KONVERXA'
  },
  'ventas-telemarketing': {
    title: 'VENTAS Y FIDELIZACIÓN',
    watermark: 'VENTAS B2B',
    badge: 'Conversión Comercial',
    image: '/banners/banner-ventas-fidelizacion.png',
    imageAlt: 'Ventas y Fidelización KONVERXA'
  },
  'backoffice-bpo': {
    title: 'BACK OFFICE Y BPO',
    watermark: 'BACK OFFICE',
    badge: 'Gestión de Procesos Críticos',
    image: '/banners/banner-backoffice-bpo.png',
    imageAlt: 'Back Office y BPO KONVERXA'
  },
  'omnicanalidad-bots': {
    title: 'CAPACIDADES INTEGRADAS',
    watermark: 'TECNOLOGÍA IA',
    badge: 'Omnicanalidad & Automatización',
    image: '/banners/banner-capacidades-integradas.png',
    imageAlt: 'Capacidades Integradas KONVERXA'
  },
  'cobranzas': {
    title: 'RRHH Y APOYO PSICOSOCIAL',
    watermark: 'TALENTO HUMANO',
    badge: 'Gestión Humana y Bienestar',
    image: '/banners/banner-gestion-humana.png',
    imageAlt: 'RRHH y Apoyo Psicosocial KONVERXA'
  }
};

export default function Servicios() {
  const { hash } = useLocation();
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);

  useEffect(() => {
    if (hash) {
      const cleanHash = hash.replace('#', '');
      const match = SERVICES_DATA.find((s) => s.id === cleanHash || s.slug === cleanHash);
      if (match) {
        setActiveTab(match.id);
      }
    }
  }, [hash]);

  const activeService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];
  const IconComp = ICON_MAP[activeService.iconName] || Headphones;
  const currentBannerInfo = SERVICE_BANNER_MAP[activeService.id] || {
    title: activeService.title.toUpperCase(),
    watermark: activeService.title.toUpperCase(),
    badge: 'Soluciones Corporativas BPO',
    image: activeService.image || '/banners/banner-atencion-cliente.png',
    imageAlt: activeService.title
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead
        title={`${currentBannerInfo.title} - Servicios BPO | KONVERXA`}
        description={activeService.description}
      />

      {/* Header Banner with Dynamic Service Title, Outlined Watermark & Downloadable Image */}
      <PageBanner
        title={currentBannerInfo.title}
        watermark={currentBannerInfo.watermark}
        titleAccentColor="text-slate-900"
        badge={currentBannerInfo.badge}
        headline={activeService.tagline || activeService.title}
        description={activeService.description}
        breadcrumbs={[
          { label: 'Inicio', path: '/' },
          { label: 'Servicios', path: '/servicios' },
          { label: activeService.title }
        ]}
        image={currentBannerInfo.image}
        imageAlt={currentBannerInfo.imageAlt}
        showDownloadBtn={true}
      />

      {/* Service Selection Tabs */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Subtle Visual Aid: Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {SERVICES_DATA.map((srv) => {
              const TabIcon = ICON_MAP[srv.iconName] || Headphones;
              const isActive = srv.id === activeTab;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveTab(srv.id)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? 'bg-black text-white border-black shadow-md'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-black'
                  }`}
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-800 border border-slate-300'
                    }`}>
                      <TabIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-black text-base leading-snug">{srv.title}</h3>
                  </div>

                  <span className={`text-[11px] font-semibold mt-4 block ${
                    isActive ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    Ver Capacidades →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Service Deep Dive View */}
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-widest shadow-xs">
                  <IconComp className="w-3.5 h-3.5 text-slate-700" /> {activeService.title}
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-black">
                  {activeService.title}
                </h2>

                <p className="text-slate-800 font-semibold text-base">
                  {activeService.tagline}
                </p>

                <p className="text-slate-600 text-base leading-relaxed pt-2">
                  {activeService.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Componentes y Capacidades Clave:
                </h4>
                <div className="space-y-2">
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Beneficios Tangibles de Negocio:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  {activeService.benefits.map((ben, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-100 border border-slate-300 text-slate-900 font-medium">
                      • {ben}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-black/75 hover:bg-black/90 text-white font-bold text-sm border border-zinc-700 shadow-md transition-all"
                >
                  <span>Solicitar Propuesta para {activeService.title}</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

            {/* Right Image & Quality Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-64 sm:h-80">
                <img
                  src={activeService.image}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80';
                  }}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-slate-800 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-slate-700" /> Estándar de Calidad Garantizado
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Operamos con monitoreo de Speech & Text Analytics para auditar el 100% de los contactos, asegurando un estricto apego a guiones, cumplimiento normativo y trato empático.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* All Services Grid Summary */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <SectionTitle
            badge="Escalabilidad Sin Límites"
            title="Diseñado para Crecer con tu Empresa"
            subtitle="Nuestra arquitectura de servicio permite integrar módulos adicionales a medida que evolucionan tus necesidades."
            centered
          />

          <div className="pt-4">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-black/75 hover:bg-black/90 text-white font-bold border border-zinc-700 transition-colors shadow-md text-sm"
            >
              <span>Hablar con un Especialista Operativo</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
