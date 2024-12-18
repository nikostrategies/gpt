import React from 'react';
import { ChevronDown } from 'lucide-react';
import PrimaryButton from './shared/PrimaryButton';
import { colors } from '../styles/colors';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: `${colors.black.primary}99` }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <p 
          className="text-xl md:text-2xl mb-12 max-w-3xl font-light tracking-wide"
          style={{ 
            color: colors.silver.solid.primary,
            fontFamily: 'Inter, sans-serif'
          }}
        >
          Building Dreams with Precision, Quality, and Expertise
        </p>
        
        <PrimaryButton onClick={scrollToServices}>
          Explore Our Services
        </PrimaryButton>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 animate-bounce"
          style={{ color: colors.silver.solid.primary }}
        >
          <ChevronDown size={32} />
        </div>
      </div>
    </div>
  );
};

export default Hero;