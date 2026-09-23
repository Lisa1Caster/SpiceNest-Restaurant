import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

/**
 * Testimonials Component
 * Rendered ONLY if business.testimonials exists and contains real entries.
 * Returns null if none provided, strictly adhering to anti-filler guidelines.
 */
export default function Testimonials() {
  if (!business.testimonials || !Array.isArray(business.testimonials) || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section-padding bg-[#F3EFEA] border-y border-[#0B3D2E]/10">
      <div className="site-container">
        <SectionHeading
          eyebrow="Guest Experiences"
          title="Words from Our Guests"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {business.testimonials.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-[16px] bg-[#FFFFFF] border border-[#0B3D2E]/10 shadow-sm flex flex-col justify-between"
            >
              <p className="font-serif italic text-base md:text-lg text-[#07261D] mb-6 leading-relaxed">
                "{item.quote}"
              </p>
              <div>
                <span className="block font-semibold text-sm text-[#07261D]">{item.author}</span>
                {item.context && (
                  <span className="block text-xs text-[#7E8682] mt-0.5">{item.context}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
