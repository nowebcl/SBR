export type OperationType = 'Venta' | 'Arriendo';

export type PropertyCategory = 'Casa' | 'Departamento' | 'Oficina' | 'Parcela' | 'Penthouse';

export interface PropertyAgent {
  name: string;
  role: string;
  phone: string;
  email: string;
  avatar: string;
}

export interface Property {
  id: string;
  title: string;
  priceUF: number;
  priceCLP: number;
  operation: OperationType;
  propertyType: PropertyCategory;
  featured: boolean;
  tag?: string;
  location: {
    address: string;
    comuna: string;
    city: string;
  };
  specs: {
    bedrooms: number;
    bathrooms: number;
    areaM2: number;
    parkings: number;
  };
  images: string[];
  agent: PropertyAgent;
  description: string;
  features: string[];
  yearBuilt?: number;
}

export interface FloorPlan {
  id: string;
  name: string;
  tagline: string;
  totalArea: number;
  bedrooms: number;
  bathrooms: number;
  terraceArea: number;
  parkings: number;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comuna: string;
  avatar: string;
  rating: number;
  content: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  author: string;
}

export interface LocationZone {
  id: string;
  name: string;
  region: string;
  count: number;
  image: string;
}

export interface FilterState {
  operation: OperationType | 'Todos';
  propertyType: string;
  comuna: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
}
