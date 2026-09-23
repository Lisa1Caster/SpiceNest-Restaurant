import React, { useState, useEffect } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#072018]/95 backdrop-blur-md shadow-md border-b border-[#D4AF37]/20 py-4'
          : 'bg-[#072018]/85 backdrop-blur-sm border-b border-white/10 py-5'
      }`}
    >
      <div className="site-container flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-[#FAF8F5] hover:text-[#D4AF37] transition-colors"
          aria-label={business.name}
        >
          {business.shortName || business.name}
        </a>

        {/* Zone 2: 4 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#FAF8F5]/85">
          {business.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#D4AF37] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            href={business.actions.primaryCta.href}
            variant="primary"
            size="sm"
            isExternal={business.actions.primaryCta.isExternal}
            icon={<MessageCircle className="w-4 h-4" />}
          >
            {business.actions.primaryCta.label}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#FAF8F5] hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#072018] border-b border-[#D4AF37]/20 px-6 py-8 shadow-2xl transition-all">
          <nav className="flex flex-col gap-5 text-base font-medium text-[#FAF8F5]">
            {business.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="py-2 hover:text-[#D4AF37] border-b border-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button
                href={business.actions.primaryCta.href}
                variant="primary"
                size="md"
                isExternal={business.actions.primaryCta.isExternal}
                onClick={closeMenu}
                icon={<MessageCircle className="w-4 h-4" />}
                className="w-full text-center"
              >
                {business.actions.primaryCta.label}
              </Button>
              <Button
                href={business.actions.secondaryCta.href}
                variant="outline"
                size="md"
                onClick={closeMenu}
                className="w-full text-center"
              >
                {business.actions.secondaryCta.label}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
