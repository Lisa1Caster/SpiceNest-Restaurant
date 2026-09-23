import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function WhyChooseUs() {
  const { whyChooseUs } = business;

  return (
    <section id="why-choose-us" className="section-padding bg-[#FAF8F5]">
      <div className="site-container">
        <SectionHeading
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.heading}
          description={whyChooseUs.intro}
          centered={true}
        />

        {/* 4 concise trust points drawn only from provided restaurant truths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.items.map((item) => (
            <div
              key={item.number}
              className="flex flex-col p-8 rounded-[16px] bg-[#FFFFFF] border border-[#0B3D2E]/10 shadow-[0_4px_16px_-2px_rgba(11,61,46,0.06)] hover:shadow-[0_12px_32px_-4px_rgba(11,61,46,0.12)] transition-all duration-200"
            >
              {/* Refined editorial number */}
              <span className="font-serif text-3xl md:text-4xl text-[#D4AF37] font-normal mb-4">
                {item.number}
              </span>

              <h3 className="font-serif text-xl font-medium text-[#07261D] mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-sm md:text-base text-[#565D59] leading-relaxed mt-auto pt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
