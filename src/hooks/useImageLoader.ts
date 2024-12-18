import { useState, useCallback } from 'react';

export const useImageLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return { isLoaded, handleLoad };
};