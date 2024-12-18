import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServiceCategory from '../components/services/ServiceCategory';
import { serviceCategories } from '../data/serviceData';
import { colors } from '../styles/colors';
import FadeInUp from '../components/animations/FadeInUp';

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Spline Background */}
      <ServicesHero />

      {/* Service Categories */}
      <div 
        className="py-20"
        style={{ backgroundColor: colors.black.secondary }}
      >
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {serviceCategories.map((category, index) => (
              <FadeInUp key={category.id} delay={index * 100}>
                <ServiceCategory {...category} />
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;