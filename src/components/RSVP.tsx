'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, User, Users, UserX, Heart, Sparkles, Mail } from 'lucide-react';
import HedgehogDecoration from './HedgehogDecoration';

export default function RSVP() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.attendance) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    const attendanceText = {
      'solo': 'Asistiré solo/a',
      'acompanante': 'Asistiré con acompañante',
      'no': 'No podré asistir'
    }[formData.attendance] || formData.attendance;

    const message = `¡Hola! Soy ${formData.name}. 

${attendanceText} a su boda el 11 de Abril del 2026.

${formData.message ? `Mensaje: ${formData.message}` : ''}

¡Felicidades por su compromiso!

---
Detalles del evento:
📅 Sábado, 11 de Abril del 2026
⛪ Ceremonia: 4:00 PM - Parroquia de San Cayetano, Xalisco
🎉 Recepción: 5:30 PM - La Muralla Jardín Campestre, Xalisco
📍 https://share.google/0ANQdueTDcglVTguH`;

    const whatsappUrl = `https://wa.me/523111064708?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="rsvp" 
      className="py-16 px-4 bg-wedding-light-card dark:bg-wedding-dark-card relative"
    >
      {/* Hedgehog Decoration */}
      <HedgehogDecoration position="bottom-right" size="medium" variant={1} className="hidden lg:block" />
      
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-4 w-4 text-wedding-pastel mr-3" />
            <div className="w-12 h-px bg-wedding-pastel"></div>
            <Heart className="h-5 w-5 text-wedding-pastel mx-3" />
            <div className="w-12 h-px bg-wedding-pastel"></div>
            <Mail className="h-4 w-4 text-wedding-pastel ml-3" />
          </div>
          <h2 className="great-vibes-regular text-3xl md:text-4xl font-light text-wedding-light-text dark:text-wedding-dark-text mb-4 tracking-wide">
            Confirmación RSVP
          </h2>
          <p className="habibi-regular text-lg text-wedding-light-muted dark:text-wedding-dark-muted">
            Por favor confirma tu asistencia
          </p>
        </div>

        {/* RSVP Form */}
        <div className={`bg-wedding-light-bg dark:bg-wedding-dark-bg rounded-xl p-8 md:p-12 border border-wedding-light-border dark:border-wedding-dark-border shadow-sm transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block habibi-regular text-base font-medium text-wedding-light-text dark:text-wedding-dark-text mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-wedding-light-border dark:border-wedding-dark-border 
                         bg-wedding-light-card dark:bg-wedding-dark-card text-wedding-light-text dark:text-wedding-dark-text
                         focus:ring-2 focus:ring-wedding-warm focus:border-transparent transition-all duration-300
                         habibi-regular text-base"
                placeholder="Tu nombre completo"
              />
            </div>

            {/* Attendance Selection */}
            <div>
              <label htmlFor="attendance" className="block habibi-regular text-base font-medium text-wedding-light-text dark:text-wedding-dark-text mb-2">
                Confirmación de asistencia *
              </label>
              <select
                id="attendance"
                name="attendance"
                value={formData.attendance}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-wedding-light-border dark:border-wedding-dark-border 
                         bg-wedding-light-card dark:bg-wedding-dark-card text-wedding-light-text dark:text-wedding-dark-text
                         focus:ring-2 focus:ring-wedding-warm focus:border-transparent transition-all duration-300
                         habibi-regular text-base"
              >
                <option value="">Selecciona una opción</option>
                <option value="solo">Asistiré solo/a</option>
                <option value="acompanante">Asistiré con acompañante</option>
                <option value="no">No podré asistir</option>
              </select>
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block habibi-regular text-base font-medium text-wedding-light-text dark:text-wedding-dark-text mb-2">
                Mensaje (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-wedding-light-border dark:border-wedding-dark-border 
                         bg-wedding-light-card dark:bg-wedding-dark-card text-wedding-light-text dark:text-wedding-dark-text
                         focus:ring-2 focus:ring-wedding-warm focus:border-transparent transition-all duration-300
                         habibi-regular text-base resize-none"
                placeholder="Escribe un mensaje especial para los novios..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-wedding-warm hover:bg-wedding-neutral text-white 
                         px-8 py-3 rounded-lg habibi-regular font-medium text-base transition-all duration-300
                         border border-wedding-warm hover:border-wedding-neutral transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                Enviar por WhatsApp
                <Send className="h-4 w-4" />
              </button>
            </div>

            {/* Info Text */}
            <div className="text-center pt-4 border-t border-wedding-light-border dark:border-wedding-dark-border">
              <p className="habibi-regular text-sm text-wedding-light-muted dark:text-wedding-dark-muted">
                Tu confirmación se enviará directamente por WhatsApp a los novios
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
