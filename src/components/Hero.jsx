import React from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  const { hero, actions, contact, location } = business;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 md:py-32 overflow-hidden bg-[#072018]">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          loading="eager"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
        />
        {/* Measured dark emerald & charcoal tonal scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#072018] via-[#072018]/70 to-[#072018]/50" />
      </div>

      {/* Hero Content */}
      <div className="site-container relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="font-sans text-xs md:text-sm tracking-[0.16em] uppercase font-semibold text-[#D4AF37]">
            {hero.eyebrow}
          </span>
        </div>

        {/* H1 Headline */}
        <h1
          style={{ color: '#D4AF37' }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#D4AF37] text-gold leading-[1.1] tracking-tight text-balance"
        >
          {hero.headline}
        </h1>

        {/* Supporting Line */}
        <p className="mt-6 text-lg sm:text-xl text-[#FAF8F5]/90 font-light leading-relaxed max-w-2xl text-balance">
          {hero.subheadline}
        </p>

        {/* CTA Buttons Row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Button
            href={actions.primaryCta.href}
            variant="primary"
            size="lg"
            isExternal={actions.primaryCta.isExternal}
            icon={<MessageCircle className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            {actions.primaryCta.label}
          </Button>

          <Button
            href={actions.secondaryCta.href}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            {actions.secondaryCta.label}
          </Button>
        </div>

        {/* Direct Phone link for immediate contact */}
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-[#FAF8F5]/80">
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-medium">{contact.phoneDisplay}</span>
          </a>
          <span className="text-white/30">·</span>
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
          >
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Harrow, HA1 4UG</span>
          </a>
        </div>

        {/* Quiet Trust Line */}
        {hero.trustNote && (
          <div className="mt-12 pt-8 border-t border-white/15 w-full max-w-xl text-center">
            <div className="inline-flex items-center justify-center gap-2 text-xs md:text-sm text-[#FAF8F5]/75 font-normal">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>{hero.trustNote}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
