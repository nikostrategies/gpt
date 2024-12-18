import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  sizes,
  priority = false,
  className = ''
}) => {
  // Generate srcSet for different viewport sizes
  const generateSrcSet = (url: string) => {
    const widths = [640, 750, 828, 1080, 1200, 1920, 2048];
    return widths
      .map((width) => {
        const quality = width >= 1080 ? 85 : 90; // Adjust quality based on size
        return `${url}&w=${width}&q=${quality} ${width}w`;
      })
      .join(', ');
  };

  return (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      srcSet={generateSrcSet(src)}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  );
};

export default ResponsiveImage;