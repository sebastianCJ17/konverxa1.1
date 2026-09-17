import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import LinkedInIcon from './LinkedInIcon';
import { COMPANY_INFO } from '../data/company';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/525589005000?text=${encodeURIComponent('Hola KONVERXA, me gustaría solicitar información sobre sus servicios de BPO y Contact Center.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 pointer-events-none">
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-11 h-11 rounded-full bg-white text-slate-800 hover:text-black border border-slate-200/90 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-md cursor-pointer"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating LinkedIn Button */}
      <a
        href={COMPANY_INFO.contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-11 h-11 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-blue-400/30"
        aria-label="Perfil de LinkedIn de KONVERXA"
        title="Síguenos en LinkedIn"
      >
        <LinkedInIcon className="w-5 h-5 text-white" />
      </a>

      {/* Floating WhatsApp Button in Neutral Dark */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-11 h-11 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-neutral-700/80"
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
      </a>

    </div>
  );
}

