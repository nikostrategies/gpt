import React from 'react';
import type { ServiceCategory as ServiceCategoryType } from '../../types/service';
import { colors } from '../../styles/colors';
import ServiceDetail from './ServiceDetail';

const ServiceCategory: React.FC<ServiceCategoryType> = ({
  title,
  description,
  services,
  image
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      {/* Image Section */}
      <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(45deg,
              ${colors.black.primary}cc 0%,
              transparent 100%)`
          }}
        />
      </div>

      {/* Content Section */}
      <div className="space-y-8">
        <div>
          <h2 
            className="font-cormorant text-3xl font-light tracking-wider mb-4 leading-relaxed"
            style={{ 
              background: colors.silver.gradient.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              paddingBottom: '0.1em'
            }}
          >
            {title}
          </h2>
          <p 
            className="text-lg font-light leading-relaxed tracking-wide"
            style={{ color: colors.silver.solid.secondary }}
          >
            {description}
          </p>
        </div>

        <div className="space-y-6">
          {services.map(service => (
            <ServiceDetail key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategory;