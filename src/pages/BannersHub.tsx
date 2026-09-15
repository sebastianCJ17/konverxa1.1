import { useState } from 'react';
import { motion } from 'motion/react';
import SEOHead from '../components/SEOHead';
import { Download, Check, Image as ImageIcon, ExternalLink, Archive, Filter } from 'lucide-react';

interface BannerItem {
  id: string;
  name: string;
  category: string;
  watermark: string;
  filenameClean: string;
  filenameWatermark: string;
}

const ALL_BANNERS: BannerItem[] = [
  // Modelo OneX
  {
    id: 'vision-general',
    name: 'Modelo Operativo KONVERXA · MOK',
    category: 'Modelo Operativo',
    watermark: 'MODELO',
    filenameClean: '/banners/banner-vision-general-sin-texto.png',
    filenameWatermark: '/banners/banner-vision-general.png'
  },
  {
    id: 'excelencia-integral',
    name: 'Excelencia Integral',
    category: 'Modelo OneX',
    watermark: 'EXCELENCIA INTEGRAL',
    filenameClean: '/banners/banner-excelencia-integral-sin-texto.png',
    filenameWatermark: '/banners/banner-excelencia-integral.png'
  },
  {
    id: 'modelo-onex',
    name: 'Modelo OneX',
    category: 'Modelo OneX',
    watermark: 'MODELO ONEX',
    filenameClean: '/banners/banner-modelo-onex-sin-texto.png',
    filenameWatermark: '/banners/banner-modelo-onex.png'
  },
  {
    id: 'ciclo-integralx',
    name: 'Ciclo IntegralX (CIK)',
    category: 'Modelo OneX',
    watermark: 'CICLO INTEGRALX',
    filenameClean: '/banners/banner-ciclo-integralx-sin-texto.png',
    filenameWatermark: '/banners/banner-ciclo-integralx.png'
  },

  // Servicios
  {
    id: 'atencion-cliente',
    name: 'Atención al Cliente CX',
    category: 'Servicios',
    watermark: 'ATENCIÓN AL CLIENTE',
    filenameClean: '/banners/banner-atencion-cliente-sin-texto.png',
    filenameWatermark: '/banners/banner-atencion-cliente.png'
  },
  {
    id: 'ventas-fidelizacion',
    name: 'Ventas y Fidelización B2B/B2C',
    category: 'Servicios',
    watermark: 'VENTAS Y FIDELIZACIÓN',
    filenameClean: '/banners/banner-ventas-fidelizacion-sin-texto.png',
    filenameWatermark: '/banners/banner-ventas-fidelizacion.png'
  },
  {
    id: 'backoffice-bpo',
    name: 'Back Office y BPO Crítico',
    category: 'Servicios',
    watermark: 'BACK OFFICE Y BPO',
    filenameClean: '/banners/banner-backoffice-bpo-sin-texto.png',
    filenameWatermark: '/banners/banner-backoffice-bpo.png'
  },
  {
    id: 'capacidades-integradas',
    name: 'Capacidades Integradas (IA & Bots)',
    category: 'Servicios',
    watermark: 'CAPACIDADES INTEGRADAS',
    filenameClean: '/banners/banner-capacidades-integradas-sin-texto.png',
    filenameWatermark: '/banners/banner-capacidades-integradas.png'
  },
  {
    id: 'gestion-humana',
    name: 'Gestión Humana y Apoyo Psicosocial',
    category: 'Servicios',
    watermark: 'GESTIÓN HUMANA',
    filenameClean: '/banners/banner-gestion-humana-sin-texto.png',
    filenameWatermark: '/banners/banner-gestion-humana.png'
  },

  // Nosotros
  {
    id: 'quienes-somos',
    name: 'Quiénes Somos',
    category: 'Nosotros',
    watermark: 'ORIGEN',
    filenameClean: '/banners/banner-quienes-somos-sin-texto.png',
    filenameWatermark: '/banners/banner-quienes-somos.png'
  },
  {
    id: 'fundamentos',
    name: 'Fundamentos Corporativos',
    category: 'Nosotros',
    watermark: 'FUNDAMENTOS',
    filenameClean: '/banners/banner-fundamentos-sin-texto.png',
    filenameWatermark: '/banners/banner-fundamentos.png'
  },
  {
    id: 'mision-vision',
    name: 'Misión y Visión',
    category: 'Nosotros',
    watermark: 'RUMBO',
    filenameClean: '/banners/banner-vision-general-sin-texto.png',
    filenameWatermark: '/banners/banner-vision-general.png'
  },
  {
    id: 'certificaciones',
    name: 'Certificaciones y Calidad',
    category: 'Nosotros',
    watermark: 'CERTIFICACIONES',
    filenameClean: '/banners/banner-certificaciones-sin-texto.png',
    filenameWatermark: '/banners/banner-certificaciones.png'
  },
  {
    id: 'sostenibilidad',
    name: 'Sostenibilidad y RSE',
    category: 'Nosotros',
    watermark: 'SOSTENIBILIDAD',
    filenameClean: '/banners/banner-sostenibilidad-sin-texto.png',
    filenameWatermark: '/banners/banner-sostenibilidad.png'
  },
  {
    id: 'ubicacion',
    name: 'Ubicación & Presencia Internacional',
    category: 'Nosotros',
    watermark: 'PRESENCIA',
    filenameClean: '/banners/banner-contacto-sin-texto.png',
    filenameWatermark: '/banners/banner-contacto.png'
  },

  // Industrias
  {
    id: 'industrias',
    name: 'Industrias (Hub Principal)',
    category: 'Industrias',
    watermark: 'INDUSTRIAS',
    filenameClean: '/banners/banner-industrias-sin-texto.png',
    filenameWatermark: '/banners/banner-industrias.png'
  },
  {
    id: 'retail',
    name: 'Retail & eCommerce',
    category: 'Industrias',
    watermark: 'RETAIL & ECOMMERCE',
    filenameClean: '/banners/banner-retail-sin-texto.png',
    filenameWatermark: '/banners/banner-retail.png'
  },
  {
    id: 'salud',
    name: 'Salud & Farma',
    category: 'Industrias',
    watermark: 'SALUD & FARMA',
    filenameClean: '/banners/banner-salud-sin-texto.png',
    filenameWatermark: '/banners/banner-salud.png'
  },
  {
    id: 'telecomunicaciones',
    name: 'Telecomunicaciones',
    category: 'Industrias',
    watermark: 'TELECOMUNICACIONES',
    filenameClean: '/banners/banner-telecomunicaciones-sin-texto.png',
    filenameWatermark: '/banners/banner-telecomunicaciones.png'
  },
  {
    id: 'seguros',
    name: 'Seguros & Asistencias',
    category: 'Industrias',
    watermark: 'SEGUROS & ASISTENCIA',
    filenameClean: '/banners/banner-seguros-sin-texto.png',
    filenameWatermark: '/banners/banner-seguros.png'
  },
  {
    id: 'movilidad',
    name: 'Movilidad & Logística',
    category: 'Industrias',
    watermark: 'MOVILIDAD & LOGÍSTICA',
    filenameClean: '/banners/banner-movilidad-sin-texto.png',
    filenameWatermark: '/banners/banner-movilidad.png'
  },
  {
    id: 'tecnologia',
    name: 'Tecnología & SaaS',
    category: 'Industrias',
    watermark: 'TECNOLOGÍA & SAAS',
    filenameClean: '/banners/banner-tecnologia-sin-texto.png',
    filenameWatermark: '/banners/banner-tecnologia.png'
  },
  {
    id: 'energia',
    name: 'Energía & Utilities',
    category: 'Industrias',
    watermark: 'ENERGÍA & UTILITIES',
    filenameClean: '/banners/banner-energia-sin-texto.png',
    filenameWatermark: '/banners/banner-energia.png'
  },

  // Contacto & Carreras
  {
    id: 'contacto',
    name: 'Contacto Corporativo & Ubicación',
    category: 'Corporativo',
    watermark: 'PRESENCIA',
    filenameClean: '/banners/banner-contacto-sin-texto.png',
    filenameWatermark: '/banners/banner-contacto.png'
  },
  {
    id: 'carreras',
    name: 'Trabaja con Nosotros (Carreras)',
    category: 'Corporativo',
    watermark: 'CARRERAS',
    filenameClean: '/banners/banner-carreras-sin-texto.png',
    filenameWatermark: '/banners/banner-carreras.png'
  }
];

