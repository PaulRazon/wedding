'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Clock, Church, Sparkles, Heart } from 'lucide-react';
import HedgehogDecoration from './HedgehogDecoration';

export default function Ceremony() {
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
      id="ceremonia" 
      className="py-16 px-4 bg-wedding-light-card dark:bg-wedding-dark-card relative"
    >
      {/* Hedgehog Decoration */}
      <HedgehogDecoration position="top-right" size="small" variant={2} className="hidden md:block" />
      
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-4 w-4 text-wedding-pastel mr-3" />
            <div className="w-12 h-px bg-wedding-pastel"></div>
            <Heart className="h-5 w-5 text-wedding-pastel mx-3" />
            <div className="w-12 h-px bg-wedding-pastel"></div>
            <Sparkles className="h-4 w-4 text-wedding-pastel ml-3" />
          </div>
          <h2 className="great-vibes-regular text-3xl md:text-4xl font-light text-wedding-light-text dark:text-wedding-dark-text mb-4 tracking-wide">
            Ceremonia Religiosa
          </h2>
          <p className="habibi-regular text-lg text-wedding-light-muted dark:text-wedding-dark-muted">
            Nos uniremos en matrimonio
          </p>
        </div>

        {/* Ceremony Details */}
        <div className={`bg-wedding-light-bg dark:bg-wedding-dark-bg rounded-xl p-8 md:p-12 border border-wedding-light-border dark:border-wedding-dark-border shadow-sm transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center space-y-8">
            <Church className="h-12 w-12 mx-auto text-wedding-pastel" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <Calendar className="h-5 w-5 text-wedding-warm" />
                <span className="habibi-regular text-lg text-wedding-light-text dark:text-wedding-dark-text">
                  Sábado, 11 de Abril del 2026
                </span>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <Clock className="h-5 w-5 text-wedding-warm" />
                <span className="habibi-regular text-lg text-wedding-light-text dark:text-wedding-dark-text">
                  4:00 PM
                </span>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <MapPin className="h-5 w-5 text-wedding-warm" />
                <span className="habibi-regular text-lg text-wedding-light-text dark:text-wedding-dark-text">
                  Parroquia de San Cayetano
                </span>
              </div>
            </div>
            
            <div className="pt-6 border-t border-wedding-light-border dark:border-wedding-dark-border">
              <p className="habibi-regular text-base text-wedding-light-muted dark:text-wedding-dark-muted">
                Plaza principal de Xalisco, Nayarit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
