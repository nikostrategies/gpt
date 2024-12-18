import React from 'react';

const navItems = ['Home', 'About Us', 'Services', 'Projects', 'Contact'];

const NavLinks = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase().replace(' ', '-')}`}
          className="relative text-white text-[17px] tracking-[2px] font-light hover:text-blue-300 
                   transition-all duration-200 ease-in-out group"
        >
          {item}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-300 transition-all 
                         duration-200 ease-in-out group-hover:w-full" />
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;