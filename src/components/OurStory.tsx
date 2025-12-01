'use client';

import { useEffect, useRef, useState } from 'react';
import { BellRing, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function OurStory() {
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
      id="historia" 
      className="pb-16 pt-2 px-4  relative"
    >
      {/* Minimal Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-wedding-warm rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-wedding-accent rounded-full opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col  md:block justify-center md:max-w-full relative z-10">
        <div className='w-full flex justify-center'>
          <Image
           src={"/logo-erizos.png"}
           width={100}
           height={100}
           alt=''
           className='w-20 h-20 md:w-50 md:h-50'
          />
        </div>
        {/* Section Title */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          <div className="w-12 h-px bg-wedding-warm mx-auto mb-6"></div>
          
          <h2 className="great-vibes-regular mb-5 text-3xl md:text-4xl font-light text-wedding-light-text dark:text-wedding-dark-text mb-4 tracking-wide">
            Nuestra Historia
          </h2>
          <br />
          <div className='absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat' style={{backgroundImage:('url(/titulos.png)')}}></div>
          <br />
          <p className="habibi-regular mt-5 text-lg text-wedding-light-muted dark:text-wedding-dark-muted">
            Una historia de amor verdadero
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Story Content */}
          <div className={`bg-wedding-light-card dark:bg-wedding-dark-card rounded-xl p-8 md:p-12 border border-wedding-light-border dark:border-wedding-dark-border shadow-sm transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}>
            <div className="space-y-8 text-center">
              
              <div className="text-center my-8">
                <div className="flex items-center justify-center">
                  <div className="w-8 h-px bg-wedding-warm"></div>
                  <BellRing className="h-6 w-6 mx-4 text-wedding-warm" />
                  <div className="w-8 h-px bg-wedding-warm"></div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="great-vibes-regular text-xl md:text-2xl font-medium text-wedding-light-text dark:text-wedding-dark-text mb-4">
                  Anahí Rosario Pérez Jara
                </h3>
                <p className="habibi-regular text-sm text-wedding-light-muted dark:text-wedding-dark-muted mb-2">Padres de la novia:</p>
                <p className="habibi-regular text-base text-wedding-light-text dark:text-wedding-dark-text">
                  Sra. Rosario Jara Pérez<br/>
                  Sr. Mario Pérez Casillas
                </p>
              </div>
              <div className="mb-8">
                <h3 className="great-vibes-regular text-xl md:text-2xl font-medium text-wedding-light-text dark:text-wedding-dark-text mb-4">
                  Eduardo Bladimir Razón Machain
                </h3>
                <p className="habibi-regular text-sm text-wedding-light-muted dark:text-wedding-dark-muted mb-2">Padres del novio:</p>
                <p className="habibi-regular text-base text-wedding-light-text dark:text-wedding-dark-text">
                  Sra. Patricia Machain Carvajal<br/>
                  Sr. Carlos Eduardo Razón González
          
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
