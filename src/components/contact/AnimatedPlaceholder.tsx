import React, { useEffect, useState } from 'react';
import { colors } from '../../styles/colors';

interface AnimatedPlaceholderProps {
  text: string;
  speed?: number;
}

const AnimatedPlaceholder: React.FC<AnimatedPlaceholderProps> = ({ 
  text, 
  speed = 50 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span 
      className="typing-animation"
      style={{ color: colors.white.pure }}
    >
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default AnimatedPlaceholder;