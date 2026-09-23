import React, { useState } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const { faq } = business;
  const [openIndex, setOpenIndex] = useState(0);

  if (!faq || !faq.items || faq.items.length === 0) {
    return null;
  }

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section-padding bg-[#FAF8F5] border-t border-[#0B3D2E]/10">
      <div className="site-container max-w-3xl">
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.heading}
          centered={true}
        />

        <div className="divide-y divide-[#0B3D2E]/10 border-y border-[#0B3D2E]/10">
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-serif text-lg md:text-xl font-medium text-[#07261D] hover:text-[#0B3D2E] transition-colors focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-3 pr-6 text-base text-[#565D59] leading-relaxed transition-all">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
