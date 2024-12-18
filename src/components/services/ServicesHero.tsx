import React from 'react';
import Spline from '@splinetool/react-spline';
import { colors } from '../../styles/colors';

const ServicesHero = () => {
  return (
    <div className="relative min-h-[60vh]">
      {/* Spline Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Spline 
            scene="https://prod.spline.design/CeCepXvkC-mWTKlc/scene.splinecode"
            className="w-full h-full"
          />
          
          {/* Gradient overlays for better text readability */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg,
                ${colors.black.primary}cc 0%,
                ${colors.black.primary}40 50%,
                ${colors.black.primary}cc 100%)`
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative line */}
          <div 
            className="w-12 h-[1px] mx-auto mb-8"
            style={{ 
              background: `linear-gradient(90deg,
                transparent 0%,
                ${colors.silver.solid.primary}40 50%,
                transparent 100%)`
            }}
          />
          
          <h1 
            className="font-cormorant text-4xl md:text-5xl font-light tracking-wide mb-8 leading-[1.4]"
            style={{ 
              background: colors.silver.gradient.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              paddingBottom: '0.1em'
            }}
          >
            Comprehensive Construction Services
          </h1>
          
          <p 
            className="text-base md:text-lg font-light tracking-wider mb-8
                     max-w-2xl mx-auto leading-relaxed"
            style={{ color: colors.silver.solid.secondary }}
          >
            From residential developments to commercial spaces, we deliver 
            excellence across every project with precision and expertise.
          </p>
          
          {/* Decorative line */}
          <div 
            className="w-12 h-[1px] mx-auto"
            style={{ 
              background: `linear-gradient(90deg,
                transparent 0%,
                ${colors.silver.solid.primary}40 50%,
                transparent 100%)`
            }}
          />
        </div>
      </div>

      {/* Bottom transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(to bottom,
            transparent 0%,
            ${colors.black.secondary} 100%)`
        }}
      />
    </div>
  );
};

export default ServicesHero;