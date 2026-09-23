import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Service Card for elevated culinary presentations
 * Fixed aspect-ratio image container with zoom, clean unboxed metadata,
 * H3 serif title, one-line description, and explicit action link.
 */
export default function ServiceCard({ service }) {
  const { title, category, description, details, image, imageAlt, ctaText, ctaHref } = service;
  const isExternal = ctaHref.startsWith('http');

  return (
    <div className="group flex flex-col h-full bg-[#FFFFFF] rounded-[16px] overflow-hidden border border-[#0B3D2E]/10 shadow-[0_4px_16px_-2px_rgba(11,61,46,0.06)] hover:shadow-[0_12px_32px_-4px_rgba(11,61,46,0.12)] transition-all duration-300">
      {/* Top Image Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3EFEA]">
        <img
          src={image}
          alt={imageAlt || title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Subtle gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        {/* Unboxed clean metadata kicker */}
        {category && (
          <span className="absolute bottom-3 left-4 text-xs tracking-wider uppercase font-medium text-white/90 drop-shadow-sm">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 md:p-8">
        <h3 className="font-serif text-xl md:text-2xl text-[#07261D] group-hover:text-[#0B3D2E] transition-colors">
          {title}
        </h3>

        <p className="mt-3 text-sm md:text-base text-[#565D59] leading-relaxed">
          {description}
        </p>

        {details && (
          <p className="mt-2 text-xs md:text-sm text-[#7E8682] border-t border-black/5 pt-3 leading-normal">
            {details}
          </p>
        )}

        <div className="mt-auto pt-6">
          <a
            href={ctaHref}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B3D2E] group-hover:text-[#D4AF37] transition-colors"
          >
            <span>{ctaText}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
