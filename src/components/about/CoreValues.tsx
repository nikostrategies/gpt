import React from 'react';
import { colors } from '../../styles/colors';
import FadeInUp from '../animations/FadeInUp';

const CoreValues = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <FadeInUp>
          <div className="max-w-4xl mx-auto">
            <h2 
              className="font-cormorant text-3xl font-light tracking-wider text-center mb-12"
              style={{ 
                background: colors.silver.gradient.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Our Approach
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p 
                  className="text-lg font-light leading-relaxed"
                  style={{ color: colors.silver.solid.secondary }}
                >
                  At GP Pacific, we believe in a collaborative approach that puts our clients' vision first. Our integrated process ensures seamless communication and exceptional results at every stage of construction.
                </p>
                
                <p 
                  className="text-lg font-light leading-relaxed"
                  style={{ color: colors.silver.solid.secondary }}
                >
                  We leverage cutting-edge technology and sustainable practices to deliver projects that not only meet but exceed modern building standards while respecting environmental considerations.
                </p>
              </div>
              
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Team collaboration"
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
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default CoreValues;