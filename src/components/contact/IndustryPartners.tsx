import React from 'react';
import { Building2, Shield, Leaf, Award } from 'lucide-react';
import { colors } from '../../styles/colors';

const partners = [
  {
    id: 1,
    name: 'EcoTech Building Systems',
    description: 'Leading provider of sustainable building materials and energy-efficient solutions.',
    icon: Leaf
  },
  {
    id: 2,
    name: 'Precision Engineering Group',
    description: 'Structural engineering excellence with cutting-edge architectural innovation.',
    icon: Building2
  },
  {
    id: 3,
    name: 'SafetyFirst Contractors Alliance',
    description: 'Premier safety certification and compliance consulting for construction.',
    icon: Shield
  },
  {
    id: 4,
    name: 'Elite Design Collective',
    description: 'Award-winning architectural design and interior planning specialists.',
    icon: Award
  }
];

const IndustryPartners = () => {
  return (
    <div>
      <h3 
        className="text-xl font-light tracking-wider mb-8"
        style={{ 
          color: colors.black.primary,
          fontFamily: 'Inter, sans-serif'
        }}
      >
        Industry Partners
      </h3>
      
      <div className="space-y-8">
        {partners.map((partner) => {
          const Icon = partner.icon;
          
          return (
            <div 
              key={partner.id}
              className="flex items-start space-x-4 group"
            >
              <div 
                className="p-2 rounded-sm transition-all duration-300 group-hover:scale-110"
                style={{ 
                  background: colors.silver.gradient.primary,
                  color: colors.black.primary
                }}
              >
                <Icon size={24} />
              </div>
              
              <div>
                <h4 
                  className="font-medium mb-2 tracking-wide"
                  style={{ 
                    color: colors.black.primary,
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {partner.name}
                </h4>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: colors.charcoal.light }}
                >
                  {partner.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndustryPartners;