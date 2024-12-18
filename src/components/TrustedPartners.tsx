import React from 'react';
import PartnerGrid from './trusted-partners/PartnerGrid';
import SectionTitle from './shared/SectionTitle';
import { colors } from '../styles/colors';
import GeometricPattern from './shared/GeometricPattern';

const TrustedPartners = () => {
  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{ 
        background: `linear-gradient(180deg,
          ${colors.black.primary} 0%,
          ${colors.charcoal.dark} 100%)`
      }}
    >
      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise"
        style={{ mixBlendMode: 'overlay' }}
      />
      
      <div className="container mx-auto px-4 relative">
        <SectionTitle 
          title="Proudly Serving Leading Brands"
          subtitle="Building Excellence Together"
        />
        <PartnerGrid />
      </div>

      {/* Bottom fade transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: `linear-gradient(0deg,
            ${colors.charcoal.dark} 0%,
            transparent 100%)`
        }}
      />
    </section>
  );
};

export default TrustedPartners;