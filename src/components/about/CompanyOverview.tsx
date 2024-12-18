import React from 'react';
import { colors } from '../../styles/colors';
import FadeInUp from '../animations/FadeInUp';

const CompanyOverview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <FadeInUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Left Column - Company Overview */}
            <div className="space-y-6">
              <h2 
                className="font-cormorant text-3xl font-light tracking-wider mb-8"
                style={{ 
                  background: colors.silver.gradient.primary,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Who We Are
              </h2>
              
              <p 
                className="text-lg font-light leading-relaxed"
                style={{ color: colors.silver.solid.secondary }}
              >
                GP Pacific Contracting Group LTD stands at the forefront of construction excellence in the Greater Vancouver area. Our mission is to transform spaces through innovative design, sustainable practices, and unparalleled craftsmanship.
              </p>
              
              <p 
                className="text-lg font-light leading-relaxed"
                style={{ color: colors.silver.solid.secondary }}
              >
                What sets us apart is our unwavering commitment to quality, our forward-thinking approach to construction, and our deep understanding of the local market. We bring together expertise, innovation, and dedication to deliver exceptional results that exceed expectations.
              </p>
              
              <p 
                className="text-lg font-light leading-relaxed"
                style={{ color: colors.silver.solid.secondary }}
              >
                Our team of skilled professionals approaches each project with meticulous attention to detail, ensuring that every aspect meets our high standards of excellence while maintaining clear communication throughout the entire process.
              </p>
            </div>

            {/* Right Column - Featured Project Image */}
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Luxury custom home project"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(45deg,
                    ${colors.black.primary}cc 0%,
                    transparent 100%)`
                }}
              />
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default CompanyOverview;