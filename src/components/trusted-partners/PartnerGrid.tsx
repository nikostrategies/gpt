import React from 'react';
import PartnerLogo from './PartnerLogo';
import { partners } from '../../data/partnerData';
import FadeInUp from '../animations/FadeInUp';

const PartnerGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-16">
      {partners.map((partner, index) => (
        <FadeInUp 
          key={partner.id}
          delay={index * 100}
          className="h-full"
        >
          <PartnerLogo {...partner} />
        </FadeInUp>
      ))}
    </div>
  );
};

export default PartnerGrid;