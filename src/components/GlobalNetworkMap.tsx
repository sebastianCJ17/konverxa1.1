import { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';

interface GlobalNetworkMapProps {
  badge?: string;
  title?: string;
  subtitle?: string;
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
           MAPA — ANCHO COMPLETO
        ========================================================= */

        .kx-world-map {
            position: relative;

            width: 100vw;
            max-width: 100vw;

            margin-left: calc(50% - 50vw);
            margin-right: calc(50% - 50vw);

            aspect-ratio: 1821 / 864;

            background-image: url("/world-map.png");
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;

            overflow: visible;
        }

        /* =========================================================
           LÍNEAS
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

            animation:
                kxLineFlow 4s linear infinite;

            filter:
                drop-shadow(0 0 3px rgba(255,255,255,0.20));
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
           PUNTOS
        ========================================================= */

        .kx-country {
            position: absolute;

            display: flex;

            align-items: center;

            gap: 10px;

            cursor: pointer;

            z-index: 10;

            transform: translate(-50%, -50%);
        }

        .kx-point {
            position: relative;

            width: 13px;
            height: 13px;

            flex-shrink: 0;

            background: #ffffff;

            border: 3px solid #ffffff;

            border-radius: 50%;

            box-shadow:
                0 0 0 4px rgba(255,255,255,0.15),
                0 0 15px rgba(255,255,255,0.8);

            transition:
                transform .25s ease,
                box-shadow .25s ease;
        }

        .kx-country:hover .kx-point {
            transform: scale(1.15);

            box-shadow:
                0 0 0 5px rgba(255,255,255,0.18),
                0 0 22px rgba(255,255,255,1);
        }

        /* =========================================================
           PULSO
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
           NOMBRE
        ========================================================= */

        .kx-country-name {
            color: #ffffff;

            font-family: Arial, sans-serif;

            font-size: 16px;

            font-weight: 600;

            white-space: nowrap;

            text-shadow:
                0 2px 8px rgba(0,0,0,.9);

            transition:
                transform .25s ease;
        }

        .kx-country:hover .kx-country-name {
            transform: translateX(3px);
        }

        /* =========================================================
           POSICIONES
        ========================================================= */

        .kx-spain {
            left: 47.8%;
            top: 43.8%;
        }

        .kx-colombia {
            left: 29.8%;
            top: 61.2%;
        }

        .kx-peru {
            left: 27.2%;
            top: 69.2%;
        }

        /* =========================================================
           TARJETA DE INFORMACIÓN
        ========================================================= */

        .kx-country-info {
            position: absolute;

            z-index: 30;

            width: 310px;

            padding: 22px 22px 20px;

            background:
                rgba(11, 13, 17, 0.96);

            border: 1px solid rgba(255,255,255,0.16);

            border-radius: 16px;

            box-shadow:
                0 20px 50px rgba(0,0,0,0.55),
                0 0 25px rgba(255,255,255,0.05);

            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);

            color: #ffffff;

            opacity: 0;
            visibility: hidden;

            transform:
                translateY(10px)
                scale(.97);

            transition:
                opacity .3s ease,
                transform .3s ease,
                visibility .3s ease;

            pointer-events: none;
        }

        .kx-country-info.active {
            opacity: 1;

            visibility: visible;

            transform:
                translateY(0)
                scale(1);

            pointer-events: auto;
        }

        /* =========================================================
           CABECERA DE LA TARJETA
        ========================================================= */

        .kx-info-header {
            display: flex;

            align-items: center;

            gap: 10px;

            margin-bottom: 5px;
        }

        .kx-info-flag {
            font-size: 27px;

            line-height: 1;
        }

        .kx-info-title {
            margin: 0;

            color: #ffffff;

            font-family: Arial, sans-serif;

            font-size: 21px;

            font-weight: 700;

            line-height: 1.2;
        }

        .kx-info-subtitle {
            margin: 0 0 18px;

            color: rgba(255,255,255,0.65);

            font-family: Arial, sans-serif;

            font-size: 13px;

            font-weight: 500;
        }

        /* =========================================================
           DATOS
        ========================================================= */

        .kx-info-row {
            display: flex;

            align-items: flex-start;

            gap: 11px;

            padding: 12px 0;

            border-top:
                1px solid rgba(255,255,255,0.10);
        }

        .kx-info-icon {
            width: 20px;
            height: 20px;

            flex-shrink: 0;

            margin-top: 1px;

            color: rgba(255,255,255,0.75);
        }

        .kx-info-label {
            display: block;

            margin-bottom: 3px;

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

            line-height: 1.45;
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

            transition:
                background .2s ease,
                color .2s ease;
        }

        .kx-info-close:hover {
            background: rgba(255,255,255,0.16);

            color: #ffffff;
        }

        /* =========================================================
           POSICIÓN DE LAS TARJETAS
        ========================================================= */

        /* España: tarjeta hacia la derecha para no tapar el mapa */
        .kx-info-spain {
            left: 47.8%;
            top: 43.8%;

            transform:
                translate(25px, -50%)
                scale(.97);
        }

        .kx-info-spain.active {
            transform:
                translate(25px, -50%)
                scale(1);
        }

        /* Colombia: tarjeta hacia la izquierda para no tapar el mapa */
        .kx-info-colombia {
            left: 29.8%;
            top: 61.2%;

            transform:
                translate(-105%, -60%)
                scale(.97);
        }

        .kx-info-colombia.active {
            transform:
                translate(-105%, -60%)
                scale(1);
        }

        /* Perú: tarjeta hacia la izquierda para no tapar el mapa */
        .kx-info-peru {
            left: 27.2%;
            top: 69.2%;

            transform:
                translate(-105%, -50%)
                scale(.97);
        }

        .kx-info-peru.active {
            transform:
                translate(-105%, -50%)
                scale(1);
        }

        /* =========================================================
           MÓVIL
        ========================================================= */

        @media (max-width: 767px) {
            .kx-world-map {
                width: 100vw;
                max-width: 100vw;

                margin-left: calc(50% - 50vw);
                margin-right: calc(50% - 50vw);
            }

            .kx-point {
                width: 10px;
                height: 10px;

                border-width: 2px;
            }

            .kx-country-name {
                font-size: 11px;
            }

            .kx-country {
                gap: 6px;
            }

            .kx-country-info {
                width: 260px;

                padding: 18px;
            }

            .kx-info-spain,
            .kx-info-colombia,
            .kx-info-peru {
                left: 50%;
                top: 50%;

                transform:
                    translate(-50%, -50%)
                    scale(.97);
            }

            .kx-info-spain.active,
            .kx-info-colombia.active,
            .kx-info-peru.active {
                transform:
                    translate(-50%, -50%)
                    scale(1);
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
          className="kx-country kx-spain"
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
          className="kx-country kx-colombia"
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
          className="kx-country kx-peru"
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
            <span className="kx-info-flag">🇪🇸</span>
            <h3 className="kx-info-title">España</h3>
          </div>

          <p className="kx-info-subtitle">Hub Operaciones Europa</p>

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
              <span className="kx-info-label">Sedes / Hubs</span>
              <span className="kx-info-value">Madrid · Barcelona</span>
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
              <span className="kx-info-value">Gobernanza Corporativa · Cobertura UE</span>
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
            <span className="kx-info-flag">🇨🇴</span>
            <h3 className="kx-info-title">Colombia</h3>
          </div>

          <p className="kx-info-subtitle">Base Corporativa y Operativa</p>

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
              <span className="kx-info-label">Sedes / Hubs</span>
              <span className="kx-info-value">Pereira · Bogotá D.C.</span>
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
              <span className="kx-info-value">Base Corporativa · Hub Regional</span>
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
            <span className="kx-info-flag">🇵🇪</span>
            <h3 className="kx-info-title">Perú</h3>
          </div>

          <p className="kx-info-subtitle">Plataforma de Expansión Regional</p>

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
              <span className="kx-info-label">Sedes / Hubs</span>
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
              <span className="kx-info-value">Expansión Regional · Cobertura Andina</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
