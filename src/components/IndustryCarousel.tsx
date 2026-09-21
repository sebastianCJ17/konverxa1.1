import { useState, useEffect, useRef, ElementType } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Headphones, TrendingUp, Wrench, Heart, ClipboardList,
  ShieldCheck, ShoppingBag, Truck, Cpu, Zap, Activity,
  ChevronLeft, ChevronRight, ArrowRight, Landmark, ChevronDown
} from 'lucide-react';

export interface MarketItem {
  id: string;
  number: string;
  name: string;
  slug: string;
  desc: string;
  image: string;
  fallbackImage: string;
  tags: { label: string; icon: ElementType }[];
}

export const MARKETS_DATA: MarketItem[] = [
  {
    id: 'telecomunicaciones',
    number: '01',
    name: 'Telecomunicaciones',
    slug: 'telecomunicaciones',
    desc: 'Operaciones de alto volumen donde la capacidad de respuesta, la continuidad y el control deben sostenerse en cada interacción.',
    image: '/telecomunicaciones.png',
    fallbackImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Atención al cliente', icon: Headphones },
      { label: 'Ventas', icon: TrendingUp },
      { label: 'Soporte técnico', icon: Wrench },
      { label: 'Fidelización', icon: Heart },
      { label: 'Back Office', icon: ClipboardList }
    ]
  },
  {
    id: 'banca-fintech',
    number: '02',
    name: 'Banca y Servicios Financieros',
    slug: 'banca-fintech',
    desc: 'Operaciones de atención, ventas, cobranzas y back office para entidades financieras, con precisión, trazabilidad y control.',
    image: '/banca.png',
    fallbackImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Movimiento y Reclamaciones', icon: ShieldCheck },
      { label: 'Venta y Vinculación', icon: TrendingUp },
      { label: 'Cobranzas y Cartera', icon: Headphones },
      { label: 'Expedientes y BO', icon: ClipboardList }
    ]
  },
  {
    id: 'retail-ecommerce',
    number: '03',
    name: 'Retail y Comercio Electrónico',
    slug: 'retail-ecommerce',
    desc: 'Operaciones de atención, ventas, fidelización y back office para retail y comercio electrónico, conectando cada interacción.',
    image: '/retail.png',
    fallbackImage: 'https://images.unsplash.com/photo-1556742049-0a67e51a6627?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Pedidos y Entregas', icon: Truck },
      { label: 'Ventas y Fidelización', icon: TrendingUp },
      { label: 'Cambios y Devoluciones', icon: ShoppingBag },
      { label: 'Inventario y BO', icon: ClipboardList }
    ]
  },
  {
    id: 'tecnologia-digital',
    number: '04',
    name: 'Tecnología y Negocios Digitales',
    slug: 'tecnologia-digital',
    desc: 'Operaciones de atención, ventas, soporte y back office para tecnología y negocios digitales, con agilidad y control.',
    image: '/tecnologia.png',
    fallbackImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Soporte de Producto', icon: Cpu },
      { label: 'Incorporación de Usuarios', icon: Heart },
      { label: 'Ventas y Renovaciones', icon: TrendingUp },
      { label: 'Suscripciones y BO', icon: ClipboardList }
    ]
  },
  {
    id: 'seguros',
    number: '05',
    name: 'Seguros',
    slug: 'seguros',
    desc: 'Operaciones de atención, ventas, asistencia y back office para seguros, con precisión, continuidad y trazabilidad.',
    image: '/seguros.png',
    fallbackImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Consultas de Póliza', icon: ShieldCheck },
      { label: 'Ventas y Renovaciones', icon: TrendingUp },
      { label: 'Siniestros y Asistencias', icon: Truck },
      { label: 'Expedientes y BO', icon: ClipboardList }
    ]
  },
  {
    id: 'salud',
    number: '06',
    name: 'Salud y Farmacia',
    slug: 'salud',
    desc: 'Operaciones de atención, soporte y back office para organizaciones de salud y farmacia, con precisión y trazabilidad.',
    image: '/salud.png',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Citas y Autorizaciones', icon: Activity },
      { label: 'Orientación al Paciente', icon: Headphones },
      { label: 'Dispensación y Solicitudes', icon: TrendingUp },
      { label: 'Documentación Sanitaria y BO', icon: ClipboardList }
    ]
  },
  {
    id: 'movilidad-transporte',
    number: '07',
    name: 'Movilidad y Transporte',
    slug: 'movilidad-transporte',
    desc: 'Operaciones de atención, soporte, seguimiento y back office para movilidad y transporte, con continuidad y respuesta.',
    image: '/movilidad.png',
    fallbackImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Atención en Ruta', icon: Truck },
      { label: 'Incidencias y Reclamaciones', icon: Wrench },
      { label: 'Reservas y Modificaciones', icon: Headphones },
      { label: 'Liquidaciones y BO', icon: ClipboardList }
    ]
  },
  {
    id: 'energia-servicios',
    number: '08',
    name: 'Energía y Servicios Públicos',
    slug: 'energia-servicios',
    desc: 'Operaciones de atención, soporte, cobranzas y back office para energía y servicios públicos, con continuidad.',
    image: '/energia.png',
    fallbackImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80',
    tags: [
      { label: 'Facturación y Reclamaciones', icon: ClipboardList },
      { label: 'Averías y Suspensiones', icon: Zap },
      { label: 'Altas y Reconexiones', icon: Wrench },
      { label: 'Lecturas y BO', icon: Headphones }
    ]
  }
];

