import React from 'react';

interface ProjectSlideProps {
  image: string;
  title: string;
  location: string;
  isActive: boolean;
}

const ProjectSlide: React.FC<ProjectSlideProps> = ({ image, title, location, isActive }) => {
  return (
    <div
      className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
        isActive ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="relative h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;