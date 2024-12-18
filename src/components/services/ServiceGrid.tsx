import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../../utils/serviceData';
import FadeInUp from '../animations/FadeInUp';

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
      {services.map((service, index) => (
        <FadeInUp 
          key={service.id} 
          delay={index * 100}
          className="h-full"
        >
          <ServiceCard {...service} />
        </FadeInUp>
      ))}
    </div>
  );
};

export default ServiceGrid;