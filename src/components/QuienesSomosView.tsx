import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Cpu } from 'lucide-react';

export default function QuienesSomosView() {
  return (
    <div className="bg-white text-slate-900 font-sans">
      
      {/* 1. SECCIÓN PRINCIPAL EDITORIAL: PROPÓSITO Y NARRATIVA INSTITUCIONAL */}
      <section className="pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Fila superior: Categoría y Titular */}
          <div className="max-w-5xl mx-auto text-center space-y-4 pb-12 border-b border-slate-200">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-800 border border-zinc-300 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              PROPÓSITO INSTITUCIONAL
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight text-center">
              Transformamos la Operación en una Ventaja Competitiva
            </h2>
          </div>

          {/* Fila de Contenido: Narrativa y Fotografía Editorial */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
            
            {/* Columna Izquierda: Texto Narrativo con Cita Sobria */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Cita destacada tipo editorial */}
              <blockquote className="border-l-2 border-slate-900 pl-6 py-1">
                <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-relaxed">
                  «Nuestra propuesta trasciende el esquema convencional de outsourcing. Nos involucramos activamente en la estrategia de nuestros clientes para sostener su promesa de negocio.»
                </p>
              </blockquote>

              {/* Párrafos explicativos limpios y altamente legibles */}
              <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                <p>
                  Fundada bajo los más altos estándares de consultoría internacional, <strong className="text-slate-900 font-semibold">KONVERXA</strong> opera centros de interacción inteligentes con presencia regional en América Latina y conectividad global.
                </p>
                <p>
                  Nuestra organización nace de más de veinte años de experiencia en la gestión directa de operaciones, equipos de alto rendimiento y tecnología aplicada. Traducimos ese recorrido en un modelo propio, gobernado por criterios explícitos y comprobable mediante evidencia continua, no mediante promesas teóricas.
                </p>
                <p>
                  No suministramos personal desarticulado ni medimos nuestro éxito únicamente por la ocupación de puestos o el tiempo de llamada. Desarrollamos la capacidad organizacional que permite a nuestros clientes cumplir y sostener su promesa comercial en cada punto de contacto.
                </p>
              </div>

            </div>

            {/* Columna Derecha: Imagen Limpia y Auténtica */}
            <div className="lg:col-span-5 space-y-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src="/images/centro-operaciones-konverxa.jpg"
                  alt="Centro de Operaciones KONVERXA"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              <p className="text-xs text-slate-500 font-medium text-right">
                Centro de Operaciones e Interacción · KONVERXA
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 2. CIFRAS INSTITUCIONALES SOBRIAS (TIPOGRAFÍA PURA Y LIMPIA) */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            <div className="space-y-2 text-center">
              <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight block">
                20+
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                Años de Trayectoria
              </span>
              <p className="text-sm text-slate-600 leading-snug">
                Experiencia consolidada en la gestión de operaciones y centros de contacto.
              </p>
            </div>

            <div className="space-y-2 text-center">
              <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight block">
                03
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                Sedes Internacionales
              </span>
              <p className="text-sm text-slate-600 leading-snug">
                Presencia y hubs operativos en Colombia, Perú y España.
              </p>
            </div>

            <div className="space-y-2 text-center">
              <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight block">
                ISO
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                Norma 27001 & PCI-DSS
              </span>
              <p className="text-sm text-slate-600 leading-snug">
                Seguridad de la información, protección de datos y cumplimiento riguroso.
              </p>
            </div>

            <div className="space-y-2 text-center">
              <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight block">
                100%
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                Basado en Evidencia
              </span>
              <p className="text-sm text-slate-600 leading-snug">
                Gobernanza medible y criterios objetivos en cada decisión operativa.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. TRES PILARES FUNDAMENTALES (DISPOSICIÓN EDITORIAL EN COLUMNAS ABIERTAS) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-800 border border-zinc-300 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              PILARES DE OPERACIÓN
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight text-center">
              Los Fundamentos que Sostienen Nuestro Servicio
            </h3>
            <p className="text-base text-slate-600 leading-relaxed max-w-3xl mx-auto text-center">
              Estructuramos nuestras operaciones para garantizar consistencia, seguridad y continuidad sin importar la complejidad del negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            
            {/* Pilar 1 */}
            <div className="border-t-2 border-slate-900 pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-slate-900" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Presencia Internacional
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-950">
                Atención Multilingüe y Cobertura Regional
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Operamos desde Colombia, Perú y España con capacidad de atención ininterrumpida en español, inglés y portugués. Esto nos permite cubrir las necesidades de América Latina, Estados Unidos y Europa bajo un mismo estándar unificado de gestión.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="border-t-2 border-slate-900 pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-slate-900" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Cumplimiento y Calidad
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-950">
                Seguridad de la Información y Calidad
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Nuestra infraestructura tecnológica y nuestros procesos operativos están avalados por certificaciones ISO 27001, ISO 9001 y cumplimiento PCI-DSS, garantizando confidencialidad absoluta, trazabilidad y protección total de los datos de tus usuarios.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="border-t-2 border-slate-900 pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-slate-900" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Tecnología e Inteligencia
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-950">
                Centros de Interacción Inteligentes
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Articulamos analítica en tiempo real, automatización en procesos repetitivos y talento humano capacitado en la Universidad Konverxa, logrando altos índices de resolución al primer contacto y fortaleciendo la lealtad con tu marca.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CIERRE INSTITUCIONAL SOBRIO Y ELEGANTE */}
      <section className="pb-24 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-b border-slate-200 py-16 lg:py-20 text-center space-y-6">
            
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-900 tracking-tight max-w-4xl mx-auto leading-snug">
              «Las organizaciones sólidas no se improvisan. Se construyen desde dentro, con método, disciplina y evidencia.»
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/modelo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold transition-colors"
              >
                <span>Conocer Nuestro Modelo Operativo</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-sm font-semibold border border-slate-300 transition-colors"
              >
                <span>Contactar con Dirección</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
