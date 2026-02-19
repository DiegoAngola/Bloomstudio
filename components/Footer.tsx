import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-bloom-cream border-t border-bloom-pink/20 py-12">
      <div className="container px-6 text-center">
        <h2 className="font-serif text-2xl font-bold text-bloom-charcoal mb-4">
          Bloom<span className="text-bloom-pink">.</span>
        </h2>
        <div className="flex justify-center gap-6 mb-8 text-sm uppercase tracking-widest text-gray-500">
            <a href="#hero" className="hover:text-bloom-charcoal">{t.nav.home}</a>
            <a href="#services" className="hover:text-bloom-charcoal">{t.nav.services}</a>
            <a href="#about" className="hover:text-bloom-charcoal">{t.nav.about}</a>
            <a href="#contact" className="hover:text-bloom-charcoal">{t.nav.contact}</a>
        </div>
        <p className="text-gray-400 text-xs font-light">
          &copy; {new Date().getFullYear()} Bloom Beauty Studio. {t.footer.rights} <br/>
          {t.footer.designed}
        </p>
      </div>
    </footer>
  );
};

export default Footer;