import { Link } from 'react-router-dom';
import LinkedInIcon from './LinkedInIcon';
import { COMPANY_INFO } from '../data/company';

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0D11] text-slate-300 font-sans z-30">
      
      {/* Curved Smooth Transition Overlapping Previous Section */}
      <div className="w-full overflow-hidden leading-none -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 relative z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-16 lg:h-20 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,38 C340,78 980,12 1440,30 L1440,80 L0,80 Z"
            fill="#0B0D11"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 sm:pb-10 relative z-10">
        
        {/* Compact Columns Layout matching reference */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-10 pb-8 border-b border-zinc-900/80">
          
          {/* Brand & Accreditation Column */}
          <div className="lg:w-64 shrink-0 space-y-2">
            <Link
              to="/"
              className="inline-block focus:outline-none hover:opacity-90 transition-opacity"
              aria-label="KONVERXA Home"
            >
              <img
                src="/Logofooter.png"
                alt="KONVERXA"
                className="h-10 sm:h-12 w-auto max-w-full object-contain object-left translate-x-3"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('logofooter.png')) {
                    target.src = '/logofooter.png';
                  }
                }}
              />
            </Link>
          </div>

          {/* Navigation Links in 3 Columns: NAVEGACIÓN, KONVERXA, CONTACTO */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 flex-1 max-w-2xl">
            
            {/* NAVEGACIÓN */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
                NAVEGACIÓN
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <Link to="/modelo" className="hover:text-white transition-colors block">
                    Modelo
                  </Link>
                </li>
                <li>
                  <Link to="/servicios" className="hover:text-white transition-colors block">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link to="/industrias" className="hover:text-white transition-colors block">
                    Industrias
                  </Link>
                </li>
                <li>
                  <Link to="/nosotros" className="hover:text-white transition-colors block">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/trabaja-con-nosotros" className="hover:text-white transition-colors block">
                    Carreras
                  </Link>
                </li>
              </ul>
            </div>

            {/* KONVERXA */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
                KONVERXA
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <Link to="/nosotros" className="hover:text-white transition-colors block">
                    Quiénes somos
                  </Link>
                </li>
                <li>
                  <Link to="/nosotros" className="hover:text-white transition-colors block">
                    Certificaciones
                  </Link>
                </li>
                <li>
                  <Link to="/trabaja-con-nosotros" className="hover:text-white transition-colors block">
                    Trabaja con nosotros
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTACTO */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
                CONTACTO
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <a
                    href="mailto:comercial@konverxa.com"
                    className="hover:text-white transition-colors block text-slate-300"
                  >
                    comercial@konverxa.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+573226282039"
                    className="hover:text-white transition-colors block"
                  >
                    Teléfono +57 322 628 2039
                  </a>
                </li>
                <li className="text-slate-400">
                  Pereira · Colombia
                </li>
              </ul>
            </div>

          </div>

          {/* Subtle Vertical Divider (Desktop) */}
          <div className="hidden lg:block w-px h-20 bg-zinc-800 self-center" />

          {/* Síguenos Social Block */}
          <div className="flex items-center gap-3 shrink-0 self-start lg:self-center">
            <span className="text-white font-bold text-xs sm:text-sm">
              Síguenos
            </span>
            <a
              href={COMPANY_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#0A66C2] hover:bg-[#004182] text-white flex items-center justify-center transition-all duration-300 shadow-md group hover:scale-105"
              title="LinkedIn Oficial KONVERXA"
              aria-label="LinkedIn Oficial KONVERXA"
            >
              <LinkedInIcon className="w-4 h-4 text-white" />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Legal Links & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div className="flex items-center gap-5">
            <Link to="/politica-de-privacidad" className="hover:text-slate-300 transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/politica-de-cookies" className="hover:text-slate-300 transition-colors">
              Política de Cookies
            </Link>
            <span className="hidden md:inline text-zinc-700">|</span>
            <span className="hidden md:inline text-slate-500">Pereira, Colombia</span>
          </div>

          <div>
            © KONVERXA {new Date().getFullYear()}. Todos los derechos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
}
