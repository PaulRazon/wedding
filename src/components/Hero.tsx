'use client';

import { useEffect, useState } from 'react';
import { Heart, Calendar, Clock } from 'lucide-react';
import HedgehogDecoration from './HedgehogDecoration';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToDetails = () => {
    document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-start justify-center overflow-hidden bg-wedding-light-bg dark:bg-wedding-dark-bg">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/resource-photo-1.jpg"
          alt="Hero background"
          fill
          priority
          quality={85}
          sizes="100vw"
          className={`object-cover transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoadingComplete={() => setIsImageLoaded(true)}
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
      
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-wedding-pastel/30 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
              fontSize: `${1 + Math.random() * 1.5}rem`,
            }}
          />
        ))}
      </div>

      {/* Hedgehog Decorations */}
      <HedgehogDecoration position="top-left" size="small" variant={1} className="hidden md:block" />
      <HedgehogDecoration position="bottom-right" size="medium" variant={2} className="hidden lg:block" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mt-29 mx-auto">
        {/* Names */}
        <div className={`transition-all duration-1500 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <h1 className="pinyon-script-regular text-5xl md:text-7xl lg:text-8xl font-normal mb-4 text-white tracking-wide drop-shadow-2xl">
            Anahí & Eduardo
          </h1>
        </div>

        {/* Subtitle */}
        <div className={`transition-all duration-1500 delay-300 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <p className="habibi-regular text-lg md:text-xl font-light mb-8 text-white/90 tracking-wide drop-shadow-lg">
            NUESTRA BODA
          </p>
        </div>

        {/* Date */}
       
        {/* Scroll Indicator */}
       
      </div>
    </section>
  );
}
