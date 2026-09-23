import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Globe, ShieldCheck, Cpu, Target, CheckCircle2, Building2, Users, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { COMPANY_INFO } from '../data/company';

const VALUE_ICONS: Record<string, any> = {
  ShieldCheck,
  Target,
  Users,
  CheckCircle2,
  Building2
};

export default function QuienesSomosView() {
  return (
    <div className="bg-white text-slate-900 font-sans">
      
      {/* BLOQUE 01: POSICIÓN INSTITUCIONAL & NARRATIVA EDITORIAL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Fila superior: Categoría y Titular con separador inferior */}
          <div className="text-center space-y-4 pb-12 border-b border-slate-200">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-800 border border-zinc-300 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              POSICIÓN INSTITUCIONAL
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight text-center max-w-5xl mx-auto">
              Hacemos de la forma de operar una ventaja para el negocio.
            </h2>
          </div>

          {/* Frase destacada solamente en la izquierda con raya/separador a la izquierda */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="border-l-2 border-slate-900 pl-6 py-1">
                <p className="text-xl sm:text-2xl md:text-[26px] font-medium text-slate-900 leading-relaxed">
                  Una propuesta que trasciende la ejecución de procesos. Organizamos, dirigimos y gestionamos cada operación para que la promesa de negocio pueda sostenerse.
                </p>
              </div>
            </div>
          </div>

          {/* Fila de Contenido: Narrativa y Fotografía Editorial alineadas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Columna Izquierda: Texto Narrativo */}
            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                KONVERXA es un operador BPO y Contact Center construido sobre más de veinte años gestionando negocios, operaciones, equipos y clientes.
              </p>
              <p>
                Ese recorrido nos enseñó a reconocer dónde una operación empieza a perder consistencia, cómo se manifiesta antes de afectar los resultados y qué necesita para sostener su desempeño.
              </p>
              <p>
                De ese aprendizaje nace un modelo propio que convierte la evidencia de la operación en criterio de gestión y ese criterio en decisiones sobre cómo organizar, dirigir y controlar la ejecución.
              </p>
              <p>
                Porque asumir una operación va más allá de disponer de personas, tecnología o capacidad. Consiste en construir las condiciones para que evolucione, mantenga su consistencia y sostenga sus resultados en el tiempo.
              </p>
            </div>

            {/* Columna Derecha: Imagen Limpia sin pie de foto, alineada con el texto */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src="/images/centro-operaciones-konverxa.jpg"
                  alt="Centro de Operaciones KONVERXA"
                  className="w-full h-80 sm:h-96 lg:h-[400px] object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* BLOQUE 02: CIFRAS CON SÍMBOLO + POR DELANTE */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            <div className="space-y-2 text-center">
              <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight block">
                +20
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
                +03
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

      {/* BLOQUE 03: NUESTROS FUNDAMENTOS (TRAÍDO DIRECTO DEBAJO DE LAS CIFRAS) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionTitle
            badge="PRINCIPIOS DE GESTIÓN"
            title="Nuestros Fundamentos"
            subtitle="Son los 5 criterios con los que trabajamos y con los que evaluamos a las organizaciones que acompañamos."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {COMPANY_INFO.values.map((val, idx) => {
              const IconComp = VALUE_ICONS[val.icon] || Target;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-7 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between space-y-5 hover:border-black/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 text-black border border-slate-300 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-black tracking-tight">{val.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{val.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOQUE 04: CAPACIDAD OPERATIVA EN 3 COLUMNAS ABIERTAS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-800 border border-zinc-300 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              CAPACIDAD OPERATIVA
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight text-center">
              Una operación necesita más que capacidad para sostenerse.
            </h3>
            <p className="text-base text-slate-600 leading-relaxed max-w-3xl mx-auto text-center">
              Cobertura, control y tecnología se integran para producir una ejecución consistente y responder a las necesidades de cada operación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            
            {/* COLUMNA 01 */}
            <div className="border-t-2 border-slate-900 pt-6 space-y-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-slate-900" />
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  PRESENCIA y COBERTURA
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-950">
                Una operación preparada para distintos mercados
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Una operación puede desplegarse en varias ubicaciones sin que cambie la forma de gestionarla. La geografía condiciona el despliegue, no el criterio.
              </p>
            </div>

            {/* COLUMNA 02 */}
            <div className="border-t-2 border-slate-900 pt-6 space-y-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-slate-900" />
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  SEGURIDAD y CALIDAD
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-950">
                Control integrado desde el diseño
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                La seguridad de la información, la calidad y la trazabilidad se incorporan desde el diseño de los procesos y forman parte de los mecanismos de control de cada operación.
              </p>
            </div>

            {/* COLUMNA 03 */}
            <div className="border-t-2 border-slate-900 pt-6 space-y-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-slate-900" />
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  TECNOLOGÍA Y AUTOMATIZACIÓN
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-950">
                Tecnología al servicio de la ejecución
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Integramos analítica, automatización e inteligencia artificial allí donde fortalecen la eficiencia, el control y la capacidad de respuesta de la operación.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BLOQUE 05: NUESTRA FILOSOFÍA (TRAÍDO DIRECTO DE MISIÓN Y VISIÓN) */}
      <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          {/* Cabecera centrada y justificada con el título */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-800 border border-zinc-300 shadow-xs mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              DECLARACIONES INSTITUCIONALES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Nuestra Filosofía
            </h2>
            
            {/* Bloque de Convicción y Propósito justificado y centrado con el título */}
            <div className="max-w-3xl mx-auto pt-4 text-center">
              <div className="space-y-2 pb-8 text-center">
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block text-center">
                  QUÉ CREEMOS — Convicción
                </span>
                <p className="text-lg sm:text-xl font-normal text-slate-950 leading-snug text-center">
                  «Las organizaciones sólidas no se improvisan. Se construyen»
                </p>
              </div>

              <div className="space-y-2 pt-8 border-t border-slate-200 text-center">
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block text-center">
                  POR QUÉ EXISTIMOS — Propósito
                </span>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal text-center">
                  Ayudar a las organizaciones a construir la solidez necesaria para cerrar la brecha entre lo que prometen y lo que pueden sostener, alineando su promesa, sus personas y su capacidad.
                </p>
              </div>
            </div>
          </div>

          {/* 2 BLOQUES CON FOTO DE LONGITUD Y CONTENIDO VERTICAL A LA DERECHA */}
          <div className="space-y-12 max-w-6xl mx-auto">
            
            {/* BLOQUE 1: MISIÓN */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:border-black/30 hover:shadow-md transition-all duration-300"
            >
              {/* Columna Izquierda: Foto con longitud vertical */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[460px] bg-slate-200 overflow-hidden">
                <img
                  src="/images/mision-portrait.jpg"
                  alt="Propósito y convicción institucional KONVERXA"
                  className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden"></div>
              </div>

              {/* Columna Derecha: Información en vertical */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black text-white">
                    QUÉ HACEMOS
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                    Misión
                  </h3>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-2">
                    Hacemos que las organizaciones cumplan y sostengan su promesa de negocio. Desarrollamos la capacidad organizacional necesaria para generar resultados consistentes, evolucionar con solidez y mantener su desempeño desde dentro, de manera estructural.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Enfoque Operacional
                  </span>
                  <p className="text-sm font-semibold text-slate-900">
                    Capacidad organizacional, solidez estructural y consistencia en el tiempo.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* BLOQUE 2: VISIÓN */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:border-black/30 hover:shadow-md transition-all duration-300"
            >
              {/* Columna Izquierda: Foto con longitud vertical */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[460px] bg-slate-200 overflow-hidden">
                <img
                  src="/images/vision-strategic.jpg"
                  alt="Visión estratégica institucional KONVERXA"
                  className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden"></div>
              </div>

              {/* Columna Derecha: Información en vertical */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black text-white">
                    QUÉ ASPIRAMOS A DEMOSTRAR
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                    Visión
                  </h3>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-2">
                    Convertirnos en la evidencia de que es posible construir organizaciones sólidas, capaces de crecer y afrontar nuevas etapas de complejidad sin perder la coherencia de sus decisiones, la confianza en sus relaciones ni los fundamentos que sostienen su evolución.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Aspiración Estratégica
                  </span>
                  <p className="text-sm font-semibold text-slate-900">
                    Crecimiento sostenible, coherencia en las decisiones y confianza indestructible.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* BLOQUE 06: CIERRE CON FRASE CENTRADA Y CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="w-full text-center text-xl sm:text-2xl lg:text-3xl font-light text-slate-900 tracking-tight max-w-5xl mx-auto whitespace-normal lg:whitespace-nowrap leading-snug">
              «Las organizaciones sólidas no se improvisan. Se construyen»
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
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
