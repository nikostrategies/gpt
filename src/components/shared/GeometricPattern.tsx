import React from 'react';
import { colors } from '../../styles/colors';

const GeometricPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* SVG Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'contrast(120%) brightness(95%)' }}
      >
        <defs>
          <pattern
            id="luxury-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            {/* Diagonal lines */}
            <path
              d="M-10,10 l20,-20 M30,50 l20,-20 M-10,50 l60,-60"
              stroke={colors.silver.solid.primary}
              strokeWidth="0.5"
              fill="none"
            />
            {/* Dots at intersections */}
            <circle
              cx="20"
              cy="20"
              r="1"
              fill={colors.silver.solid.primary}
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#luxury-pattern)" />
      </svg>

      {/* Grain overlay */}
      <div 
        className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"
        style={{ mixBlendMode: 'overlay' }}
      />

      {/* Matte finish overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg,
            ${colors.white.pure}02 0%,
            ${colors.white.pure}01 50%,
            transparent 100%)`
        }}
      />
    </div>
  );
};

export default GeometricPattern;