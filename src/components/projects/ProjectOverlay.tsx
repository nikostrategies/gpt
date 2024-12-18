import React from 'react';
import { colors } from '../../styles/colors';

interface ProjectOverlayProps {
  title: string;
  location: string;
}

const ProjectOverlay: React.FC<ProjectOverlayProps> = ({ title, location }) => {
  return (
    <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform translate-y-4 
                  group-hover:translate-y-0 transition-transform duration-500">
      <h3 
        className="font-light text-lg md:text-xl tracking-[0.2em] mb-2"
        style={{ 
          background: colors.silver.gradient.primary,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontFamily: 'Inter, sans-serif'
        }}
      >
        {title}
      </h3>
      
      <p 
        className="text-xs md:text-sm tracking-[0.15em] uppercase mb-4"
        style={{ 
          color: colors.silver.solid.secondary,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 300
        }}
      >
        {location}
      </p>
      
      <div 
        className="w-12 h-[1px] transition-all duration-500 group-hover:w-16"
        style={{ background: colors.silver.gradient.primary }}
      />
    </div>
  );
};

export default ProjectOverlay;