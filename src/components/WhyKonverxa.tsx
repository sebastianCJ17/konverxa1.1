import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyKonverxa() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-[#0e1622] text-white overflow-hidden font-sans border-t border-slate-800">
      
      {/* High-Resolution Operations Center Background Image with Dark Contrast Gradients */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2000&q=85"
          alt="Centro de Operaciones y Contact Center KONVERXA"
          className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] saturate-[1.05]"
        />
        {/* Deep navy/black gradient overlay on the left for maximum text contrast as in the reference design */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d141e] via-[#0d141e]/90 to-[#0d141e]/30 sm:via-[#0d141e]/85 sm:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d141e] via-transparent to-[#0d141e]/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-28">
        <div className="max-w-2xl lg:max-w-3xl space-y-8">
          
          {/* Main Title with Refined Gray Accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Más de 20 años gestionando negocios, equipos y clientes dieron forma a nuestro modelo operativo<span className="text-slate-400">.</span>
            </h2>
            <div className="w-12 h-0.5 bg-slate-400"></div>
          </motion.div>

          {/* Continuous Narrative Text - No separated numbers 01/02 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5 text-slate-200 text-base sm:text-lg leading-relaxed font-normal max-w-2xl pt-2"
          >
            <p>
              Un recorrido que nos enseñó a reconocer dónde comienzan a perder consistencia los negocios, cómo se manifiesta en las operaciones y que se necesita para sostener su desempeño.
            </p>
            <p>
              Hoy, esa experiencia se traduce en operaciones mejor organizadas, decisiones fundamentadas y un desempeño que se sostiene sin perder coherencia operativa, organizacional ni ética.
            </p>
          </motion.div>

          {/* Action Button in Gray Tone */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4"
          >
            <Link
              to="/modelo"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-200 hover:bg-white text-slate-950 font-bold text-sm transition-all duration-300 shadow-md hover:shadow-xl group"
            >
              <span>Conoce nuestro modelo operativo</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
