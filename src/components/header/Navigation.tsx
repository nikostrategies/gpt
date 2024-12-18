import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems, getPathFromNavItem } from '../../utils/constants';

interface NavigationProps {
  onContactClick: (e: React.MouseEvent) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onContactClick }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="hidden md:flex items-center justify-end flex-1">
      <ul className="flex items-center gap-8">
        {navItems.map((item) => {
          const path = getPathFromNavItem(item);
          const isActive = currentPath === path;
          
          if (item === 'Contact') {
            return (
              <li key={item}>
                <button
                  onClick={onContactClick}
                  className={`relative text-white text-[13px] uppercase tracking-[0.2em] font-light
                           hover:text-blue-300 transition-all duration-200 ease-in-out group`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 h-[1px] bg-blue-300 
                               transition-all duration-200 ease-in-out w-0 group-hover:w-full" />
                </button>
              </li>
            );
          }
          
          return (
            <li key={item}>
              <Link
                to={path}
                className={`relative text-white text-[13px] uppercase tracking-[0.2em] font-light
                         hover:text-blue-300 transition-all duration-200 ease-in-out group
                         ${isActive ? 'text-blue-300' : ''}`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-blue-300 
                             transition-all duration-200 ease-in-out
                             ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;