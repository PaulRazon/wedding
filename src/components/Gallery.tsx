  'use client';

  import { useEffect, useRef, useState } from 'react';
  import { Camera, Heart, Sparkles, Image as ImageIcon } from 'lucide-react';
  import HedgehogDecoration from './HedgehogDecoration';
  import Image from 'next/image';
  
  // Sample image data with different aspect ratios for the masonry effect
  const images = [
    { id: 1, src: '/resource-photo-1.jpg', aspect: 'aspect-[3/4]' },
    { id: 2, src: '/resource-photo-2.jpg', aspect: 'aspect-[4/3]' },
    { id: 3, src: '/resource-photo-3.jpg', aspect: 'aspect-square' },
    { id: 4, src: '/resource-photo-4.jpg', aspect: 'aspect-[5/4]' },
    { id: 5, src: '/resource-photo-5.jpg', aspect: 'aspect-[3/4]' },
    { id: 6, src: '/resource-photo-6.jpg', aspect: 'aspect-[4/5]' },
  ];
  
  // Shuffle the images for a more dynamic layout
  const shuffledImages = [...images].sort(() => Math.random() - 0.5);

  export default function Gallery() {
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
        id="galeria" 
        className="py-16 px-4 bg-wedding-light-bg dark:bg-wedding-dark-bg relative"
      >
        {/* Hedgehog Decoration */}
        <HedgehogDecoration position="top-left" size="small" variant={2} className="hidden md:block" />
        
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}>
            <div className="flex items-center justify-center mb-6">
              <ImageIcon className="h-4 w-4 text-wedding-pastel mr-3" />
              <div className="w-12 h-px bg-wedding-pastel"></div>
              <Camera className="h-5 w-5 text-wedding-pastel mx-3" />
              <div className="w-12 h-px bg-wedding-pastel"></div>
              <ImageIcon className="h-4 w-4 text-wedding-pastel ml-3" />
            </div>
            <h2 className="great-vibes-regular text-3xl md:text-4xl font-light text-wedding-light-text dark:text-wedding-dark-text mb-4 tracking-wide">
              Galería
            </h2>
            <p className="habibi-regular text-lg text-wedding-light-muted dark:text-wedding-dark-muted">
              Momentos especiales juntos
            </p>
          </div>

          {/* Gallery Grid */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}>
            <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {shuffledImages.map((image) => (
                <div 
                  key={image.id}
                  className={`relative group break-inside-avoid mb-4 md:mb-6 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-wedding-accent/20 ${image.aspect}`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={`Wedding photo ${image.id}`}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = 'linear-gradient(135deg, #D4C4B0 0%, #C7B299 50%, #A69080 100%)';
                          parent.classList.add('flex', 'items-center', 'justify-center');
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Heart className="w-5 h-5 mb-1" />
                        <span className="text-sm font-medium">Nuestro momento</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gallery Note */}
            <div className="text-center mt-8 pt-6 border-t border-wedding-light-border dark:border-wedding-dark-border">
              <p className="habibi-regular text-sm text-wedding-light-muted dark:text-wedding-dark-muted">
                Próximamente compartiremos nuestras fotos más especiales
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
