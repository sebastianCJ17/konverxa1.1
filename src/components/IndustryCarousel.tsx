import { useState, useRef, ElementType } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Headphones, TrendingUp, Wrench, Heart, ClipboardList,
  ShieldCheck, ShoppingBag, Truck, Cpu, Zap, Activity,
  ChevronLeft, ChevronRight, ArrowRight
} from 'lucide-react';

export interface MarketItem {
  id: string;
  number: string;
  name: string;
  slug: string;
  desc: string;
  image: string;
  tags: { label: string; icon: ElementType }[];
}

export const MARKETS_DATA: MarketItem[] = [
  {
    id: 'telecomunicaciones',
    number: '01',
    name: 'Telecomunicaciones',
    slug: 'telecomunicaciones',
    desc: 'Operaciones de alto volumen donde la capacidad de respuesta, la continuidad y el control deben sostenerse en cada interacción.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Atención al cliente', icon: Headphones },
      { label: 'Ventas', icon: TrendingUp },
      { label: 'Soporte técnico', icon: Wrench },
      { label: 'Fidelización', icon: Heart },
      { label: 'Back Office', icon: ClipboardList }
    ]
  },
  {
    id: 'banca-finanzas',
    number: '02',
    name: 'Banca y Servicios Financieros',
    slug: 'banca-fintech',
    desc: 'Entornos altamente regulados que exigen rigor operativo, protección de datos y absoluta continuidad en la atención transaccional.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Onboarding digital', icon: Headphones },
      { label: 'Cobranza especializada', icon: TrendingUp },
      { label: 'Soporte transaccional', icon: Wrench },
      { label: 'Prevención de fraude', icon: ShieldCheck },
      { label: 'Back Office crítico', icon: ClipboardList }
    ]
  },
  {
    id: 'retail-ecommerce',
    number: '03',
    name: 'Retail y Comercio Electrónico',
    slug: 'retail-ecommerce',
    desc: 'Atención ágil para picos de alta demanda, garantizando experiencia de compra y resolución inmediata en cada punto de contacto.',
    image: 'https://images.unsplash.com/photo-1556742049-0a67e51a6627?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Atención pre y post-venta', icon: ShoppingBag },
      { label: 'Logística inversa y cambios', icon: Truck },
      { label: 'Soporte omnicanal 24/7', icon: Headphones },
      { label: 'Fidelización', icon: Heart },
      { label: 'Gestión de pedidos', icon: ClipboardList }
    ]
  },
  {
    id: 'tecnologia-digital',
    number: '04',
    name: 'Tecnología y Negocios Digitales',
    slug: 'tecnologia-digital',
    desc: 'Soporte técnico especializado y gestión de usuarios para plataformas SaaS y apps que crecen a ritmo acelerado.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Help desk multinivel', icon: Cpu },
      { label: 'Customer Success', icon: Heart },
      { label: 'Soporte SaaS', icon: Wrench },
      { label: 'Gestión de accesos', icon: Headphones },
      { label: 'Monitorización 24/7', icon: Zap }
    ]
  },
  {
    id: 'seguros',
    number: '05',
    name: 'Seguros e Insurtech',
    slug: 'seguros',
    desc: 'Gestión humana y oportuna en momentos decisivos, acelerando la respuesta ante siniestros y asistencias 24/7.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Atención siniestros 24/7', icon: ShieldCheck },
      { label: 'Despacho de asistencias', icon: Truck },
      { label: 'Renovación de pólizas', icon: TrendingUp },
      { label: 'Soporte a corredores', icon: Headphones },
      { label: 'Back Office asegurador', icon: ClipboardList }
    ]
  },
  {
    id: 'salud',
    number: '06',
    name: 'Salud y Farmacia',
    slug: 'salud',
    desc: 'Coordinación precisa y empática para servicios médicos y asistenciales, asegurando agilidad y rigor profesional.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Agendamiento médico', icon: Activity },
      { label: 'Soporte telemedicina', icon: Headphones },
      { label: 'Mesa de orientación', icon: Wrench },
      { label: 'Confirmación y citas', icon: TrendingUp },
      { label: 'Gestión autorizaciones', icon: ClipboardList }
    ]
  },
  {
    id: 'movilidad-logistica',
    number: '07',
    name: 'Movilidad, Transporte y Logística',
    slug: 'logistica',
    desc: 'Control en tiempo real para cadenas de distribución, trazabilidad de envíos y soporte integral a conductores y usuarios.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Rastreo y trazabilidad', icon: Truck },
      { label: 'Gestión de novedades', icon: Wrench },
      { label: 'Soporte conductores', icon: Headphones },
      { label: 'Atención post-entrega', icon: Heart },
      { label: 'Torre de control 24/7', icon: ClipboardList }
    ]
  },
  {
    id: 'energia-servicios',
    number: '08',
    name: 'Energía y Servicios Públicos',
    slug: 'energia-servicios',
    desc: 'Atención masiva con alta disponibilidad ante contingencias, emergencias técnicas y gestión integral del ciclo comercial.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Línea de emergencias 24/7', icon: Zap },
      { label: 'Atención de PQRs', icon: Headphones },
      { label: 'Gestión de facturación', icon: ClipboardList },
      { label: 'Despacho de cuadrillas', icon: Wrench },
      { label: 'Canales digitales', icon: TrendingUp }
    ]
  }
];

