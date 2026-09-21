import { Property } from '../types';

export const propertiesData: Property[] = [
  {
    id: 'prop-1',
    title: 'Exclusivo Penthouse Dúplex con Vista a la Cordillera',
    priceUF: 9800,
    priceCLP: 367500000,
    operation: 'Venta',
    propertyType: 'Penthouse',
    featured: true,
    tag: 'Exclusivo',
    location: {
      address: 'Av. Las Rastras 1450',
      comuna: 'Las Rastras',
      city: 'Talca'
    },
    specs: {
      bedrooms: 4,
      bathrooms: 4,
      areaM2: 245,
      parkings: 2
    },
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Matías Silva',
      role: 'Director Comercial SBR Talca',
      phone: '+56 9 9299 0961',
      email: 'msilva@sbr.cl',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80'
    },
    description: 'Impresionante penthouse dúplex de finas terminaciones en el corazón de Las Rastras, Talca. Gran terraza panorámica con quincho integrado, cocina de vanguardia y master suite con vista despejada a la cordillera.',
    features: ['Terraza Panorámica', 'Quincho Techado', 'Calefacción Central', 'Seguridad 24/7', 'Domótica', 'Bodega Amplia'],
    yearBuilt: 2023
  },
  {
    id: 'prop-2',
    title: 'Moderna Casa Mediterránea en Condominio Hacienda Esmeralda',
    priceUF: 13900,
    priceCLP: 521250000,
    operation: 'Venta',
    propertyType: 'Casa',
    featured: true,
    tag: 'Destacada',
    location: {
      address: 'Condominio La Esmeralda s/n',
      comuna: 'Las Rastras',
      city: 'Talca'
    },
    specs: {
      bedrooms: 5,
      bathrooms: 4,
      areaM2: 340,
      parkings: 4
    },
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Valentina Henríquez',
      role: 'Especialista en Residencial Talca Oriente',
      phone: '+56 9 9299 0961',
      email: 'vhenriquez@sbr.cl',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80'
    },
    description: 'Arquitectura mediterránea de vanguardia en el sector más exclusivo de Talca. Terreno de 1.000 m², jardín formado con paisajismo sustentable, piscina, quincho completo y finas terminaciones en madera nativa.',
    features: ['Jardín de 1.000 m²', 'Piscina', 'Riego Automático', 'Condominio Cerrado', 'Ventanas Termopanel', 'Sala de Estar'],
    yearBuilt: 2022
  },
  {
    id: 'prop-3',
    title: 'Departamento de Alta Gama a Pasos de Mall Plaza Maule',
    priceUF: 5800,
    priceCLP: 217500000,
    operation: 'Venta',
    propertyType: 'Departamento',
    featured: true,
    tag: 'Oportunidad',
    location: {
      address: 'Av. San Miguel 3100',
      comuna: 'San Miguel',
      city: 'Talca'
    },
    specs: {
      bedrooms: 3,
      bathrooms: 2,
      areaM2: 110,
      parkings: 2
    },
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Rodrigo Morales',
      role: 'Corredor Senior SBR Talca',
      phone: '+56 9 9299 0961',
      email: 'rmorales@sbr.cl',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80'
    },
    description: 'Inmejorable conectividad en Av. San Miguel. Cercano a colegios, clínicas y centros comerciales. Amplia terraza con vista al oriente, cocina equipada con cubierta de cuarzo y edificio con piscina y quincho.',
    features: ['Piscina Común', 'Gimnasio', 'Sala Multiuso', 'Conserjería 24 hrs', 'Calefacción Central', 'Estacionamiento Subterráneo'],
    yearBuilt: 2023
  },
  {
    id: 'prop-4',
    title: 'Departamento Amoblado de Diseño en Sector 30 Oriente',
    priceUF: 22,
    priceCLP: 825000,
    operation: 'Arriendo',
    propertyType: 'Departamento',
    featured: false,
    tag: 'Arriendo Rápido',
    location: {
      address: 'Calle 30 Oriente 1580',
      comuna: 'Centro',
      city: 'Talca'
    },
    specs: {
      bedrooms: 2,
      bathrooms: 2,
      areaM2: 75,
      parkings: 1
    },
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Camila Rojas',
      role: 'Gestora de Arriendos SBR',
      phone: '+56 9 9299 0961',
      email: 'crojas@sbr.cl',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80'
    },
    description: 'Impecable departamento completamente amoblado y equipado. Estilo contemporáneo, terraza con vista despejada, cocina americana y rápida conexión con el eje comercial y bancario de Talca.',
    features: ['Completamente Amoblado', 'Bicicletero', 'Lavandería', 'Acceso Controlado', 'Cercano a Universidades'],
    yearBuilt: 2021
  },
  {
    id: 'prop-5',
    title: 'Hermosa Casa Campestre Tradicional en Huertos de San Miguel',
    priceUF: 11500,
    priceCLP: 431250000,
    operation: 'Venta',
    propertyType: 'Casa',
    featured: true,
    tag: 'Clásica',
    location: {
      address: 'Calle Los Ciruelos 420',
      comuna: 'San Miguel',
      city: 'Talca'
    },
    specs: {
      bedrooms: 4,
      bathrooms: 3,
      areaM2: 290,
      parkings: 3
    },
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Matías Silva',
      role: 'Director Comercial SBR Talca',
      phone: '+56 9 9299 0961',
      email: 'msilva@sbr.cl',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80'
    },
    description: 'Sólida construcción en Huertos de San Miguel con tejas coloniales, amplias vigas a la vista en roble, gran parque arbolado con piscina, quincho independiente y pozo propio.',
    features: ['Piscina Grande', 'Vigas a la Vista', 'Quincho Rústico', 'Pozo Propio', 'Barrio Residencial Seguro'],
    yearBuilt: 2018
  },
  {
    id: 'prop-6',
    title: 'Casa Panorámica Frente al Mar y Río en Constitución',
    priceUF: 7400,
    priceCLP: 277500000,
    operation: 'Venta',
    propertyType: 'Casa',
    featured: true,
    tag: 'Costa Maule',
    location: {
      address: 'Cerro Mutrún s/n',
      comuna: 'Constitución',
      city: 'Maule'
    },
    specs: {
      bedrooms: 3,
      bathrooms: 2,
      areaM2: 165,
      parkings: 2
    },
    images: [
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Valentina Henríquez',
      role: 'Especialista en Costa del Maule',
      phone: '+56 9 9299 0961',
      email: 'vhenriquez@sbr.cl',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80'
    },
    description: 'Privilegiada vista al océano y a la desembocadura del Río Maule en Constitución. Terraza panorámica, arquitectura de madera y piedra, amplio terreno y gran potencial turístico.',
    features: ['Vista al Mar y Río', 'Gran Terraza', 'Calefacción a Leña Bosca', 'Terreno Amplio', 'Entorno Natural'],
    yearBuilt: 2021
  },
  {
    id: 'prop-7',
    title: 'Moderna Planta de Oficinas en Centro de Negocios Las Rastras',
    priceUF: 45,
    priceCLP: 1687500,
    operation: 'Arriendo',
    propertyType: 'Oficina',
    featured: false,
    tag: 'Corporativo',
    location: {
      address: 'Av. Las Rastras 1240',
      comuna: 'Las Rastras',
      city: 'Talca'
    },
    specs: {
      bedrooms: 1,
      bathrooms: 2,
      areaM2: 120,
      parkings: 2
    },
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Rodrigo Morales',
      role: 'Corredor Senior SBR Talca',
      phone: '+56 9 9299 0961',
      email: 'rmorales@sbr.cl',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80'
    },
    description: 'Oficina ejecutiva habilitada en el polo corporativo más moderno de Talca. Climatización individual, sala de reuniones privada, piso flotante de alto tráfico y conserjería 24/7.',
    features: ['Polo Comercial Las Rastras', 'Climatización Split', 'Sala de Juntas', 'Estacionamientos Clientes', 'Seguridad 24 hrs'],
    yearBuilt: 2022
  },
  {
    id: 'prop-8',
    title: 'Parcela de Agrado de 5.000 m² con Derechos de Agua en San Clemente',
    priceUF: 4900,
    priceCLP: 183750000,
    operation: 'Venta',
    propertyType: 'Parcela',
    featured: false,
    tag: 'Naturaleza',
    location: {
      address: 'Camino Internacional Km 14',
      comuna: 'San Clemente',
      city: 'Maule'
    },
    specs: {
      bedrooms: 3,
      bathrooms: 2,
      areaM2: 5000,
      parkings: 4
    },
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Camila Rojas',
      role: 'Gestora de Parcelas SBR',
      phone: '+56 9 9299 0961',
      email: 'crojas@sbr.cl',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80'
    },
    description: 'Terreno plano de 5.000 m² con casa campestre estilo rústico a minutos de Talca. Derechos de agua superficiales inscritos, árboles nativos, empalme eléctrico y portón automático.',
    features: ['5.000 m² Planos', 'Derechos de Agua', 'Luz Eléctrica', 'Árboles Nativos', 'Camino Pavimentado'],
    yearBuilt: 2020
  }
];
