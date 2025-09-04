import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width = 1200,
  height = 628,
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate responsive image URLs
  const generateSrcSet = (baseSrc: string) => {
    const baseUrl = baseSrc.includes('pexels.com') ? baseSrc : baseSrc;
    
    if (baseSrc.includes('pexels.com')) {
      return {
        mobile: `${baseUrl}?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`,
        tablet: `${baseUrl}?auto=compress&cs=tinysrgb&w=1024&h=628&fit=crop`,
        desktop: `${baseUrl}?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`
      };
    }
    
    return {
      mobile: baseUrl,
      tablet: baseUrl,
      desktop: baseUrl
    };
  };

  const srcSet = generateSrcSet(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 bg-gray-200 flex items-center justify-center"
        >
          <div className="w-8 h-8 border-2 border-gray-300 border-t-[#1E8449] rounded-full animate-spin" />
        </motion.div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-2" />
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Optimized image with responsive sources */}
      <picture>
        <source 
          media="(max-width: 768px)" 
          srcSet={srcSet.mobile}
        />
        <source 
          media="(max-width: 1024px)" 
          srcSet={srcSet.tablet}
        />
        <motion.img
          src={srcSet.desktop}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          initial={{ scale: 1.1 }}
          animate={{ scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.8 }}
        />
      </picture>
    </div>
  );
};
