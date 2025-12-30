// src/components/WelcomeScreen.tsx
'use client';

import { useState, useCallback, useEffect } from 'react';
import { Lock } from 'lucide-react';
import Image from 'next/image';

interface WelcomeScreenProps {
  onOpenInvitation: () => void;
}

export default function WelcomeScreen({ onOpenInvitation }: WelcomeScreenProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Use useCallback to memoize the handler
  const handleOpenInvitation = useCallback(async () => {
    if (isOpening) return;
    
    setIsOpening(true);
    try {
      // Add a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1200));
      onOpenInvitation();
    } finally {
      setIsOpening(false);
    }
  }, [isOpening, onOpenInvitation]);

  // Add intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('welcome-screen');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleOpenInvitation();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleOpenInvitation]);

  return (
    <div 
      id="welcome-screen"
      className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden"
    >
      {/* Background Image with optimized loading */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/resource-photo-3.jpg" // Replace with your actual image path
          alt="Wedding welcome background"
          fill
          priority
          quality={90}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoadingComplete={() => setIsImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 w-full max-w-4xl text-center px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Logo or Title */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 font-playfair">
            Anahí & Eduardo
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light">
            Nos casamos
          </p>
          <div className="w-24 h-1 bg-white/50 mx-auto my-6"></div>
          <p className="text-white/80 text-sm md:text-base">
            11 de Abril, 2026
          </p>
        </div>

        {/* Content Card with backdrop */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl w-full max-w-md mx-auto">
          <button
            onClick={handleOpenInvitation}
            disabled={isOpening}
            className={`group relative overflow-hidden 
                      text-gray-800 px-8 py-3 sm:px-10 sm:py-4 rounded-full 
                      font-bold text-xs sm:text-sm md:text-base
                      transition-all duration-300 transform hover:scale-105 shadow-xl
                      border-2 border-white/30 hover:border-white/50
                      bg-white/90 hover:bg-white
                      ${isOpening ? 'cursor-not-allowed' : ''}
                      focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2`}
            aria-label={isOpening ? "Abriendo invitación..." : "Abrir invitación"}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              {isOpening ? (
                <>
                  <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin"></span>
                  <span>Abriendo...</span>
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4 sm:h-6 sm:w-6 group-hover:animate-bounce transition-transform" />
                  <span>¡CORAZÓN PALPITANTE, MANOS TEMBLOROSAS, ¡TOCA AQUÍ!</span>
                </>
              )}
            </span>
            
            {/* Hover Effect */}
            <span 
              className="absolute inset-0 bg-gradient-to-r from-wedding-secondary/80 to-wedding-rose/80 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
        <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
}