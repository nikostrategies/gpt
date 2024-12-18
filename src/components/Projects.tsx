import React from 'react';
import FeaturedProjectGrid from './projects/FeaturedProjectGrid';
import { projects } from '../utils/projectData';
import FadeInUp from './animations/FadeInUp';
import { colors } from '../styles/colors';

const Projects = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with seamless transition */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: `linear-gradient(180deg,
            ${colors.charcoal.dark} 0%,
            ${colors.black.primary} 100%)`
        }}
      />
      
      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise"
        style={{ mixBlendMode: 'overlay' }}
      />
      
      <div className="container mx-auto px-4 relative">
        <FadeInUp>
          <div className="text-center mb-12">
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
              Featured Projects
            </h2>
            <div 
              className="w-16 h-[1px] mx-auto"
              style={{ background: colors.silver.muted }}
            />
          </div>
        </FadeInUp>
        
        <FeaturedProjectGrid projects={projects} />
      </div>
    </section>
  );
};

export default Projects;