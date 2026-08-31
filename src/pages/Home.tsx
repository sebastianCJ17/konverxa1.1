import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import VideoHero from '../components/VideoHero';
import StatsCounter from '../components/StatsCounter';
import NarrativeScroll from '../components/NarrativeScroll';
import WhyKonverxa from '../components/WhyKonverxa';
import ServicesCarousel from '../components/ServicesCarousel';
import GlobalNetworkMap from '../components/GlobalNetworkMap';
import IndustryCarousel from '../components/IndustryCarousel';
import CareerTeaser from '../components/CareerTeaser';
import CtaSlider from '../components/CtaSlider';
import SectionTitle from '../components/SectionTitle';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead
        title="BPO, Contact Center & Customer Experience de Clase Mundial"
        description="KONVERXA - Firma especializada en Business Process Outsourcing (BPO), Contact Center, Customer Experience y Transformación Operativa."
      />

      {/* Hero Video Section */}
      <VideoHero />

      {/* Metrics & Statistics Bar */}
      <section className="py-16 bg-slate-50 border-y border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter />
        </div>
      </section>

      {/* SECCIÓN 02: Scroll Narrativo */}
      <NarrativeScroll />

      {/* SECCIÓN 03: ¿POR QUÉ KONVERXA? */}
      <WhyKonverxa />

      {/* SECCIÓN 04: SOLUCIONES / PORTAFOLIO */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        {/* Subtle Visual Aid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <SectionTitle
              badge="Portafolio de Soluciones BPO"
              title="Capacidades Operativas de Alto Desempeño"
              subtitle="Diseñadas para escalar de forma elástica, garantizando respuestas inmediatas y continuidad de negocio."
              centered
            />
          </div>

          {/* 1-Row Dynamic Carousel with Movement and Photography */}
          <ServicesCarousel />

          <div className="mt-12 text-center">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-black/75 hover:bg-black/90 text-white font-bold text-sm shadow-md border border-zinc-700 transition-all"
            >
              <span>Explorar Todo el Portafolio de Servicios</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECCIÓN INTERACTIVA: MAPA DE COBERTURA Y CONECTIVIDAD GLOBAL */}
      <GlobalNetworkMap />

      {/* SECCIÓN 05 · MERCADOS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <SectionTitle
              badge="MERCADOS"
              title="Los negocios cambian. El estándar permanece."
              subtitle="Adaptamos la capacidad, la organización y la ejecución a las exigencias de cada sector, sin perder control ni consistencia."
              centered
            />
          </div>

          <IndustryCarousel />
        </div>
      </section>

      {/* Strategic Careers Section ("Trabaja con Nosotros") */}
      <CareerTeaser />

      {/* Final Call To Action Interactive Slider */}
      <CtaSlider />

    </div>
  );
}
