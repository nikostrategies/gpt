import React from 'react';
import FeaturedProjectCard from './FeaturedProjectCard';
import { Project } from '../../types/project';
import FadeInUp from '../animations/FadeInUp';
import { colors } from '../../styles/colors';

interface FeaturedProjectGridProps {
  projects: Project[];
}

const FeaturedProjectGrid: React.FC<FeaturedProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2">
      {projects.map((project, index) => (
        <FadeInUp 
          key={project.id} 
          delay={index * 100}
          className="h-full"
        >
          <FeaturedProjectCard 
            project={project}
            priority={index < 3}
          />
        </FadeInUp>
      ))}
    </div>
  );
};

export default FeaturedProjectGrid;