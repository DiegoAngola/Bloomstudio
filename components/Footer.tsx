import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-bloom-cream border-t border-bloom-pink/20 py-10 md:py-16">
      <div className="container px-6 mx-auto text-center">
        {/* Logo con ajuste de margen en móvil */}
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-bloom-charcoal mb-6">
          Bloom<span className="text-bloom-pink">.</span>
        </h2>

        {/* Enlaces de navegación: 
            - En móvil (pequeño): Se apilan o se separan más.
            - En tablet/PC: En una línea sola con gap moderado. 
        */}
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-3 md:gap-8 mb-10 text-[10px] md:text-sm uppercase tracking-[0.2em] text-gray-500">
            <a href="#inicio" className="hover:text-bloom-charcoal transition-colors">{t.nav.home}</a>
            <a href="#servicios" className="hover:text-bloom-charcoal transition-colors">{t.nav.services}</a>
            <a href="#nosotros" className="hover:text-bloom-charcoal transition-colors">{t.nav.about}</a>
            <a href="#contacto" className="hover:text-bloom-charcoal transition-colors">{t.nav.contact}</a>
        </nav>

        {/* Texto de copyright con mejor legibilidad en móviles */}
        <p className="text-gray-400 text-[10px] md:text-xs font-light leading-relaxed">
          &copy; {new Date().getFullYear()} Bloom Beauty Studio. {t.footer.rights} 
          <span className="hidden md:inline"> | </span> 
          <br className="md:hidden" />
          {t.footer.designed}
        </p>
      </div>
    </footer>
  );
};

export default Footer;