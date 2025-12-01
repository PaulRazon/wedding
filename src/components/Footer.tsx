'use client';

import { Heart, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#eae4cc] border-t border-wedding-light-border dark:border-wedding-dark-border mb-20 md:mb-0">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center space-y-8">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2">
              <Heart className="h-6 w-6 text-wedding-warm" />
              <h3 className="pinyon-script-regular text-2xl font-light text-wedding-light-text dark:text-wedding-dark-text tracking-wide">
                Anahí & Eduardo
              </h3>
              <Heart className="h-6 w-6 text-wedding-warm" />
            </div>
            
            <p className="habibi-regular text-lg text-wedding-light-muted dark:text-wedding-dark-muted max-w-md mx-auto">
              Gracias por ser parte de nuestro día especial. Tu presencia hace que este momento sea perfecto.
            </p>
          </div>

          {/* Event Details */}
          <div className="bg-wedding-light-bg dark:bg-wedding-dark-bg rounded-lg p-6 border border-wedding-light-border dark:border-wedding-dark-border">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="h-4 w-4 text-wedding-warm" />
                <span className="habibi-regular text-wedding-light-text dark:text-wedding-dark-text">
                  11 de Abril, 2026
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4 text-wedding-warm" />
                <span className="habibi-regular text-wedding-light-text dark:text-wedding-dark-text">
                  Xalisco, Nayarit
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <Sparkles className="h-3 w-3 text-wedding-pastel mr-2" />
            <div className="w-24 h-px bg-wedding-pastel"></div>
            <Sparkles className="h-3 w-3 text-wedding-pastel ml-2" />
          </div>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="habibi-regular text-sm text-wedding-light-muted dark:text-wedding-dark-muted">
              Con amor infinito
            </p>
            <p className="habibi-regular text-xs text-wedding-light-muted dark:text-wedding-dark-muted opacity-75">
              © 2026 - Invitación de boda digital
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
