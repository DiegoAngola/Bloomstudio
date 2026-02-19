import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="py-20 md:py-32 bg-bloom-cream relative overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-bloom-pink/20 rounded-full blur-3xl"></div>

      <div className="container px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-bloom-pink"></div>
              <img
                src="https://images.unsplash.com/photo-1595152452543-e5cca283f5b7?q=80&w=1200&auto=format&fit=crop"
                alt="Studio Interior"
                className="w-full h-auto object-cover relative z-10 shadow-lg"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-bloom-charcoal uppercase tracking-widest text-sm font-bold opacity-60">{t.about.label}</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-8 text-bloom-charcoal leading-tight">
              {t.about.title}<br />
              <span className="italic text-bloom-gold">{t.about.titleItalic}</span>
            </h2>
            
            <p className="text-gray-600 mb-6 font-light leading-relaxed text-lg">
              {t.about.p1}
            </p>
            
            <p className="text-gray-600 mb-8 font-light leading-relaxed text-lg">
              {t.about.p2}
            </p>

            <div className="bg-white p-6 md:p-8 shadow-sm border-l-4 border-bloom-pink">
              <Quote className="w-8 h-8 text-bloom-pink mb-4 opacity-50" />
              <p className="font-serif text-xl text-bloom-charcoal italic mb-4">
                "{t.about.quote}"
              </p>
              <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">{t.about.philosophy}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;