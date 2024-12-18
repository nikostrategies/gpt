import React from 'react';
import Spline from '@splinetool/react-spline';
import { colors } from '../../styles/colors';

const SplineBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Spline scene with fade out effect */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <Spline 
          scene="https://prod.spline.design/ez70MSlPT-gG1mrq/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      {/* Top fade gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(180deg,
            ${colors.black.secondary} 0%,
            transparent 100%)`
        }}
      />
      
      {/* Bottom fade gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: `linear-gradient(0deg,
            ${colors.black.primary} 0%,
            transparent 100%)`
        }}
      />
      
      {/* Side fade gradients */}
      <div 
        className="absolute top-0 bottom-0 left-0 w-32"
        style={{
          background: `linear-gradient(90deg,
            ${colors.black.primary} 0%,
            transparent 100%)`
        }}
      />
      <div 
        className="absolute top-0 bottom-0 right-0 w-32"
        style={{
          background: `linear-gradient(-90deg,
            ${colors.black.primary} 0%,
            transparent 100%)`
        }}
      />
    </div>
  );
};

export default SplineBackground;