import React from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../../logo.png';

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="block transition-transform duration-200 ease-in-out hover:scale-105 shrink-0"
      aria-label="GP Pacific Contracting Group LTD - Home"
    >
      <img
        src={companyLogo}
        alt="GP Pacific Contracting Group LTD"
        className="h-[60px] w-auto object-contain"
        style={{ imageRendering: 'crisp-edges' }}
      />
    </Link>
  );
};

export default Logo;