import React from 'react';
import { useLanguage } from '../LanguageContext';

const images = {
  brows: 'https://images.unsplash.com/photo-1588510883331-52723c023d85?q=80&w=800&auto=format&fit=crop',
  lashes: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
  waxing: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
  pmu: 'https://images.unsplash.com/photo-1620331317312-74b88bf40907?q=80&w=800&auto=format&fit=crop'
};

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-bloom-pink uppercase tracking-widest text-sm font-semibold">{t.services.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 text-bloom-charcoal">{t.services.title}</h2>
          <p className="text-gray-500 font-light">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((service) => (
            <div key={service.id} className="group cursor-pointer">
              <div className="relative h-80 mb-6 overflow-hidden bg-bloom-cream">
                <img
                  src={images[service.id as keyof typeof images]}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-bloom-charcoal/0 group-hover:bg-bloom-charcoal/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-widest shadow-sm">
                  {service.duration}
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-serif text-2xl text-bloom-charcoal mb-2 group-hover:text-bloom-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed font-light">
                  {service.description}
                </p>
                <div className="flex justify-center md:justify-start items-center gap-2">
                  <span className="text-lg font-medium text-bloom-charcoal">{service.price}</span>
                  <div className="h-px w-8 bg-bloom-pink"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;