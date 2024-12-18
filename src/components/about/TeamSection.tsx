import React from 'react';
import { colors } from '../../styles/colors';
import FadeInUp from '../animations/FadeInUp';

const team = [
  {
    name: 'Michael Chen',
    role: 'Principal & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  },
  {
    name: 'Sarah Thompson',
    role: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  },
  {
    name: 'David Park',
    role: 'Lead Project Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  }
];

const TeamSection = () => {
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
            Leadership Team
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <FadeInUp key={member.name} delay={index * 100}>
              <div className="text-center">
                <div className="relative aspect-square mb-6 overflow-hidden rounded-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 
                  className="text-xl font-light tracking-wider mb-2"
                  style={{ color: colors.silver.solid.primary }}
                >
                  {member.name}
                </h3>
                
                <p 
                  className="text-sm tracking-wide"
                  style={{ color: colors.silver.solid.secondary }}
                >
                  {member.role}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;