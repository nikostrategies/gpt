import React from 'react';
import ResponsiveImage from '../shared/ResponsiveImage';

interface ProjectImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, priority = false }) => {
  return (
    <ResponsiveImage
      src={src}
      alt={alt}
      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
      priority={priority}
      className="w-full h-full object-cover transition-all duration-700 ease-out
                group-hover:scale-105 group-hover:brightness-90"
    />
  );
};

export default ProjectImage;