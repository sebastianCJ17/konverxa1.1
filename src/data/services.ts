import { ServicePillar } from '../types';

export const SERVICES_DATA: ServicePillar[] = [
  {
    id: 'atencion-al-cliente',
    slug: 'atencion-al-cliente',
    title: 'Atención al cliente',
    tagline: 'Resolvemos consultas, gestionamos reclamos y damos seguimiento a cada caso.',
    description: 'Inbound multicanal con SLA garantizados, gestión integral de reclamos y evaluación continua mediante encuestas CSAT y NPS para asegurar la máxima satisfacción de tus usuarios.',
    iconName: 'Headphones',
    features: [
      'Inbound multicanal',
      'SLA garantizados',
      'Encuestas CSAT y NPS',
      'Gestión de reclamos'
    ],
    benefits: [
      'Atención oportuna y personalizada 24/7',
      'Aumento directo en retención y lealtad de marca',
      'Trazabilidad completa de cada caso',
      'Monitoreo en tiempo real de satisfacción'
    ],
    image: '/bloque4atencionalcliente.png'
  },
  {
    id: 'ventas-telemarketing',
    slug: 'ventas-telemarketing',
    title: 'Ventas y Telemarketing',
    tagline: 'Campañas outbound e inbound para captar, retener y aumentar ticket promedio.',
    description: 'Equipos comerciales especializados en prospección B2B y B2C, estrategias de Upsell & Cross-sell, reactivación de clientes inactivos y agendamiento efectivo de citas.',
    iconName: 'TrendingUp',
    features: [
      'Prospección B2B/B2C',
      'Upsell & Cross-sell',
      'Reactivación de clientes',
      'Agendamiento'
    ],
    benefits: [
      'Aumento comprobado en tasa de conversión comercial',
      'Incremento en el valor promedio de ticket por cliente',
      'Recuperación efectiva de cuentas inactivas',
      'Optimización del embudo de ventas'
    ],
    image: '/bloque4ventas.png'
  },
  {
    id: 'cobranzas',
    slug: 'cobranzas',
    title: 'Cobranzas',
    tagline: 'Estrategias de cobranza temprana, media y avanzada para recuperar cartera.',
    description: 'Gestión estructurada basada en segmentación detallada por deuda, discado predictivo, negociación profesional adaptada y reportería diaria operacional en tiempo real.',
    iconName: 'ShieldCheck',
    features: [
      'Segmentación por deuda',
      'Discado predictivo',
      'Negociación estructurada',
      'Reportería diaria'
    ],
    benefits: [
      'Reducción efectiva de índices de morosidad',
      'Aceleración de recuperación de flujo de caja',
      'Trato ético preservando la relación comercial',
      'Información transparente y métricas en vivo'
    ],
    image: '/bloque4cobranzas.png'
  },
  {
    id: 'soporte-tecnico',
    slug: 'soporte-tecnico',
    title: 'Soporte Técnico / HelpDesk',
    tagline: 'Mesa de ayuda de primer y segundo nivel para productos y plataformas digitales.',
    description: 'Resolución técnica eficiente con gestión de tickets y escalamiento, base de conocimiento estructurada, diagnóstico remoto avanzado e integración nativa con tu CRM.',
    iconName: 'Workflow',
    features: [
      'Tickets & escalamiento',
      'Base de conocimiento',
      'Diagnóstico remoto',
      'Integración con CRM'
    ],
    benefits: [
      'Alta resolución de incidencias en primer contacto (FCR)',
      'Minimización del tiempo de inactividad de plataformas',
      'Documentación técnica clara e impulsada por datos',
      'Sincronización total con la base de datos de clientes'
    ],
    image: '/bloque4soporte.png'
  },
  {
    id: 'backoffice-bpo',
    slug: 'backoffice-bpo',
    title: 'BackOffice / BPO',
    tagline: 'Externaliza procesos operativos con calidad medible y equipos dedicados.',
    description: 'Externalización estratégica de procesos administrativos, data entry de alta precisión, verificación de documentos y onboarding ágil de nuevos clientes con SLAs rigurosos.',
    iconName: 'FileText',
    features: [
      'Data entry',
      'Verificación documental',
      'Onboarding clientes',
      'Procesos administrativos'
    ],
    benefits: [
      'Reducción de costos operativos y de estructura',
      'Garantía de calidad con auditoría estandarizada',
      'Escalabilidad inmediata según volumen de operaciones',
      'Agilización del tiempo de incorporación de usuarios'
    ],
    image: '/bloque4backofice.png'
  },
  {
    id: 'omnicanalidad-bots',
    slug: 'omnicanalidad-bots',
    title: 'Omnicanalidad & Bots',
    tagline: 'WhatsApp, chatbots, IVR y voz orquestados en un solo flujo de cliente.',
    description: 'Ecosistema de atención unificado con bots conversacionales inteligentes, integración oficial de WhatsApp Business API, IVR dinámico y conectividad total sin fricción.',
    iconName: 'Bot',
    features: [
      'Bots conversacionales',
      'WhatsApp Business API',
      'IVR inteligente',
      'Integración omnicanal'
    ],
    benefits: [
      'Disponibilidad automatizada 24 horas al día, 365 días',
      'Derivación inteligente a agentes humanos',
      'Experiencia de cliente uniforme en todos los canales',
      'Optimización de costos por transacción atendida'
    ],
    image: '/bloque4bots.png'
  }
];
