import { ModelPhase, OneXPillar, ExcelenciaDimension, OneXDimension, CikPhase } from '../types';

export const ONEX_PILLARS: OneXPillar[] = [
  {
    id: 'estrategia',
    tabLabel: '01 · Estrategia y Alineación',
    title: 'Estrategia y Alineación',
    subtitle: 'DIRECCIÓN CLARA',
    description: 'Conecta los objetivos del negocio con las prioridades y criterios de la operación. La ejecución avanza bajo una dirección común, no por inercia del servicio.',
    keyPoints: [
      'Gobierno ejecutivo y mecanismos de decisión',
      'Gestión de riesgos y continuidad operativa',
      'Criterios de servicio, desempeño y viabilidad económica'
    ],
    impactTitle: 'Impacto de Negocio',
    impactDescription: 'Equipos preparados y una cultura compartida permiten ejecutar con consistencia los procesos y el sistema de gestión de KONVERXA en cada operación.',
    icon: 'Target'
  },
  {
    id: 'talento',
    tabLabel: '02 · Talento y Cultura',
    title: 'Talento y Cultura',
    subtitle: 'FACTOR HUMANO',
    description: 'Reclutamos, formamos y desarrollamos talento operativo bajo una cultura de trabajo definida, con capacitación continua, acompañamiento y desarrollo profesional.',
    keyPoints: [
      'Perfiles y competencias definidos según las exigencias de cada operación e industria',
      'Formación completada antes de la incorporación al puesto',
      'Criterios de evaluación conocidos desde el inicio'
    ],
    impactTitle: 'Impacto de Negocio',
    impactDescription: 'Equipos preparados y una cultura compartida permiten ejecutar con consistencia los procesos y el sistema de gestión de KONVERXA en cada operación.',
    icon: 'Users'
  },
  {
    id: 'tecnologia',
    tabLabel: '03 · Tecnología y Automatización',
    title: 'Tecnología y Automatización',
    subtitle: 'INFRAESTRUCTURA ROBUSTA',
    description: 'Integramos tecnología, automatización e inteligencia artificial en la operación cuando aportan eficiencia, control o capacidad',
    keyPoints: [
      'Arquitectura tecnológica escalable y orientada a la continuidad operativa',
      'Integración de canales, plataformas y herramientas de gestión',
      'Automatización aplicada a procesos con impacto operativo'
    ],
    impactTitle: 'Impacto de Negocio',
    impactDescription: 'La tecnología amplía la capacidad de ejecución del modelo sin sustituir el criterio con el que se gobierna la operación.',
    icon: 'Cpu'
  },
  {
    id: 'analitica',
    tabLabel: '04 · Analítica y BI Operativo',
    title: 'Analítica y BI Operativo',
    subtitle: 'DECISIONES BASADAS EN DATOS',
    description: 'Medimos el comportamiento de cada operación frente al estándar que debe cumplir, sin limitar el análisis a la comparación con su propio histórico.',
    keyPoints: [
      'Indicadores definidos por operación, proceso y objetivo',
      'Modelos de análisis y proyección operativa',
      'Tableros de seguimiento con cadencia definida'
    ],
    impactTitle: 'Impacto de Negocio',
    impactDescription: 'Las desviaciones se identifican cuando todavía pueden corregirse, no cuando ya forman parte del resultado.',
    icon: 'BarChart3'
  },
  {
    id: 'gobernanza',
    tabLabel: '05 · Gobernanza y Calidad',
    title: 'Gobierno y Calidad',
    subtitle: 'GARANTÍA DE CONTROL',
    description: 'Establecemos responsabilidades diferenciadas, niveles de decisión y controles integrados en la gestión de cada operación.',
    keyPoints: [
      'Roles, responsabilidades y niveles de decisión definidos',
      'Controles de calidad integrados en la cadencia operativa',
      'Planes de acción con responsable, plazo y verificación de cierre'
    ],
    impactTitle: 'Impacto de Negocio',
    impactDescription: 'La calidad no se revisa al final: se gobierna durante la operación, con responsabilidades y controles definidos.',
    icon: 'ShieldCheck'
  }
];

