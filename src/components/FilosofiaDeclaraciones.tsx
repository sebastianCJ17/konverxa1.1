import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FilosofiaDeclaraciones() {
  return (
    <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

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
          <div className="max-w-4xl mx-auto pt-6 text-center">
            <div className="space-y-4 pb-12 text-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block text-center">
                QUÉ CREEMOS — Convicción
              </span>
              <p className="w-full text-center text-xl sm:text-2xl lg:text-3xl font-light text-slate-900 tracking-tight max-w-5xl mx-auto whitespace-normal leading-snug">
                «Las organizaciones sólidas no se improvisan. Se construyen»
              </p>
            </div>

            <div className="space-y-4 pt-12 border-t border-slate-200 text-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block text-center">
                POR QUÉ EXISTIMOS — Propósito
              </span>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal text-center max-w-3xl mx-auto">
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
                src="/mision.jpg"
                alt="Operador de línea directa con auriculares trabajando en una computadora en la oficina Foto de Stock, Incluyendo: adulto y asistente - Envato"
                className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden"></div>
            </div>

            {/* Columna Derecha: Información en vertical */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black text-white">
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black text-white">
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
                  Una organización que puede crecer sin que su forma de decidir cambie.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* CIERRE: FRASE EN 1 SOLA LÍNEA Y CTA */}
        <div className="border-t border-b border-slate-200 py-16 lg:py-20 text-center space-y-6">
          <p className="w-full text-center text-xl sm:text-2xl lg:text-3xl font-light text-slate-900 tracking-tight max-w-5xl mx-auto whitespace-normal leading-snug">
            «Las organizaciones sólidas no se improvisan. Se construyen»
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-normal text-sm shadow-md transition-all border border-zinc-800"
            >
              <span>Hablemos de tu Negocio</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
