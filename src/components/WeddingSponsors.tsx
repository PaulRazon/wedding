'use client';

import { useEffect, useRef, useState } from 'react';
import { Heart, Sparkles, Award, Users, Gift } from 'lucide-react';
import Image from 'next/image';

interface Sponsor {
  id: number;
  name: string;
  role: string;
  image: string;
  description?: string;
}

export default function WeddingSponsors() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: 'Padrinos de Anillo',
      role: 'Anillos',
      image: '/placeholder-couple.jpg',
      description: 'Con su bendición, nuestros anillos simbolizan el amor eterno.'
    },
    {
      id: 2,
      name: 'Padrinos de Lazo',
      role: 'Lazo',
      image: '/placeholder-couple.jpg',
      description: 'Su guía nos une en este lazo sagrado de amor y compromiso.'
    },
    {
      id: 3,
      name: 'Padrinos de Arras',
      role: 'Arras',
      image: '/placeholder-couple.jpg',
      description: 'Su generosidad es el fundamento de nuestro nuevo hogar.'
    },
    {
      id: 4,
      name: 'Padrinos de Ramo',
      role: 'Ramo',
      image: '/placeholder-couple.jpg',
      description: 'Su amor florece en cada pétalo de nuestro ramo nupcial.'
    },
    {
      id: 5,
      name: 'Padrinos de Biblia',
      role: 'Biblia',
      image: '/placeholder-couple.jpg',
      description: 'Su fe nos guía en este camino de bendición.'
    },
    {
      id: 6,
      name: 'Padrinos de Cojines',
      role: 'Cojines',
      image: '/placeholder-couple.jpg',
      description: 'Su apoyo es el soporte de nuestra unión.'
    },
    {
      id: 7,
      name: 'Padrinos de Vino',
      role: 'Vino',
      image: '/placeholder-couple.jpg',
      description: 'Que su alegría sea el vino que celebre nuestro amor.'
    },
    {
      id: 8,
      name: 'Padrinos de Recuerdos',
      role: 'Recuerdos',
      image: '/placeholder-couple.jpg',
      description: 'Su cariño será recordado en cada detalle.'
    },
    {
      id: 9,
      name: 'Padrinos de Pastel',
      role: 'Pastel',
      image: '/placeholder-couple.jpg',
      description: 'Dulzura y bendición en cada rebanada.'
    },
    {
      id: 10,
      name: 'Invitados Especiales',
      role: 'Especiales',
      image: '/placeholder-couple.jpg',
      description: 'Su presencia hace especial nuestro día.'
    }
  ];

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
      id="padrinos" 
      className="py-16 px-4 bg-[#eae4cc] relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-4 w-4 text-wedding-warm mr-3" />
            <div className="w-12 h-px bg-wedding-warm"></div>
            <Sparkles className="h-5 w-5 text-wedding-warm mx-3" />
            <div className="w-12 h-px bg-wedding-warm"></div>
            <Heart className="h-4 w-4 text-wedding-warm ml-3" />
          </div>
          <h2 className="great-vibes-regular text-3xl md:text-4xl font-light text-wedding-light-text mb-4 tracking-wide">
            Nuestros Padrinos
          </h2>
          <p className="habibi-regular text-lg text-wedding-light-muted">
            Personas especiales que nos acompañan en este día tan importante
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          {sponsors.map((sponsor) => (
            <div 
              key={sponsor.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-wedding-light-border"
            >
              <div className="relative h-48 bg-gradient-to-br from-wedding-warm/20 to-wedding-warm/5">
                {sponsor.image ? (
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-wedding-warm/40" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-white" />
                    <span className="habibi-regular text-white font-medium">{sponsor.role}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="great-vibes-regular text-2xl text-wedding-light-text mb-2">
                  {sponsor.name}
                </h3>
                {sponsor.description && (
                  <p className="habibi-regular text-wedding-light-muted">
                    {sponsor.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
