'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Heart, Volume2, VolumeX, Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  isMusicPlaying: boolean;
  toggleMusic: () => void;
}

export default function Navbar({ isMusicPlaying, toggleMusic }: Omit<NavbarProps, 'isDarkMode' | 'setIsDarkMode'>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#historia', label: 'Nuestra Historia' },
    { href: '#ceremonia', label: 'Ceremonia' },
    { href: '#recepcion', label: 'Recepción' },
    { href: '#galeria', label: 'Galería' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#eae4cc]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center group">
            <Heart className="h-6 w-6 text-wedding-warm transition-all duration-300 group-hover:scale-110" />
            <span className="ml-3 text-2xl font-medium text-wedding-light-text dark:text-wedding-dark-text pinyon-script-regular tracking-wide">
              Anahí & Eduardo
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-wedding-light-muted dark:text-wedding-dark-muted hover:text-wedding-light-text dark:hover:text-wedding-dark-text 
                         transition-all duration-300 habibi-regular font-normal text-base group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wedding-warm 
                               transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleMusic}
              className="p-2 rounded-lg bg-wedding-light-accent dark:bg-wedding-dark-accent text-wedding-light-text dark:text-wedding-dark-text 
                       hover:bg-wedding-warm hover:text-white dark:hover:bg-wedding-warm dark:hover:text-white
                       transition-all duration-300 border border-wedding-light-border dark:border-wedding-dark-border"
              title={isMusicPlaying ? 'Pausar música' : 'Reproducir música'}
            >
              {isMusicPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>
            
            
            {/* Mobile menu button - hidden since we have bottom nav */}
            {/* <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-full bg-gradient-to-r from-[#6ea3e6] to-[#5d8ae0] text-white 
                       hover:from-[#63c2e2] hover:to-[#60a7e3] transition-all duration-300 
                       transform hover:scale-110 shadow-lg hover:shadow-xl"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-[#a8d8f0]/40 dark:border-gray-700/50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-[#7ba3c8] 
                         dark:hover:text-[#8cc9e0] transition-all duration-300 habibi-regular 
                         font-medium text-lg rounded-lg hover:bg-[#e8f4fb] dark:hover:bg-gray-800/50
                         transform hover:translate-x-2"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: isMenuOpen ? 'fadeInLeft 0.5s ease-out forwards' : 'none'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
