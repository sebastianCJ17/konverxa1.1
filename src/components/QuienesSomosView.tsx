import { Link } from 'react-router-dom';
import { Globe, ShieldCheck, Cpu } from 'lucide-react';

export default function QuienesSomosView() {
  return (
    <div className="bg-white text-slate-900 font-sans">
      
      {/* BLOQUE 02: POSICIÓN INSTITUCIONAL & NARRATIVA EDITORIAL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Fila superior: Categoría y Titular */}
          <div className="max-w-5xl mx-auto text-center space-y-4 pb-12 border-b border-slate-200">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-800 border border-zinc-300 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              POSICIÓN INSTITUCIONAL
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight text-center">
              Hacemos de la forma de operar una ventaja para el negocio.
            </h2>
          </div>

          {/* Fila de Contenido: Narrativa y Fotografía Editorial */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Columna Izquierda: Texto Narrativo con Cita Sobria */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Cita destacada tipo editorial */}
              <blockquote className="border-l-2 border-slate-900 pl-6 py-1">
                <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-relaxed">
                  Una propuesta que trasciende la ejecución de procesos. Organizamos, dirigimos y gestionamos cada operación para que la promesa de negocio pueda sostenerse.
                </p>
              </blockquote>

              {/* Párrafos explicativos limpios y altamente legibles */}
              <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
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

      {/* BLOQUE 03: CIFRAS CON SÍMBOLO + POR DELANTE */}
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

      {/* BLOQUE 03 B: CAPACIDAD OPERATIVA EN 3 COLUMNAS ABIERTAS */}
      <section className="py-20 bg-white">
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
            <div className="border-t-2 border-slate-900 pt-6 space-y-4">
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
            <div className="border-t-2 border-slate-900 pt-6 space-y-4">
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
            <div className="border-t-2 border-slate-900 pt-6 space-y-4">
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

      {/* CIERRE: FRASE EN 1 SOLA LÍNEA Y CTA */}
      <section className="pb-24 pt-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-b border-slate-200 py-16 lg:py-20 text-center space-y-6">
            
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-900 tracking-tight max-w-5xl mx-auto whitespace-normal lg:whitespace-nowrap leading-snug">
              «Las organizaciones sólidas no se improvisan. Se construyen»
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-bold text-sm shadow-md transition-all border border-zinc-800"
              >
                <span>HABLEMOS DE TU NEGOCIO</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
