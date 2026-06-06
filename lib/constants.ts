import type { QuizGoal } from "@/types";

export const SITE = {
  name: "EmFit",
  instagram: "https://www.instagram.com/em_fitbcn",
  instagramHandle: "@em_fitbcn",
} as const;

export const BOOKING = {
  calendlyUrl: "https://calendly.com/emfitbcn/valoracion",
  whatsappNumber: "34XXXXXXXXX",
  whatsappMessage:
    "Hola, quiero reservar mi primera sesión de entrenamiento presencial con EmFit.",
} as const;

export const NAV_LINKS = [
  { label: "Casos de Éxito", href: "#transformaciones" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Precios", href: "#precios" },
] as const;

export const HERO = {
  h1: "Entrenamiento de Alta Intensidad Presencial en Sant Adrià de Besòs y Barcelona",
  h2: "Transforma tu físico con sesiones 1-to-1 bajo supervisión directa. Sin rutinas genéricas que acabas abandonando. Solo técnica impecable, motivación extrema en cada repetición y resultados reales.",
  cta: "Reserva tu Primera Sesión",
  secondaryCta: "Escríbenos por WhatsApp",
  headerCta: "Agendar Valoración Gratuita",
  stickyCta: "Reserva tu Primera Sesión",
} as const;

export const TRUST_BAR = {
  metric: "Transformando físicos en la zona de Barcelona",
  logos: [
    "Sant Adrià de Besòs",
    "Barcelona",
    "Resultados comprobados",
    "Entrenamiento 1-to-1",
    "Alta Intensidad",
  ],
} as const;

/** @deprecated Quiz funnel desconectado de la landing; conservado para QuizTeaser/QuizModal */
export const QUIZ_TEASER = {
  question:
    "¿Estás frustrado por no saber por dónde empezar? Descubre el programa exacto para tu biotipo en apenas 30 segundos.",
  options: [
    {
      id: "weight_loss" as QuizGoal,
      label: "Quiero perder peso radical",
      description: "Recomposición corporal con déficit controlado",
    },
    {
      id: "hypertrophy" as QuizGoal,
      label: "Busco hipertrofia muscular",
      description: "Glúteos, cuádriceps y femorales al máximo",
    },
    {
      id: "performance" as QuizGoal,
      label: "Deseo mejorar mi rendimiento",
      description: "Fuerza funcional y potencia atlética",
    },
  ],
} as const;

export const CTA_BLOCK = {
  title: "¿Listo para entrenar de verdad?",
  subtitle:
    "Reserva tu valoración gratuita y descubre cómo el entrenamiento presencial puede cambiar tu físico en semanas, no meses.",
} as const;

export const BELIEF_BREAKING = {
  headline:
    "Probablemente has intentado ponerte en forma docenas de veces y has fracasado. Entrenar solo no es el problema — entrenar sin supervisión sí lo es.",
  columns: [
    {
      title: "Error Fisiológico",
      error: "Copiar rutinas de Instagram sin saber si encajan contigo.",
      refutation:
        "Con corrección técnica al milímetro, cada repetición estimula glúteo y pierna de forma segura y eficiente.",
    },
    {
      title: "Error de Intensidad",
      error: "Parar cuando empiezas a sentir el esfuerzo real.",
      refutation:
        "Un coach presencial te empuja al límite exacto donde ocurre la transformación — sin cruzar la línea de la lesión.",
    },
    {
      title: "Error Psicológico",
      error: "Depender solo de tu motivación del lunes.",
      refutation:
        "Tener a alguien esperándote en cada sesión elimina la excusa y construye el hábito que las apps no pueden garantizar.",
    },
  ],
} as const;

export const VALUE_PROPS = [
  {
    title: "Corrección Técnica al Milímetro",
    description:
      "Evita lesiones y maximiza el estímulo del glúteo y pierna con supervisión directa en cada movimiento.",
    icon: "target",
  },
  {
    title: "Motivación al Límite",
    description:
      "Alguien que te empuja cuando tú solo te rendirías. Intensidad real, repetición tras repetición.",
    icon: "flame",
  },
  {
    title: "Adaptación en Tiempo Real",
    description:
      "Ajuste de cargas y ejercicios en el momento según cómo te sientas ese día. Sin rutinas rígidas.",
    icon: "sliders",
  },
] as const;

export const TRANSFORMATIONS = [
  { name: "A. Manzanares", goal: "Pérdida de peso", weeks: 12 },
  { name: "C. Ro", goal: "Hipertrofia glúteo", weeks: 16 },
  { name: "M. García", goal: "Rendimiento", weeks: 8 },
  { name: "L. Fernández", goal: "Tonificación", weeks: 10 },
] as const;

export const TRANSFORMATIONS_SECTION = {
  title: "Resultados que hablan por sí mismos",
  subtitle: "Transformaciones reales de clientes locales en Sant Adrià y Barcelona",
} as const;

export const VIDEO_TESTIMONIALS = [
  {
    title: "De la frustración al primer récord personal",
    duration: "0:58",
  },
  {
    title: "Recuperar la confianza tras el parto",
    duration: "0:45",
  },
  {
    title: "Resultados reales con entrenamiento presencial",
    duration: "0:52",
  },
] as const;

export const VIDEO_TESTIMONIALS_SECTION = {
  title: "Historias de superación real",
  subtitle: "Clientes locales que superaron barreras emocionales, operativas y de salud",
} as const;

export const PRICING = {
  headline:
    "Invierte en tu físico con sesiones presenciales. Sin permanencias, sin suscripciones ocultas.",
  plans: {
    single: {
      id: "single" as const,
      name: "Sesión Suelta",
      price: "45€",
      period: "/ sesión",
      cta: "Reservar Sesión Suelta",
      note: "Ideal para una corrección técnica puntual o probar el sistema.",
    },
    bundle: {
      id: "bundle" as const,
      name: "Bono 10 Sesiones",
      price: "350€",
      period: " total",
      perSession: "35€",
      cta: "Reservar Bono 10 Sesiones",
      badge: "Más Popular",
      note: "Compromiso real. El camino más eficiente hacia resultados visibles.",
    },
  },
} as const;

export const FAQ_ITEMS = [
  {
    question: "¿Dónde entrenamos?",
    answer:
      "Sesiones en Sant Adrià de Besòs y Barcelona. [Especificar: centro / domicilio / aire libre].",
  },
  {
    question: "¿Cómo funciona la primera clase?",
    answer:
      "Comenzamos con una valoración de tu estado actual, objetivos y limitaciones. A partir de ahí, diseñamos y ejecutamos una sesión adaptada a ti — sin rutinas genéricas.",
  },
  {
    question: "¿Cuánto dura cada sesión?",
    answer:
      "Entre 45 y 60 minutos de entrenamiento de alta intensidad, con calentamiento y vuelta a la calma incluidos.",
  },
  {
    question: "¿Necesito experiencia previa?",
    answer:
      "No. Trabajamos con todos los niveles. La intensidad y la técnica se adaptan a tu punto de partida.",
  },
  {
    question: "¿Puedo entrenar con lesiones?",
    answer:
      "Sí, con adaptaciones en tiempo real. Variantes de ejercicios y cargas ajustadas según tu estado ese día.",
  },
] as const;

export const VALUE_PROPS_SECTION = {
  title: "Por qué entrenar presencial con EmFit",
  subtitle: "Tres ventajas que una app no puede replicar",
} as const;
