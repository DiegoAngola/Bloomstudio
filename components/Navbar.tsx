import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const navLinks = [
    { label: t.nav.home, href: '#inicio' },
    { label: t.nav.services, href: '#servicios' },
    { label: t.nav.about, href: '#nosotros' },
    { label: t.nav.education, href: '#tips' },
    { label: t.nav.contact, href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-bloom-cream/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <Sparkles className="w-6 h-6 text-bloom-charcoal group-hover:text-bloom-pink transition-colors" />
          <span className="font-serif text-2xl font-bold tracking-wide text-bloom-charcoal">
            Bloom<span className="text-bloom-pink">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest font-medium text-bloom-charcoal hover:text-bloom-pink transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-medium text-bloom-charcoal hover:text-bloom-pink transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{language}</span>
          </button>

          <a
            href="#contacto"
            className="px-6 py-2 bg-bloom-charcoal text-bloom-cream text-sm uppercase tracking-widest hover:bg-bloom-pink hover:text-bloom-charcoal transition-all duration-300"
          >
            {t.nav.book}
          </a>
        </div>

        {/* Mobile Toggle & Language */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-medium text-bloom-charcoal"
          >
            <span className="uppercase">{language}</span>
          </button>
          
          <button
            className="text-bloom-charcoal focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-bloom-cream border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-serif text-bloom-charcoal hover:text-bloom-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-8 py-3 bg-bloom-charcoal text-bloom-cream text-sm uppercase tracking-widest hover:bg-bloom-pink hover:text-bloom-charcoal transition-all"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.book}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;