import { ServicePillar } from '../types';

export const SERVICES_DATA: ServicePillar[] = [
  {
    id: 'atencion-al-cliente',
    slug: 'atencion-al-cliente',
    title: 'Atención al cliente',

    tagline:
      'Resolvemos consultas, gestionamos reclamos y damos seguimiento a cada caso.',

    description:
      'La calidad de la atención se sostiene en el método: criterios de resolución explícitos, tiempos definidos y medición continua de la experiencia.',

    iconName: 'Headphones',

    features: [
      'Inbound multicanal',
      'Gestión de SLA',
      'Medición CSAT y NPS',
      'Gestión de reclamos'
    ],

    benefits: [
      'Estándar Operativo',
      'Control de SLA, supervisión en vivo y medición continua.'
    ],

    image: '/bloque4atencionalcliente.png'
  },

  {
    id: 'ventas-telemarketing',
    slug: 'ventas-telemarketing',
    title: 'Ventas y Telemarketing',

    tagline:
      'Campañas outbound e inbound para captar clientes, desarrollar oportunidades y ampliar el valor de cada cuenta.',

    description:
      'La gestión comercial se sostiene en procesos definidos, argumentarios estructurados, seguimiento continuo y control sobre cada oportunidad.',

    iconName: 'TrendingUp',

    features: [
      'Prospección B2B y B2C',
      'Venta cruzada y ampliación',
      'Reactivación de clientes',
      'Agendamiento'
    ],

    benefits: [
      'Estándar Operativo',
      'Control de conversión, calidad comercial y trazabilidad de oportunidades.'
    ],

    image: '/bloque4ventas.png'
  },

  {
    id: 'cobranzas',
    slug: 'cobranzas',
    title: 'Cobranzas',

    tagline:
      'Estrategias de cobranza temprana, media y avanzada para recuperar cartera.',

    description:
      'La recuperación se sostiene en el método: segmentación por perfil de deuda, discado predictivo, negociación estructurada y seguimiento continuo.',

    iconName: 'ShieldCheck',

    features: [
      'Segmentación por deuda',
      'Discado predictivo',
      'Negociación estructurada',
      'Reportería diaria'
    ],

    benefits: [
      'Estándar Operativo',
      'Control de recuperación, calidad de negociación y trazabilidad de acuerdos.'
    ],

    image: '/bloque4cobranzas.png'
  },

  {
    id: 'soporte-tecnico',
    slug: 'soporte-tecnico',
    title: 'Soporte Técnico',

    tagline:
      'Mesa de ayuda de primer y segundo nivel para productos y plataformas digitales.',

    description:
      'La atención técnica se estructura sobre tickets, criterios de escalamiento, diagnóstico remoto y conocimiento documentado.',

    iconName: 'Workflow',

    features: [
      'Tickets y escalamiento',
      'Base de conocimiento',
      'Diagnóstico remoto',
      'Integración con CRM'
    ],

    benefits: [
      'Estándar Operativo',
      'Control de resolución, calidad técnica y trazabilidad de escalamiento.'
    ],

    image: '/bloque4soporte.png'
  },

  {
    id: 'backoffice-bpo',
    slug: 'backoffice-bpo',
    title: 'Back Office',

    tagline:
      'Gestionamos procesos administrativos, documentales y de soporte que requieren precisión, control y continuidad.',

    description:
      'La ejecución se estructura sobre procedimientos definidos, criterios de validación, control de calidad y trazabilidad de cada proceso.',

    iconName: 'FileText',

    features: [
      'Data entry',
      'Verificación documental',
      'Onboarding de clientes',
      'Procesos administrativos'
    ],

    benefits: [
      'Estándar Operativo',
      'Control de calidad, cumplimiento de SLA y consistencia de procesos.'
    ],

    image: '/bloque4backofice.png'
  },

  {
    id: 'omnicanalidad-bots',
    slug: 'omnicanalidad-bots',
    title: 'Omnicanalidad & Bots',

    tagline:
      'WhatsApp, chatbots, IVR y voz orquestados en un solo flujo de cliente.',

    description:
      'Cada canal opera sobre el mismo criterio y el mismo historial: el cliente no repite lo que ya contó, cambie por donde cambie.',

    iconName: 'Bot',

    features: [
      'Integración de canales',
      'Bots conversacionales',
      'IVR y enrutamiento',
      'Integración omnicanal'
    ],

    benefits: [
      'Estándar Operativo'
    ],

    image: '/bloque4bots.png'
  }
];