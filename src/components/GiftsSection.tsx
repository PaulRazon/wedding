'use client';

import { useEffect, useRef, useState } from 'react';
import { Gift, Heart, CreditCard } from 'lucide-react';

export default function GiftsSection() {
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
      id="regalos" 
      className="py-16 px-4 bg-wedding-light-bg dark:bg-wedding-dark-bg relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <Gift className="h-4 w-4 text-wedding-pastel mr-3" />
            <div className="w-12 h-px bg-wedding-pastel"></div>
            <Heart className="h-5 w-5 text-wedding-pastel mx-3" />
            <div className="w-12 h-px bg-wedding-pastel"></div>
            <Gift className="h-4 w-4 text-wedding-pastel ml-3" />
          </div>
          <h2 className="great-vibes-regular text-3xl md:text-4xl font-light text-wedding-light-text dark:text-wedding-dark-text mb-4 tracking-wide">
            Regalos
          </h2>
          <p className="habibi-regular text-lg text-wedding-light-muted dark:text-wedding-dark-muted">
            Su presencia es nuestro mejor regalo
          </p>
        </div>

        {/* Gifts Content */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 max-w-3xl mx-auto transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center">
            <div className="bg-wedding-warm/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="h-10 w-10 text-wedding-warm" strokeWidth={1.5} />
            </div>
            
            <p className="habibi-regular text-lg text-wedding-light-text mb-6 leading-relaxed">
              Su presencia en nuestro día especial es el mejor regalo que podríamos recibir. 
              Sin embargo, si desean hacernos un obsequio, agradeceríamos mucho su apoyo 
              en efectivo para nuestro futuro juntos.
            </p>
            
            <div className="mt-8 p-4 bg-wedding-light-bg/50 rounded-lg border border-wedding-light-border">
              
              <p className="habibi-regular text-wedding-light-muted text-sm">
                 Usa tu creatividad y envuélvelo tu mismo. Podrás depositarlo dentro de la recepción. 
              </p>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}
