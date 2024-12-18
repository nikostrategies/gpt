import React from 'react';
import AboutHero from '../components/about/AboutHero';
import CoreValues from '../components/about/CoreValues';
import CompanyOverview from '../components/about/CompanyOverview';
import TrustedPartnersSection from '../components/about/TrustedPartnersSection';
import { colors } from '../styles/colors';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <AboutHero />
      
      <div 
        className="relative"
        style={{ backgroundColor: colors.black.secondary }}
      >
        <CompanyOverview />
        <CoreValues />
        <TrustedPartnersSection />
      </div>
    </div>
  );
};

export default About;