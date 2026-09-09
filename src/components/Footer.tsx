import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-slate-200 border-t border-zinc-900 relative pt-12 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Footer Grid - Aligned with Logo and Centered */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-zinc-900 items-start">
          
          {/* Col 1: Logo Oficial Footer (Alineado con los títulos de las columnas) */}
          <div className="md:col-span-4 flex items-start">
            <Link
              to="/"
              className="inline-block focus:outline-none hover:opacity-90 transition-opacity"
              aria-label="KONVERXA Home"
            >
              <img
                src="/Logofooter.png"
                alt="KONVERXA"
                className="h-14 sm:h-16 lg:h-18 w-auto max-w-full object-contain object-left"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('logofooter.png')) {
                    target.src = '/logofooter.png';
                  }
                }}
              />
            </Link>
          </div>

          {/* Col 2: Navegación */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-zinc-800 pb-2 inline-block">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors block">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-white transition-colors block">
                  Servicios BPO & CX
                </Link>
              </li>
              <li>
                <Link to="/industrias" className="hover:text-white transition-colors block">
                  Sectores e Industrias
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-white transition-colors block">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/trabaja-con-nosotros" className="hover:text-white transition-colors block">
                  Trabaja con Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-white transition-colors block">
                  Contacto Corporativo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacto Directo */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-zinc-800 pb-2 inline-block">
              Contacto Directo
            </h4>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Pereira, Colombia.</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href="mailto:comercial@konverxa.com"
                  className="hover:text-white transition-colors font-medium"
                >
                  comercial@konverxa.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href="tel:+573226282039"
                  className="hover:text-white transition-colors font-medium"
                >
                  +57 322 628 2039
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} KONVERXA BPO & CX Solutions. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/politica-de-privacidad" className="hover:text-slate-300 transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/politica-de-cookies" className="hover:text-slate-300 transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