export const INTEGRALX_PHASES: ModelPhase[] = [
  {
    number: '01',
    name: 'Diagnóstico & Inmersión (DiagnósticoX)',
    subtitle: 'Fase de Análisis Profundo',
    description: 'Analizamos la situación actual (As-Is) de los procesos, tecnología, volumetrías y experiencia del usuario para identificar cuellos de botella y brechas de eficiencia.',
    deliverables: [
      'Mapa de procesos operativo detallado',
      'Business Case de eficiencias proyectadas',
      'Matriz de riesgos y mitigación',
      'Plan maestro de transición (SLA/KPI target)'
    ]
  },
  {
    number: '02',
    name: 'Diseño & Reingeniería (DiseñoX)',
    subtitle: 'Fase de Arquitectura de Servicio',
    description: 'Rediseñamos la operación (To-Be) integrando mejores prácticas de la industria, flujos omnicanal, guiones de interacción, automatizaciones y modelos de capacitación.',
    deliverables: [
      'Modelos de atención y escalamiento',
      'Configuración de tecnología e integraciones API',
      'Contenidos y simuladores de formación',
      'Gobernanza y estructura organizativa'
    ]
  },
  {
    number: '03',
    name: 'Implementación & Transition (ImplementaciónX)',
    subtitle: 'Puesta en Marcha Controlada',
    description: 'Ejecutamos la migración operativa en entornos paralelos controlados (Pilot Testing), garantizando continuidad total del servicio sin impacto en los clientes.',
    deliverables: [
      'Selección y contratación de talento alineado',
      'Pruebas end-to-end de sistemas y telecomunicaciones',
      'Período de marcha blanca (Go-Live gradual)',
      'Acompañamiento directivo presencial/remoto'
    ]
  },
  {
    number: '04',
    name: 'Optimización Continua (EvoluciónX)',
    subtitle: 'Fase de Sostenibilidad e Innovación',
    description: 'Una vez estabilizada la operación, aplicamos metodologías Kaizen, analítica avanzada de Speech & Text, e IA para elevar constantemente la productividad y experiencia.',
    deliverables: [
      'Auditoría continua de calidad mediante IA',
      'Comités mensuales de innovación y eficiencias',
      'Planes de carrera y fidelización de talento',
      'Evolución tecnológica constante'
    ]
  }
];

export const EXCELENCIA_DIMENSIONS: ExcelenciaDimension[] = [
  {
    id: 'operativa',
    tabLabel: 'Excelencia Operativa',
    title: 'Excelencia Operativa',
    subtitle: 'EJECUCIÓN y CONTROL',
    description: 'Capacidad de ejecutar con consistencia. Una operación cumple esta dimensión cuando su desempeño no depende del día, de la carga ni de quién esté al frente.',
    keyPoints: [
      'El control se ejerce durante la ejecución, no sobre el resultado',
      'Las desviaciones se corrigen dentro del propio ciclo operativo',
      'La consistencia es una propiedad del método, no del equipo'
    ],
    impactTitle: 'Impacto de Negocio',
    impactDescription: 'La operación alcanza un nivel de ejecución estable que permite anticipar su comportamiento y gestionar sus desviaciones.',
    icon: 'Activity'
  },
  {
    id: 'organizacional',
    tabLabel: 'Excelencia Organizacional',
    title: 'Excelencia Organizacional',
    subtitle: 'ESTRUCTURA y GOBIERNO',
    description: 'Capacidad de sostener, aprender y evolucionar. Una organización cumple esta dimensión cuando mantiene su funcionamiento, desarrolla sus capacidades y responde a nuevas exigencias sin depender de soluciones circunstanciales.',
    keyPoints: [
      'La estructura define quién responde de cada decisión antes de tomarla',
      'La organización desarrolla a sus personas y a sus líderes de forma sistemática',
      'El aprendizaje se incorpora a la estructura y se convierte en capacidad organizacional'
    ],
    impactTitle: 'Impacto de Negocio',
    impactDescription: 'La continuidad deja de ser una consecuencia de la estabilidad del equipo y pasa a ser una propiedad de la organización.',
    icon: 'Building2'
  },
  {
    id: 'etica',
    tabLabel: 'Excelencia Ética',
    title: 'Excelencia Ética',
    subtitle: 'COHERENCIA y RESPONSABILIDAD',
    description: 'Capacidad de actuar con coherencia y responsabilidad incluso bajo presión por el resultado. Una operación cumple esta dimensión cuando lo que promete, ejecuta y comunica responde al mismo criterio y puede contrastarse sin contradicción..',
    keyPoints: [
      'El criterio se mantiene independiente del nivel de exigencia',
      'Los compromisos se cumplen sin ceder en los principios definidos',
      'No existe distancia entre la realidad que conocemos y la que comunicamos'
    ],
    impactTitle: 'Impacto de Negocio',
    impactDescription: 'La coherencia deja de depender de la voluntad de las personas y pasa a ser una condición del sistema.',
    icon: 'Scale'
  }
];

