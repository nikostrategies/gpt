import React from 'react';
import ContactInfo from './contact/ContactInfo';
import IndustryPartners from './contact/IndustryPartners';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Connect With Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Industry Partners */}
          <div className="bg-white p-8 shadow-lg">
            <IndustryPartners />
          </div>
          
          {/* Contact Information */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;