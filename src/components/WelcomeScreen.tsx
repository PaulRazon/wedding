'use client';

import { useState } from 'react';
import { Heart, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WelcomeScreenProps {
  onOpenInvitation: () => void;
}

export default function WelcomeScreen({ onOpenInvitation }: WelcomeScreenProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
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

      // Center explosion every 500ms
      if (Math.floor(timeLeft / 500) % 2 === 0) {
        confetti({
          ...defaults,
          particleCount: particleCount * 1.5,
          origin: { x: 0.5, y: 0.5 },
          colors: ['#F5F1EB', '#E8DDD4', '#D4C4B0', '#C7B299', '#A69080', '#ffd700'],
          shapes: ['circle'],
          scalar: 1.2,
          spread: 180,
          startVelocity: 45
        });
      }

      // Beige confetti rain from top
      if (Math.floor(timeLeft / 750) % 3 === 0) {
        confetti({
          particleCount: 30,
          angle: 90,
          spread: 45,
          origin: { x: Math.random(), y: 0 },
          colors: ['#E8DDD4', '#D4C4B0', '#ffd700'],
          shapes: ['square'],
          scalar: 0.8,
          zIndex: 9999,
          gravity: 0.8
        });
      }
    }, 250);
  };

  return (
    <div className="fixed inset-0 z-50 flex h-screen items-center justify-center overflow-hidden relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-contain bg-[#fbfdff] bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/welcome-image.png)' }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 "></div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-white/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              fontSize: `${1 + Math.random() * 1.5}rem`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
       {/* Content Card with backdrop */}
        <div className=" rounded-3xl bg-transparent mb-40 md:mb-18 p-8 md:p-12 shadow-2xl h-screen flex flex-col justify-end">
         
            <button
              onClick={handleOpenInvitation}
              disabled={isOpening}
              className={`group bg-white relative overflow-hidden 
                       text-gray-800 px-10 py-4 rounded-full habibi-regular font-bold text-xl
                       transition-all duration-500 transform hover:scale-105 shadow-xl
                       border-2 border-gray-300 hover:border-gray-400
                       ${isOpening ? 'animate-pulse cursor-not-allowed' : 'hover:shadow-2xl'}`}
            >
              <span className="relative z-10 flex items-center gap-3">
                {isOpening ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
                    Abriendo...
                  </>
                ) : (
                  <>
                    <Lock className="h-6 w-6 group-hover:animate-bounce" />
                    Abrir Invitación
                  </>
                )}
              </span>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-wedding-secondary to-wedding-rose 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
      </div>
    </div>
  );
}
