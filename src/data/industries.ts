import { Industry } from '../types';

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'telecomunicaciones',
    slug: 'telecomunicaciones',
    name: 'Telecomunicaciones',
    shortDesc: 'Soporte técnico multinivel, retención proactiva y upgrades de servicios.',
    fullDesc: 'Operaciones de alto volumen donde la capacidad de respuesta, la continuidad y el control deben sostenerse en cada interacción.',
    iconName: 'Radio',
    heroImage: '/banners/banner-telecomunicaciones.png',
    complianceBadge: 'SLAs Críticos 24/7 & ISO 27001',
    showcaseImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    showcaseTag: 'Omnicanalidad 24/7',
    operationalStandard: 'Control de SLA, supervisión en vivo y medición continua.',
    keyCapabilities: [
      'Inbound multicanal y Help Desk N1/N2',
      'Gestión de SLA y FCR superior al 90%',
      'Células especializadas en retención activa',
      'Autogestión por bots e IVR inteligente'
    ],
    keyChallenges: [
      'Volumen de incidencias: Picos masivos por fallas de red, fibra o configuración de equipos.',
      'Riesgo de churn: Fuga de abonados ante promociones agresivas de la competencia.',
      'Fricción en trámites: Demoras en solicitudes de cambio de plan, traslados y portabilidad.',
      'Costos de atención: Sobrecarga operativa en consultas técnicas y comerciales repetitivas.'
    ],
    solutions: [
      'Mesa N1/N2 especializada: Diagnóstico asistido y cierre en primer contacto (FCR 90%).',
      'Células de retención: Equipos con facultades de negociación y fidelización en tiempo real.',
      'Autogestión por bots: BOTS conversacionales e IVR inteligente para saldos y reinicios.',
      'Fidelización predictiva: Campañas segmentadas de cross-selling y upgrades de plan.'
    ],
    stats: [
      { label: 'FCR en Soporte Técnico', value: '90%' },
      { label: 'Reducción de Churn', value: '-30%' },
      { label: 'Efectividad en Upgrades', value: '+25%' }
    ],
    operationalScope: [
      'Help Desk Técnico N1 / N2',
      'Portabilidad y Migración',
      'Retención de Abonados',
      'Despacho y Coordinación Técnica',
      'Atención Omnicanal 24/7',
      'Gestión de Reclamaciones'
    ],
    appliedServices: [
      {
        title: 'Atención al Cliente',
        desc: 'Resolución ágil de consultas comerciales y de servicio.',
        link: '/servicios#atencion-experiencia-cliente'
      },
      {
        title: 'Soporte Técnico',
        desc: 'Diagnóstico avanzado y resolución guiada de conectividad.',
        link: '/servicios#soporte-tecnico'
      },
      {
        title: 'Ventas y Fidelización',
        desc: 'Retención preventiva y venta cruzada de paquetes de valor.',
        link: '/servicios#ventas-fidelizacion'
      },
      {
        title: 'Omnicanalidad y Bots',
        desc: 'Atención automatizada 24/7 vía WhatsApp y app móvil.',
        link: '/servicios#omnicanalidad-bots'
      }
    ],
    bannerInfo: {
      title: 'TELECOMUNICACIONES',
      watermark: 'TELECOMUNICACIONES',
      badge: 'SECTOR ESTRATÉGICO',
      headline: 'Capacidad masiva, continuidad técnica y retención continua.',
      description: 'Operaciones de alto volumen donde la capacidad de respuesta, la continuidad y el control deben sostenerse en cada interacción técnica y comercial.',
      breadcrumbLabel: 'Telecomunicaciones',
      image: '/banners/banner-telecomunicaciones.png',
      imageAlt: 'Telecomunicaciones KONVERXA'
    }
  },
  {
    id: 'retail-ecommerce',
    slug: 'retail-ecommerce',
    name: 'Retail y Comercio Electrónico',
    shortDesc: 'Atención pre y post-venta, logística inversa y fidelización en picos de demanda.',
    fullDesc: 'Acompañamos al comprador en toda su experiencia, absorbiendo picos estacionales y garantizando agilidad en cambios y devoluciones.',
    iconName: 'ShoppingBag',
    heroImage: '/banners/banner-retail.png',
    complianceBadge: 'Escalabilidad Elástica & Omnicanalidad 24/7',
    showcaseImage: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80',
    showcaseTag: 'Escalabilidad Elástica & Picos',
    operationalStandard: 'Capacidad elástica en Cyber Days, tiempo de respuesta < 30s.',
    keyCapabilities: [
      'Atención pre y post-venta omnicanal en vivo',
      'Mesa dedicada de logística inversa y cambios',
      'Rastreo transaccional de pedidos en WhatsApp',
      'Programas de recuperación de carritos y fidelización'
    ],
    keyChallenges: [
      'Picos de demanda: Saturación en Cyber Days, Black Friday y campañas estacionales.',
      'Ansiedad en entregas: Consultas reiteradas de clientes por el estado de sus pedidos.',
      'Logística inversa: Complejidad y demoras en devoluciones, cambios y reembolsos.',
      'Carritos abandonados: Pérdida de compradores por falta de asesoría en tiempo real.'
    ],
    solutions: [
      'Capacidad elástica: Activación inmediata de células operativas entrenadas para picos.',
      'Rastreo omnicanal: Bots transaccionales en WhatsApp para consulta inmediata de guías.',
      'Mesa de devoluciones: Gestión integral de logística inversa, re-despachos y reembolsos.',
      'Asistencia pre-venta: Acompañamiento en vivo vía chat para resolución de dudas y cierre.'
    ],
    stats: [
      { label: 'CSAT Post-Venta', value: '95%' },
      { label: 'Tiempo de Respuesta', value: '< 30s' },
      { label: 'Tasa de Fidelización', value: '+28%' }
    ],
    operationalScope: [
      'Asistencia Pre-Venta Omnicanal',
      'Gestión de Pedidos y Entregas',
      'Logística Inversa y Devoluciones',
      'Atención a Reclamos y Garantías',
      'Escalabilidad en Picos Comerciales',
      'Fidelización y Recompra'
    ],
    appliedServices: [
      {
        title: 'Atención al Cliente',
        desc: 'Resolución de dudas sobre envíos, garantías y compras.',
        link: '/servicios#atencion-experiencia-cliente'
      },
      {
        title: 'Back Office',
        desc: 'Validación de facturación, notas de crédito y reembolsos.',
        link: '/servicios#bo-gestion-procesos'
      },
      {
        title: 'Omnicanalidad y Bots',
        desc: 'Bots transaccionales para consulta de pedidos por WhatsApp.',
        link: '/servicios#omnicanalidad-bots'
      },
      {
        title: 'Ventas y Fidelización',
        desc: 'Aceleración de conversión y programas de clientes VIP.',
        link: '/servicios#ventas-fidelizacion'
      }
    ],
    bannerInfo: {
      title: 'RETAIL & ECOMMERCE',
      watermark: 'RETAIL Y ECOMMERCE',
      badge: 'COMERCIO Y LOGÍSTICA',
      headline: 'Experiencia de compra inmediata y gestión ágil en picos de demanda.',
      description: 'Atención omnicanal resolutiva para pre y post-venta, cambios, devoluciones y fidelización que protege el valor del cliente en cada compra.',
      breadcrumbLabel: 'Retail y eCommerce',
      image: '/banners/banner-retail.png',
      imageAlt: 'Retail y eCommerce KONVERXA'
    }
  },
  {
    id: 'tecnologia-digital',
    slug: 'tecnologia-digital',
    name: 'Tecnología y Negocios Digitales',
    shortDesc: 'Help desk multinivel, onboarding SaaS y reducción de churn.',
    fullDesc: 'Soporte técnico especializado y customer success para plataformas SaaS y apps que crecen a ritmo acelerado.',
    iconName: 'Cpu',
    heroImage: '/banners/banner-tecnologia.png',
    complianceBadge: 'Soporte L1/L2 & SLAs de Uptime',
    showcaseImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    showcaseTag: 'Soporte SaaS & Customer Success',
    operationalStandard: 'SLAs de Uptime garantizados, resolución en primer contacto 88%.',
    keyCapabilities: [
      'Help Desk L1/L2 especializado en tu stack',
      'Customer Success y onboarding guiado',
      'Monitoreo continuo de salud y churn',
      'Escalamiento ágil y sincronizado a Jira / GitHub'
    ],
    keyChallenges: [
      'Adopción y onboarding: Curva de aprendizaje compleja que eleva el abandono temprano.',
      'Tickets críticos: Incidentes de software que demandan resolución veloz bajo SLAs.',
      'Riesgo de churn: Pérdida de suscriptores por soporte lento o falta de acompañamiento.',
      'Desconexión con QA: Canalización deficiente de errores hacia los equipos de ingeniería.'
    ],
    solutions: [
      'Help Desk L1/L2 técnico: Especialistas formados en tu stack tecnológico y arquitectura.',
      'Customer Success guiado: Programas proactivos de onboarding para acelerar la activación.',
      'Monitoreo de salud: Detección preventiva de caídas de actividad para evitar churn.',
      'Sincronización ágil: Registro y escalamiento directo de bugs a Jira o GitHub.'
    ],
    stats: [
      { label: 'Resolución Primer Contacto', value: '88%' },
      { label: 'Reducción de Churn', value: '-31%' },
      { label: 'Tiempo de Respuesta', value: '< 45s' }
    ],
    operationalScope: [
      'Help Desk Técnico L1 / L2',
      'Customer Onboarding Guiado',
      'Customer Success Proactivo',
      'Gestión de Accesos y Permisos',
      'Monitorización de Uptime 24/7',
      'Prevención de Churn'
    ],
    appliedServices: [
      {
        title: 'Soporte Técnico',
        desc: 'Mesa especializada para incidencias en software y plataformas.',
        link: '/servicios#soporte-tecnico'
      },
      {
        title: 'Omnicanalidad y Bots',
        desc: 'Widgets integrados en la app con derivación inteligente.',
        link: '/servicios#omnicanalidad-bots'
      },
      {
        title: 'Back Office',
        desc: 'Configuración de cuentas, depuración de datos y altas.',
        link: '/servicios#bo-gestion-procesos'
      },
      {
        title: 'Talento Humano',
        desc: 'Perfiles técnicos con alta capacitación y estabilidad.',
        link: '/servicios#rrhh-apoyo-psicosocial'
      }
    ],
    bannerInfo: {
      title: 'TECNOLOGÍA DIGITAL',
      watermark: 'TECNOLOGÍA Y SAAS',
      badge: 'SOPORTE Y CUSTOMER SUCCESS',
      headline: 'Soporte especializado para plataformas y apps de rápido crecimiento.',
      description: 'Mesas de ayuda multinivel L1/L2, adopción de usuario, resolución ágil de incidencias y gestión proactiva para reducir el churn en modelos de suscripción.',
      breadcrumbLabel: 'Tecnología Digital',
      image: '/banners/banner-tecnologia.png',
      imageAlt: 'Tecnología y Negocios Digitales KONVERXA'
    }
  },
  {
    id: 'seguros',
    slug: 'seguros',
    name: 'Seguros',
    shortDesc: 'Atención de siniestros 24/7, despacho de asistencias y renovación de pólizas.',
    fullDesc: 'Respuesta empática e inmediata en momentos críticos para el asegurado, con radicación de siniestros y despacho ágil de asistencias.',
    iconName: 'ShieldCheck',
    heroImage: '/banners/banner-seguros.png',
    complianceBadge: 'Atención de Emergencias 24/7 & ISO 27001',
    showcaseImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    showcaseTag: 'Asistencia & Siniestros 24/7',
    operationalStandard: 'Asignación de auxilio < 15 min, certificación ISO 27001.',
    keyCapabilities: [
      'Línea de emergencia y contención humana 24/7',
      'Despacho y geolocalización de asistencias en ruta',
      'Back Office documental y revisión de expedientes',
      'Campañas oportunas de renovación de pólizas'
    ],
    keyChallenges: [
      'Momentos de contingencia: Asegurados en situaciones de estrés que requieren contención humana.',
      'Retrasos documentales: Fricción y lentitud en la recopilación para liquidar siniestros.',
      'Pérdida de pólizas: Deserción de asegurados por falta de contacto previo al vencimiento.',
      'Coordinación de auxilio: Despacho complejo de grúas, ambulancias o reparadores en terreno.'
    ],
    solutions: [
      'Línea de contingencia 24/7: Protocolos de contención y tiempos prioritarios de atención.',
      'Back Office documental: Radicación, validación técnica y expedientes con trazabilidad.',
      'Renovación proactiva: Contacto preventivo de retención y actualización de coberturas.',
      'Torre de despacho en vivo: Asignación y geolocalización inmediata de asistencias.'
    ],
    stats: [
      { label: 'Tiempo Coordinación', value: '< 15m' },
      { label: 'Renovación de Pólizas', value: '92%' },
      { label: 'CSAT en Siniestros', value: '96%' }
    ],
    operationalScope: [
      'Recepción de Siniestros 24/7',
      'Despacho de Asistencias en Ruta',
      'Radicación y Revisión Documental',
      'Renovación Oportuna de Pólizas',
      'Soporte a Red de Corredores',
      'Cobranza Preventiva de Primas'
    ],
    appliedServices: [
      {
        title: 'Atención al Cliente',
        desc: 'Radicación de siniestros con empatía y rapidez.',
        link: '/servicios#atencion-experiencia-cliente'
      },
      {
        title: 'Back Office',
        desc: 'Revisión técnica de documentos y expedientes de pólizas.',
        link: '/servicios#bo-gestion-procesos'
      },
      {
        title: 'Cobranzas',
        desc: 'Cobro preventivo de cuotas y regularización de primas.',
        link: '/servicios#cobranzas'
      },
      {
        title: 'Ventas y Fidelización',
        desc: 'Renovaciones y ofrecimiento de coberturas adicionales.',
        link: '/servicios#ventas-fidelizacion'
      }
    ],
    bannerInfo: {
      title: 'SEGUROS',
      watermark: 'SEGUROS Y ASISTENCIA',
      badge: 'RESPUESTA INMEDIATA Y RIGOR',
      headline: 'Gestión humana y oportuna en momentos decisivos y contingencias.',
      description: 'Atención 24/7 en radicación de siniestros, despacho rápido de asistencias en terreno y campañas oportunas de renovación de pólizas.',
      breadcrumbLabel: 'Seguros',
      image: '/banners/banner-seguros.png',
      imageAlt: 'Seguros KONVERXA'
    }
  },
  {
    id: 'salud',
    slug: 'salud',
    name: 'Salud',
    shortDesc: 'Agendamiento centralizado, telemedicina y seguimiento continuo al paciente.',
    fullDesc: 'Centralizamos citas médicas, reducimos el ausentismo y brindamos soporte humano y técnico en telemedicina con estricta confidencialidad.',
    iconName: 'Activity',
    heroImage: '/banners/banner-salud.png',
    complianceBadge: 'Confidencialidad de Datos Médicos & ISO 27001',
    showcaseImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    showcaseTag: 'Agendamiento & Telemedicina',
    operationalStandard: 'Reducción de ausentismo del 40% y confidencialidad médica total.',
    keyCapabilities: [
      'Central omnicanal de agendamiento y reprogramación 24/7',
      'Recordatorios inteligentes multicanal (WhatsApp y voz)',
      'Mesa técnica de asistencia al paciente en videoconsultas',
      'Acompañamiento clínico post-alta y orientación previa'
    ],
    keyChallenges: [
      'Colapso en citas: Saturación telefónica recurrente en centrales médicas.',
      'Ausentismo en consultas: Pérdida económica de capacidad médica instalada.',
      'Fricción en telemedicina: Dificultades técnicas del paciente para ingresar a su videoconsulta.',
      'Desapego post-consulta: Falta de orientación previa a exámenes o seguimiento clínico.'
    ],
    solutions: [
      'Central 24/7 omnicanal: Agendamiento y reprogramación fluida vía teléfono, web y WhatsApp.',
      'Recordatorios inteligentes: Confirmaciones interactivas multicanal que mitigan el no-show.',
      'Soporte al paciente: Asistencia técnica guiada para pruebas de audio, video y conexión.',
      'Acompañamiento clínico: Campañas de preparación para exámenes y monitoreo post-alta.'
    ],
    stats: [
      { label: 'Reducción de Ausentismo', value: '-40%' },
      { label: 'Efectividad en Agendas', value: '96%' },
      { label: 'CSAT de Pacientes', value: '98%' }
    ],
    operationalScope: [
      'Central de Agendamiento Médico',
      'Confirmación y Recordatorios de Cita',
      'Soporte al Paciente en Telemedicina',
      'Orientación Previa a Exámenes',
      'Seguimiento Post-Consulta',
      'Gestión de Autorizaciones'
    ],
    appliedServices: [
      {
        title: 'Atención al Cliente',
        desc: 'Trato empático y ágil para pacientes y familiares.',
        link: '/servicios#atencion-experiencia-cliente'
      },
      {
        title: 'Omnicanalidad y Bots',
        desc: 'Bots de autogestión para agendar y cancelar citas.',
        link: '/servicios#omnicanalidad-bots'
      },
      {
        title: 'Back Office',
        desc: 'Trámite de autorizaciones y validación de coberturas.',
        link: '/servicios#bo-gestion-procesos'
      },
      {
        title: 'Talento Humano',
        desc: 'Capacitación en trato humanizado y contención en salud.',
        link: '/servicios#rrhh-apoyo-psicosocial'
      }
    ],
    bannerInfo: {
      title: 'SALUD',
      watermark: 'SALUD Y ASISTENCIA',
      badge: 'EMPATÍA Y COORDINACIÓN',
      headline: 'Precisión médica, agendamiento ágil y acompañamiento al paciente.',
      description: 'Mesa centralizada para citas, soporte a telemedicina y seguimiento post-consulta con estricto resguardo confidencial de la información.',
      breadcrumbLabel: 'Salud',
      image: '/banners/banner-salud.png',
      imageAlt: 'Salud KONVERXA'
    }
  },
  {
    id: 'movilidad-transporte',
    slug: 'movilidad-transporte',
    name: 'Movilidad y Transporte',
    shortDesc: 'Torre de control 24/7, trazabilidad de flotas y soporte a conductores.',
    fullDesc: 'Aseguramos la fluidez comunicacional en la cadena logística con trazabilidad en tiempo real y resolución inmediata de novedades.',
    iconName: 'Truck',
    heroImage: '/banners/banner-movilidad.png',
    complianceBadge: 'Torre de Control Logístico 24/7',
    showcaseImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    showcaseTag: 'Torre de Control Logístico 24/7',
    operationalStandard: 'Atención a choferes en < 15s y resolución de novedades del 89%.',
    keyCapabilities: [
      'Trazabilidad en tiempo real de fletes y cargas',
      'Torre de control para novedades de última milla',
      'Línea exclusiva y prioritaria para conductores',
      'Digitalización y conciliación rápida de POD y firmas'
    ],
    keyChallenges: [
      'Consultas repetitivas: Alto volumen de llamadas preguntando por el estado del paquete o flete.',
      'Entregas fallidas: Destinatarios ausentes o direcciones erróneas sin resolución inmediata.',
      'Conductores varados: Demoras en asistencia técnica o de ruta al personal de transporte.',
      'Reclamos de entrega: Discrepancias en guías de entrega y pruebas de recepción (POD).'
    ],
    solutions: [
      'Autogestión de rastreo: Consulta directa en WhatsApp conectada con los sistemas TMS.',
      'Torre de control en vivo: Contacto inmediato con el destinatario y re-ruteo de transportistas.',
      'Línea exclusiva choferes: Canal prioritario con tiempo de respuesta menor a 15 segundos.',
      'Mesa de conciliación: Digitalización y verificación ágil de pruebas de entrega y reclamos.'
    ],
    stats: [
      { label: 'Resolución de Novedades', value: '89%' },
      { label: 'SLA Atención Choferes', value: '< 15s' },
      { label: 'Efectividad en Entrega', value: '+27%' }
    ],
    operationalScope: [
      'Rastreo y Trazabilidad de Carga',
      'Torre de Control de Novedades',
      'Línea Exclusiva a Conductores',
      'Atención al Destinatario Final',
      'Conciliación de Entregas y POD',
      'Gestión de Averías y Reclamos'
    ],
    appliedServices: [
      {
        title: 'Back Office',
        desc: 'Documentación de viaje, guías de despacho y verificación de firmas.',
        link: '/servicios#bo-gestion-procesos'
      },
      {
        title: 'Atención al Cliente',
        desc: 'Respuestas precisas y transparentes al usuario sobre su envío.',
        link: '/servicios#atencion-experiencia-cliente'
      },
      {
        title: 'Omnicanalidad y Bots',
        desc: 'Consultas automáticas de guía por WhatsApp 24/7.',
        link: '/servicios#omnicanalidad-bots'
      },
      {
        title: 'Soporte Técnico',
        desc: 'Asistencia técnica en apps de geolocalización a transportistas.',
        link: '/servicios#soporte-tecnico'
      }
    ],
    bannerInfo: {
      title: 'MOVILIDAD Y TRANSPORTE',
      watermark: 'MOVILIDAD Y LOGÍSTICA',
      badge: 'OPERACIONES EN TIEMPO REAL',
      headline: 'Control de flotas, trazabilidad y soporte a conductores y usuarios.',
      description: 'Torre de control 24/7 para seguimiento de rutas, novedades de entrega de última milla y asistencia inmediata a conductores.',
      breadcrumbLabel: 'Movilidad y Transporte',
      image: '/banners/banner-movilidad.png',
      imageAlt: 'Movilidad y Transporte KONVERXA'
    }
  },
  {
    id: 'energia-servicios',
    slug: 'energia-servicios',
    name: 'Energía y Servicios Públicos',
    shortDesc: 'Disponibilidad 24/7 ante emergencias, cortes masivos y gestión de facturación.',
    fullDesc: 'Capacidad masiva de respuesta para empresas de energía, gas y agua ante contingencias climáticas y reclamaciones de facturación.',
    iconName: 'Zap',
    heroImage: '/banners/banner-energia.png',
    complianceBadge: 'Resiliencia Operativa & Marco Regulatorio',
    showcaseImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    showcaseTag: 'Resiliencia Operativa & Contingencias',
    operationalStandard: 'Atención en fallas masivas del 99.5% y cumplimiento de plazos legales.',
    keyCapabilities: [
      'Sobreflujo masivo asistido por IA ante tormentas',
      'Mesa experta en tarifas, consumos y financiación',
      'Trazabilidad automatizada de tiempos normativos PQR',
      'Despacho geolocalizado e inmediato de cuadrillas'
    ],
    keyChallenges: [
      'Cortes masivos imprevistos: Saturación telefónica extrema durante tormentas o averías.',
      'Reclamos de consumo: Sensibilidad del usuario ante variaciones en la factura de servicios.',
      'Tiempos regulatorios: Riesgo de sanciones por vencimiento de plazos legales de PQR.',
      'Coordinación en terreno: Demoras en el enlace entre el reporte del usuario y la cuadrilla.'
    ],
    solutions: [
      'Sobreflujo por IA: Plataforma elástica que absorbe miles de llamadas simultáneas sin colapso.',
      'Aclaración experta: Agentes capacitados en tarifas, consumos y acuerdos de financiación.',
      'Trazabilidad PQR: Control automatizado de tiempos normativos para evitar multas.',
      'Despacho geolocalizado: Asignación inmediata de cuadrillas mediante integración directa.'
    ],
    stats: [
      { label: 'Atención en Fallas Masivas', value: '99.5%' },
      { label: 'Satisfacción del Usuario', value: '91%' },
      { label: 'Tiempo de Derivación', value: '< 2m' }
    ],
    operationalScope: [
      'Línea de Emergencias 24/7',
      'Reporte Automatizado de Averías',
      'Aclaración de Facturas y Consumos',
      'Despacho y Coordinación de Cuadrillas',
      'Gestión de PQR Regulatorias',
      'Canales Digitales de Autogestión'
    ],
    appliedServices: [
      {
        title: 'Atención al Cliente',
        desc: 'Mesa telefónica y digital con protocolos de contingencia 24/7.',
        link: '/servicios#atencion-experiencia-cliente'
      },
      {
        title: 'Cobranzas',
        desc: 'Negociación de acuerdos de pago para reducción de morosidad.',
        link: '/servicios#cobranzas'
      },
      {
        title: 'Back Office',
        desc: 'Análisis de reclamaciones técnicas y ajustes tarifarios.',
        link: '/servicios#bo-gestion-procesos'
      },
      {
        title: 'Omnicanalidad y Bots',
        desc: 'Reportes de fallas por WhatsApp con geolocalización.',
        link: '/servicios#omnicanalidad-bots'
      }
    ],
    bannerInfo: {
      title: 'ENERGÍA Y SERVICIOS',
      watermark: 'ENERGÍA Y PÚBLICOS',
      badge: 'ALTA DISPONIBILIDAD',
      headline: 'Disponibilidad 24/7 ante emergencias, contingencias y facturación.',
      description: 'Atención masiva de reportes de cortes, aclaraciones de consumo y gestión de reclamaciones regulatorias con contingencia por IA.',
      breadcrumbLabel: 'Energía y Servicios',
      image: '/banners/banner-energia.png',
      imageAlt: 'Energía y Servicios Públicos KONVERXA'
    }
  },
  {
    id: 'banca-fintech',
    slug: 'banca-fintech',
    name: 'Banca y Fintech',
    shortDesc: 'Onboarding biométrico KYC, cobranzas tempranas y soporte transaccional.',
    fullDesc: 'Operaciones de alta seguridad para entidades bancarias, billeteras digitales y neobancos, bajo estrictas normas de protección de datos.',
    iconName: 'Landmark',
    heroImage: '/banners/banner-fundamentos.png',
    complianceBadge: 'Certificación ISO 27001 & PCI-DSS',
    showcaseImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    showcaseTag: 'Seguridad & Onboarding KYC',
    operationalStandard: 'Cumplimiento normativo 100%, normas ISO 27001 y PCI-DSS.',
    keyCapabilities: [
      'Onboarding digital guiado con validación biométrica KYC',
      'Soporte especializado 24/7 en transacciones y banca móvil',
      'Estrategias de cobranza preventiva y negociación temprana',
      'Monitoreo continuo y mitigación preventiva de fraude'
    ],
    keyChallenges: [
      'Abandono en onboarding: Fricción en pasos de verificación de identidad digital (KYC).',
      'Mora temprana: Riesgo de impago en primeros ciclos de crédito si no se gestiona a tiempo.',
      'Alertas de seguridad: Angustia del usuario por transacciones desconocidas o bloqueos.',
      'Riesgo normativo: Rigurosas exigencias de protección de datos y secreto financiero.'
    ],
    solutions: [
      'Onboarding guiado: Asistencia humana y validación biométrica en tiempo real.',
      'Cobranza preventiva: Negociación temprana con acuerdos sostenibles y trato respetuoso.',
      'Soporte transaccional 24/7: Bloqueo preventivo y reposición inmediata de accesos.',
      'Operación certificada: Infraestructura y procesos auditados bajo ISO 27001 y PCI-DSS.'
    ],
    stats: [
      { label: 'Recuperación de Cartera', value: '+34%' },
      { label: 'NPS Financiero', value: '82 pts' },
      { label: 'Cumplimiento Normativo', value: '100%' }
    ],
    operationalScope: [
      'Onboarding Digital y KYC',
      'Soporte Transaccional 24/7',
      'Cobranza Preventiva y Negociación',
      'Mesa de Ayuda Banca Móvil',
      'Prevención y Alerta de Fraude',
      'Cumplimiento Normativo y Auditoría'
    ],
    appliedServices: [
      {
        title: 'Cobranzas',
        desc: 'Recuperación temprana con acuerdos sostenibles y confianza.',
        link: '/servicios#cobranzas'
      },
      {
        title: 'Atención al Cliente',
        desc: 'Soporte confidencial en saldos, movimientos y productos.',
        link: '/servicios#atencion-experiencia-cliente'
      },
      {
        title: 'Back Office',
        desc: 'Validación de expedientes crediticios y cotejo documental.',
        link: '/servicios#bo-gestion-procesos'
      },
      {
        title: 'Omnicanalidad y Bots',
        desc: 'Canales seguros con autenticación de dos factores.',
        link: '/servicios#omnicanalidad-bots'
      }
    ],
    bannerInfo: {
      title: 'BANCA Y FINTECH',
      watermark: 'BANCA Y FINTECH',
      badge: 'SEGURIDAD Y COMPLIANCE',
      headline: 'Onboarding seguro, cobranza temprana y soporte transaccional.',
      description: 'Verificación de identidad KYC, prevención de fraude, cobranza preventiva y mesa de ayuda bajo normativas ISO 27001 y PCI-DSS.',
      breadcrumbLabel: 'Banca y Fintech',
      image: '/banners/banner-fundamentos.png',
      imageAlt: 'Banca y Fintech KONVERXA'
    }
  }
];
