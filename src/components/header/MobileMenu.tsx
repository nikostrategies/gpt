import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems, getPathFromNavItem } from '../../utils/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onContactClick: (e: React.MouseEvent) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onToggle,
  onContactClick 
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="md:hidden">
      <button
        className="text-white p-2 hover:text-blue-300 transition-colors duration-200"
        onClick={onToggle}
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-[#1a1a1a]/95 backdrop-blur-sm">
          <ul className="container mx-auto px-8">
            {navItems.map((item) => {
              const path = getPathFromNavItem(item);
              const isActive = currentPath === path;
              
              if (item === 'Contact') {
                return (
                  <li key={item}>
                    <button
                      onClick={(e) => {
                        onContactClick(e);
                        onToggle();
                      }}
                      className="block w-full text-left text-white text-[13px] uppercase tracking-[0.2em] py-4
                               hover:bg-white/5 hover:text-blue-300 transition-all duration-200"
                    >
                      {item}
                    </button>
                  </li>
                );
              }
              
              return (
                <li key={item}>
                  <Link
                    to={path}
                    className={`block text-white text-[13px] uppercase tracking-[0.2em] py-4
                             hover:bg-white/5 hover:text-blue-300 transition-all duration-200
                             ${isActive ? 'text-blue-300 bg-white/5' : ''}`}
                    onClick={onToggle}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;