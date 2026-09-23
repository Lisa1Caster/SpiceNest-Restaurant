import React from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { MessageCircle } from 'lucide-react';

export default function About() {
  const { about, actions } = business;

  return (
    <section id="about" className="section-padding bg-[#F3EFEA] border-y border-[#0B3D2E]/10">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with luxury frame and offset border detail */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[16px] overflow-hidden aspect-[4/3] bg-[#072018] shadow-[0_12px_32px_-4px_rgba(11,61,46,0.12)]">
              <img
                src={about.image}
                alt={about.imageAlt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Quiet accent badge */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#0B3D2E] text-[#FAF8F5] p-6 rounded-[12px] shadow-lg border border-[#D4AF37]/30 max-w-xs">
              <p style={{ color: '#D4AF37' }} className="font-serif italic text-sm text-[#D4AF37] text-gold mb-1">
                "Where Flavor Meets Elegance"
              </p>
              <p className="text-xs text-[#B4C0BA]">
                Danes Gate, Harrow · England
              </p>
            </div>
          </div>

          {/* Right Column: Editorial story */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="eyebrow block mb-3 font-sans tracking-[0.14em] text-[0.8rem] font-semibold uppercase text-[#D4AF37]">
              {about.eyebrow}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#07261D] leading-[1.18] tracking-tight text-balance">
              {about.heading}
            </h2>

            <div className="mt-6 space-y-4 text-base md:text-lg text-[#565D59] leading-relaxed">
              <p>{about.paragraphOne}</p>
              <p>{about.paragraphTwo}</p>
            </div>

            {/* Distinctive editorial metadata tags */}
            <div className="mt-8 pt-6 border-t border-[#0B3D2E]/15 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              {about.highlights.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-[#7E8682] font-medium">
                    {item.label}
                  </span>
                  <span className="font-serif text-base text-[#07261D] font-medium mt-1">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                href={actions.primaryCta.href}
                variant="secondary"
                size="md"
                isExternal={actions.primaryCta.isExternal}
                icon={<MessageCircle className="w-4 h-4" />}
              >
                {actions.primaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