export default function IndustryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = MARKETS_DATA.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full relative select-none py-6">
      
      {/* 3D Perspective Stage Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[520px] sm:h-[560px] md:h-[580px] flex items-center justify-center overflow-hidden [perspective:1400px]"
      >
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center [transform-style:preserve-3d]">
          {MARKETS_DATA.map((item, index) => {
            // Calculate circular offset distance relative to activeIndex
            let offset = index - activeIndex;
            if (offset < -Math.floor(total / 2)) offset += total;
            if (offset > Math.floor(total / 2)) offset -= total;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 3; // Show 3 on right, 3 on left

            if (!isVisible) return null;

            // Compute 3D transformation values
            // Center is 0, offset +1 is to the right, -1 is to the left
            const translateX = offset === 0 ? 0 : offset > 0 ? 160 + (offset - 1) * 95 : -160 + (offset + 1) * 95;
            const rotateY = offset === 0 ? 0 : offset > 0 ? -28 : 28;
            const scale = offset === 0 ? 1 : Math.max(0.72, 1 - Math.abs(offset) * 0.1);
            const zIndex = 30 - Math.abs(offset) * 5;
            const opacity = offset === 0 ? 1 : Math.max(0.25, 0.85 - Math.abs(offset) * 0.22);

            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                initial={false}
                animate={{
                  x: translateX,
                  rotateY: rotateY,
                  scale: scale,
                  zIndex: zIndex,
                  opacity: opacity,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.32, 0.72, 0, 1]
                }}
                className={`absolute w-[290px] sm:w-[340px] md:w-[360px] h-[480px] sm:h-[510px] rounded-3xl overflow-hidden shadow-2xl transition-shadow cursor-pointer ${
                  isActive
                    ? 'ring-1 ring-white/30 shadow-slate-950/40 cursor-default'
                    : 'hover:brightness-110'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center',
                }}
              >
                {/* Photographic Background */}
                <div className="absolute inset-0 w-full h-full bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isActive ? 'filter brightness-90 scale-105' : 'filter brightness-65 grayscale-[35%]'
                    }`}
                    loading="lazy"
                  />
                  {/* Subtle Dark Gradient Overlay for optimal legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30"></div>
                  
                  {/* Additional Glass Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                </div>

                {/* Card Content Layer */}
                <div className="relative z-10 w-full h-full p-6 sm:p-7 flex flex-col justify-between text-white">
                  
                  {/* Top Part: Number & Title */}
                  <div className="space-y-2">
                    <span className="font-mono text-xs font-bold text-slate-300 tracking-wider">
                      {item.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
                      {item.name}
                    </h3>
                  </div>

                  {/* Center Part: Description & Service Bullets (visible on all cards, crisp on active) */}
                  <div className="space-y-4 my-auto py-2">
                    <p className={`text-xs sm:text-[13px] leading-relaxed text-slate-200 line-clamp-3 font-normal transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-80'
                    }`}>
                      {item.desc}
                    </p>

                    {/* Bullet List of Services with Icons */}
                    <div className="space-y-2 pt-2">
                      {item.tags.map((tag, tIdx) => {
                        const IconC = tag.icon;
                        return (
                          <div
                            key={tIdx}
                            className="flex items-center gap-2.5 text-xs text-slate-100/90 font-medium"
                          >
                            <IconC className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                            <span className="truncate">{tag.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-3 border-t border-white/15">
                    <Link
                      to={`/industrias#${item.slug}`}
                      onClick={(e) => {
                        if (!isActive) {
                          e.preventDefault();
                          setActiveIndex(index);
                        }
                      }}
                      className={`inline-flex items-center gap-2 text-xs font-bold transition-all duration-200 group ${
                        isActive
                          ? 'text-white hover:text-amber-300'
                          : 'text-slate-300 pointer-events-none'
                      }`}
                    >
                      <span>Explorar {item.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Controls Row (Pagination Dots on Left, Navigation Arrows on Right) */}
      <div className="max-w-4xl mx-auto px-4 mt-4 flex items-center justify-between">
        
        {/* Pagination Dots / Bars */}
        <div className="flex items-center gap-1.5">
          {MARKETS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === activeIndex
                  ? 'w-7 bg-slate-950'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Ir a sector ${idx + 1}`}
            />
          ))}
        </div>

        {/* Circular Arrow Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-950 hover:text-white text-slate-800 flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md"
            aria-label="Sector anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-950 hover:text-white text-slate-800 flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md"
            aria-label="Sector siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
