'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, MapPin, Gift, Utensils } from 'lucide-react';

export default function ReceptionDetails() {
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
      id="reception" 
      className="py-16 px-4 bg-[#eae4cc] relative"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          <h2 className="great-vibes-regular text-3xl md:text-4xl font-light text-wedding-light-text mb-6 tracking-wide">
            Detalles de la Recepción
          </h2>
          <div className="w-24 h-px bg-wedding-light-border mx-auto mb-6"></div>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          {/* Left Column - Main Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-wedding-warm/20 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-wedding-warm" />
              </div>
              <div>
                <h3 className="habibi-regular text-xl font-medium text-wedding-light-text mb-1">Fecha</h3>
                <p className="habibi-regular text-wedding-light-muted">11 de Abril, 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-wedding-warm/20 p-3 rounded-full">
                <Clock className="h-6 w-6 text-wedding-warm" />
              </div>
              <div>
                <h3 className="habibi-regular text-xl font-medium text-wedding-light-text mb-1">Hora</h3>
                <p className="habibi-regular text-wedding-light-muted">4:00 PM - 12:00 AM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-wedding-warm/20 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-wedding-warm" />
              </div>
              <div>
                <h3 className="habibi-regular text-xl font-medium text-wedding-light-text mb-1">Ubicación</h3>
                <p className="habibi-regular text-wedding-light-muted">
                  Hacienda San José Cholul<br />
                  Km 2.5 Carretera Mérida - Conkal,<br />
                  97305 Mérida, Yuc.
                </p>
                <a 
                  href="https://maps.app.goo.gl/example" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-wedding-warm hover:underline"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-wedding-warm/20 p-3 rounded-full">
                <Utensils className="h-6 w-6 text-wedding-warm" />
              </div>
              <div>
                <h3 className="habibi-regular text-xl font-medium text-wedding-light-text mb-1">Menú</h3>
                <p className="habibi-regular text-wedding-light-muted">
                  • Buffet de comida yucateca<br />
                  • Bebidas y coctelería<br />
                  • Postres tradicionales
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-wedding-warm/20 p-3 rounded-full">
                <Gift className="h-6 w-6 text-wedding-warm" />
              </div>
              <div>
                <h3 className="habibi-regular text-xl font-medium text-wedding-light-text mb-1">Mesa de Regalos</h3>
                <p className="habibi-regular text-wedding-light-muted mb-2">
                  Su presencia es nuestro mejor regalo, pero si desean hacernos un detalle, agradeceremos sea en efectivo.
                </p>
                <div className="bg-white/50 p-4 rounded-lg border border-wedding-light-border">
                  <p className="habibi-regular text-sm text-wedding-light-text mb-2">Datos para transferencia:</p>
                  <p className="font-mono text-sm bg-white p-2 rounded">
                    CLABE: 1234 5678 9012 3456 78<br />
                    Banco: BBVA<br />
                    Nombre: Anahí & Eduardo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className={`mt-12 rounded-lg overflow-hidden shadow-lg transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          <div className="aspect-video bg-gray-200 flex items-center justify-center">
            <p className="text-wedding-light-muted">Mapa de ubicación</p>
          </div>
        </div>
      </div>
    </section>
  );
}
