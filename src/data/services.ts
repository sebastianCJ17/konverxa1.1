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
      'Atención multicanal',
      'Gestión de niveles de servicio',
      'Medición de experiencia y resolución',
      'Gestión de requerimientos y reclamaciones'
    ],
    benefits: [
      'Estándar Operativo',
      'Control de SLA, supervisión en vivo y medición continua.'
    ],
    operationalStandard: 'Control de SLA, supervisión en vivo y medición continua.',
    evidenceQualityText:
      'El análisis de interacciones permite identificar qué se resuelve, qué vuelve a generar contacto y dónde se concentra la fricción.',
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
      'Prospección y generación de demanda.',
      'Venta cruzada y ampliación de cartera',
      'Fidelización y retención de clientes',
      'Agendamiento y concertación comercial'
    ],
    benefits: [
      'Estándar Operativo',
      'Control de conversión, calidad comercial y trazabilidad de oportunidades.'
    ],
    operationalStandard: 'Control de conversión, calidad comercial y trazabilidad de oportunidades.',
    evidenceQualityText:
      'El seguimiento de cada oportunidad permite identificar dónde se interrumpe la conversión y qué patrones se repiten en las gestiones más efectivas.',
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
      'Contacto multicanal',
      'Negociación estructurada y acuerdos',
      'Conciliación y seguimiento de cartera'
    ],
    benefits: [
      'Estándar Operativo',
      'Control de recuperación, calidad de negociación y trazabilidad de acuerdos.'
    ],
    operationalStandard: 'Control de recuperación, calidad de negociación y trazabilidad de acuerdos.',
    evidenceQualityText:
      'El análisis de cada gestión permite identificar qué acuerdos se sostienen, dónde se rompe el compromiso y qué patrones requieren intervención.',
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
      'Mesa de ayuda y escalamiento definido',
      'Base de conocimiento estructurada',
      'Diagnóstico remoto y resolución técnica',
      'Integración con las plataformas del cliente'
    ],
    benefits: [
      'Estándar Operativo',
      'Control de resolución, calidad técnica y trazabilidad de escalamiento.'
    ],
    operationalStandard: 'Control de resolución, calidad técnica y trazabilidad de escalamiento.',
    evidenceQualityText:
      'El análisis de incidencias muestra qué se resuelve al primer contacto, qué vuelve a entrar y qué lo explica.',
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
      'Gestión y actualización de datos',
      'Verificación documental',
      'Incorporación de clientes',
      'Gestión de procesos administrativos'
    ],
    benefits: [
      'Estándar Operativo',
      'Control de ejecución, criterios de validación y trazabilidad end to end.'
    ],
    operationalStandard: 'Control de ejecución, criterios de validación y trazabilidad end to end.',
    evidenceQualityText:
      'La trazabilidad de cada proceso permite identificar demoras, reprocesos y puntos de control que requieren intervención.',
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
      'Integración omnicanal',
      'Bots conversacionales',
      'Enrutamiento y autoservicio de voz',
      'Continuidad de contexto entre automatización y atención humana'
    ],
    benefits: [
      'Estándar Operativo',
      'Control de enrutamiento, continuidad entre canales y trazabilidad de cada interacción.'
    ],
    operationalStandard: 'Control de enrutamiento, continuidad entre canales y trazabilidad de cada interacción.',
    evidenceQualityText:
      'El análisis del recorrido entre canales permite detectar pérdidas de contexto, fricciones y automatizaciones que requieren revisión.',
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
      'Selección e incorporación de talento',
      'Formación y desarrollo',
      'Seguimiento de desempeño y permanencia',
      'Acompañamiento psicosocial y bienestar laboral'
    ],
    benefits: [
      'Estándar Operativo',
      'Sostenibilidad del talento, reducción de rotación y clima laboral saludable.'
    ],
    operationalStandard: 'Sostenibilidad del talento, reducción de rotación y clima laboral saludable.',
    evidenceQualityText:
      'El seguimiento de rotación, ausentismo y desempeño permite detectar señales de desgaste y orientar el acompañamiento antes de que afecten a la operación.',
    image: '/rrhh_multiethnic_team.jpg'
  }
];