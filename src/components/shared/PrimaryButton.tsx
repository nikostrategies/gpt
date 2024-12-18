import React from 'react';
import { colors } from '../../styles/colors';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  children, 
  onClick,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-4 py-2 text-sm font-light tracking-wider
        transition-all duration-300 ease-out
        hover:scale-[1.02] focus:scale-[1.02]
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${className}
      `}
      style={{
        background: colors.silver.gradient.primary,
        color: colors.black.primary,
        borderRadius: '4px',
        fontFamily: 'Inter, sans-serif',
        height: '36px',
        border: `1px solid ${colors.silver.solid.secondary}`,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      }}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;