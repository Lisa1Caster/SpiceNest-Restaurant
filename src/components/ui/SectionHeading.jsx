import React from 'react';

/**
 * Standard Section Heading with refined typography tokens
 * Eyebrow in gold small-caps, Serif H2 title with text-wrap balance, optional body intro.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  inverted = false,
  className = '',
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <span className="eyebrow block mb-3 font-sans tracking-[0.14em] text-[0.8rem] font-semibold uppercase text-[#D4AF37]">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif font-medium text-balance tracking-tight ${
          inverted ? 'text-[#FAF8F5]' : 'text-[#07261D]'
        } text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.18]`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            inverted ? 'text-[#B4C0BA]' : 'text-[#565D59]'
          } ${centered ? 'mx-auto' : ''} max-w-[65ch]`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
