import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-4">
        <MapPin className="text-blue-600 mt-1" size={24} />
        <div>
          <h3 className="font-bold text-lg mb-2">Our Location</h3>
          <p className="text-gray-600">
            Unit 138 - 11782 River Rd<br />
            Richmond, BC
          </p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <Phone className="text-blue-600 mt-1" size={24} />
        <div>
          <h3 className="font-bold text-lg mb-2">Phone</h3>
          <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600">
            (123) 456-7890
          </a>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <Mail className="text-blue-600 mt-1" size={24} />
        <div>
          <h3 className="font-bold text-lg mb-2">Email</h3>
          <a href="mailto:info@gppacific.com" className="text-gray-600 hover:text-blue-600">
            info@gppacific.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;