export interface IndustryCarouselProps {
  activeSlug?: string;
  onSelectIndustry?: (slug: string) => void;
  isInternalPage?: boolean;
}

export default function IndustryCarousel({
  activeSlug,
  onSelectIndustry,
  isInternalPage = false,
}: IndustryCarouselProps) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const total = MARKETS_DATA.length;

  // Synchronize activeIndex if activeSlug changes externally
  useEffect(() => {
    if (activeSlug) {
      const idx = MARKETS_DATA.findIndex(
        (m) =>
          m.slug === activeSlug ||
          m.id === activeSlug ||
          (activeSlug === 'movilidad' && m.slug === 'movilidad-transporte') ||
          (activeSlug === 'logistica' && m.slug === 'movilidad-transporte') ||
          (activeSlug === 'energia' && m.slug === 'energia-servicios') ||
          (activeSlug === 'tecnologia' && m.slug === 'tecnologia-digital') ||
          (activeSlug === 'banca' && m.slug === 'banca-fintech') ||
          (activeSlug === 'banca-servicios-financieros' && m.slug === 'banca-fintech')
      );
      if (idx !== -1 && idx !== activeIndex) {
        setActiveIndex(idx);
      }
    }
  }, [activeSlug]);

  const handlePrev = () => {
    const nextIdx = activeIndex === 0 ? total - 1 : activeIndex - 1;
    setActiveIndex(nextIdx);
    onSelectIndustry?.(MARKETS_DATA[nextIdx].slug);
  };

  const handleNext = () => {
    const nextIdx = activeIndex === total - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIdx);
    onSelectIndustry?.(MARKETS_DATA[nextIdx].slug);
  };

  const handleDotClick = (idx: number) => {
    setActiveIndex(idx);
    onSelectIndustry?.(MARKETS_DATA[idx].slug);
  };

  const handleCardClick = (index: number, item: MarketItem) => {
    if (index === activeIndex) {
      if (isInternalPage) {
        // Smooth scroll to detailed section below
        const el = document.getElementById('detalle-industria');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        navigate(`/industrias#${item.slug}`);
      }
    } else {
      setActiveIndex(index);
      onSelectIndustry?.(item.slug);
    }
  };

  return (
    <div className="w-full relative select-none pt-2 pb-6">
      
      {/* 3D Perspective Stage Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[530px] sm:h-[570px] md:h-[600px] flex items-center justify-center overflow-hidden [perspective:1400px]"
      >
        <div className="relative w-full max-w-[1400px] h-full flex items-center justify-center [transform-style:preserve-3d]">
          {MARKETS_DATA.map((item, index) => {
            // Calculate circular offset distance relative to activeIndex
            let offset = index - activeIndex;
            if (offset < -Math.floor(total / 2)) offset += total;
            if (offset > Math.floor(total / 2)) offset -= total;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 3; // Show up to 3 on right, 3 on left

            if (!isVisible) return null;

            // Compute 3D transformation values with wider lateral spacing so center card remains clean & unobstructed
            let translateX = 0;
            if (offset > 0) {
              translateX = 340 + (offset - 1) * 260;
            } else if (offset < 0) {
              translateX = -340 + (offset + 1) * 260;
            }

            const rotateY = offset === 0 ? 0 : offset > 0 ? -22 : 22;
            const scale = offset === 0 ? 1 : Math.max(0.76, 0.90 - Math.abs(offset) * 0.07);
            const zIndex = offset === 0 ? 40 : 30 - Math.abs(offset) * 5;
            const opacity = offset === 0 ? 1 : Math.max(0.35, 0.82 - Math.abs(offset) * 0.22);

            return (
              <motion.div
                key={item.id}
                onClick={() => handleCardClick(index, item)}
                initial={false}
                animate={{
                  x: translateX,
                  rotateY: rotateY,
                  scale: scale,
                  zIndex: zIndex,
                  opacity: opacity,
                }}
                transition={{
                  duration: 0.26,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`absolute w-[300px] sm:w-[370px] md:w-[410px] lg:w-[440px] h-[490px] sm:h-[520px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer ${
                  isActive
                    ? 'ring-2 ring-white/50 shadow-2xl shadow-slate-950/70'
                    : 'hover:brightness-125'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center',
                }}
              >
                {/* Photographic Background */}
                <div className="absolute inset-0 w-full h-full bg-slate-950">
                  <img
                    src={failedImages[item.id] ? item.fallbackImage : item.image}
                    onError={() => setFailedImages((prev) => ({ ...prev, [item.id]: true }))}
                    alt={item.name}
                    className={`w-full h-full object-cover transition-opacity duration-200 ${
                      isActive
                        ? 'filter brightness-100 contrast-[1.06] saturate-110 grayscale-0 scale-105'
                        : 'filter grayscale contrast-[0.95] brightness-[0.40] scale-100'
                    }`}
                    loading="lazy"
                  />

                  {/* Gradient Overlays: Rich clear contrast for active card, deep dark tint for side cards */}
                  {isActive ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/20"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent opacity-70 pointer-events-none"></div>
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-slate-950/60"></div>
                  )}
                </div>

                {/* Card Content Layer */}
                <div className={`relative z-10 w-full h-full p-6 sm:p-8 flex flex-col justify-between text-white transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-50'
                }`}>
                  
                  {/* Top Part: Title */}
                  <div className="space-y-1">
                    <h3 className={`text-2xl sm:text-3xl font-black tracking-tight leading-tight drop-shadow-sm ${
                      isActive ? 'text-white' : 'text-slate-300'
                    }`}>
                      {item.name}
                    </h3>
                  </div>

                  {/* Center Part: Description & Service Bullets */}
                  <div className="space-y-4 my-auto py-2">
                    <p className={`text-xs sm:text-[13px] leading-relaxed line-clamp-3 font-normal ${
                      isActive ? 'text-slate-200' : 'text-slate-400'
                    }`}>
                      {item.desc}
                    </p>

                    {/* Bullet List of Services with Icons */}
                    <div className="space-y-2 pt-1">
                      {item.tags.map((tag, tIdx) => {
                        const IconC = tag.icon;
                        return (
                          <div
                            key={tIdx}
                            className={`flex items-center gap-2.5 text-xs font-medium ${
                              isActive ? 'text-slate-100' : 'text-slate-400'
                            }`}
                          >
                            <IconC className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                            <span className="truncate">{tag.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-3 border-t border-white/15">
                    {isInternalPage ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!isActive) {
                            handleCardClick(index, item);
                          } else {
                            const el = document.getElementById('detalle-industria');
                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }
                        }}
                        className={`inline-flex items-center gap-2 text-xs font-bold transition-all duration-200 group ${
                          isActive
                            ? 'px-4 py-2 rounded-xl bg-white text-slate-950 hover:bg-slate-200 shadow-md font-semibold'
                            : 'text-slate-400'
                        }`}
                      >
                        <span>{isActive ? 'Ver Ficha y Soluciones' : `Seleccionar ${item.name}`}</span>
                        {isActive ? (
                          <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        )}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!isActive) {
                            handleCardClick(index, item);
                          } else {
                            navigate(`/industrias#${item.slug}`);
                          }
                        }}
                        className={`inline-flex items-center gap-2 text-xs font-bold transition-all duration-200 group ${
                          isActive
                            ? 'px-4 py-2 rounded-xl bg-white text-slate-950 hover:bg-slate-200 shadow-md font-semibold'
                            : 'text-slate-400'
                        }`}
                      >
                        <span>Explorar {item.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
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
              onClick={() => handleDotClick(idx)}
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
