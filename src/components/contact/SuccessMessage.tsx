import React from 'react';
import { CheckCircle } from 'lucide-react';
import { colors } from '../../styles/colors';

interface SuccessMessageProps {
  onClose: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onClose }) => {
  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <CheckCircle 
          size={48}
          className="text-green-400 animate-[scale_0.5s_ease-out]"
        />
      </div>
      
      <div>
        <h3 
          className="text-xl font-light tracking-wider mb-2"
          style={{ color: colors.silver.solid.primary }}
        >
          Thank you!
        </h3>
        <p 
          className="text-sm"
          style={{ color: colors.silver.solid.secondary }}
        >
          We'll be in touch shortly.
        </p>
      </div>

      <button
        onClick={onClose}
        className="px-6 py-2 rounded-sm transition-all duration-300"
        style={{ 
          background: colors.silver.gradient.primary,
          color: colors.black.primary
        }}
      >
        Close
      </button>
    </div>
  );
};

export default SuccessMessage;