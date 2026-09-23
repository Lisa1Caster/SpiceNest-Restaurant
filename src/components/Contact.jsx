import React, { useState } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { Phone, MessageCircle, Mail, MapPin, Clock, CheckCircle2, Navigation } from 'lucide-react';

export default function Contact() {
  const { contactSection, contact, location, openingHours, actions } = business;

  const [formState, setFormState] = useState({
    name: '',
    emailOrPhone: '',
    date: '',
    guests: '2',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.emailOrPhone.trim()) {
      setErrorMsg('Please enter your name and contact phone or email.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-[#072018] text-[#FAF8F5]">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow block mb-3 font-sans tracking-[0.14em] text-[0.8rem] font-semibold uppercase text-[#D4AF37]">
            {contactSection.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#FAF8F5] leading-[1.18] tracking-tight">
            {contactSection.heading}
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#B4C0BA] max-w-2xl mx-auto">
            {contactSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Actions, Hours, and Location */}
          <div className="lg:col-span-6 space-y-8">
            {/* Quick Contact Action Bar */}
            <div className="p-8 rounded-[16px] bg-[#0B2B21] border border-[#D4AF37]/25 shadow-md">
              <h3 className="font-serif text-xl font-medium text-[#FAF8F5] mb-6">
                Direct Reservations & Enquiries
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  href={actions.primaryCta.href}
                  variant="primary"
                  size="md"
                  isExternal={true}
                  icon={<MessageCircle className="w-5 h-5" />}
                  className="w-full justify-center"
                >
                  {actions.primaryCta.label}
                </Button>

                <Button
                  href={contact.phoneHref}
                  variant="outline"
                  size="md"
                  icon={<Phone className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  Call {contact.phoneDisplay}
                </Button>
              </div>

              <div className="space-y-4 text-sm text-[#B4C0BA] pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-[#FAF8F5]">Phone Reservations</span>
                    <a href={contact.phoneHref} className="hover:text-[#D4AF37] transition-colors">
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-[#FAF8F5]">Email Enquiries</span>
                    <a href={contact.emailHref} className="hover:text-[#D4AF37] transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-[#FAF8F5]">Address</span>
                    <p>{location.fullAddress}</p>
                    <a
                      href={location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline mt-1 font-medium"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>{location.directionsLabel} (Google Maps)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Opening Hours */}
            <div className="p-8 rounded-[16px] bg-[#0B2B21]/60 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-serif text-lg font-medium text-[#FAF8F5]">
                  {openingHours.heading}
                </h3>
              </div>

              <div className="divide-y divide-white/10 text-sm">
                {openingHours.schedule.map((slot, index) => (
                  <div key={index} className="py-3 flex justify-between items-center">
                    <div>
                      <span className="font-medium text-[#FAF8F5]">{slot.day}</span>
                      <span className="block text-xs text-[#B4C0BA]">{slot.note}</span>
                    </div>
                    <span className="font-mono tabular-nums text-[#D4AF37] font-medium">
                      {slot.hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 pt-3 border-t border-white/10 text-xs text-[#B4C0BA]">
                {openingHours.lastSeating}
              </p>
            </div>
          </div>

          {/* Right Column: Usable Frontend Reservation Form */}
          <div className="lg:col-span-6 bg-[#0B2B21] p-8 md:p-10 rounded-[16px] border border-[#D4AF37]/20 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#FAF8F5] mb-2">
                  Enquiry Received
                </h3>
                <p className="text-[#B4C0BA] max-w-md mx-auto text-sm md:text-base leading-relaxed mb-6">
                  Thank you, <span className="text-[#FAF8F5] font-semibold">{formState.name}</span>. We have noted your request for {formState.guests} guest{formState.guests !== '1' ? 's' : ''} and our reservations team will confirm with you shortly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    href={actions.primaryCta.href}
                    variant="primary"
                    size="sm"
                    isExternal={true}
                    icon={<MessageCircle className="w-4 h-4" />}
                  >
                    Send Instant WhatsApp Note
                  </Button>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', emailOrPhone: '', date: '', guests: '2', notes: '' });
                    }}
                    variant="outline"
                    size="sm"
                  >
                    Submit Another Request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#FAF8F5]">
                    {contactSection.formTitle}
                  </h3>
                  <p className="text-xs md:text-sm text-[#B4C0BA] mt-1">
                    {contactSection.formDescription}
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-950/60 border border-red-500/40 text-red-200 text-xs rounded-[8px]">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-3 bg-[#072018] border border-white/15 rounded-[8px] text-white text-base placeholder-white/40 focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="emailOrPhone" className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Phone Number or Email *
                  </label>
                  <input
                    type="text"
                    id="emailOrPhone"
                    name="emailOrPhone"
                    required
                    value={formState.emailOrPhone}
                    onChange={handleChange}
                    placeholder="e.g. 07498 579857 or guest@example.com"
                    className="w-full px-4 py-3 bg-[#072018] border border-white/15 rounded-[8px] text-white text-base placeholder-white/40 focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                      Preferred Date & Time
                    </label>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      value={formState.date}
                      onChange={handleChange}
                      placeholder="e.g. Friday 7:30 PM"
                      className="w-full px-4 py-3 bg-[#072018] border border-white/15 rounded-[8px] text-white text-base placeholder-white/40 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formState.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#072018] border border-white/15 rounded-[8px] text-white text-base focus:border-[#D4AF37] focus:outline-none transition-colors"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5-8">5 to 8 Guests</option>
                      <option value="Private Hire (8+)">Private Dining (8+ Guests)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Special Requests or Dietary Requirements
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="3"
                    value={formState.notes}
                    onChange={handleChange}
                    placeholder="Occasion, seating preference, dietary allergies..."
                    className="w-full px-4 py-3 bg-[#072018] border border-white/15 rounded-[8px] text-white text-base placeholder-white/40 focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Submit Reservation Enquiry
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
