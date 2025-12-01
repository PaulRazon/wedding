'use client';

import { useEffect, useRef, useState } from 'react';
import { Shirt } from 'lucide-react';

export default function DressCode() {
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

  const suggestedColors = [
    { name: 'Amarillo', color: '#cfc272', textColor: '#744210' },
    { name: 'Verde', color: '#94d091', textColor: '#22543D' },
    { name: 'Rosa', color: '#e584c3', textColor: '#702459' },
    { name: 'Lila', color: '#d991fc', textColor: '#44337A' },
    { name: 'Naranja', color: '#e89d68', textColor: '#7B341E' },
    { name: 'Gris', color: '#718096', textColor: '#2D3748' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="vestimenta" 
      className="py-16 px-4 bg-[#eae4cc] relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          <div className="w-12 h-px bg-wedding-warm mx-auto mb-6"></div>
          <h2 className="great-vibes-regular text-3xl md:text-4xl font-light text-wedding-light-text dark:text-wedding-dark-text mb-4 tracking-wide">
            Código de Vestimenta
          </h2>
          <p className="habibi-regular text-lg text-wedding-light-muted dark:text-wedding-dark-muted">
            Vístete elegante para la ocasión
          </p>
        </div>

        {/* Dress Code Content */}
        <div className={`bg-wedding-light-bg dark:bg-wedding-dark-bg rounded-xl p-8 md:p-12 border border-wedding-light-border dark:border-wedding-dark-border shadow-sm transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          <div className="space-y-8">
            {/* Formal Attire */}
            <div className="text-center">
              <Shirt className="h-12 w-12 mx-auto text-wedding-warm mb-4" />
              <h3 className="great-vibes-regular text-xl font-medium text-wedding-light-text dark:text-wedding-dark-text mb-4">
                Vestimenta Formal
              </h3>
              <p className="habibi-regular text-base text-wedding-light-muted dark:text-wedding-dark-muted mb-6">
                Te pedimos que nos acompañes vestido/a de manera elegante para hacer de este momento algo aún más especial.
              </p>
            </div>

            {/* Color Restriction */}
            <article className="bg-wedding-light-card dark:bg-wedding-dark-card rounded-lg p-6 border border-wedding-light-border dark:border-wedding-dark-border">
              <h4 className="great-vibes-regular text-lg font-medium text-wedding-light-text dark:text-wedding-dark-text mb-3">
                Color Restringido
              </h4>
              <section className="flex flex-col items-start gap-3 mb-3">
                <h1>Hombres</h1>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-red-400"></div>
                  <span className="habibi-regular text-base text-wedding-light-text dark:text-wedding-dark-text">
                  Evita el color azul (nuestro color distintivo)
                </span>
                </div>
              </section>
             
            </article>

            {/* Suggested Colors */}
            <article>
              <h4 className="great-vibes-regular text-lg font-medium text-wedding-light-text dark:text-wedding-dark-text mb-4 text-center">
                Colores Sugeridos en Mujeres
              </h4>
              <div className="grid grid-cols-2 ml-10 md:ml-30 place-content-center md:grid-cols-3 gap-4">
                {suggestedColors.map((colorItem, index) => (
                  <div
                    key={index}
                    className="group flex flex-col justify-center items-center relative overflow-hidden rounded-full w-20 h-20 p-4 text-center transition-all duration-300 hover:scale-105 cursor-pointer border border-wedding-light-border dark:border-wedding-dark-border"
                    style={{ backgroundColor: colorItem.color }}
                  >
                    <span 
                      className="font-cormorant font-medium text-sm"
                      style={{ color: colorItem.textColor }}
                    >
                      {colorItem.name}
                    </span>
                  </div>
                ))}
              </div>
            </article>

            {/* Additional Tips */}
            <div className="text-center pt-6 border-t border-wedding-light-border dark:border-wedding-dark-border">
              <p className="habibi-regular text-sm text-wedding-light-muted dark:text-wedding-dark-muted">
                <strong>Evento al aire libre:</strong> Recomendamos tacón grueso y llevar un abrigo ligero
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
