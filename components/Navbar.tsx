import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isOpen 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        
        {/* Logo - Reducido un poco para tablets */}
        <a href="#inicio" className="flex items-center gap-2 group shrink-0">
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-bloom-charcoal group-hover:text-bloom-pink transition-colors" />
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-bloom-charcoal">
            Bloom<span className="text-bloom-pink">.</span>
          </span>
        </a>

        {/* Desktop & Tablet Menu - El cambio clave está en el breakpoint 'xl' */}
        <div className="hidden xl:flex items-center space-x-6 2xl:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-bloom-charcoal hover:text-bloom-pink transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <div className="h-4 w-[1px] bg-gray-300 mx-2"></div>

          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-xs font-semibold text-bloom-charcoal hover:text-bloom-pink transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{language}</span>
          </button>

          <a
            href="https://bloombeauty.site.agendapro.com/ar/sucursal/368956"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-bloom-charcoal text-bloom-cream text-[11px] uppercase tracking-widest hover:bg-bloom-pink hover:text-bloom-charcoal transition-all duration-300"
          >
            {t.nav.book}
          </a>
        </div>

        {/* Mobile & Tablet Toggle (Aparece en pantallas menores a 1280px) */}
        <div className="flex items-center gap-3 xl:hidden">
          <button 
            onClick={toggleLanguage}
            className="p-2 text-bloom-charcoal hover:text-bloom-pink transition-colors"
          >
            <span className="text-xs font-bold uppercase">{language}</span>
          </button>
          
          <button
            className="p-2 text-bloom-charcoal focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      <div
        className={`xl:hidden absolute top-full left-0 w-full bg-white border-t border-gray-50 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center py-10 space-y-8 bg-bloom-cream/50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl font-serif text-bloom-charcoal hover:text-bloom-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://bloombeauty.site.agendapro.com/ar/sucursal/368956"
            target="_blank"
            rel="noreferrer"
            className="w-2/3 text-center px-8 py-4 bg-bloom-charcoal text-bloom-cream text-sm uppercase tracking-widest hover:bg-bloom-pink hover:text-bloom-charcoal transition-all shadow-lg"
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