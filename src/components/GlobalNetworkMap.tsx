import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Users, CheckCircle2, X } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface HubLocation {
  id: string;
  country: string;
  name: string;
  flag: string;
  role: string;
  cities: string[];
  capabilities: string[];
  stats: string;
  x: number; // percentage on map (0-100)
  y: number; // percentage on map (0-100)
  isPrimary: boolean; // Colombia, España, Perú
}

// Hub coordinates precisely calibrated to the map
const HUBS: HubLocation[] = [
  {
    id: 'colombia',
    country: 'Colombia',
    name: 'Base Corporativa y Operativa',
    flag: '🇨🇴',
    role: 'Pereira, Colombia. Base corporativa y operativa principal',
    cities: ['Pereira', 'Bogotá D.C.'],
    capabilities: [
      'Centro de Contacto Multicanal 24/7',
      'Back Office Crítico y Procesamiento Transaccional',
      'Torre de Control Operativo y SLAs en Tiempo Real',
      'Mesa de Ayuda y Soporte Nivel 1, 2 y 3'
    ],
    stats: 'Base Corporativa · Hub Regional',
    x: 31.2,
    y: 63.0,
    isPrimary: true
  },
  {
    id: 'peru',
    country: 'Perú',
    name: 'Plataforma de Expansión Regional',
    flag: '🇵🇪',
    role: 'Lima, Perú. Plataforma de expansión regional',
    cities: ['Lima'],
    capabilities: [
      'Recuperación de Cartera y Cobranza Especializada',
      'Ventas y Conversión B2B/B2C',
      'Atención al Cliente e Interacciones Omnicanal',
      'Gestión de Bases de Datos y Enriquecimiento'
    ],
    stats: 'Expansión Regional · Cobertura Andina',
    x: 31.4,
    y: 69.5,
    isPrimary: true
  },
  {
    id: 'espana',
    country: 'España',
    name: 'Hub Operaciones Europa',
    flag: '🇪🇸',
    role: 'Coordinación Internacional y Clientes Globales',
    cities: ['Madrid', 'Barcelona'],
    capabilities: [
      'Gobernanza y Dirección de Cuentas Internacionales',
      'Atención Horario Europeo y Multidivisa',
      'Auditoría de Calidad y Cumplimiento Normativo UE (RGPD)',
      'Consultoría de Transformación y Estrategia BPO'
    ],
    stats: 'Gobernanza Corporativa · Cobertura UE',
    x: 47.6,
    y: 46.2,
    isPrimary: true
  }
];

// Arcs connecting precisely Colombia, España and Perú
const ARCS = [
  // Colombia -> España (Transatlantic Bridge)
  { from: { x: 31.2, y: 63.0 }, to: { x: 47.6, y: 46.2 }, curve: -65 },
  // Perú -> Colombia (Andean Spine)
  { from: { x: 31.4, y: 69.5 }, to: { x: 31.2, y: 63.0 }, curve: -8 },
  // Perú -> España (Direct Link)
  { from: { x: 31.4, y: 69.5 }, to: { x: 47.6, y: 46.2 }, curve: -95 }
];

