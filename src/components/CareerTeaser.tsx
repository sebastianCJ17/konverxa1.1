import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CAREER_BENEFITS } from '../data/jobs';
import { ArrowRight, Users, TrendingUp, Award, CheckCircle2, GraduationCap, Target, Briefcase } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap, Target, Award, TrendingUp, Users
};

export default function CareerTeaser() {
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden font-sans border-t border-slate-200">
      
      {/* Background Subtle Accent Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Header Block - No competing CTA on the top right */}
        <div className="space-y-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-widest shadow-2xs">
            <Users className="w-3.5 h-3.5 text-slate-600" /> Oportunidades de Carrera
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-black">
            Las carreras también se construyen.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-4xl pt-1 text-justify">
            Hacer bien el trabajo no debería depender de esfuerzos excepcionales. En KONVERXA el método, el criterio y las responsabilidades están definidos para que hacer bien el trabajo <span className="text-slate-900 font-semibold">sea lo habitual, no lo extraordinario</span>. Y desde ahí empiezas a construir tu carrera.
          </p>
        </div>

        {/* Benefits Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAREER_BENEFITS.map((item, idx) => {
            const IconComp = ICON_MAP[item.icon] || Users;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-black/30 hover:bg-white transition-all duration-300 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-black text-white border border-zinc-800 flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-sm font-black text-black tracking-wider uppercase mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Part 2: Cultura de Trabajo y Desarrollo Humano */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200">
          
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-black">
              CULTURA DE TRABAJO y DESARROLLO HUMANO
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
              La exigencia viene acompañada de método. Cada persona cuenta con formación continua, criterios claros de evaluación y una vía definida para desarrollarse dentro de la organización.
            </p>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Formación continua a través de la Universidad Konverxa.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Evaluación periódica del desempeño con criterios conocidos.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Las posiciones de responsabilidad se abren primero internamente.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="/cultura1.png"
              alt="Cultura de Trabajo KONVERXA"
              className="rounded-2xl object-cover h-48 sm:h-56 w-full border border-slate-200 shadow-md"
            />
            <img
              src="/cultura2.png"
              alt="Desarrollo Humano KONVERXA"
              className="rounded-2xl object-cover h-48 sm:h-56 w-full border border-slate-200 shadow-md mt-6"
            />
          </div>

        </div>

        {/* Part 3: Banner moved from Footer to Bloque 7 per Page 8 */}
        <div className="p-8 sm:p-10 rounded-3xl bg-black text-white border border-zinc-800 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-slate-300 text-xs font-semibold">
              <Briefcase className="w-3.5 h-3.5 text-slate-400" /> Oportunidades de Carrera
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              ¿Buscas transformar tu futuro profesional?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              KONVERXA, un lugar para aprender, aportar y desarrollarse con criterio.
            </p>
          </div>
          <Link
            to="/trabaja-con-nosotros"
            className="whitespace-nowrap px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-black font-bold transition-all border border-slate-200 shadow-lg flex items-center gap-3 text-sm shrink-0 group"
          >
            <span>Trabaja con nosotros</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
