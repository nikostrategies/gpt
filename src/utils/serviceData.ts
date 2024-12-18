import { Home, Wrench, Building2, ClipboardList, Pencil, Construction } from 'lucide-react';
import type { Service } from '../types/service';

export const services: Service[] = [
  {
    id: 'custom-homes',
    icon: Home,
    title: 'Custom Home Building',
    description: 'Elevate your lifestyle with bespoke residences crafted to perfection, where innovative design meets uncompromising quality.'
  },
  {
    id: 'renovations',
    icon: Wrench,
    title: 'Renovations & Remodels',
    description: 'Transform your space with cutting-edge renovations that blend contemporary aesthetics with functional excellence.'
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Create impactful commercial spaces that inspire productivity and reflect your company\'s forward-thinking vision.'
  },
  {
    id: 'project-management',
    icon: ClipboardList,
    title: 'Project Management',
    description: 'Experience seamless project execution with our advanced management systems and dedicated team of experts.'
  },
  {
    id: 'design-build',
    icon: Pencil,
    title: 'Design-Build Services',
    description: 'Unite vision and execution through our integrated design-build approach, delivering innovative solutions efficiently.'
  },
  {
    id: 'building-envelope',
    icon: Construction,
    title: 'Building Envelope',
    description: 'Protect your investment with state-of-the-art envelope systems that ensure durability and energy efficiency.'
  }
];