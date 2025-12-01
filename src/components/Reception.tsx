'use client';

import { useEffect, useRef, useState } from 'react';
import { Clock, MapPin, Music, Utensils, Sparkles, Heart, PartyPopper } from 'lucide-react';
import HedgehogDecoration from './HedgehogDecoration';

export default function Reception() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="recepcion" 
      className="py-16 px-4 bg-wedding-light-bg dark:bg-wedding-dark-bg relative"
    >
      {/* Hedgehog Decoration */}
      <HedgehogDecoration position="bottom-left" size="medium" variant={1} className="hidden lg:block" />
      
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <PartyPopper className="h-4 w-4 text-wedding-pastel mr-3" />
            <div className="w-12 h-px bg-wedding-pastel"></div>
            <Sparkles className="h-5 w-5 text-wedding-pastel mx-3" />
            <div className="w-12 h-px bg-wedding-pastel"></div>
            <PartyPopper className="h-4 w-4 text-wedding-pastel ml-3" />
          </div>
          <h2 className="great-vibes-regular text-3xl md:text-4xl font-light text-wedding-light-text dark:text-wedding-dark-text mb-4 tracking-wide">
            Recepción
          </h2>
          <p className="habibi-regular text-lg text-wedding-light-muted dark:text-wedding-dark-muted">
            Celebremos juntos
          </p>
        </div>

        {/* Reception Details */}
        <div className={`bg-wedding-light-card dark:bg-wedding-dark-card rounded-xl p-8 md:p-12 border border-wedding-light-border dark:border-wedding-dark-border shadow-sm transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center space-y-8">
            <Utensils className="h-12 w-12 mx-auto text-wedding-warm" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <Clock className="h-5 w-5 text-wedding-warm" />
                <span className="habibi-regular text-lg text-wedding-light-text dark:text-wedding-dark-text">
                  5:30 PM
                </span>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <MapPin className="h-5 w-5 text-wedding-warm" />
                <span className="habibi-regular text-lg text-wedding-light-text dark:text-wedding-dark-text">
                  La Muralla Jardín Campestre
                </span>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <Music className="h-5 w-5 text-wedding-warm" />
                <span className="habibi-regular text-lg text-wedding-light-text dark:text-wedding-dark-text">
                  Música, baile y celebración
                </span>
              </div>
            </div>
            
            <div className="pt-6 border-t border-wedding-light-border dark:border-wedding-dark-border">
              <p className="habibi-regular text-base text-wedding-light-muted dark:text-wedding-dark-muted mb-2">
                Carretera al aeropuerto km. 2.5, Pantanal, Xalisco
              </p>
              <a 
                href="https://share.google/0ANQdueTDcglVTguH" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-wedding-warm hover:text-wedding-neutral transition-colors duration-300 habibi-regular text-sm"
              >
                <MapPin className="h-4 w-4" />
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
