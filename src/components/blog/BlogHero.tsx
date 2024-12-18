import React from 'react';
import Spline from '@splinetool/react-spline';
import { colors } from '../../styles/colors';

const BlogHero = () => {
  return (
    <div className="relative">
      <div 
        className="relative py-20 overflow-hidden"
        style={{ backgroundColor: colors.black.primary }}
      >
        {/* Spline Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full opacity-30">
            <Spline 
              scene="https://prod.spline.design/dYE2CQI5hNDBDy6F/scene.splinecode"
              className="w-full h-full"
            />
          </div>
          
          {/* Gradient overlay for smooth transition */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg,
                transparent 0%,
                ${colors.black.secondary}40 70%,
                ${colors.black.secondary} 100%)`
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative line */}
            <div 
              className="w-12 h-[1px] mx-auto mb-8"
              style={{ background: `${colors.silver.solid.primary}40` }}
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
              Industry Insights
            </h1>
            
            <p 
              className="text-base md:text-lg font-light tracking-wider mb-8
                       max-w-2xl mx-auto leading-relaxed"
              style={{ color: colors.silver.solid.secondary }}
            >
              Expert perspectives on construction innovation, sustainability, 
              and industry best practices.
            </p>
            
            {/* Decorative line */}
            <div 
              className="w-12 h-[1px] mx-auto"
              style={{ background: `${colors.silver.solid.primary}40` }}
            />
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom,
            transparent 0%,
            ${colors.black.secondary} 100%)`
        }}
      />
    </div>
  );
};

export default BlogHero;