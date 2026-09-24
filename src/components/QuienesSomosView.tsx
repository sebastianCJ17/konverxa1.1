import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Globe, ShieldCheck, Cpu, Target, CheckCircle2, Building2, Users, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import FilosofiaDeclaraciones from './FilosofiaDeclaraciones';
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

          {/* Fila de Contenido: Narrativa y Fotografía Editorial alineadas y justificadas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
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

            {/* Columna Derecha: Imagen Limpia sin pie de foto, centrada y justificada con el texto */}
            <div className="lg:col-span-5 flex items-center justify-center self-stretch">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm w-full h-72 sm:h-80 lg:h-full min-h-[280px] relative">
                <img
                  src="/quienessomos.jpg"
                  alt="KONVERXA - Más de 20 años de trayectoria"
                  className="absolute inset-0 w-full h-full object-cover object-center"
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
            
            <div className="flex flex-col items-center text-center justify-start space-y-2.5 max-w-[260px] mx-auto w-full">
              <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight block text-center w-full">
                +20
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block text-center w-full">
                Años de Trayectoria
              </span>
              <p className="text-sm text-slate-600 leading-relaxed text-center mx-auto max-w-[240px]">
                Experiencia consolidada en la gestión de operaciones y centros de contacto.
              </p>
            </div>

            <div className="flex flex-col items-center text-center justify-start space-y-2.5 max-w-[260px] mx-auto w-full">
              <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight block text-center w-full">
                +03
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block text-center w-full">
                Sedes Internacionales
              </span>
              <p className="text-sm text-slate-600 leading-relaxed text-center mx-auto max-w-[240px]">
                Presencia y hubs operativos en Colombia, Perú y España.
              </p>
            </div>

            <div className="flex flex-col items-center text-center justify-start space-y-2.5 max-w-[260px] mx-auto w-full">
              <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight block text-center w-full">
                ISO
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block text-center w-full">
                Norma 27001 & PCI-DSS
              </span>
              <p className="text-sm text-slate-600 leading-relaxed text-center mx-auto max-w-[240px]">
                Seguridad de la información, protección de datos y cumplimiento riguroso.
              </p>
            </div>

            <div className="flex flex-col items-center text-center justify-start space-y-2.5 max-w-[260px] mx-auto w-full">
              <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight block text-center w-full">
                100%
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block text-center w-full">
                Basado en Evidencia
              </span>
              <p className="text-sm text-slate-600 leading-relaxed text-center mx-auto max-w-[240px]">
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

      {/* BLOQUE 05 & 06: NUESTRA FILOSOFÍA & CIERRE INSTITUCIONAL */}
      <FilosofiaDeclaraciones />

    </div>
  );
}
