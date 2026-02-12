export interface News {
  id: string
  title: string
  description: string
  content: string
  category: string
  image: string
  date: string
  featured?: boolean
}

export const newsData: News[] = [
  {
    id: "1",
    title: "Nueva Palmira impulsa desarrollo portuario con inversión histórica",
    description:
      "El gobierno departamental y la ANP destinan recursos para la ampliación del puerto, mejoras viales y espacios públicos que transformarán la ciudad.",
    content:
      "Nueva Palmira está atravesando un momento histórico con la inversión más importante en infraestructura portuaria. El proyecto incluye la ampliación de muelles, mejora de accesos viales y modernización de servicios.",
    category: "Política",
    image:
      "/images/noticia-1.jpg",
    date: "2026-02-12",
    featured: true,
  },
  {
    id: "2",
    title: "Junta Departamental aprueba presupuesto para obras en Nueva Palmira",
    description:
      "En sesión extraordinaria, se asignaron fondos para infraestructura vial, educación y servicios públicos.",
    content:
      "La Junta Departamental de Colonia ha aprobado un presupuesto récord destinado al desarrollo de Nueva Palmira con enfoque en infraestructura y servicios sociales.",
    category: "Política",
    image: "/images/noticia-2.jpg",
    date: "2026-02-11",
  },
  {
    id: "3",
    title: "Navíos cierra 2025 con récord de cargas y proyecta ampliar infraestructura en Nueva Palmira",
    description:
      "La terminal portuaria de Navíos en Nueva Palmira cerró 2025 con record de cargas movilizadas y anuncia proyectos para 2026 que incluyen ampliación de muelles y posible centro educativo.",
    content:
      "La empresa Navíos registró un récord cercano a 8 millones de toneladas movilizadas durante 2025 en su terminal ubicada en Nueva Palmira, destacando un crecimiento tanto en granos como en mineral de hierro. Para 2026 prevé ampliar muelles y explorar la instalación de una sede de la Universidad Tecnológica (UTEC) en la ciudad, reforzando la infraestructura logística y educativa local.",
    category: "Economía",
    image: "/images/noticia-3.jpg",
    date: "2026-02-10",
  },
  {
    id: "4",
    title: "Choque fatal entre auto y camión en ruta próxima a Nueva Palmira",
    description:
      "Un ciudadano alemán falleció y dos personas resultaron heridas tras un choque entre un auto y un camión en las rutas cercanas a Nueva Palmira.",
    content:
      "El 3 de julio de 2025 se registró un siniestro en el cruce de las rutas 12 y 21, donde un automóvil que intentaba incorporarse fue embestido por un camión. El conductor del auto, ciudadano alemán, falleció en el lugar y dos ocupantes resultaron con politraumatismos graves, según informó la Policía Caminera.",
    category: "Policial",
    image: "/images/noticia-4.jpg",
    date: "2026-02-09",
  },
  {
    id: "5",
    title: "Economía local crece con nuevas inversiones en comercio",
    description:
      "Empresas nacionales e internacionales expresan interés en instalarse en Nueva Palmira.",
    content:
      "Los indicadores económicos muestran un crecimiento sostenido impulsado por el comercio exterior y el turismo regional en aumento.",
    category: "Economía",
    image:
      "/images/noticia-5.jpg",
    date: "2026-02-08",
  },
  {
    id: "6",
    title: "Escuela de Navegación abre inscripciones para nuevos estudiantes",
    description:
      "Inicia período de admisión para cursos de formación marinera y capacitación portuaria.",
    content:
      "La institución educativa abre sus puertas a jóvenes interesados en desarrollar carreras en el sector marítimo y portuario.",
    category: "Educación",
    image: "/images/noticia-6.jpg",
    date: "2026-02-07",
  },
  {
    id: "7",
    title: "Medio Ambiente: Inician proyecto de conservación del Río Uruguay",
    description:
      "Gobiernos locales y organizaciones ambientales coordina acciones para cuidar el ecosistema fluvial.",
    content:
      "El proyecto incluye monitoreo de calidad de agua, reforestación ribereña y educación ambiental para la comunidad.",
    category: "Ambiente",
    image:
      "https://source.unsplash.com/800x600/?river,environment,nature",
    date: "2026-02-06",
  },
  {
    id: "8",
    title: "Opinión: El futuro portuario de Nueva Palmira",
    description:
      "Análisis sobre el potencial de la ciudad como hub logístico regional.",
    content:
      "Nueva Palmira tiene la oportunidad histórica de convertirse en un centro logístico de importancia regional, atrayendo inversiones y generando empleo.",
    category: "Opinión",
    image: "https://source.unsplash.com/800x600/?opinion,analysis,business",
    date: "2026-02-05",
  },
  {
    id: "9",
    title: "Turismo: Nuevas rutas de expedición en el río se abren al público",
    description:
      "Operadores turísticos lanzan tours ecológicos y culturales por el Río Uruguay.",
    content:
      "Las nuevas rutas permiten a visitantes experimentar la naturaleza y la historia de la región desde una perspectiva única en el agua.",
    category: "Turismo",
    image: "https://source.unsplash.com/800x600/?travel,tourism,river",
    date: "2026-02-04",
  },
  {
    id: "10",
    title: "Salud: Inauguran centro de atención médica especializada",
    description:
      "El nuevo centro ofrece servicios de cardiología, neurología y pediatría.",
    content:
      "La inauguración representa un hito importante para mejorar la accesibilidad a servicios de salud de calidad para los palmirenses.",
    category: "Salud",
    image:
      "https://source.unsplash.com/800x600/?hospital,healthcare,medical",
    date: "2026-02-03",
  },
]
