import React from 'react';
import { colors } from '../../styles/colors';
import GeometricPattern from './GeometricPattern';

const SectionTransition = () => {
  return (
    <div className="relative h-32">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, 
            ${colors.black.primary} 0%,
            ${colors.charcoal.dark} 100%)`
        }}
      />

      {/* Geometric pattern overlay */}
      <GeometricPattern />

      {/* Top fade */}
      <div 
        className="absolute top-0 left-0 right-0 h-16"
        style={{
          background: `linear-gradient(180deg,
            ${colors.black.primary} 0%,
            transparent 100%)`
        }}
      />

      {/* Bottom fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-16"
        style={{
          background: `linear-gradient(0deg,
            ${colors.charcoal.dark} 0%,
            transparent 100%)`
        }}
      />
    </div>
  );
};

export default SectionTransition;