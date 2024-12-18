import React from 'react';
import { colors } from '../../styles/colors';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 
        className="font-light text-2xl md:text-3xl tracking-[0.25em] uppercase mb-4"
        style={{ 
          background: colors.silver.gradient.primary,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontFamily: 'Inter, sans-serif'
        }}
      >
        {title}
      </h2>
      
      {subtitle && (
        <p 
          className="text-sm tracking-[0.15em] uppercase"
          style={{ color: colors.silver.solid.secondary }}
        >
          {subtitle}
        </p>
      )}
      
      <div 
        className="w-16 h-[1px] mx-auto mt-6"
        style={{ background: colors.silver.muted }}
      />
    </div>
  );
};

export default SectionTitle;