export const CIK_PHASES: CikPhase[] = [
  {
    number: 1,
    descriptor: 'COMPRENSIÓN OPERATIVA',
    name: 'Diagnosticar',
    text: 'Comprendemos el estado real de la operación e identificamos las condiciones, desviaciones y causas que pueden estar afectando su desempeño.'
  },
  {
    number: 2,
    descriptor: 'DISEÑO DE LA INTERVENCIÓN',
    name: 'Diseñar',
    text: 'Definimos los cambios necesarios en la forma de operar y los criterios que orientan su aplicación.'
  },
  {
    number: 3,
    descriptor: 'PUESTA EN PRÁCTICA',
    name: 'Implementar',
    text: 'Llevamos lo diseñado a la operación con responsabilidades, plazos y controles definidos.'
  },
  {
    number: 4,
    descriptor: 'EJECUCIÓN OPERATIVA',
    name: 'Operar',
    text: 'Ejecutamos la operación bajo los criterios definidos y los controles establecidos.'
  },
  {
    number: 5,
    descriptor: 'LECTURA DEL DESEMPEÑO',
    name: 'Medir',
    text: 'Contrastamos el comportamiento real de la operación con el estándar y los objetivos definidos para identificar desviaciones y evolución.'
  },
  {
    number: 6,
    descriptor: 'APRENDIZAJE OPERATIVO',
    name: 'Aprender',
    text: 'Interpretamos qué explica los resultados y las desviaciones, y qué prácticas conviene preservar, revisar o transformar.'
  },
  {
    number: 7,
    descriptor: 'EVALUACIÓN CONTINUA',
    name: 'Mejorar',
    text: 'Incorporamos lo aprendido al diseño de la operación y el ciclo continúa sobre una base más sólida.'
  }
];

export const ONEX_DIMENSIONS: OneXDimension[] = [
  {
    id: 'cx',
    tabLabel: 'CX · La Promesa',
    title: 'CX · Customer Xperience',
    subtitle: 'PROMESA',
    description: 'Lee si la organización entrega de forma consistente lo que prometió al mercado. La experiencia del cliente no es un resultado aislado: es la manifestación visible del funcionamiento del conjunto.',
    keyPoints: [
      'Promesa realizada al cliente',
      'Experiencia real entregada',
      'Brechas relevantes de cumplimiento'
    ],
    impactTitle: 'Impacto de Negocio',
    impactDescription: 'Hace visible en qué medida la experiencia entregada corresponde con la promesa realizada al cliente.',
    icon: 'Target'
  },
  {
    id: 'ex',
    tabLabel: 'EX · Las Personas',
    title: 'EX · Employee Xperience',
    subtitle: 'PERSONAS',
    description: 'Lee si las personas disponen de las condiciones necesarias para cumplir lo que la organización promete, y qué explica sus desviaciones.',
    keyPoints: [
      'Claridad de roles y dirección',
      'Capacidad de equipo',
      'Desarrollo de Capacidades Organizacionales'
    ],
    impactTitle: 'Impacto de Negocio',
    impactDescription: 'Hace visible en qué medida las personas pueden sostener la promesa y qué condiciones lo están impidiendo.',
    icon: 'Users'
  },
  {
    id: 'ox',
    tabLabel: 'OX · La Capacidad',
    title: 'OX · Organization Xperience',
    subtitle: 'CAPACIDAD',
    description: 'Lee si la organización tiene capacidad real para sostener lo que promete, en términos económicos, operativos y de crecimiento.',
    keyPoints: [
      'Capacidad Económica',
      'Capacidad Operativa',
      'Capacidad de Crecimiento'
    ],
    impactTitle: 'Impacto de Negocio',
    impactDescription: 'Hace visible si la operación puede sostenerse y crecer sin degradar el estándar ni la rentabilidad',
    icon: 'Building2'
  }
];

