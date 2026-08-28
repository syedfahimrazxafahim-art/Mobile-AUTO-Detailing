export type VehicleCategory = 'Cars' | 'SUVs' | 'Trucks' | 'RVs' | 'Boats' | 'Planes';

export type PageId = 'home' | 'services' | 'gallery' | 'service-areas' | 'booking' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  startingPrice: number;
  iconName: string;
  badge?: string;
  recommendedFor: string;
  steps: string[];
  imageKey?: 'IMG' | 'IMG1' | 'IMG2' | 'IMG3' | 'LOGO';
}

export interface DetailingPackage {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  prices: {
    sedan: number;
    suv: number;
    truck: number;
    rvBoat: string;
  };
  duration: string;
  features: string[];
  perfectFor: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'paint-correction' | 'ceramic-coating' | 'headlights' | 'water-spots' | 'scratches' | 'trucks-suvs';
  vehicle: string;
  treatment: string;
  duration: string;
  description: string;
  beforeDesc: string;
  afterDesc: string;
  imageKey: 'IMG' | 'IMG1' | 'IMG2' | 'IMG3' | 'LOGO';
  resultsBadge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  vehicle: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  region: string;
  zipCodes: string[];
  popularServices: string[];
}
