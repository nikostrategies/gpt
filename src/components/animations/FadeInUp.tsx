import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeInUp: React.FC<FadeInUpProps> = ({ 
  children, 
  delay = 0,
  className = '' 
}) => {
  const [ref, isVisible] = useScrollAnimation({ delay });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out
                ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'}
                ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInUp;