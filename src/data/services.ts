import { ServicePillar } from '../types';

export const SERVICES_DATA: ServicePillar[] = [
  {
    id: 'atencion-experiencia-cliente',
    slug: 'atencion-experiencia-cliente',
    title: 'Atención y Experiencia Cliente',
    tagline: 'Cada interacción pone a prueba la promesa.',
    description:
      'Gestionamos cada contacto con criterios claros de resolución, continuidad y control para sostener una experiencia consistente en cada punto de interacción.',
    iconName: 'Headphones',
    features: [
      'Inbound multicanal',
      'Gestión de SLA y FCR',
      'Medición CSAT y NPS',
      'Gestión integral de reclamos y requerimientos'
    ],
    benefits: [
      'Estándar Operativo',
      'Control de SLA, supervisión en vivo y medición continua.'
    ],
    operationalStandard: 'Control de SLA, supervisión en vivo y medición continua.',
    image: '/bloque4atencionalcliente.png'
  },
  {
    id: 'ventas-fidelizacion',
    slug: 'ventas-fidelizacion',
    title: 'Ventas y Fidelización',
    tagline: 'Vender inicia una relación. Fidelizar la construye.',
    description:
      'Gestionamos cada oportunidad comercial con criterios claros de conversión, seguimiento y permanencia para generar resultados consistentes y relaciones a largo plazo.',
    iconName: 'TrendingUp',
    features: [
      'Prospección B2B y B2C',
      'Venta cruzada y ampliación de cartera',
      'Fidelización y retención de clientes',
      'Agendamiento y concertación comercial'
    ],
    benefits: [
      'Estándar Operativo',
      'Control de conversión, calidad comercial y trazabilidad de oportunidades.'
    ],
    operationalStandard: 'Control de conversión, calidad comercial y trazabilidad de oportunidades.',
    image: '/bloque4ventas.png'
  },
  {
    id: 'cobranzas',
    slug: 'cobranzas',
    title: 'Cobranzas',
    tagline: 'Recuperar también es conservar al cliente.',
    description:
      'Gestionamos cada caso con criterio para alcanzar acuerdos viables, recuperar saldos y dar continuidad a una relación de confianza con los clientes.',
    iconName: 'ShieldCheck',
    features: [
      'Segmentación por tramo de deuda',
      'Discado predictivo multicanal',
      'Negociación estructurada y acuerdos',
      'Conciliación y reportería diaria'
    ],
    benefits: [
      'Estándar Operativo',
      'Control de recuperación, calidad de negociación y trazabilidad de acuerdos.'
    ],
    operationalStandard: 'Control de recuperación, calidad de negociación y trazabilidad de acuerdos.',
    image: '/bloque4cobranzas.png'
  },
  {
    id: 'soporte-tecnico',
    slug: 'soporte-tecnico',
    title: 'Soporte Técnico',
    tagline: 'Resolver una incidencia es devolver continuidad a la experiencia.',
    description:
      'Gestionamos cada incidencia con criterio técnico y seguimiento hasta el cierre, para que el problema se resuelva y no vuelva a aparecer.',
    iconName: 'Workflow',
    features: [
      'Mesa de ayuda y escalamiento N1 / N2',
      'Base de conocimiento estructurada',
      'Diagnóstico remoto y resolución técnica',
      'Integración con plataformas CRM / Ticketing'
    ],
    benefits: [
      'Estándar Operativo',
      'Control de resolución, calidad técnica y trazabilidad de escalamiento.'
    ],
    operationalStandard: 'Control de resolución, calidad técnica y trazabilidad de escalamiento.',
    image: '/bloque4soporte.png'
  },
  {
    id: 'bo-gestion-procesos',
    slug: 'bo-gestion-procesos',
    title: 'BO y Gestión de Procesos',
    tagline: 'Lo que no se ve también sostiene la promesa',
    description:
      'Procesos administrativos con criterio y trazabilidad, para que cada expediente avance sin esperas, ni reprocesos.',
    iconName: 'FileText',
    features: [
      'Validación y verificación documental',
      'Onboarding de clientes y procesos KYC',
      'Gestión de transacciones y conciliaciones',
      'Data entry y auditoría de calidad end-to-end'
    ],
    benefits: [
      'Estándar Operativo',
      'Control de ejecución, criterios de validación y trazabilidad end to end.'
    ],
    operationalStandard: 'Control de ejecución, criterios de validación y trazabilidad end to end.',
    image: '/bloque4backofice.png'
  },
  {
    id: 'omnicanalidad-bots',
    slug: 'omnicanalidad-bots',
    title: 'Omnicanalidad y BOTS',
    tagline: 'Muchos canales. Una sola conversación',
    description:
      'Cada canal conserva el contexto para que la conversación continúe, aunque cambie el medio. Los bots amplían la capacidad de respuesta y la disponibilidad del servicio, manteniendo una atención consistente.',
    iconName: 'Bot',
    features: [
      'Integración omnicanal unificada',
      'Bots conversacionales con IA',
      'IVR y enrutamiento inteligente',
      'Automatización de interacciones recurrentes'
    ],
    benefits: [
      'Estándar Operativo',
      'Control de enrutamiento, continuidad entre canales y trazabilidad de cada interacción.'
    ],
    operationalStandard: 'Control de enrutamiento, continuidad entre canales y trazabilidad de cada interacción.',
    image: '/bloque4bots.png'
  },
  {
    id: 'rrhh-apoyo-psicosocial',
    slug: 'rrhh-apoyo-psicosocial',
    title: 'RRHH y Apoyo Psicosocial',
    tagline: 'Cada interacción pone a prueba la promesa de negocio.',
    description:
      'Gestionamos cada contacto con criterios claros de resolución, continuidad y control para sostener una experiencia consistente en cada punto de interacción.',
    iconName: 'Users',
    features: [
      'Línea de orientación y apoyo psicosocial',
      'Gestión de clima laboral y bienestar integral',
      'Fidelización y retención de talento operativo',
      'Acompañamiento en salud mental y prevención'
    ],
    benefits: [
      'Estándar Operativo',
      'Sostenibilidad del talento, reducción de rotación y clima laboral saludable.'
    ],
    operationalStandard: 'Sostenibilidad del talento, reducción de rotación y clima laboral saludable.',
    image: '/banners/banner-gestion-humana.png'
  }
];