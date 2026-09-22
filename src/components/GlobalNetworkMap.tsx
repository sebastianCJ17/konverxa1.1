import { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';

interface GlobalNetworkMapProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

// Banderas Vectoriales Nativas (Garantizan visualización real y fidedigna en Windows, Mac, iOS y Android sin depender de emojis del SO)
function SpainFlag({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 750 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Bandera de España" role="img">
      <rect width="750" height="125" fill="#AA151B" />
      <rect y="125" width="750" height="250" fill="#F1BF00" />
      <rect y="375" width="750" height="125" fill="#AA151B" />
      {/* Escudo institucional simplificado */}
      <g transform="translate(170, 155) scale(0.74)">
        {/* Corona Real */}
        <path d="M70 20 L85 45 L105 15 L125 45 L140 20 L135 58 L75 58 Z" fill="#AA151B" stroke="#F1BF00" strokeWidth="4" />
        <circle cx="105" cy="12" r="6" fill="#F1BF00" />
        {/* Columnas de Hércules */}
        <rect x="25" y="55" width="14" height="120" rx="3" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
        <rect x="170" y="55" width="14" height="120" rx="3" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
        {/* Cintas Plus Ultra */}
        <path d="M15 90 Q32 80 45 95 Q32 110 15 100 Z" fill="#AA151B" />
        <path d="M160 90 Q177 80 190 95 Q177 110 160 100 Z" fill="#AA151B" />
        {/* Escudo Cuartelado */}
        <path d="M60 65 H150 V130 Q150 185 105 195 Q60 185 60 130 Z" fill="#AA151B" stroke="#F1BF00" strokeWidth="4" />
        {/* Castillo (Castilla) */}
        <rect x="62" y="67" width="42" height="42" fill="#AA151B" />
        <path d="M72 100 H94 V80 L88 80 V74 H85 V80 H81 V74 H78 V80 H72 Z" fill="#F1BF00" />
        {/* León (León) */}
        <rect x="106" y="67" width="42" height="42" fill="#FFFFFF" />
        <path d="M120 74 C116 74 114 78 116 83 C118 87 114 91 113 95 H130 C130 92 127 88 127 84 C127 78 124 74 120 74 Z" fill="#7E22CE" />
        {/* Barras (Aragón) */}
        <rect x="62" y="111" width="42" height="42" fill="#F1BF00" />
        <rect x="68" y="111" width="5" height="42" fill="#AA151B" />
        <rect x="78" y="111" width="5" height="42" fill="#AA151B" />
        <rect x="88" y="111" width="5" height="42" fill="#AA151B" />
        <rect x="98" y="111" width="5" height="42" fill="#AA151B" />
        {/* Cadenas (Navarra) */}
        <path d="M106 111 H148 V130 Q148 165 125 180 Q106 155 106 130 Z" fill="#AA151B" />
        <path d="M110 115 L144 149 M144 115 L110 149 M127 115 V160 M108 132 H146" stroke="#F1BF00" strokeWidth="2.5" />
        {/* Escusón Borbón */}
        <ellipse cx="105" cy="110" rx="9" ry="11" fill="#1D4ED8" stroke="#F1BF00" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function ColombiaFlag({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Bandera de Colombia" role="img">
      <rect width="900" height="300" fill="#FCD116" />
      <rect y="300" width="900" height="150" fill="#003893" />
      <rect y="450" width="900" height="150" fill="#CE1126" />
    </svg>
  );
}

function PeruFlag({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Bandera de Perú" role="img">
      <rect width="300" height="600" fill="#D91023" />
      <rect x="300" width="300" height="600" fill="#FFFFFF" />
      <rect x="600" width="300" height="600" fill="#D91023" />
      {/* Escudo de Armas Nacional */}
      <g transform="translate(375, 195) scale(0.76)">
        <ellipse cx="100" cy="20" rx="35" ry="18" fill="none" stroke="#15803D" strokeWidth="8" strokeDasharray="8 4" />
        <path d="M40 35 H160 V125 Q160 190 100 205 Q40 190 40 125 Z" fill="#FFFFFF" stroke="#1F2937" strokeWidth="3" />
        <rect x="42" y="37" width="57" height="63" fill="#38BDF8" />
        <path d="M65 80 L70 65 L76 65 L80 50 L84 50 L83 65 L88 70 L87 88 L83 88 L83 75 L73 75 L73 88 L69 88 Z" fill="#CA8A04" />
        <rect x="101" y="37" width="57" height="63" fill="#FFFFFF" />
        <path d="M125 90 V70 M120 75 Q115 50 128 45 Q142 50 137 75 Z" fill="#15803D" stroke="#14532D" strokeWidth="2" />
        <path d="M42 102 H158 V125 Q158 188 100 203 Q42 188 42 125 Z" fill="#DC2626" />
        <path d="M70 145 Q85 130 115 138 Q130 142 140 130 Q130 155 105 152 Q85 150 70 145 Z" fill="#EAB308" stroke="#CA8A04" strokeWidth="2" />
        <circle cx="125" cy="148" r="4" fill="#FDE047" />
        <circle cx="132" cy="144" r="3" fill="#FDE047" />
        <circle cx="120" cy="155" r="3.5" fill="#FDE047" />
        <path d="M25 60 Q15 130 50 185" fill="none" stroke="#16A34A" strokeWidth="6" strokeDasharray="6 3" />
        <path d="M175 60 Q185 130 150 185" fill="none" stroke="#15803D" strokeWidth="6" strokeDasharray="6 3" />
      </g>
    </svg>
  );
}

export default function GlobalNetworkMap({
  badge = 'PRESENCIA INTERNACIONAL',
  title = 'Infraestructura Operativa Sin Fronteras',
  subtitle = 'Operamos desde Colombia, Perú y España para atender América Latina, Europa y Estados Unidos con una misma forma de organizar, dirigir y controlar la operación.'
}: GlobalNetworkMapProps = {}) {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  const mapRef = useRef<HTMLDivElement | null>(null);
  const spainPointRef = useRef<HTMLSpanElement | null>(null);
  const colombiaPointRef = useRef<HTMLSpanElement | null>(null);
  const peruPointRef = useRef<HTMLSpanElement | null>(null);

  const lineSpainColombiaRef = useRef<SVGPathElement | null>(null);
  const lineColombiaPeruRef = useRef<SVGPathElement | null>(null);
  const linePeruSpainRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    function getPointPosition(element: HTMLElement, map: HTMLElement) {
      const mapRect = map.getBoundingClientRect();
      const rect = element.getBoundingClientRect();

      const x = ((rect.left + rect.width / 2 - mapRect.left) / mapRect.width) * 100;
      const y = ((rect.top + rect.height / 2 - mapRect.top) / mapRect.height) * 100;

      return { x, y };
    }

    function createCurve(start: { x: number; y: number }, end: { x: number; y: number }, curveAmount: number) {
      const midX = (start.x + end.x) / 2;
      const midY = (start.y + end.y) / 2;
      const controlX = midX;
      const controlY = midY - curveAmount;

      return `
        M ${start.x} ${start.y}
        Q
        ${controlX}
        ${controlY}
        ${end.x}
        ${end.y}
      `;
    }

    function drawMapLines() {
      if (
        !mapRef.current ||
        !spainPointRef.current ||
        !colombiaPointRef.current ||
        !peruPointRef.current ||
        !lineSpainColombiaRef.current ||
        !lineColombiaPeruRef.current ||
        !linePeruSpainRef.current
      ) {
        return;
      }

      const map = mapRef.current;
      const spainPos = getPointPosition(spainPointRef.current, map);
      const colombiaPos = getPointPosition(colombiaPointRef.current, map);
      const peruPos = getPointPosition(peruPointRef.current, map);

      // España → Colombia (Curva)
      lineSpainColombiaRef.current.setAttribute(
        'd',
        createCurve(spainPos, colombiaPos, 8)
      );

      // Colombia → Perú (Recta)
      lineColombiaPeruRef.current.setAttribute(
        'd',
        `
          M ${colombiaPos.x} ${colombiaPos.y}
          L ${peruPos.x} ${peruPos.y}
        `
      );

      // Perú → España (Curva Grande)
      linePeruSpainRef.current.setAttribute(
        'd',
        createCurve(peruPos, spainPos, 14)
      );
    }

    // Timers para garantizar carga de imagen y fuentes
    const t1 = setTimeout(drawMapLines, 100);
    const t2 = setTimeout(drawMapLines, 500);
    const t3 = setTimeout(drawMapLines, 1000);

    window.addEventListener('resize', drawMapLines);

    // ResizeObserver para cambios de dimensiones exactas del contenedor
    let observer: ResizeObserver | null = null;
    if (mapRef.current && typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => {
        drawMapLines();
      });
      observer.observe(mapRef.current);
    }

    // Click fuera para cerrar tarjeta activa
    function handleDocClick(event: MouseEvent) {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        setActiveCountry(null);
      }
    }
    document.addEventListener('click', handleDocClick);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('resize', drawMapLines);
      document.removeEventListener('click', handleDocClick);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden font-sans border-t border-b border-neutral-900">
      <style>{`
        /* =========================================================
           MAPA — CONTENEDOR 100% PROPORCIONAL Y RESPONSIVE
           (Evita desfases por scrollbars o monitores de 22"+)
        ========================================================= */

        .kx-world-map {
            position: relative;
            width: 100%;
            max-width: 1821px;
            margin: 0 auto;
            aspect-ratio: 1821 / 864;
            background-image: url("/world-map.png");
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            overflow: visible;
        }

        /* =========================================================
           LÍNEAS DE INTERCONEXIÓN SVG
        ========================================================= */

        .kx-map-lines {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 5;
            pointer-events: none;
            overflow: visible;
        }

        .kx-map-line {
            fill: none;
            stroke: rgba(255, 255, 255, 0.65);
            stroke-width: 0.35;
            stroke-linecap: round;
            stroke-linejoin: round;
            vector-effect: non-scaling-stroke;
            stroke-dasharray: 5 5;
            animation: kxLineFlow 4s linear infinite;
            filter: drop-shadow(0 0 3px rgba(255,255,255,0.25));
        }

        @keyframes kxLineFlow {
            from {
                stroke-dashoffset: 0;
            }
            to {
                stroke-dashoffset: -40;
            }
        }

        /* =========================================================
           PUNTOS — ANCLAJE EXACTO AL CENTRO DEL PUNTO
           (Matemáticamente inmune a cambios de pantalla y zoom)
        ========================================================= */

        .kx-country {
            position: absolute;
            display: inline-flex;
            align-items: center;
            cursor: pointer;
            z-index: 20;
            /* El punto mide 14px x 14px (radio = 7px).
               Al trasladar en X exactamente -7px y en Y -50%,
               el centro del punto queda fijado de forma inmutable
               en el porcentaje geográfico (left, top), sin importar
               el ancho del texto de la etiqueta ni el tamaño del monitor */
            transform: translate(-7px, -50%);
            pointer-events: auto;
        }

        .kx-point {
            position: relative;
            width: 14px;
            height: 14px;
            flex-shrink: 0;
            background: #ffffff;
            border: 3px solid #ffffff;
            border-radius: 50%;
            box-shadow:
                0 0 0 4px rgba(255,255,255,0.22),
                0 0 16px rgba(255,255,255,0.85);
            transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }

        .kx-country:hover .kx-point,
        .kx-country.active .kx-point {
            transform: none;
            border-color: #ffffff;
            background: #ffffff;
            box-shadow:
                0 0 0 4px rgba(255,255,255,0.22),
                0 0 16px rgba(255,255,255,0.85);
        }

        /* =========================================================
           PULSO DINÁMICO
        ========================================================= */

        .kx-point::after {
            content: "";
            position: absolute;
            inset: -7px;
            border: 1px solid rgba(255,255,255,0.5);
            border-radius: 50%;
            animation: kxPulse 2s infinite;
        }

        @keyframes kxPulse {
            0% {
                transform: scale(.7);
                opacity: .8;
            }
            70% {
                transform: scale(1.5);
                opacity: 0;
            }
            100% {
                opacity: 0;
            }
        }

        /* =========================================================
           ETIQUETA DE PAÍS
        ========================================================= */

        .kx-country-name {
            margin-left: 9px;
            color: #ffffff;
            font-family: Arial, sans-serif;
            font-size: 15px;
            font-weight: 700;
            white-space: nowrap;
            text-shadow: 0 2px 6px rgba(0,0,0,0.95), 0 0 10px rgba(0,0,0,0.8);
            letter-spacing: 0.3px;
            transition: transform .25s ease, color .25s ease;
            user-select: none;
        }

        .kx-country:hover .kx-country-name,
        .kx-country.active .kx-country-name {
            color: #ffffff;
        }

        /* =========================================================
           POSICIONES GEOGRÁFICAS EXACTAS
           - España: un poquito hacia abajo y a la izquierda
           - Colombia: un poquitico hacia abajo y a la derecha otro poquito
           - Perú: hacia abajo y un poquito a la derecha
        ========================================================= */

        .kx-spain {
            left: 45.2%;
            top: 44.2%;
        }

        .kx-colombia {
            left: 26.2%;
            top: 62.2%;
        }

        .kx-peru {
            left: 25.8%;
            top: 71.0%;
        }

        /* =========================================================
           TARJETA DE INFORMACIÓN FLOTANTE
        ========================================================= */

        .kx-country-info {
            position: absolute;
            z-index: 35;
            width: 285px;
            max-width: calc(100vw - 32px);
            padding: 20px 20px 18px;
            background: rgba(11, 13, 17, 0.96);
            border: 1px solid rgba(255,255,255,0.18);
            border-radius: 16px;
            box-shadow:
                0 25px 60px rgba(0,0,0,0.7),
                0 0 25px rgba(255,255,255,0.06);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            color: #ffffff;
            opacity: 0;
            visibility: hidden;
            transition:
                opacity .3s cubic-bezier(0.16, 1, 0.3, 1),
                transform .3s cubic-bezier(0.16, 1, 0.3, 1),
                visibility .3s ease;
            pointer-events: none;
        }

        .kx-country-info.active {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        /* =========================================================
           POSICIONES DE LAS TARJETAS
           - España: sale a la DERECHA con 105px de separación,
             dejando el punto y el texto "España" totalmente libres
           - Colombia: hacia la IZQUIERDA sobre el Océano Pacífico
           - Perú: hacia la IZQUIERDA sobre el Océano Pacífico Sur
        ========================================================= */

        /* España: tarjeta hacia la DERECHA sin tapar nombre ni punto */
        .kx-info-spain {
            left: 45.2%;
            top: 44.2%;
            transform: translate(105px, -45%) scale(.96);
        }

        .kx-info-spain.active {
            transform: translate(105px, -45%) scale(1);
        }

        /* Colombia: tarjeta hacia la IZQUIERDA sobre el Pacífico */
        .kx-info-colombia {
            left: 26.2%;
            top: 57%;
            transform: translate(calc(-100% - 25px), -75%) scale(.96);
        }

        .kx-info-colombia.active {
            transform: translate(calc(-100% - 25px), -75%) scale(1);
        }

        /* Perú: tarjeta hacia la IZQUIERDA sobre el Pacífico Sur */
        .kx-info-peru {
            left: 25.8%;
            top: 73%;
            transform: translate(calc(-100% - 25px), -20%) scale(.96);
        }

        .kx-info-peru.active {
            transform: translate(calc(-100% - 25px), -20%) scale(1);
        }

        /* Adaptación en pantallas medianas (tablets / laptops estrechas) */
        @media (min-width: 768px) and (max-width: 1279px) {
            .kx-info-colombia {
                left: 16px !important;
                transform: translateY(-75%) scale(.96) !important;
            }
            .kx-info-colombia.active {
                transform: translateY(-75%) scale(1) !important;
            }
            .kx-info-peru {
                left: 16px !important;
                transform: translateY(-20%) scale(.96) !important;
            }
            .kx-info-peru.active {
                transform: translateY(-20%) scale(1) !important;
            }
            .kx-info-spain {
                left: 45.2% !important;
                transform: translate(95px, -45%) scale(.96) !important;
            }
            .kx-info-spain.active {
                transform: translate(95px, -45%) scale(1) !important;
            }
        }

        /* =========================================================
           CABECERA DE LA TARJETA Y BANDERA OFICIAL
        ========================================================= */

        .kx-info-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 6px;
        }

        .kx-info-flag-wrap {
            width: 38px;
            height: 25px;
            border-radius: 4px;
            overflow: hidden;
            box-shadow:
                0 2px 6px rgba(0,0,0,0.5),
                0 0 0 1px rgba(255,255,255,0.25);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            background: #111;
        }

        .kx-info-title {
            margin: 0;
            color: #ffffff;
            font-family: Arial, sans-serif;
            font-size: 20px;
            font-weight: 700;
            line-height: 1.2;
        }

        .kx-info-subtitle {
            margin: 0 0 16px;
            color: rgba(255,255,255,0.68);
            font-family: Arial, sans-serif;
            font-size: 13px;
            font-weight: 500;
        }

        /* =========================================================
           FILAS DE DATOS DE LA TARJETA
        ========================================================= */

        .kx-info-row {
            display: flex;
            align-items: flex-start;
            gap: 11px;
            padding: 10px 0;
            border-top: 1px solid rgba(255,255,255,0.10);
        }

        .kx-info-icon {
            width: 18px;
            height: 18px;
            flex-shrink: 0;
            margin-top: 2px;
            color: rgba(255,255,255,0.75);
        }

        .kx-info-label {
            display: block;
            margin-bottom: 2px;
            color: rgba(255,255,255,0.45);
            font-family: Arial, sans-serif;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .kx-info-value {
            display: block;
            color: #ffffff;
            font-family: Arial, sans-serif;
            font-size: 13px;
            font-weight: 500;
            line-height: 1.4;
        }

        /* =========================================================
           BOTÓN CERRAR
        ========================================================= */

        .kx-info-close {
            position: absolute;
            top: 12px;
            right: 12px;
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0;
            background: rgba(255,255,255,0.08);
            border-radius: 50%;
            color: rgba(255,255,255,0.7);
            font-size: 16px;
            line-height: 1;
            cursor: pointer;
            transition: background .2s ease, color .2s ease;
        }

        .kx-info-close:hover {
            background: rgba(255,255,255,0.18);
            color: #ffffff;
        }

        /* =========================================================
           MÓVIL (< 768px): DIÁLOGO CENTRADO FLOTANTE
        ========================================================= */

        @media (max-width: 767px) {
            .kx-point {
                width: 10px;
                height: 10px;
                border-width: 2px;
            }

            .kx-country {
                transform: translate(-5px, -50%);
            }

            .kx-country-name {
                font-size: 11px;
                margin-left: 5px;
            }

            .kx-country-info {
                position: fixed !important;
                left: 50% !important;
                top: 50% !important;
                width: min(320px, calc(100vw - 32px)) !important;
                padding: 18px !important;
                z-index: 60 !important;
                transform: translate(-50%, -50%) scale(.96) !important;
            }

            .kx-country-info.active {
                transform: translate(-50%, -50%) scale(1) !important;
            }

            .kx-info-title {
                font-size: 18px;
            }
        }

        /* =========================================================
           REDUCIR MOVIMIENTO
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {
            .kx-point::after,
            .kx-map-line {
                animation: none;
            }
        }
      `}</style>

      {/* Section Header */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
        <SectionTitle
          badge={badge}
          title={title}
          subtitle={subtitle}
          light
        />
      </div>

      {/* MAPA */}
      <div className="kx-world-map" ref={mapRef}>

        {/* LÍNEAS */}
        <svg
          className="kx-map-lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* España → Colombia */}
          <path
            ref={lineSpainColombiaRef}
            id="kx-line-spain-colombia"
            className="kx-map-line"
            d=""
          />

          {/* Colombia → Perú */}
          <path
            ref={lineColombiaPeruRef}
            id="kx-line-colombia-peru"
            className="kx-map-line"
            d=""
          />

          {/* Perú → España */}
          <path
            ref={linePeruSpainRef}
            id="kx-line-peru-spain"
            className="kx-map-line"
            d=""
          />
        </svg>

        {/* ESPAÑA */}
        <div
          className={`kx-country kx-spain ${activeCountry === 'spain' ? 'active' : ''}`}
          data-country="spain"
          onClick={(e) => {
            e.stopPropagation();
            setActiveCountry(activeCountry === 'spain' ? null : 'spain');
          }}
        >
          <span className="kx-point" ref={spainPointRef}></span>
          <span className="kx-country-name">España</span>
        </div>

        {/* COLOMBIA */}
        <div
          className={`kx-country kx-colombia ${activeCountry === 'colombia' ? 'active' : ''}`}
          data-country="colombia"
          onClick={(e) => {
            e.stopPropagation();
            setActiveCountry(activeCountry === 'colombia' ? null : 'colombia');
          }}
        >
          <span className="kx-point" ref={colombiaPointRef}></span>
          <span className="kx-country-name">Colombia</span>
        </div>

        {/* PERÚ */}
        <div
          className={`kx-country kx-peru ${activeCountry === 'peru' ? 'active' : ''}`}
          data-country="peru"
          onClick={(e) => {
            e.stopPropagation();
            setActiveCountry(activeCountry === 'peru' ? null : 'peru');
          }}
        >
          <span className="kx-point" ref={peruPointRef}></span>
          <span className="kx-country-name">Perú</span>
        </div>

        {/* INFORMACIÓN — ESPAÑA */}
        <div
          className={`kx-country-info kx-info-spain ${activeCountry === 'spain' ? 'active' : ''}`}
          data-info="spain"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="kx-info-close"
            type="button"
            aria-label="Cerrar"
            onClick={(e) => {
              e.stopPropagation();
              setActiveCountry(null);
            }}
          >
            ×
          </button>

          <div className="kx-info-header">
            <div className="kx-info-flag-wrap" title="Bandera de España">
              <SpainFlag />
            </div>
            <div>
              <h3 className="kx-info-title">España</h3>
              <span className="text-[10px] font-bold tracking-wider uppercase text-white block -mt-0.5">EXPANSIÓN OPERATIVA</span>
            </div>
          </div>

          <p className="kx-info-subtitle">Hub de Operaciones Iberia</p>

          {/* SEDES */}
          <div className="kx-info-row">
            <svg
              className="kx-info-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M3 21h18"></path>
              <path d="M5 21V5h10v16"></path>
              <path d="M15 9h4v12"></path>
              <path d="M8 8h2"></path>
              <path d="M8 12h2"></path>
              <path d="M8 16h2"></path>
              <path d="M12 8h2"></path>
              <path d="M12 12h2"></path>
              <path d="M12 16h2"></path>
            </svg>
            <div>
              <span className="kx-info-label">Sedes / Hub</span>
              <span className="kx-info-value">Gijón, Asturias</span>
            </div>
          </div>

          {/* ENFOQUE */}
          <div className="kx-info-row">
            <svg
              className="kx-info-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="12" cy="12" r="8"></circle>
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 4V2"></path>
              <path d="M12 22v-2"></path>
              <path d="M4 12H2"></path>
              <path d="M22 12h-2"></path>
            </svg>
            <div>
              <span className="kx-info-label">Enfoque</span>
              <span className="kx-info-value">Puente Iberia/LATAM</span>
            </div>
          </div>
        </div>

        {/* INFORMACIÓN — COLOMBIA */}
        <div
          className={`kx-country-info kx-info-colombia ${activeCountry === 'colombia' ? 'active' : ''}`}
          data-info="colombia"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="kx-info-close"
            type="button"
            aria-label="Cerrar"
            onClick={(e) => {
              e.stopPropagation();
              setActiveCountry(null);
            }}
          >
            ×
          </button>

          <div className="kx-info-header">
            <div className="kx-info-flag-wrap" title="Bandera de Colombia">
              <ColombiaFlag />
            </div>
            <div>
              <h3 className="kx-info-title">Colombia</h3>
              <span className="text-[10px] font-bold tracking-wider uppercase text-white block -mt-0.5">SEDE CORPORATIVA</span>
            </div>
          </div>

          <p className="kx-info-subtitle">Hub de Operaciones LATAM</p>

          {/* SEDES */}
          <div className="kx-info-row">
            <svg
              className="kx-info-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M3 21h18"></path>
              <path d="M5 21V5h10v16"></path>
              <path d="M15 9h4v12"></path>
              <path d="M8 8h2"></path>
              <path d="M8 12h2"></path>
              <path d="M8 16h2"></path>
              <path d="M12 8h2"></path>
              <path d="M12 12h2"></path>
              <path d="M12 16h2"></path>
            </svg>
            <div>
              <span className="kx-info-label">Sedes / Hub</span>
              <span className="kx-info-value">Pereira, Risaralda</span>
            </div>
          </div>

          {/* ENFOQUE */}
          <div className="kx-info-row">
            <svg
              className="kx-info-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="12" cy="12" r="8"></circle>
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 4V2"></path>
              <path d="M12 22v-2"></path>
              <path d="M4 12H2"></path>
              <path d="M22 12h-2"></path>
            </svg>
            <div>
              <span className="kx-info-label">Enfoque</span>
              <span className="kx-info-value">Dirección del Modelo</span>
            </div>
          </div>
        </div>

        {/* INFORMACIÓN — PERÚ */}
        <div
          className={`kx-country-info kx-info-peru ${activeCountry === 'peru' ? 'active' : ''}`}
          data-info="peru"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="kx-info-close"
            type="button"
            aria-label="Cerrar"
            onClick={(e) => {
              e.stopPropagation();
              setActiveCountry(null);
            }}
          >
            ×
          </button>

          <div className="kx-info-header">
            <div className="kx-info-flag-wrap" title="Bandera de Perú">
              <PeruFlag />
            </div>
            <div>
              <h3 className="kx-info-title">Perú</h3>
              <span className="text-[10px] font-bold tracking-wider uppercase text-white block -mt-0.5">EXPANSIÓN OPERATIVA</span>
            </div>
          </div>

          <p className="kx-info-subtitle">Hub de Operaciones Regional</p>

          {/* SEDES */}
          <div className="kx-info-row">
            <svg
              className="kx-info-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M3 21h18"></path>
              <path d="M5 21V5h10v16"></path>
              <path d="M15 9h4v12"></path>
              <path d="M8 8h2"></path>
              <path d="M8 12h2"></path>
              <path d="M8 16h2"></path>
              <path d="M12 8h2"></path>
              <path d="M12 12h2"></path>
              <path d="M12 16h2"></path>
            </svg>
            <div>
              <span className="kx-info-label">Sedes / Hub</span>
              <span className="kx-info-value">Lima</span>
            </div>
          </div>

          {/* ENFOQUE */}
          <div className="kx-info-row">
            <svg
              className="kx-info-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="12" cy="12" r="8"></circle>
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 4V2"></path>
              <path d="M12 22v-2"></path>
              <path d="M4 12H2"></path>
              <path d="M22 12h-2"></path>
            </svg>
            <div>
              <span className="kx-info-label">Enfoque</span>
              <span className="kx-info-value">Operaciones Regionales</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
