import { motion } from 'motion/react';
import { Users, Clock, Globe, Building2, Briefcase, Headphones } from 'lucide-react';

export const STATS_ITEMS = [
  {
    id: 'empleados',
    value: '+500',
    label: 'Empleados',
    description: 'Talento humano especializado y capacitado',
    icon: Users,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'experiencia',
    value: '+20',
    label: 'Años Experiencia',
    description: 'Trayectoria sólida en gestión operativa y BPO',
    icon: Clock,
    color: 'from-amber-600 to-orange-600'
  },
  {
    id: 'paises',
    value: '3',
    label: 'Países',
    description: 'Presencia regional multilocación',
    icon: Globe,
    color: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'ciudades',
    value: '4',
    label: 'Ciudades',
    description: 'Hubs operativos estratégicos',
    icon: Building2,
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'clientes',
    value: '+25',
    label: 'Clientes',
    description: 'Empresas líderes confían en nuestro estándar',
    icon: Briefcase,
    color: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'posiciones',
    value: '750',
    label: 'Posiciones',
    description: 'Capacidad instalada y escalabilidad inmediata',
    icon: Headphones,
    color: 'from-rose-600 to-red-600'
  }
];

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
      {STATS_ITEMS.map((stat, idx) => {
        const IconComp = stat.icon;
        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-400/80 hover:shadow-lg transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
          >
            {/* Top Icon with subtle accent */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                <IconComp className="w-5 h-5 text-slate-100" />
              </div>
            </div>

            {/* Number Value - perfectly aligned baseline */}
            <div className="h-9 sm:h-11 flex items-baseline">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight whitespace-nowrap leading-none">
                {stat.value}
              </span>
            </div>

            {/* Label - uniform fixed height for 1 and 2 line titles */}
            <div className="mt-2 min-h-[2.25rem] sm:min-h-[2.5rem] flex items-center">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 leading-tight">
                {stat.label}
              </h3>
            </div>

            {/* Description - aligned start position across all cards */}
            <div className="mt-1.5 flex-1 min-h-[2.75rem] flex items-start">
              <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
                {stat.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
