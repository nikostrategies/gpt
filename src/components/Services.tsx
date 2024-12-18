import React from 'react';
import ServiceGrid from './services/ServiceGrid';
import SectionTitle from './shared/SectionTitle';
import SplineBackground from './services/SplineBackground';
import { colors } from '../styles/colors';
import FadeInUp from './animations/FadeInUp';

const Services = () => {
  return (
    <section className="relative">
      <div 
        className="py-20 relative overflow-hidden"
        style={{ 
          background: `linear-gradient(180deg, 
            ${colors.black.secondary} 0%, 
            ${colors.black.primary} 100%)`
        }}
      >
        {/* Spline Background with fade out effect */}
        <div className="absolute inset-0">
          <SplineBackground />
          
          {/* Gradient overlay for smooth transition */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg,
                transparent 0%,
                ${colors.black.primary}40 70%,
                ${colors.black.primary} 100%)`
            }}
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <SectionTitle
              title="Our Services"
              subtitle="Crafting Excellence in Every Detail"
            />
          </FadeInUp>
          
          <ServiceGrid />
        </div>
      </div>

      {/* Transition to Projects section */}
      <div className="h-24 relative overflow-hidden">
        {/* Continue Spline background fade out */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg,
              ${colors.black.primary} 0%,
              ${colors.charcoal.dark} 100%)`
          }}
        />
        
        {/* Organic shape transition */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              ellipse 100% 150% at 50% 100%,
              ${colors.charcoal.dark} 0%,
              transparent 70%
            )`
          }}
        />
        
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise"
          style={{ mixBlendMode: 'overlay' }}
        />
      </div>
    </section>
  );
};

export default Services;