import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  ShieldCheck,
  Building2,
  Cpu,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Users,
  Lock,
  BarChart3,
  Sparkles,
  Server,
  Layers,
  Award
} from 'lucide-react';

interface CapabilityTab {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  image: string;
  imageAlt: string;
}

const CAPABILITY_TABS: CapabilityTab[] = [
  {
    id: 'cobertura',
    title: 'Cobertura Multilingüe & Regional',
    badge: 'PRESENCIA INTERNACIONAL',
    subtitle: 'Distintas geografías coordinadas bajo un mismo estándar unificado.',
    description: 'Centros de interacción estratégicamente ubicados en Colombia, Perú y España, diseñados para atender de manera fluida América Latina, Estados Unidos y la Unión Europea sin fricciones de zona horaria o de idioma.',
    specs: [
      { label: 'Hubs Activos', value: 'Bogotá · Medellín · Lima · Madrid' },
      { label: 'Idiomas Nativos', value: 'Español · Inglés · Portugués' },
      { label: 'Disponibilidad', value: '24/7/365 en Tiempo Real' },
      { label: 'Elasticidad', value: '+200% escalabilidad en picos' }
    ],
    highlights: [
      'Atención nativa adaptada al contexto cultural de cada mercado regional.',
      'Ruteo inteligente de interacciones según criticidad, idioma y perfil del usuario.',
      'Arquitectura de continuidad de negocio con balanceo geográfico entre sedes.',
      'Capacitación continua a través de la Universidad Konverxa para homologar estándares.'
    ],
    image: '/images/centro-operaciones-konverxa.jpg',
    imageAlt: 'Sede operativa internacional KONVERXA'
  },
  {
    id: 'seguridad',
    title: 'Seguridad & Cumplimiento Grado Bancario',
    badge: 'GOBERNANZA & DATA PRIVACY',
    subtitle: 'Infraestructura blindada que protege la confidencialidad de tus usuarios.',
    description: 'Operamos bajo rigurosos protocolos de ciberseguridad, certificaciones internacionales de calidad y cumplimiento normativo estricto en tratamiento de datos personales y transaccionales.',
    specs: [
      { label: 'Certificación Info', value: 'ISO/IEC 27001' },
      { label: 'Pasarelas de Pago', value: 'PCI-DSS Compliant' },
      { label: 'Cifrado de Datos', value: 'AES-256 en Reposo y Tránsito' },
      { label: 'Arquitectura', value: 'Zero Trust & 2FA Biométrico' }
    ],
    highlights: [
      'Entornos limpios certificados (Clean Desk Policy) y estaciones sin puertos USB.',
      'Auditorías de penetración (pentesting) continuas y monitoreo SIEM en tiempo real.',
      'Cumplimiento de normativas GDPR (Europa), Habeas Data (Colombia) y Ley 29733 (Perú).',
      'Acuerdos de confidencialidad reforzados y trazabilidad total de cada interacción.'
    ],
    image: '/banners/banner-certificaciones.png',
    imageAlt: 'Infraestructura de ciberseguridad y certificaciones KONVERXA'
  },
  {
    id: 'inteligencia',
    title: 'Centros de Interacción Inteligentes',
    badge: 'TECNOLOGÍA HÍBRIDA (AI + HUMANO)',
    subtitle: 'Automatización donde aporta velocidad; talento humano donde se construye confianza.',
    description: 'No reemplazamos la empatía humana: la potenciamos con analítica predictiva, automatización omnicanal y flujos de trabajo diseñados para maximizar la resolución al primer contacto.',
    specs: [
      { label: 'Orquestación', value: 'Voz · WhatsApp · Chat · Mail · Social' },
      { label: 'Modelo MOK', value: 'Alineación CX · EX · OX' },
      { label: 'Supervisión', value: 'Speech Analytics en el 100% de llamadas' },
      { label: 'Resolución (FCR)', value: 'Supera el 88% en primer contacto' }
    ],
    highlights: [
      'Bots cognitivos que resuelven tareas transaccionales repetitivas en segundos.',
      'Asistente copiloto para agentes con sugerencias contextuales y consulta inmediata de base de conocimiento.',
      'Consolidación de vista 360° del cliente para eliminar repeticiones frustrantes.',
      'Tableros de control OneX con visibilidad de indicadores de negocio en tiempo real.'
    ],
    image: '/images/equipo-operativo-konverxa.jpg',
    imageAlt: 'Equipo de operaciones y analítica KONVERXA'
  }
];

