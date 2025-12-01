'use client';

import { useState } from 'react';

interface HedgehogDecorationProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  variant?: 1 | 2; // Para alternar entre las dos imágenes
}

export default function HedgehogDecoration({ 
  position = 'top-right', 
  size = 'medium',
  className = '',
  variant = 1
}: HedgehogDecorationProps) {
  const [imageError, setImageError] = useState(false);
  
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  };

  const hedgehogImage = variant === 1 ? '/erizo.png' : '/erizo-2.png';

  // Fallback SVG en caso de que las imágenes no carguen
  const FallbackSVG = () => (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simple hedgehog silhouette */}
      <circle cx="50" cy="60" r="25" fill="#5c81a2" opacity="0.3"/>
      <circle cx="45" cy="55" r="2" fill="#2d3748"/>
      <circle cx="55" cy="55" r="2" fill="#2d3748"/>
      <path d="M45 65 Q50 70 55 65" stroke="#2d3748" strokeWidth="2" fill="none"/>
      {/* Spikes */}
      <g stroke="#5c81a2" strokeWidth="2" opacity="0.6">
        <path d="M35 45 L30 35"/>
        <path d="M40 40 L35 30"/>
        <path d="M50 35 L50 25"/>
        <path d="M60 40 L65 30"/>
        <path d="M65 45 L70 35"/>
      </g>
    </svg>
  );

  return (
    <div className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${className} pointer-events-none opacity-40 dark:opacity-50 hover:opacity-60 transition-opacity duration-300`}>
      {!imageError ? (
        <img
          src={hedgehogImage}
          alt="Erizo decorativo"
          className="w-full h-full object-contain rounded-lg filter drop-shadow-sm"
          onError={() => setImageError(true)}
          style={{
            filter: 'sepia(20%) saturate(80%) hue-rotate(200deg) brightness(1.1)'
          }}
        />
      ) : (
        <FallbackSVG />
      )}
    </div>
  );
}
