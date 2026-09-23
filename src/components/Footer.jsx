import React from 'react';
import { business } from '../config/business.js';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { name, shortName, location, contact, openingHours, footer, navigation, actions } = business;

  return (
    <footer className="bg-[#051812] text-[#FAF8F5] pt-16 pb-12 border-t border-[#D4AF37]/20">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand & Ethos */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="font-serif text-2xl font-medium tracking-tight text-[#FAF8F5]">
              {name}
            </span>
            <p className="mt-3 text-sm text-[#B4C0BA] leading-relaxed max-w-sm">
              <span style={{ color: '#D4AF37' }} className="text-[#D4AF37] text-gold font-serif italic">{business.tagline}</span>. An authentic culinary sanctuary located in Harrow, England.
            </p>
            <div className="mt-6">
              <a
                href={actions.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:underline font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#B4C0BA]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-[#FAF8F5] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="hover:text-[#FAF8F5] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
              Contact
            </h4>
            <div className="space-y-2.5 text-sm text-[#B4C0BA]">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={contact.phoneHref} className="hover:text-[#FAF8F5] transition-colors">
                  {contact.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={contact.emailHref} className="hover:text-[#FAF8F5] transition-colors">
                  {contact.email}
                </a>
              </p>
              <p className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{location.fullAddress}</span>
              </p>
            </div>
          </div>

          {/* Opening Times */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
              Service Hours
            </h4>
            <div className="space-y-1.5 text-xs text-[#B4C0BA]">
              {openingHours.schedule.map((item, i) => (
                <div key={i} className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#FAF8F5]/80">{item.day}</span>
                  <span className="font-mono tabular-nums text-[#D4AF37]">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quiet Minimal Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E8682]">
          <p>{footer.copyrightNotice}</p>
          <p>{footer.legalNote}</p>
        </div>
      </div>
    </footer>
  );
}