export default function QuienesSomosView() {
  const [activeTabId, setActiveTabId] = useState<string>('cobertura');
  const activeTab = CAPABILITY_TABS.find((t) => t.id === activeTabId) || CAPABILITY_TABS[0];

  return (
    <div className="space-y-24">
      {/* 1. SECCIÓN EDITORIAL ASIMÉTRICA: MANIFIESTO Y COMANDO OPERATIVO */}
      <section className="relative pt-12 pb-8 overflow-hidden">
        {/* Fondo sutil geométrico de precisión */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Columna Izquierda: Manifiesto y Propósito */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Pastilla y Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900 text-white shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  PROPÓSITO INSTITUCIONAL
                </span>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                  ORIGEN & ARQUITECTURA
                </span>
              </div>

              {/* Titular Principal */}
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-[1.15]">
                  Transformamos la Operación en una <span className="underline decoration-zinc-300 decoration-wavy underline-offset-8">Ventaja Competitiva</span>
                </h2>
              </div>

              {/* Cita Editorial Destacada */}
              <div className="border-l-4 border-black pl-5 py-1">
                <p className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed italic">
                  «Nuestra propuesta trasciende el esquema convencional de outsourcing. No suministramos horas ni puestos desarticulados: construimos la solidez necesaria para sostener la promesa de negocio de cada cliente.»
                </p>
              </div>

              {/* Párrafo Narrativo */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Fundada bajo los más altos estándares de consultoría internacional, <strong className="text-slate-900 font-semibold">KONVERXA</strong> opera centros de interacción inteligentes con presencia regional en América Latina y conectividad global. Nace de la convicción de que las operaciones exitosas no dependen de la improvisación ni del esfuerzo heroico individual, sino de un <span className="text-black font-semibold">modelo propio, gobernado por criterios explícitos y comprobable mediante evidencia</span>.
              </p>

              {/* Etiquetas Metodológicas */}
              <div className="pt-2 flex flex-wrap gap-2">
                {['#ModeloMOK', '#ArquitecturaOperativa', '#GobernanzaPorEvidencia', '#BPOAltaFidelidad'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Columna Derecha: Dossier de Mando Operativo (Panel de Precisión Oscuro) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-zinc-950 text-white border border-zinc-800 p-7 sm:p-9 shadow-2xl overflow-hidden">
                {/* Iluminación sutil de fondo */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

                <div className="relative z-10 space-y-6">
                  
                  {/* Encabezado del Dossier */}
                  <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-300">
                        DOSSIER EJECUTIVO
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">
                      KNX-REF // 2026
                    </span>
                  </div>

                  {/* Cifra 01 */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">20+</span>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">Años</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-snug">
                      De trayectoria directiva consolidada liderando operaciones y centros de contacto de alta escala.
                    </p>
                  </div>

                  <div className="h-px bg-zinc-800/60"></div>

                  {/* Cifra 02 */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">03</span>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">Hubs Internacionales</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-snug">
                      Sedes operativas en <strong className="text-white">Colombia, Perú y España</strong> para atender mercados en América Latina, USA y Europa.
                    </p>
                  </div>

                  <div className="h-px bg-zinc-800/60"></div>

                  {/* Cifra 03 */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">ISO 27001</span>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">Certificado</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-snug">
                      Seguridad de la información de grado bancario, políticas Zero-Trust y cumplimiento PCI-DSS.
                    </p>
                  </div>

                  <div className="h-px bg-zinc-800/60"></div>

                  {/* Micro Footer de Respaldo */}
                  <div className="pt-2 flex items-center justify-between text-xs text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-zinc-300" />
                      Estándar IntegralX™
                    </span>
                    <Link
                      to="/modelo"
                      className="inline-flex items-center gap-1 text-white font-bold hover:text-zinc-300 transition-colors"
                    >
                      Ver Modelo
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MATRIZ DE DECONSTRUCCIÓN: OUTSOURCING CONVENCIONAL VS. LA FORMA KONVERXA */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Encabezado de Sección */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-slate-800 border border-slate-200 shadow-2xs">
              CAMBIO DE PARADIGMA
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight">
              Dos Formas de Entender la Operación
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              La diferencia entre delegar tareas a un proveedor tradicional o construir una alianza operativa con un socio de arquitectura integral.
            </p>
          </div>

          {/* Comparativo de Dos Columnas de Alto Contraste */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Columna A: El Outsourcing Tradicional */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between space-y-6 relative opacity-90 hover:opacity-100 transition-opacity">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-800">El Enfoque Convencional</h4>
                      <p className="text-xs text-slate-400 font-mono">BPO TRANSACCIONAL</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md">
                    Modelo Reactivo
                  </span>
                </div>

                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0"></span>
                    <span>
                      <strong className="text-slate-800">Facturación por tiempo o asiento:</strong> Incentivo perverso a mantener ineficiencias y volumen artificial de contactos.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0"></span>
                    <span>
                      <strong className="text-slate-800">Métricas de vanidad aisladas:</strong> Reportes que muestran 99% de SLA mientras la satisfacción y lealtad del cliente caen.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0"></span>
                    <span>
                      <strong className="text-slate-800">Rotación crónica no gestionada:</strong> Agentes desmotivados sin plan de carrera, resultando en errores constantes y curva de aprendizaje eterna.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0"></span>
                    <span>
                      <strong className="text-slate-800">Opacidad operativa:</strong> Cajas negras donde el cliente desconoce lo que realmente ocurre hasta que estalla una crisis.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 font-mono">
                Resultado: Mayor fricción, pérdida de clientes y desgaste directivo.
              </div>
            </div>

            {/* Columna B: La Forma KONVERXA */}
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900 text-white border border-zinc-800 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-zinc-700/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center font-bold">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">La Arquitectura KONVERXA</h4>
                      <p className="text-xs text-zinc-400 font-mono">MODELO OPERATIVO MOK</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-white bg-zinc-800 px-2.5 py-1 rounded-md border border-zinc-700">
                    Estructural
                  </span>
                </div>

                <ul className="space-y-4 text-sm text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                    <span>
                      <strong className="text-white">Solidez de negocio demostrable:</strong> Sostenemos la promesa de tu marca mediante procesos auditados y gobernanza activa.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                    <span>
                      <strong className="text-white">Alineación Integral (CX · EX · OX):</strong> El cliente solo vive una buena experiencia si el agente cuenta con las herramientas y la contención adecuada.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                    <span>
                      <strong className="text-white">Talento fidelizado y bienestar:</strong> Universidad Konverxa, planes de crecimiento y apoyo psicosocial para la menor rotación del mercado.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                    <span>
                      <strong className="text-white">Gobernanza basada en evidencia:</strong> Plataforma OneX con visibilidad en tiempo real para anticipar desviaciones y corregir al instante.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-400 font-mono flex items-center justify-between">
                <span>Resultado: Fidelización, costo total optimizado y consistencia.</span>
                <span className="text-emerald-400 font-bold">Estándar MOK™</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CABINA DE CAPACIDADES OPERATIVAS INTERACTIVA */}
      <section className="py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800">
                CAPACIDADES EN ACCIÓN
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
                Infraestructura, Rigor y Cobertura
              </h3>
              <p className="text-slate-600 text-base">
                Selecciona una de nuestras tres dimensiones operativas fundamentales para explorar sus especificaciones técnicas y estándares.
              </p>
            </div>

            {/* Selector de Pestañas Interactivas */}
            <div className="flex flex-wrap gap-2">
              {CAPABILITY_TABS.map((tab) => {
                const isSelected = activeTabId === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-black text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-black border border-slate-200'
                    }`}
                  >
                    {tab.title.split('&')[0].trim()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contenedor Activo Dinámico */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Bloque Izquierdo: Descripción y Puntos Clave */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    {activeTab.badge}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                    {activeTab.title}
                  </h4>
                  <p className="text-sm font-semibold text-slate-700 italic">
                    {activeTab.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeTab.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 pt-2">
                  {activeTab.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Matriz de Especificaciones Rápidas */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  {activeTab.specs.map((spec, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">{spec.label}</span>
                      <span className="text-xs sm:text-sm font-bold text-black">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bloque Derecho: Fotografía Operativa */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
                  <img
                    src={activeTab.image}
                    alt={activeTab.imageAlt}
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-300 uppercase">
                      REGISTRO VISUAL
                    </span>
                    <p className="text-sm font-bold text-white">
                      {activeTab.imageAlt}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* 4. CIERRE EDITORIAL: MANIFIESTO DE SOLIDEZ Y ACCIONES */}
      <section className="pt-4 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-zinc-950 text-white p-8 sm:p-14 border border-zinc-800 text-center space-y-6 relative overflow-hidden shadow-2xl">
            {/* Efecto de luz ambiental */}
            <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>

            <div className="max-w-3xl mx-auto space-y-4 relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20">
                COMPROMISO DE DIRECCIÓN
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                «Las organizaciones sólidas no se improvisan.<br className="hidden sm:inline" /> Se construyen desde dentro, con método y evidencia.»
              </h3>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Descubre cómo nuestro modelo de gobernanza y arquitectura operativa puede proteger y escalar los resultados de tu compañía.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/modelo"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-black font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
                >
                  <span>Explorar el Modelo MOK</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </Link>

                <Link
                  to="/contacto"
                  className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/10 text-white font-bold text-sm border border-zinc-700 transition-all inline-flex items-center gap-2"
                >
                  <span>Conversar con Dirección Ejecutiva</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
