import React from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

// Helper component for WhatsApp Icon defined BEFORE usage to prevent ReferenceError
const MessageCircleIcon: React.FC<{className?: string}> = ({className}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-20 md:py-32 bg-white">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-bloom-pink uppercase tracking-widest text-sm font-semibold">{t.contact.label}</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-8 text-bloom-charcoal">{t.contact.title}</h2>
            <p className="text-gray-500 mb-10 font-light text-lg">
              {t.contact.description}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-bloom-cream rounded-full text-bloom-charcoal">
                    <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-bloom-charcoal mb-1">{t.contact.locationTitle}</h4>
                  <p className="text-gray-500 font-light">{t.contact.locationText}<br />{t.contact.locationCity}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-bloom-cream rounded-full text-bloom-charcoal">
                    <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-bloom-charcoal mb-1">{t.contact.hoursTitle}</h4>
                  <p className="text-gray-500 font-light">{t.contact.hours1}</p>
                  <p className="text-gray-500 font-light">{t.contact.hours2}</p>
                  <p className="text-gray-500 font-light">{t.contact.hours3}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-bloom-cream rounded-full text-bloom-charcoal">
                    <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-bloom-charcoal mb-1">{t.contact.contactTitle}</h4>
                  <p className="text-gray-500 font-light">+54 9 11 5882-7821</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a 
                href="https://wa.me/5491158827821" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 bg-green-600 text-white py-4 px-6 text-center uppercase tracking-widest text-sm hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircleIcon className="w-5 h-5" /> {t.contact.whatsapp}
              </a>
              <a 
                href="https://www.instagram.com/luisangelli.studio/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-bloom-charcoal hover:border-bloom-charcoal transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] w-full bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700">
             <iframe 
                src="https://maps.google.com/maps?q=Av.+Rivadavia+2230,+C1034+Cdad.+Autónoma+de+Buenos+Aires,+Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Studio Location"
            ></iframe>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 font-serif text-sm">
                Bloom Beauty Studio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;