import React from 'react';
import { colors } from '../../styles/colors';
import type { Service } from '../../types/service';

const ServiceCard: React.FC<Service> = ({ icon: Icon, title, description }) => {
  return (
    <div 
      className="group relative p-8 rounded-sm transition-all duration-500 overflow-hidden
                 hover:translate-y-[-4px] backdrop-blur-sm"
      style={{ 
        background: `linear-gradient(135deg, 
          ${colors.charcoal.dark}40 0%, 
          ${colors.charcoal.light}20 100%)`
      }}
    >
      {/* Animated border gradient */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg,
            ${colors.silver.solid.primary}20 0%,
            ${colors.silver.solid.secondary}10 100%)`
        }}
      />
      
      {/* Icon with animation */}
      <div 
        className="relative mb-6 transform-gpu transition-all duration-500 ease-out
                   group-hover:scale-110 group-hover:translate-x-2"
        style={{ color: colors.silver.solid.primary }}
      >
        <Icon 
          size={32}
          className="transition-transform duration-500 ease-out
                     group-hover:rotate-[-8deg]" 
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 
          className="text-lg font-light tracking-wider mb-4 transition-colors duration-300"
          style={{ 
            color: colors.silver.solid.primary,
            fontFamily: 'Inter, sans-serif'
          }}
        >
          {title}
        </h3>
        
        <p 
          className="text-sm leading-relaxed mb-6 font-light transition-colors duration-300"
          style={{ 
            color: colors.silver.solid.secondary,
            fontFamily: 'Inter, sans-serif'
          }}
        >
          {description}
        </p>
        
        <button
          className="inline-flex items-center gap-2 text-sm tracking-wider 
                     transition-all duration-300 group-hover:tracking-widest font-light"
          style={{ color: colors.silver.solid.primary }}
        >
          Learn More
          <span className="transform transition-transform duration-300 
                         group-hover:translate-x-2">
            →
          </span>
        </button>
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

export default ServiceCard;