import React, { useState, useCallback } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = React.memo(({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder,
  sizes,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  const imageStyle: React.CSSProperties = {
    ...((width && height) && {
      aspectRatio: `${width} / ${height}`
    })
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={imageStyle}
      >
        <svg 
          className="w-8 h-8 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={imageStyle}>
      {/* Placeholder/Loading state */}
      {!isLoaded && placeholder && (
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{ backgroundImage: `url(${placeholder})` }}
        />
      )}
      
      {/* Loading skeleton */}
      {!isLoaded && !placeholder && (
        <div className="absolute inset-0 loading-skeleton" />
      )}

      {/* Main image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={imageStyle}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes={sizes}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage; 