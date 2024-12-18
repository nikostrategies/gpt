import React, { useState, useEffect } from 'react';
import HeaderContainer from './header/HeaderContainer';
import Logo from './header/Logo';
import Navigation from './header/Navigation';
import MobileMenu from './header/MobileMenu';
import ContactModal from './contact/ContactModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactModalOpen(true);
  };

  return (
    <>
      <HeaderContainer isScrolled={isScrolled}>
        <div className="flex items-center justify-between w-full">
          <Logo />
          <Navigation onContactClick={handleContactClick} />
          <MobileMenu 
            isOpen={isMobileMenuOpen}
            onToggle={toggleMobileMenu}
            onContactClick={handleContactClick}
          />
        </div>
      </HeaderContainer>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Header;