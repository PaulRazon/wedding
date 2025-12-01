'use client';

import { useEffect, useRef, useState } from 'react';
import { Heart, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function LoveStoryCard() {
  const [isVisible, setIsVisible] = useState(false);
  const [showFullStory, setShowFullStory] = useState(false);
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

  const storyText = `En el pueblo verde de Avonlea, donde los caminos de tierra se cruzan con los sueños, una niña de ojos brillantes llamada Ani encontró su hogar en la imaginación y el corazón de Eduard. Sus almas se entrelazaron como las ramas de los árboles en el bosque. Eduard le confesó solemnemente: "Eres el objeto de mi afecto". Y el destino escribió con la tinta de la amistad y el amor un:

 Felices para siempre`;

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 bg-[#eae4cc] relative"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          {/* Love Story Card */}
          <div className="rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 border border-white/10 rounded-full"></div>
              <div className="absolute top-1/2 left-4 w-12 h-12 border border-white/15 rounded-full"></div>
            </div>

            {/* Title */}
            <div className="text-center mb-8 relative z-10">
              <h2 className="great-vibes-regular text-4xl md:text-5xl  mb-2 tracking-wide">
                El Comienzo de Nuestra Historia
              </h2>
              <div className="flex items-center justify-center mt-4">
                <div className="w-8 h-px bg-wedding-pastel"></div>
                <Heart className="h-4 w-4 mx-3 text-wedding-pastel" />
                <div className="w-8 h-px bg-wedding-pastel"></div>
              </div>
            </div>

            {/* Story Image */}
            <div className="mb-8 relative z-10">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/our-story.jpg"
                  alt="Nuestra historia de amor"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback to a gradient background if image fails to load
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #D4C4B0 0%, #C7B299 50%, #A69080 100%)';
                    }
                  }}
                />
                
                {/* Placeholder content if image doesn't load */}
                
              </div>
            </div>

            {/* Story Content */}
            <div className="relative z-10">
              <div className=" space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-wedding-pastel/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-wedding-pastel font-cinzel text-sm font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="great-vibes-regular text-lg font-medium  mb-2">
                      El Comienzo de Nuestra Historia
                    </h3>
                    <p className="habibi-regular text-sm leading-relaxed ">
                      {showFullStory ? storyText : storyText.substring(0, 300) + '...'}
                    </p>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setShowFullStory(!showFullStory)}
                    className="group flex items-center gap-2 bg-wedding-pastel/20 hover:bg-wedding-pastel/30 
                             text-wedding-pastel border border-wedding-pastel/30 hover:border-wedding-pastel/50
                             px-6 py-3 rounded-full transition-all duration-300 habibi-regular"
                  >
                    <Heart className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>{showFullStory ? 'Ocultar Historia' : 'Leer Historia'}</span>
                    <BookOpen className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
