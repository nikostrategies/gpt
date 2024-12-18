import React from 'react';
import Spline from '@splinetool/react-spline';
import { colors } from '../../styles/colors';

const AboutHero = () => {
  return (
    <div className="relative min-h-[60vh]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        {/* Gradient overlay */}
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

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
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
            Building Excellence Through Innovation
          </h1>
          
          <p 
            className="text-base md:text-lg font-light tracking-wider mb-8
                     max-w-2xl mx-auto leading-relaxed"
            style={{ color: colors.silver.solid.secondary }}
          >
            Transforming visions into reality with precision, expertise, and unwavering commitment to quality.
          </p>
          
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

export default AboutHero;