import React from 'react';
import { Partner } from '../../types/partner';
import { colors } from '../../styles/colors';
import { useImageLoader } from '../../hooks/useImageLoader';

const PartnerLogo: React.FC<Partner> = ({ name, logo, website }) => {
  const { isLoaded, handleLoad } = useImageLoader();

  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center p-6 rounded-sm 
                 transition-all duration-500"
      style={{
        background: `linear-gradient(135deg,
          ${colors.white.pure}05 0%,
          ${colors.white.pure}02 100%)`
      }}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className={`
          w-full h-auto max-h-16 object-contain 
          transition-all duration-500 group-hover:scale-105
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        onLoad={handleLoad}
        loading="lazy"
      />

      {/* Hover highlight effect */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-300
                   group-hover:opacity-5 pointer-events-none"
        style={{ 
          background: `radial-gradient(
            circle at center,
            ${colors.silver.solid.primary} 0%,
            transparent 70%
          )`
        }}
      />
    </a>
  );
};

export default PartnerLogo;