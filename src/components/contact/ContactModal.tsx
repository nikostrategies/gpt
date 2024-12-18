import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { colors } from '../../styles/colors';
import ContactStep from './ContactStep';
import SuccessMessage from './SuccessMessage';
import { useContactForm } from '../../hooks/useContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { 
    step,
    formData,
    handleInputChange,
    handleNext,
    handleBack,
    handleSubmit,
    isSubmitted
  } = useContactForm();

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop with blur effect */}
      <div 
        className="absolute inset-0 backdrop-blur-md transition-opacity duration-300"
        style={{ backgroundColor: `${colors.black.primary}cc` }}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div 
          className="relative w-full max-w-lg rounded-sm overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg,
              ${colors.white.pure}10 0%,
              ${colors.white.pure}05 100%)`,
            boxShadow: `0 8px 32px -4px ${colors.black.primary}`
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full transition-colors duration-200
                     hover:bg-white/5"
            style={{ color: colors.silver.solid.primary }}
          >
            <X size={20} />
          </button>

          {/* Content */}
          <div className="p-8">
            {isSubmitted ? (
              <SuccessMessage onClose={onClose} />
            ) : (
              <ContactStep
                step={step}
                formData={formData}
                onChange={handleInputChange}
                onNext={handleNext}
                onBack={handleBack}
                onSubmit={handleSubmit}
              />
            )}
          </div>

          {/* Animated border */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(45deg,
                ${colors.silver.solid.primary}10 0%,
                transparent 40%,
                transparent 60%,
                ${colors.silver.solid.primary}10 100%)`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;