export default function GlobalNetworkMap() {
  const [selectedHub, setSelectedHub] = useState<HubLocation | null>(HUBS[0]); // Default Colombia
  const [mapImageError, setMapImageError] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden font-sans border-t border-b border-neutral-900">
      
      {/* Background Gradients & Subtle Radial Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-950/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-950/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-4">
          <SectionTitle
            badge="Presencia Multilocación & Cobertura Global"
            title="Infraestructura Operativa Sin Fronteras"
            subtitle="Operamos desde Colombia, Perú y España para atender América Latina, Europa y Estados Unidos con el mismo estándar en cualquier huso horario."
            light
          />
        </div>

        {/* Solid Black Map Canvas Container Frame (Expansive & High Definition) */}
        <div className="relative rounded-3xl bg-black border border-neutral-900 shadow-2xl overflow-hidden min-h-[560px] sm:min-h-[660px] lg:min-h-[760px] flex items-center justify-center p-2 sm:p-4 lg:p-6">
          
          {/* Subtle Coordinate Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none"></div>

          {/* Realistic World Map Presentation Layer */}
          <div className="relative w-full aspect-[1410/752] max-w-[1360px] mx-auto flex items-center justify-center">
            
            {/* World Map Exact Continental Silhouette (Transparent PNG on Pure Black Canvas) */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
              <img
                src={mapImageError ? "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" : "/world-map.png"}
                alt="Mapa Mundi Global"
                onError={() => setMapImageError(true)}
                className="w-full h-full object-contain select-none brightness-110 contrast-105 opacity-90"
              />
            </div>

            {/* SVG Interactive Arcs Overlay */}
            <svg
              viewBox="0 0 1000 533.33"
              className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
            >
              <defs>
                {/* Glow Filter for primary arcs */}
                <filter id="mapArcGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                
                {/* Gradient for transatlantic and global arcs */}
                <linearGradient id="mapGlobalArcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Dynamic Connecting Arcs */}
              {ARCS.map((arc, idx) => {
                const x1 = arc.from.x * 10;
                const y1 = arc.from.y * 5.3333;
                const x2 = arc.to.x * 10;
                const y2 = arc.to.y * 5.3333;
                const midX = (x1 + x2) / 2;
                const midY = Math.min(y1, y2) + arc.curve;
                const pathD = `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;

                return (
                  <g key={idx}>
                    {/* Dashed Base Arc */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke="#404040"
                      strokeWidth="1.2"
                      strokeDasharray="4,4"
                      opacity="0.6"
                    />
                    {/* Glowing Fluid Arc (Slower Latency) */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke="url(#mapGlobalArcGradient)"
                      strokeWidth="1.8"
                      filter="url(#mapArcGlow)"
                      opacity="0.85"
                      style={{ animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Interactive HTML Markers Placed with Pinpoint Precision on Map */}
            {HUBS.map((hub) => {
              const isSelected = selectedHub?.id === hub.id;
              const isPrimary = hub.isPrimary;

              return (
                <div
                  key={hub.id}
                  style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    onClick={() => setSelectedHub(hub)}
                    className="relative group cursor-pointer p-1.5 flex items-center justify-center focus:outline-hidden"
                    aria-label={`Ver información de ${hub.country}`}
                    title={hub.country}
                  >
                    {/* Primary Highlighted Hubs (Colombia, España, Perú) */}
                    {isPrimary ? (
                      <>
                        {/* Outer Glow Ping Animation (Calm, Slower Latency 4s & Compact) */}
                        <span
                          style={{ animation: 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite' }}
                          className="absolute w-7 h-7 rounded-full bg-amber-400/25 pointer-events-none"
                        ></span>
                        
                        {/* Inner Wave Pulse Animation (Slower Latency 3.5s & Compact) */}
                        <span
                          style={{ animation: 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                          className="absolute w-5 h-5 rounded-full bg-sky-400/35 pointer-events-none"
                        ></span>

                        {/* Solid Ring with Center Marker (Accurate pinpoint size) */}
                        <div className={`w-3.5 h-3.5 rounded-full border border-white transition-all duration-300 flex items-center justify-center shadow-lg ${
                          isSelected
                            ? 'bg-amber-400 scale-125 ring-2 ring-amber-400/70 shadow-amber-400/80'
                            : 'bg-amber-400 hover:scale-125 shadow-amber-500/50'
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                        </div>
                      </>
                    ) : (
                      /* Secondary Network Nodes */
                      <div className="w-2 h-2 rounded-full bg-neutral-600 hover:bg-neutral-300 border border-neutral-500 transition-all hover:scale-125"></div>
                    )}
                  </button>
                </div>
              );
            })}

          </div>

          {/* Floating Detail Card with Clean Dark Layout */}
          <AnimatePresence>
            {selectedHub && (
              <motion.div
                key={selectedHub.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-96 rounded-3xl bg-neutral-950/95 backdrop-blur-md border border-neutral-800 p-6 text-white shadow-2xl z-30"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between pb-3 border-b border-neutral-800">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{selectedHub.flag}</span>
                    <div>
                      <h4 className="text-lg font-black text-white tracking-tight">
                        {selectedHub.country}
                      </h4>
                      <p className="text-xs font-bold text-amber-400">
                        {selectedHub.name}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedHub(null)}
                    className="w-7 h-7 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-all"
                    aria-label="Cerrar detalle"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Cities and Stat */}
                <div className="py-3 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Building2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span className="font-semibold text-white">Sedes / Hubs:</span>
                    <span>{selectedHub.cities.join(' · ')}</span>
                  </div>

                  <div className="flex items-center gap-2 text-neutral-300">
                    <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-semibold text-neutral-200">Enfoque:</span>
                    <span className="text-amber-200 font-medium">{selectedHub.stats}</span>
                  </div>
                </div>

                {/* Capabilities List */}
                <div className="space-y-1.5 pt-2 border-t border-neutral-800/80">
                  <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400 block">
                    Capacidades Desplegadas:
                  </span>
                  <div className="space-y-1 text-xs text-neutral-300">
                    {selectedHub.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}
