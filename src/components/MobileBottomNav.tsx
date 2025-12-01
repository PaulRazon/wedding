'use client';

import { useState, useEffect } from 'react';
import { Home, Users, Calendar, Image, MessageCircle } from 'lucide-react';

export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Home, href: '#inicio' },
    { id: 'historia', label: 'Novios', icon: Users, href: '#historia' },
    { id: 'ceremonia', label: 'Fecha', icon: Calendar, href: '#ceremonia' },
    { id: 'galeria', label: 'Galería', icon: Image, href: '#galeria' },
    { id: 'rsvp', label: 'RSVP', icon: MessageCircle, href: '#rsvp' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-wedding-light-card/95 dark:bg-wedding-dark-card/95 
                   backdrop-blur-lg border-t border-wedding-light-border dark:border-wedding-dark-border shadow-lg">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href, item.id)}
              className={`flex flex-col items-center justify-center p-2 min-w-0 flex-1 transition-all duration-300 ${
                isActive 
                  ? 'text-wedding-warm' 
                  : 'text-wedding-light-muted dark:text-wedding-dark-muted hover:text-wedding-warm'
              }`}
            >
              <Icon className={`h-5 w-5 mb-1 transition-all duration-300 ${
                isActive ? 'scale-110' : 'scale-100'
              }`} />
              <span className={`text-xs habibi-regular font-medium transition-all duration-300 ${
                isActive ? 'opacity-100' : 'opacity-75'
              }`}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-wedding-warm rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
