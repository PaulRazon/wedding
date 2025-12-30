// src/components/PhotoSection.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { Heart, Quote } from 'lucide-react';
import Image from 'next/image';

interface PhotoSectionProps {
  imageUrl: string;
  quote?: string;
  author?: string;
  coupleNames?: string;
  date?: string;
  reverse?: boolean;
  title?: string;
}

export default function PhotoSection({ 
  imageUrl, 
  quote, 
  title,
  author, 
  coupleNames = "Anahí & Eduardo",
  date = "11 de Abril, 2026",
  reverse = false 
}: PhotoSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
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
      className="relative py-8 md:py-16 overflow-hidden bg-[#eae4cc]"
    >
      {/* Mobile: Optimized Image */}
      <div className="md:hidden relative h-96 mx-4 rounded-lg overflow-hidden">
        {imageUrl.includes('couple-photo') ? (
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4C4B0] via-[#C7B299] to-[#A69080]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="pinyon-script-regular text-2xl opacity-75">Anahí & Eduardo</p>
              </div>
            </div>
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt={title || 'Wedding photo'}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={false}
            loading="lazy"
            onLoadingComplete={() => setIsImageLoaded(true)}
            style={{ opacity: isImageLoaded ? 1 : 0, transition: 'opacity 500ms ease-in-out' }}
          />
        )}
      </div>

      {/* Desktop: Image with Text */}
      <section className="hidden md:block">
        <article className={`flex items-center min-h-[500px] ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
          {/* Text Section */}
          <header className='flex w-1/2 flex-col'>
            <h1 className="text-5xl font-medium mb-4 ml-11">{title}</h1>
            <div className={`w-full px-8 lg:px-16 ${reverse ? 'text-right' : 'text-left'}`}>
              <div className={`transition-all duration-1000 ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}>
                {quote && (
                  <div className="mb-8">
                    <Quote className={`h-8 w-8 text-wedding-warm mb-4 ${reverse ? 'ml-auto' : ''}`} />
                    <blockquote className="habibi-regular text-lg md:text-xl text-wedding-light-text dark:text-wedding-dark-text leading-relaxed italic">
                      &ldquo;{quote}&rdquo;
                    </blockquote>
                    {author && (
                      <cite className="habibi-regular text-sm text-wedding-light-muted dark:text-wedding-dark-muted mt-4 block not-italic">
                        — {author}
                      </cite>
                    )}
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className={`flex items-center gap-2 ${reverse ? 'justify-end' : 'justify-start'}`}>
                    <Heart className="h-5 w-5 text-wedding-warm" />
                    <span className="pinyon-script-regular text-2xl md:text-3xl text-wedding-light-text dark:text-wedding-dark-text">
                      {coupleNames}
                    </span>
                    <Heart className="h-5 w-5 text-wedding-warm" />
                  </div>
                  
                  <p className="habibi-regular text-base text-wedding-light-muted dark:text-wedding-dark-muted">
                    {date}
                  </p>
                </div>
              </div>
            </div>
          </header>
          
          {/* Image Section */}
          <div className="w-1/2 relative">
            <div className={`relative h-[500px] mx-8 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}>
              {imageUrl.includes('couple-photo') ? (
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4C4B0] via-[#C7B299] to-[#A69080]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Heart className="h-16 w-16 mx-auto mb-6 opacity-50" />
                      <p className="pinyon-script-regular text-3xl opacity-75">Anahí & Eduardo</p>
                      <p className="habibi-regular text-lg opacity-60 mt-2">Foto próximamente</p>
                    </div>
                  </div>
                </div>
              ) : (
                <Image
                  src={imageUrl}
                  alt={title || 'Wedding photo'}
                  fill
                  sizes="50vw"
                  className="object-cover"
                  priority={false}
                  loading="lazy"
                  onLoadingComplete={() => setIsImageLoaded(true)}
                  style={{ opacity: isImageLoaded ? 1 : 0, transition: 'opacity 500ms ease-in-out' }}
                />
              )}
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}