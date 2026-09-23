import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import ServiceCard from './ui/ServiceCard.jsx';

export default function Services() {
  const { servicesEyebrow, servicesHeading, servicesIntro, services } = business;

  return (
    <section id="services" className="section-padding bg-[#FAF8F5]">
      <div className="site-container">
        <SectionHeading
          eyebrow={servicesEyebrow}
          title={servicesHeading}
          description={servicesIntro}
          centered={true}
        />

        {/* 3-column elevated cards grid on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
