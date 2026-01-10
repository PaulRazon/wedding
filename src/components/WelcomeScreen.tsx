// src/components/WelcomeScreen.tsx
'use client';

import { useState, useCallback, useEffect } from 'react';
import { Lock } from 'lucide-react';
import Image from 'next/image';
import confetti from 'canvas-confetti';

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

    // Initial big confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F5F1EB', '#E8DDD4', '#D4C4B0', '#C7B299', '#A69080', '#ffd700'],
      zIndex: 9999
    });

    // Heart-shaped confetti burst
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 55,
        origin: { y: 0.55 },
        colors: ['#D4C4B0', '#C7B299', '#E8DDD4', '#F5F1EB'],
        shapes: ['circle'],
        scalar: 1.5,
        zIndex: 9999
      });
    }, 200);

    // Confetti explosion
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeout(() => {
          onOpenInvitation();
          setIsOpening(false);
        }, 500);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Wedding colors confetti - Left side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#F5F1EB', '#E8DDD4', '#D4C4B0', '#C7B299', '#A69080', '#ffd700'],
        shapes: ['square', 'circle'],
        scalar: randomInRange(0.8, 1.2)
      });
      
      // Wedding colors confetti - Right side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#F5F1EB', '#E8DDD4', '#D4C4B0', '#C7B299', '#A69080', '#ffd700'],
        shapes: ['square', 'circle'],
        scalar: randomInRange(0.8, 1.2)
      });

    }, 250);
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
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 w-full max-w-4xl text-center px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Logo or Title */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 font-playfair great-vibes-regular">
            Anahí & Eduardo
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light">
            Nos casamos
          </p>
          <div className="w-full flex justify-center gap-3 mx-auto mt-4">
            <Image
              src={"/erizos3.jpeg"}
              alt="Logo"
              width={160}
              height={160}
              className="bg-transparent mix-blend-multiply contrast-125 [clip-path:polygon(50%_0%,_93%_25%,_93%_75%,_50%_100%,_7%_75%,_7%_25%)]  pb-8 object-cover px-7"
            />
            {/* <Image
              src={"/erizo.png"}
              alt="Logo"
              width={60}
              height={60}
              className="object-contain"
            /> */}
          </div>
          <p className="text-white/80 text-sm md:text-base">
            11 de Abril, 2026
          </p>
        </div>

        {/* Content Card with backdrop */}
        <div className="rounded-3xl p-6 sm:p-8 md:px-12 md:py-6 w-full max-w-xl mx-auto">
          <button
            onClick={handleOpenInvitation}
            disabled={isOpening}
            className={`group relative overflow-hidden
                      px-9 py-3 sm:px-12 sm:py-4 rounded-full
                      font-semibold tracking-wide text-xs sm:text-sm md:text-base
                      text-gray-900
                      transition-all duration-300 transform hover:scale-105
                      shadow-lg hover:shadow-2xl
                      border border-white/50 hover:border-white/80
                      bg-gradient-to-r from-white/80 via-[#fdf7f2]/80 to-white/80
                      backdrop-blur-xl
                      ${isOpening ? 'cursor-wait opacity-80' : ''}
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/60`}
            aria-label={isOpening ? "Abriendo invitación..." : "Abrir invitación"}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              {isOpening ? (
                <>
                  <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#7ba3c8] border-t-transparent rounded-full animate-spin"></span>
                  <span className="habibi-regular">Abriendo...</span>
                </>
              ) : (
                <>
                 <span className="habibi-regular text-[0.7rem] sm:text-xs md:text-sm">
                    ¡CORAZÓN PALPITANTE, MANOS TEMBLOROSAS, 
                    <span className="text-[#8cc9e0] font-semibold"> ¡TOCA AQUÍ!</span>
                  </span>
                </>
              )}
            </span>
            
            {/* Hover / background gradient overlay */}
            <span 
              className="absolute inset-0 bg-gradient-to-r from-wedding-secondary/60 via-[#a8d8f0]/75 to-wedding-rose/75
                       opacity-60 group-hover:opacity-100 transition-opacity duration-300 -z-0"
              aria-hidden="true"
            ></span>
            {/* Soft glow ring */}
            <span
              className="pointer-events-none absolute -inset-[2px] rounded-full bg-gradient-to-r
                         from-white/40 via-[#a8d8f0]/40 to-white/40 opacity-0
                         group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"
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