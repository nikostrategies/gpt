import React from 'react';
import { Project } from '../../types/project';
import ProjectImage from './ProjectImage';
import ProjectOverlay from './ProjectOverlay';
import { colors } from '../../styles/colors';

interface FeaturedProjectCardProps {
  project: Project;
  priority?: boolean;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ 
  project, 
  priority = false 
}) => {
  return (
    <div 
      className="group relative aspect-square overflow-hidden rounded-sm"
      style={{ backgroundColor: colors.black.primary }}
    >
      <a 
        href={`/projects/${project.id}`}
        className="block w-full h-full relative focus:outline-none"
        aria-label={`View details for ${project.title}`}
      >
        <ProjectImage
          src={project.image}
          alt={project.title}
          priority={priority}
        />
        
        <div 
          className="absolute inset-0 transition-opacity duration-700 ease-out opacity-0 group-hover:opacity-100"
          style={{ 
            background: `linear-gradient(to top, 
              ${colors.black.primary} 0%, 
              ${colors.black.primary}99 30%, 
              transparent 100%)`
          }}
        >
          <ProjectOverlay
            title={project.title}
            location={project.location}
          />
        </div>

        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-300
                     focus-within:opacity-100 pointer-events-none"
          style={{ 
            boxShadow: `inset 0 0 0 2px ${colors.silver.solid.primary}`,
            borderRadius: '2px'
          }}
        />
      </a>
    </div>
  );
};

export default FeaturedProjectCard;