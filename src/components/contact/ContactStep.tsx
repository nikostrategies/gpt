import React, { useState, useEffect, KeyboardEvent } from 'react';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';
import { colors } from '../../styles/colors';
import { ContactFormData } from '../../hooks/useContactForm';
import AnimatedPlaceholder from './AnimatedPlaceholder';

interface ContactStepProps {
  step: number;
  formData: ContactFormData;
  onChange: (field: keyof ContactFormData, value: string) => void;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
}

const ContactStep: React.FC<ContactStepProps> = ({
  step,
  formData,
  onChange,
  onNext,
  onBack,
  onSubmit
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const steps = [
    {
      field: 'name',
      placeholder: 'What is your name?',
      type: 'text'
    },
    {
      field: 'email',
      placeholder: 'And what is your email?',
      type: 'email'
    },
    {
      field: 'message',
      placeholder: 'Tell us briefly what you\'re inquiring about...',
      type: 'textarea'
    }
  ];

  const currentStep = steps[step];
  const isLastStep = step === steps.length - 1;
  const value = formData[currentStep.field as keyof ContactFormData];

  useEffect(() => {
    setIsAnimating(true);
    setShowPlaceholder(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [step]);

  const handleFocus = () => {
    setShowPlaceholder(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      
      if (value) {
        if (isLastStep) {
          onSubmit();
        } else {
          onNext();
        }
      }
    }
  };

  return (
    <div className={`space-y-6 ${isAnimating ? 'morph-enter' : ''}`}>
      {/* Input Field */}
      <div className="relative">
        {showPlaceholder && !value && (
          <div className="absolute inset-0 flex items-center px-4 pointer-events-none">
            <AnimatedPlaceholder text={currentStep.placeholder} />
          </div>
        )}
        
        {currentStep.type === 'textarea' ? (
          <textarea
            value={value}
            onChange={(e) => onChange(currentStep.field as keyof ContactFormData, e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            rows={4}
            className="w-full bg-transparent border-none p-4 rounded-sm resize-none
                     focus:outline-none focus:ring-2 transition-all duration-300"
            style={{ 
              color: colors.silver.solid.primary,
              background: `${colors.white.pure}05`,
              boxShadow: `0 0 0 1px ${colors.silver.solid.primary}20`,
            }}
          />
        ) : (
          <input
            type={currentStep.type}
            value={value}
            onChange={(e) => onChange(currentStep.field as keyof ContactFormData, e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            className="w-full bg-transparent border-none p-4 rounded-sm
                     focus:outline-none focus:ring-2 transition-all duration-300"
            style={{ 
              color: colors.silver.solid.primary,
              background: `${colors.white.pure}05`,
              boxShadow: `0 0 0 1px ${colors.silver.solid.primary}20`,
            }}
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        {step > 0 ? (
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-sm
                     transition-all duration-300 hover:bg-white/5"
            style={{ color: colors.silver.solid.secondary }}
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
        ) : (
          <div />
        )}

        <button
          onClick={isLastStep ? onSubmit : onNext}
          disabled={!value}
          className="flex items-center gap-2 px-6 py-2 rounded-sm
                   transition-all duration-300 disabled:opacity-50
                   hover:translate-x-1 disabled:hover:translate-x-0
                   pulse"
          style={{ 
            background: colors.silver.gradient.primary,
            color: colors.black.primary
          }}
        >
          <span>{isLastStep ? 'Send' : 'Next'}</span>
          {isLastStep ? <Send size={16} /> : <ArrowRight size={16} />}
        </button>
      </div>
    </div>
  );
};

export default ContactStep;