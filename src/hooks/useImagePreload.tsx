import { useEffect, useState } from 'react';

interface UseImagePreloadResult {
  isLoaded: boolean;
  hasError: boolean;
}

export const useImagePreload = (imageUrl: string): UseImagePreloadResult => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!imageUrl) {
      return
    };

    const img = new Image();
    
    const handleLoad = () => {
      setIsLoaded(true);
      setHasError(false);
    };

    const handleError = () => {
      setIsLoaded(false);
      setHasError(true);
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);
    
    img.src = imageUrl;
    
    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [imageUrl]);

  return { isLoaded, hasError };
};

export default useImagePreload;