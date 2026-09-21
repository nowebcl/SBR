import { FloorPlan } from '../types';

export const floorPlansData: FloorPlan[] = [
  {
    id: 'plan-1',
    name: 'Estudio Deluxe',
    tagline: 'Ideal para profesionales e inversionistas',
    totalArea: 48,
    bedrooms: 1,
    bathrooms: 1,
    terraceArea: 6,
    parkings: 1,
    description: 'Distribución inteligente de espacio continuo. Integra dormitorio principal con closet empotrado, cocina equipada con isla de cuarzo y terraza panorámica.',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'plan-2',
    name: 'Departamento 2D + 2B',
    tagline: 'Equilibrio perfecto entre amplitud y confort',
    totalArea: 92,
    bedrooms: 2,
    bathrooms: 2,
    terraceArea: 14,
    parkings: 1,
    description: 'Estilo mariposa con dormitorios en extremos opuestos para máxima privacidad. Gran living comedor central conectado a terraza corrida.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'plan-3',
    name: 'Penthouse Dúplex',
    tagline: 'Exclusividad en las alturas con rooftop privado',
    totalArea: 285,
    bedrooms: 4,
    bathrooms: 4,
    terraceArea: 65,
    parkings: 3,
    description: 'Primer nivel con suites familiares, cocina de vanguardia y sala de estar. Segundo nivel con terraza panorámica, quincho privado y sector lounge.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'plan-4',
    name: 'Casa Familiar 4D + 4B',
    tagline: 'Espacio, jardín y vida al aire libre para toda la familia',
    totalArea: 380,
    bedrooms: 5,
    bathrooms: 5,
    terraceArea: 45,
    parkings: 4,
    description: 'Vivienda de dos niveles con doble altura en hall de acceso. Dormitorio principal en suite en primer piso, patio interior, quincho techado y piscina.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80'
  }
];
