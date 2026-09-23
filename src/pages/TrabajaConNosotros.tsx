import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';
import PageBanner from '../components/PageBanner';
import { CAREER_BENEFITS } from '../data/jobs';
import {
  Users, TrendingUp, Home, Award, GraduationCap, Target, ArrowRight
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  TrendingUp, Users, Home, Award, GraduationCap, Target
};

export default function TrabajaConNosotros() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead
        title="Carreras - Talento Humano KONVERXA"
        description="Construye tu Futuro Profesional con Nosotros. Procesos claros, criterios explícitos y espacio para aportar, desafiar y llevar los negocios más lejos."
      />

      {/* Header Banner with Breadcrumbs & Outlined Watermark */}
      <PageBanner
        title="CARRERAS"
        watermark="CARRERAS"
        watermarkFilled={true}
        titleAccentColor="text-black"
        badge="Talento Humano KONVERXA"
        headline="Construye tu Futuro Profesional con Nosotros"
        description="Procesos claros, criterios explícitos y espacio para aportar, desafiar y llevar los negocios más lejos."
        breadcrumbs={[
          { label: 'Inicio', path: '/' },
          { label: 'Carreras', path: '/trabaja-con-nosotros' },
          { label: 'Talento Humano' }
        ]}
        image="/banners/banner-carreras.png"
        imageAlt="Equipo y profesionales KONVERXA en conferencia"
        showDownloadBtn={true}
      />

      {/* Culture & Benefits / Compromisos */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Visual Aid: Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <SectionTitle
            badge="COMPROMISOS"
            title="¿Por qué Trabajar en KONVERXA?"
            subtitle="Desde el primer día, cada persona conoce qué se espera de su función, con qué criterios será evaluada y qué oportunidades tiene para desarrollarse."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAREER_BENEFITS.map((ben, idx) => {
              const IconComp = ICON_MAP[ben.icon] || Users;
              return (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-black/30 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-black border border-slate-300 flex items-center justify-center">
                    <IconComp className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-black text-black">{ben.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{ben.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Real Workplace Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="Colaboradores KONVERXA"
              className="rounded-2xl object-cover h-64 w-full border border-slate-200 shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Supervisión de operaciones"
              className="rounded-2xl object-cover h-64 w-full border border-slate-200 shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
              alt="Capacitación continua"
              className="rounded-2xl object-cover h-64 w-full border border-slate-200 shadow-md"
            />
          </div>

        </div>
      </section>

      {/* Cierre institucional */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-4">
            <p className="w-full text-center text-xl sm:text-2xl lg:text-3xl font-light text-slate-900 tracking-tight mx-auto leading-snug">
              «Las organizaciones sólidas no se improvisan. Se construyen»
            </p>
          </div>

          <div className="pt-2 flex items-center justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-bold text-sm shadow-md transition-all border border-zinc-800"
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