const CATEGORIES = ['Todos', 'Modelo OneX', 'Servicios', 'Nosotros', 'Industrias', 'Corporativo'];

export default function BannersHub() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [viewMode, setViewMode] = useState<'clean' | 'watermark'>('clean');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloadingAll, setDownloadingAll] = useState(false);

  const filteredBanners = activeCategory === 'Todos'
    ? ALL_BANNERS
    : ALL_BANNERS.filter(b => b.category === activeCategory);

  const handleCopyPath = (path: string, id: string) => {
    navigator.clipboard.writeText(path);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadAll = async () => {
    setDownloadingAll(true);
    for (const banner of filteredBanners) {
      const url = viewMode === 'clean' ? banner.filenameClean : banner.filenameWatermark;
      const a = document.createElement('a');
      a.href = url;
      a.download = url.split('/').pop() || 'banner.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      await new Promise(r => setTimeout(r, 150));
    }
    setDownloadingAll(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans pb-24">
      <SEOHead
        title="Banners en Alta Resolución - KONVERXA"
        description="Descarga todos los banners gráficos de KONVERXA en alta resolución (1920x480) limpios sin texto o con marca de agua."
      />

      {/* Header */}
      <div className="bg-white border-b border-slate-200 pt-12 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <ImageIcon className="w-3.5 h-3.5" />
            Recursos Gráficos Corporativos
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Banners en Alta Resolución (1920×480)
              </h1>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                Banners con la composición visual lista: lienzo blanco suave a la izquierda, fundido degradado y fotografía a la derecha. Disponibles en versión <strong>Limpia (sin texto)</strong> y <strong>Con marca de agua</strong>.
              </p>
            </div>

            <button
              onClick={handleDownloadAll}
              disabled={downloadingAll}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white font-bold text-sm hover:bg-slate-800 transition-all shadow-sm shrink-0 cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{downloadingAll ? 'Descargando banners...' : `Descargar Colección (${filteredBanners.length})`}</span>
            </button>
          </div>

          {/* Controls Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-100">
            {/* Mode Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode('clean')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'clean'
                    ? 'bg-black text-white shadow-xs'
                    : 'text-slate-600 hover:text-black'
                }`}
              >
                ✨ Limpios (Sin texto)
              </button>
              <button
                onClick={() => setViewMode('watermark')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'watermark'
                    ? 'bg-black text-white shadow-xs'
                    : 'text-slate-600 hover:text-black'
                }`}
              >
                🏷️ Con Marca de Agua
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1 mr-1" />
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? 'bg-slate-200 text-slate-900 font-bold'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Banners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBanners.map(banner => {
            const currentImg = viewMode === 'clean' ? banner.filenameClean : banner.filenameWatermark;
            return (
              <div
                key={banner.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                {/* Image Preview */}
                <div className="relative aspect-[1920/480] bg-[#f8f9fa] border-b border-slate-100 group overflow-hidden">
                  <img
                    src={currentImg}
                    alt={banner.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider">
                    {banner.category}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 flex-1 bg-white">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {banner.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {viewMode === 'clean' ? 'Limpio sin texto' : `Marca: ${banner.watermark}`} · 1920×480 px
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleCopyPath(currentImg, banner.id)}
                      className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5"
                      title="Copiar ruta del archivo"
                    >
                      {copiedId === banner.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copiado</span>
                        </>
                      ) : (
                        <span>Ruta</span>
                      )}
                    </button>

                    <a
                      href={currentImg}
                      download={`banner-${banner.id}${viewMode === 'clean' ? '-sin-texto' : ''}.png`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-black hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Descargar PNG</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
