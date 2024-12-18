import React from 'react';
import type { Service } from '../../types/service';
import { colors } from '../../styles/colors';

const ServiceDetail: React.FC<Service> = ({
  title,
  description,
  features
}) => {
  return (
    <div 
      className="group p-6 rounded-sm relative overflow-hidden transition-all duration-300 ease-out
                 hover:translate-y-[-4px]"
      style={{ 
        background: `linear-gradient(135deg,
          ${colors.white.pure}05 0%,
          ${colors.white.pure}02 100%)`,
        boxShadow: `0 4px 20px -8px ${colors.black.primary}`,
      }}
    >
      {/* Animated border gradient */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg,
            ${colors.silver.solid.primary}10 0%,
            ${colors.silver.solid.secondary}05 100%)`
        }}
      />
      
      {/* Content container with hover effect */}
      <div className="relative z-10 transform-gpu transition-transform duration-300 ease-out
                    group-hover:translate-x-1">
        <h3 
          className="font-cormorant text-xl font-light tracking-wide mb-3 leading-relaxed
                     transition-colors duration-300 group-hover:text-blue-400"
          style={{ color: colors.silver.solid.primary }}
        >
          {title}
        </h3>
        
        <p 
          className="text-sm leading-relaxed mb-4 tracking-wide transition-opacity duration-300
                     group-hover:opacity-90"
          style={{ color: colors.silver.solid.secondary }}
        >
          {description}
        </p>

        {features && (
          <ul className="grid grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <li 
                key={index}
                className="text-sm flex items-center gap-2 tracking-wide
                         transition-transform duration-200 hover:translate-x-1"
                style={{ color: colors.silver.solid.secondary }}
              >
                <span className="w-1 h-1 rounded-full bg-blue-400 transition-transform duration-200
                              group-hover:scale-125" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Hover highlight effect */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-300
                   group-hover:opacity-5 pointer-events-none"
        style={{ 
          background: `radial-gradient(
            circle at center,
            ${colors.silver.solid.primary} 0%,
            transparent 70%
          )`
        }}
      />
    </div>
  );
};

export default ServiceDetail;