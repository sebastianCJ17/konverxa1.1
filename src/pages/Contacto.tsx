import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';
import PageBanner from '../components/PageBanner';
import GlobalNetworkMap from '../components/GlobalNetworkMap';
import { COMPANY_INFO } from '../data/company';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    industry: 'Telecomunicaciones',
    serviceInterest: 'Atención y CX',
    estimatedAgents: '20-50 agentes',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead
        title="Ubicación & Presencia Internacional | KONVERXA"
        description="Operamos desde Colombia, Perú y España para atender América Latina, Europa y Estados Unidos con una misma forma de organizar, dirigir y controlar la operación."
      />

      {/* Bloque 01: Banner con Miga de Pan y Marca de Agua */}
      <PageBanner
        title="PRESENCIA"
        watermark="PRESENCIA"
        titleAccentColor="text-slate-900"
        badge="PRESENCIA INTERNACIONAL"
        headline="Distintas geografías. Un mismo estándar."
        description="Operamos desde Colombia, Perú y España para atender América Latina, Europa y Estados Unidos con una misma forma de organizar, dirigir y controlar la operación."
        breadcrumbs={[
          { label: 'Inicio', path: '/' },
          { label: 'Nosotros', path: '/nosotros' },
          { label: 'Ubicación' }
        ]}
        image="/banners/banner-contacto.png"
        imageAlt="Ubicación y presencia internacional KONVERXA"
        showDownloadBtn={true}
      />

      {/* Bloque 02: Información Institucional & Formulario */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Visual Aid: Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-black">Información Institucional</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Respondemos en menos de 24 horas hábiles. Sin intermediarios ni formularios de seguimiento.
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                {/* TARJETA 01 */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="p-3 rounded-xl bg-slate-100 text-slate-800 shrink-0 border border-slate-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Sede Central Corporativa</strong>
                    <span className="text-xs text-slate-600 block font-medium">Pereira - Colombia</span>
                  </div>
                </div>

                {/* TARJETA 02 */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="p-3 rounded-xl bg-slate-100 text-slate-800 shrink-0 border border-slate-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Correos de Atención</strong>
                    <a href="mailto:administracion@konverxa.com" className="text-xs text-slate-900 font-medium hover:underline block">
                      administración@konverxa.com
                    </a>
                    <a href="mailto:comercial@konverxa.com" className="text-xs text-slate-900 font-medium hover:underline block mt-0.5">
                      comercial@konverxa.com
                    </a>
                  </div>
                </div>

                {/* TARJETA 03 */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="p-3 rounded-xl bg-slate-100 text-slate-800 shrink-0 border border-slate-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Línea Telefónica Directa</strong>
                    <a href="tel:+573226282039" className="text-xs text-slate-700 hover:text-black font-medium block">
                      (+57) 3226282039
                    </a>
                  </div>
                </div>

                {/* TARJETA 04: ACUERDO DE CONFIDENCIALIDAD (NDA) */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="p-3 rounded-xl bg-slate-100 text-slate-800 shrink-0 border border-slate-300">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">ACUERDO DE CONFIDENCIALIDAD (NDA)</strong>
                    <span className="text-xs text-slate-600 block leading-relaxed">
                      Toda la información operativa compartida está protegida por acuerdos de confidencialidad.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl">
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">Enviar Solicitud de Consultoría</h3>
                      <p className="text-xs text-slate-500">Completa los campos y nos pondremos en contacto contigo.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Nombre Completo *</label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Ej. Carlos Mendoza"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Empresa / Organización *</label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Ej. Corporativo X"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Cargo / Puesto *</label>
                        <input
                          type="text"
                          required
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          placeholder="Ej. Director de Operaciones / VP CX"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Correo Corporativo *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="nombre@empresa.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Teléfono Directo *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+52 55 8900 5000"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Sector / Industria</label>
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600"
                        >
                          <option value="Telecomunicaciones">Telecomunicaciones</option>
                          <option value="Banca y Servicios Financieros">Banca y Servicios Financieros</option>
                          <option value="Retail y E-commerce">Retail y E-commerce</option>
                          <option value="Tecnología y Negocios Digitales">Tecnología y Negocios Digitales</option>
                          <option value="Seguros">Seguros</option>
                          <option value="Salud">Salud</option>
                          <option value="Movilidad y Logística">Movilidad y Logística</option>
                          <option value="Energía y Servicios Públicos">Energía y Servicios Públicos</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Servicio de Interés</label>
                        <select
                          value={formData.serviceInterest}
                          onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600"
                        >
                          <option value="Atención y CX">Atención y Experiencia del Cliente</option>
                          <option value="Ventas y Fidelización">Ventas y Fidelización</option>
                          <option value="Capacidades Integradas (IA/RPA)">Capacidades Integradas (IA / RPA)</option>
                          <option value="Ciclo de Intervención">Ciclo de Intervención Completo</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Dimensión Estimada Operación</label>
                        <select
                          value={formData.estimatedAgents}
                          onChange={(e) => setFormData({ ...formData, estimatedAgents: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600"
                        >
                          <option value="10-20 agentes">10 a 20 posiciones</option>
                          <option value="20-50 agentes">20 a 50 posiciones</option>
                          <option value="50-100 agentes">50 a 100 posiciones</option>
                          <option value="+100 agentes">Más de 100 posiciones</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1 text-xs">Descripción del Proyecto / Desafíos de Servicio</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe brevemente tus necesidades operativas o metas a lograr..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-black text-xs"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-black/75 hover:bg-black/90 text-white font-bold text-sm border border-zinc-700 shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <span>Procesando solicitud...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-white" />
                          <span>Enviar Solicitud de Consultoría</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">¡Solicitud Registrada con Éxito!</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Un consultor senior del área de Soluciones Corporativas de <span className="text-slate-900 font-bold">KONVERXA</span> revisará los datos de tu empresa y se pondrá en contacto contigo en menos de 24 horas.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors border border-slate-200"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Bloque 03: Mapa de Presencia Internacional y Conectividad Global */}
      <GlobalNetworkMap
        badge="PRESENCIA INTERNACIONAL"
        title="Infraestructura Operativa Sin Fronteras"
        subtitle="Operamos desde Colombia, Perú y España para atender América Latina, Europa y Estados Unidos con una misma forma de organizar, dirigir y controlar la operación."
      />

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionTitle
            badge="Preguntas Frecuentes"
            title="Resuelves tus Dudas sobre Nuestro Modelo"
            subtitle="Respuestas claras sobre tiempos de implementación, seguridad e integración."
            centered
          />

          <div className="space-y-4">
            {COMPANY_INFO.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 text-slate-900 font-bold text-base hover:text-black transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-slate-800 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-slate-800' : ''}`} />
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
