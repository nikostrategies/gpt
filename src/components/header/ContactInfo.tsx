import React from 'react';
import { Phone } from 'lucide-react';

const HeaderContactInfo = () => {
  return (
    <div className="hidden md:flex items-center">
      <a 
        href="tel:+1234567890" 
        className="text-white flex items-center gap-3 hover:text-blue-300 
                  transition-all duration-200 ease-in-out group"
      >
        <Phone 
          size={20} 
          className="transition-transform duration-200 ease-in-out group-hover:scale-110" 
        />
        <span className="text-[17px] tracking-[1px] font-light">Call Us</span>
      </a>
    </div>
  );
};

export default HeaderContactInfo;