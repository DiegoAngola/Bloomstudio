import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
          alt="Elegant Beauty Studio"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bloom-charcoal/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center text-white">
        <div className="animate-fade-in-up">
          <p className="text-bloom-pink uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-semibold">
            {t.hero.welcome}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            {t.hero.title1} <br className="hidden md:block" />
            <span className="italic font-light">{t.hero.title2}</span>
          </h1>
          <p className="max-w-lg mx-auto text-gray-100 mb-10 text-lg font-light leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contacto"
              className="px-8 py-4 bg-bloom-pink text-bloom-charcoal min-w-[180px] text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 font-medium"
            >
              {t.hero.bookBtn}
            </a>
            <a
              href="#servicios"
              className="group flex items-center gap-2 px-8 py-4 border border-white/30 hover:border-white text-white min-w-[180px] justify-center text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              {t.hero.servicesBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;