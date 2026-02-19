import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

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
                  <p className="text-gray-500 font-light">+1 (555) 123-4567</p>
                  <p className="text-gray-500 font-light">hello@bloomstudio.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a 
                href="https://wa.me/15551234567" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 bg-green-600 text-white py-4 px-6 text-center uppercase tracking-widest text-sm hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircleIcon className="w-5 h-5" /> {t.contact.whatsapp}
              </a>
              <a 
                href="#"
                className="w-14 h-14 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-bloom-charcoal hover:border-bloom-charcoal transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="w-14 h-14 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-bloom-charcoal hover:border-bloom-charcoal transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] w-full bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184128796859!2d-73.9856566845941!3d40.74844097932765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1622646294717!5m2!1sen!2sus" 
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

// Helper component for WhatsApp Icon
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
)

export default Contact;