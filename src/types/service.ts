export interface Service {
  id: string;
  title: string;
  description: string;
  features?: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  services: Service[];
}