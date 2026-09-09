import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isSolid = isScrolled || isHovered || mobileMenuOpen;

  // Header is transparent at top and transparent black (80%) on scroll with backdrop blur
  const navHeaderClass = isSolid
    ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg py-0 sm:py-0.5'
    : 'bg-black/40 hover:bg-black/75 backdrop-blur-xs border-b border-white/10 py-0 sm:py-0.5';

  const chevronClass = (dropdownName: string) => {
    const isOpen = activeDropdown === dropdownName;
    return isOpen ? 'rotate-180 text-white transition-transform duration-200' : 'text-slate-400 transition-transform duration-200';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${navHeaderClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveDropdown(null);
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo with maximum visual prominence and tight vertical bounds */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none -my-4 sm:-my-6 hover:opacity-95 transition-opacity" aria-label="KONVERXA Home">
            <BrandLogo imgHeight="h-24 sm:h-28 lg:h-32" />
          </Link>

          {/* Desktop Navigation Menu - Uppercase with contained spacing as per document */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            
            {/* 1. MODELO Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('modelo')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/modelo"
                className="group relative flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-200/90 hover:text-white py-2 transition-colors duration-200"
              >
                <span>MODELO</span>
                <ChevronDown className={`w-3.5 h-3.5 ${chevronClass('modelo')}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>

              <AnimatePresence>
                {activeDropdown === 'modelo' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 min-w-[280px] w-max mt-1 bg-zinc-950/95 border border-zinc-800 rounded-2xl p-2.5 shadow-2xl text-slate-100 backdrop-blur-xl"
                  >
                    <div className="flex flex-col space-y-1 font-sans">
                      <Link
                        to="/modelo#vision-general"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Visión General
                      </Link>
                      <Link
                        to="/modelo#excelencia-integral"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Excelencia Integral
                      </Link>
                      <Link
                        to="/modelo#onex"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        OneX · Lectura y evidencia
                      </Link>
                      <Link
                        to="/modelo#integralx"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        CIK · Ciclo de Intervención
                      </Link>
                      <Link
                        to="/modelo#integralx"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        IntegraIX · Accredited
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. SERVICIOS Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('servicios')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/servicios"
                className="group relative flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-200/90 hover:text-white py-2 transition-colors duration-200"
              >
                <span>SERVICIOS</span>
                <ChevronDown className={`w-3.5 h-3.5 ${chevronClass('servicios')}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>

              <AnimatePresence>
                {activeDropdown === 'servicios' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 min-w-[300px] w-max mt-1 bg-zinc-950/95 border border-zinc-800 rounded-2xl p-2.5 shadow-2xl text-slate-100 backdrop-blur-xl"
                  >
                    <div className="flex flex-col space-y-1 font-sans">
                      <Link
                        to="/servicios#atencion-al-cliente"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Atención y Experiencia Cliente
                      </Link>
                      <Link
                        to="/servicios#ventas-telemarketing"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Ventas y Fidelización
                      </Link>
                      <Link
                        to="/servicios#backoffice-bpo"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        BO y Gestión de procesos
                      </Link>
                      <Link
                        to="/servicios#omnicanalidad-bots"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Capacidades Integradas
                      </Link>
                      <Link
                        to="/servicios#cobranzas"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        RRHH y Apoyo Psicosocial
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. INDUSTRIA Dropdown - Single Vertical Column (No two columns) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('industria')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/industrias"
                className="group relative flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-200/90 hover:text-white py-2 transition-colors duration-200"
              >
                <span>INDUSTRIA</span>
                <ChevronDown className={`w-3.5 h-3.5 ${chevronClass('industria')}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>

              <AnimatePresence>
                {activeDropdown === 'industria' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 min-w-[310px] w-max mt-1 bg-zinc-950/95 border border-zinc-800 rounded-2xl p-2.5 shadow-2xl text-slate-100 backdrop-blur-xl"
                  >
                    <div className="flex flex-col space-y-1 font-sans">
                      <Link
                        to="/industrias/telecomunicaciones"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Telecomunicaciones
                      </Link>
                      <Link
                        to="/industrias/banca-fintech"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Banca y Seguros Financieros
                      </Link>
                      <Link
                        to="/industrias/retail-ecommerce"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Retail y Comercio Electrónico
                      </Link>
                      <Link
                        to="/industrias/tecnologia"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Tecnología y Negocios Digitales
                      </Link>
                      <Link
                        to="/industrias/seguros"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Seguros
                      </Link>
                      <Link
                        to="/industrias/salud"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Salud y Farmacia
                      </Link>
                      <Link
                        to="/industrias/logistica"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Movilidad y Transporte
                      </Link>
                      <Link
                        to="/industrias/energia"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Energía y Servicios Públicos
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. NOSOTROS Dropdown - Vertical list matching image */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('nosotros')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/nosotros"
                className="group relative flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-200/90 hover:text-white py-2 transition-colors duration-200"
              >
                <span>NOSOTROS</span>
                <ChevronDown className={`w-3.5 h-3.5 ${chevronClass('nosotros')}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>

              <AnimatePresence>
                {activeDropdown === 'nosotros' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 min-w-[280px] w-max mt-1 bg-zinc-950/95 border border-zinc-800 rounded-2xl p-2.5 shadow-2xl text-slate-100 backdrop-blur-xl"
                  >
                    <div className="flex flex-col space-y-1 font-sans">
                      <Link
                        to="/nosotros#quienes-somos"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Quienes somos
                      </Link>
                      <Link
                        to="/nosotros#fundamentos"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Fundamentos Corporativos
                      </Link>
                      <Link
                        to="/nosotros#quienes-somos"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Visión / Misión
                      </Link>
                      <Link
                        to="/nosotros#quienes-somos"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Capacidades
                      </Link>
                      <Link
                        to="/nosotros#certificaciones"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Certificaciones
                      </Link>
                      <Link
                        to="/contacto"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 rounded-xl text-[14px] sm:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        Ubicación
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CONTÁCTANOS Button */}
            <Link
              to="/contacto"
              className="px-5 py-2 rounded-lg bg-transparent hover:bg-slate-100 text-slate-100 hover:text-black border border-slate-300/40 text-xs font-bold uppercase tracking-widest transition-all duration-[220ms] ml-2"
            >
              CONTÁCTANOS
            </Link>
          </nav>

          {/* Mobile Menu Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg focus:outline-none transition-colors border bg-white/10 text-white hover:bg-white/20 border-white/20"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zinc-950/95 border-b border-zinc-800 px-6 py-6 shadow-2xl backdrop-blur-xl overflow-hidden max-h-[85vh] overflow-y-auto text-white font-sans"
          >
            <div className="flex flex-col gap-4 text-slate-200">
              
              {/* MODELO Mobile */}
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'm-modelo' ? null : 'm-modelo')}
                  className="flex items-center justify-between w-full text-left font-bold text-xs uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
                >
                  MODELO
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'm-modelo' ? 'rotate-180 text-slate-200' : ''}`} />
                </button>
                {activeDropdown === 'm-modelo' && (
                  <div className="pl-3 py-2 flex flex-col gap-2 text-[14px] sm:text-[15px] font-medium text-slate-300 border-l-2 border-slate-700 mt-2">
                    <Link to="/modelo#vision-general" onClick={() => setMobileMenuOpen(false)}>Visión General</Link>
                    <Link to="/modelo#excelencia-integral" onClick={() => setMobileMenuOpen(false)}>Excelencia Integral</Link>
                    <Link to="/modelo#onex" onClick={() => setMobileMenuOpen(false)}>OneX · Lectura y evidencia</Link>
                    <Link to="/modelo#integralx" onClick={() => setMobileMenuOpen(false)}>CIK · Ciclo de Intervención</Link>
                    <Link to="/modelo#integralx" onClick={() => setMobileMenuOpen(false)}>IntegraIX · Accredited</Link>
                  </div>
                )}
              </div>

              {/* SERVICIOS Mobile */}
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'm-servicios' ? null : 'm-servicios')}
                  className="flex items-center justify-between w-full text-left font-bold text-xs uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
                >
                  SERVICIOS
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'm-servicios' ? 'rotate-180 text-slate-200' : ''}`} />
                </button>
                {activeDropdown === 'm-servicios' && (
                  <div className="pl-3 py-2 flex flex-col gap-2 text-[14px] sm:text-[15px] font-medium text-slate-300 border-l-2 border-slate-700 mt-2">
                    <Link to="/servicios#atencion-al-cliente" onClick={() => setMobileMenuOpen(false)}>Atención y Experiencia Cliente</Link>
                    <Link to="/servicios#ventas-telemarketing" onClick={() => setMobileMenuOpen(false)}>Ventas y Fidelización</Link>
                    <Link to="/servicios#backoffice-bpo" onClick={() => setMobileMenuOpen(false)}>BO y Gestión de procesos</Link>
                    <Link to="/servicios#omnicanalidad-bots" onClick={() => setMobileMenuOpen(false)}>Capacidades Integradas</Link>
                    <Link to="/servicios#cobranzas" onClick={() => setMobileMenuOpen(false)}>RRHH y Apoyo Psicosocial</Link>
                  </div>
                )}
              </div>

              {/* INDUSTRIA Mobile */}
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'm-industria' ? null : 'm-industria')}
                  className="flex items-center justify-between w-full text-left font-bold text-xs uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
                >
                  INDUSTRIA
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'm-industria' ? 'rotate-180 text-slate-200' : ''}`} />
                </button>
                {activeDropdown === 'm-industria' && (
                  <div className="pl-3 py-2 flex flex-col gap-2 text-[14px] sm:text-[15px] font-medium text-slate-300 border-l-2 border-slate-700 mt-2">
                    <Link to="/industrias/telecomunicaciones" onClick={() => setMobileMenuOpen(false)}>Telecomunicaciones</Link>
                    <Link to="/industrias/banca-fintech" onClick={() => setMobileMenuOpen(false)}>Banca y Seguros Financieros</Link>
                    <Link to="/industrias/retail-ecommerce" onClick={() => setMobileMenuOpen(false)}>Retail y Comercio Electrónico</Link>
                    <Link to="/industrias/tecnologia" onClick={() => setMobileMenuOpen(false)}>Tecnología y Negocios Digitales</Link>
                    <Link to="/industrias/seguros" onClick={() => setMobileMenuOpen(false)}>Seguros</Link>
                    <Link to="/industrias/salud" onClick={() => setMobileMenuOpen(false)}>Salud y Farmacia</Link>
                    <Link to="/industrias/logistica" onClick={() => setMobileMenuOpen(false)}>Movilidad y Transporte</Link>
                    <Link to="/industrias/energia" onClick={() => setMobileMenuOpen(false)}>Energía y Servicios Públicos</Link>
                  </div>
                )}
              </div>

              {/* NOSOTROS Mobile */}
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'm-nosotros' ? null : 'm-nosotros')}
                  className="flex items-center justify-between w-full text-left font-bold text-xs uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
                >
                  NOSOTROS
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'm-nosotros' ? 'rotate-180 text-slate-200' : ''}`} />
                </button>
                {activeDropdown === 'm-nosotros' && (
                  <div className="pl-3 py-2 flex flex-col gap-2 text-[14px] sm:text-[15px] font-medium text-slate-300 border-l-2 border-slate-700 mt-2">
                    <Link to="/nosotros#quienes-somos" onClick={() => setMobileMenuOpen(false)}>Quienes somos</Link>
                    <Link to="/nosotros#fundamentos" onClick={() => setMobileMenuOpen(false)}>Fundamentos Corporativos</Link>
                    <Link to="/nosotros#quienes-somos" onClick={() => setMobileMenuOpen(false)}>Visión / Misión</Link>
                    <Link to="/nosotros#quienes-somos" onClick={() => setMobileMenuOpen(false)}>Capacidades</Link>
                    <Link to="/nosotros#certificaciones" onClick={() => setMobileMenuOpen(false)}>Certificaciones</Link>
                    <Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>Ubicación</Link>
                  </div>
                )}
              </div>

              {/* CONTÁCTANOS Mobile Button */}
              <Link
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-3 text-center rounded-xl bg-transparent hover:bg-slate-100 text-white hover:text-black font-bold text-xs uppercase tracking-widest border border-slate-300/40"
              >
                CONTÁCTANOS
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
