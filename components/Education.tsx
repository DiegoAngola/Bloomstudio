import React from 'react';
import { Sun, Droplets, Shield, Heart } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const icons = {
  spf: Sun,
  hydration: Droplets,
  rosacea: Shield,
  consistency: Heart
};

const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-bloom-charcoal text-bloom-cream">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-bloom-pink uppercase tracking-widest text-sm font-semibold">{t.education.label}</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 text-white">{t.education.title}</h2>
          </div>
          <p className="max-w-md text-gray-400 font-light">
            {t.education.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.education.items.map((tip) => {
            const Icon = icons[tip.id as keyof typeof icons];
            return (
              <div key={tip.id} className="bg-white/5 p-8 border border-white/10 hover:border-bloom-pink/50 transition-colors duration-300 group">
                <div className="bg-bloom-pink/10 w-12 h-12 flex items-center justify-center rounded-full mb-6 group-hover:bg-bloom-pink group-hover:text-bloom-charcoal transition-all duration-300 text-bloom-pink">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl mb-4 text-white group-hover:text-bloom-pink transition-colors">
                  {tip.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {tip.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;