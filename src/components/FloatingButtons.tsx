import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

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
          className="pointer-events-auto w-12 h-12 rounded-full bg-white text-slate-800 hover:text-black border border-slate-200/90 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-md"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Button in Neutral Gray */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-neutral-700/80"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>

    </div>
  );
}

