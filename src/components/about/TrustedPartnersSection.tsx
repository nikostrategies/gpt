import React from 'react';
import { colors } from '../../styles/colors';
import FadeInUp from '../animations/FadeInUp';
import { useImageLoader } from '../../hooks/useImageLoader';

const partnerLogos = [
  {
    name: 'Canadian Dewatering',
    src: '/src/Trusted Partners/Canadian Dewatering Logo.png'
  },
  {
    name: 'Country Lumber',
    src: '/src/Trusted Partners/Country Lumber .png'
  },
  {
    name: 'Crystal Kitchens BC',
    src: '/src/Trusted Partners/Crystal-Kitchens-BC-Logo.png'
  },
  {
    name: "Dick's Lumber",
    src: '/src/Trusted Partners/Dicks Logo.jpeg'
  },
  {
    name: 'Elegant',
    src: '/src/Trusted Partners/Elegant-Final-Logo.png'
  },
  {
    name: 'GESCAN',
    src: '/src/Trusted Partners/GESCAN.png'
  },
  {
    name: 'Kasa',
    src: '/src/Trusted Partners/Kasa.png'
  },
  {
    name: 'Lidher',
    src: '/src/Trusted Partners/Lidher Logo.png'
  },
  {
    name: 'Uppal',
    src: '/src/Trusted Partners/Uppal Logo.png'
  }
];

const PartnerLogo = ({ name, src }: { name: string; src: string }) => {
  const { isLoaded, handleLoad } = useImageLoader();

  return (
    <div 
      className="aspect-[3/2] p-6 rounded-sm relative overflow-hidden group"
      style={{ 
        background: `linear-gradient(135deg,
          ${colors.white.pure}05 0%,
          ${colors.white.pure}02 100%)`
      }}
    >
      <img
        src={src}
        alt={`${name} logo`}
        className={`w-full h-full object-contain transition-all duration-500
                   ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
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
    </div>
  );
};

const TrustedPartnersSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <FadeInUp>
          <h2 
            className="font-cormorant text-3xl font-light tracking-wider text-center mb-16"
            style={{ 
              background: colors.silver.gradient.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Trusted Partners
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {partnerLogos.map((partner, index) => (
            <FadeInUp key={partner.name} delay={index * 100}>
              <PartnerLogo {...partner} />
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;