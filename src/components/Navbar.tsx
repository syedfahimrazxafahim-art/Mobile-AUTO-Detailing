import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/detailingData';
import { Phone, MessageSquare, Menu, X, Sparkles, MapPin, Clock, Calendar, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Packages' },
    { id: 'gallery', label: 'Before & After' },
    { id: 'service-areas', label: 'Service Areas' },
    { id: 'booking', label: 'Online Booking' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Luxury Announcement & Quick Contact Bar */}
      <div className="bg-[#08080A] border-b border-white/10 px-4 sm:px-8 py-2 text-xs text-zinc-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5 text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-semibold tracking-wide uppercase">Mobile Service</span>
            </div>
            <span className="hidden md:inline text-zinc-600">|</span>
            <div className="hidden md:flex items-center gap-1 text-zinc-400">
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              <span>We Come To You — Home, Office, Anywhere in Los Angeles</span>
            </div>
            <span className="hidden lg:inline text-zinc-600">|</span>
            <div className="hidden lg:flex items-center gap-1 text-zinc-400">
              <Clock className="w-3 h-3 text-[#D4AF37]" />
              <span>7 Days a Week: 7:00 AM – 7:00 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 ml-auto">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-[11px] sm:text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
            <span className="text-zinc-700">/</span>
            <a
              href={BUSINESS_INFO.phoneLink}
              className="flex items-center gap-1.5 text-[#D4AF37] hover:text-[#FFF1C5] font-semibold text-[11px] sm:text-xs tracking-wider"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3' 
          : 'bg-[#050505] border-b border-white/10 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            {/* Official Logo Asset */}
            <div className="h-10 sm:h-12 w-auto max-w-[130px] rounded bg-[#08080A] border border-[#D4AF37]/40 p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-transform group-hover:scale-105 overflow-hidden">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="Mobile AUTO Detailing Official Logo"
                referrerPolicy="no-referrer"
                className="h-full w-auto object-contain"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-serif font-bold tracking-wider text-white uppercase group-hover:text-[#D4AF37] transition-colors leading-none">
                  Mobile <span className="text-[#D4AF37]">AUTO</span>
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.28em] text-[#D4AF37] uppercase font-semibold mt-1">
                Detailing Specialists • LA
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-xs uppercase tracking-[0.18em] transition-all font-medium py-1 relative ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 border border-[#D4AF37]/60 text-[#D4AF37] text-xs uppercase tracking-[0.18em] font-semibold rounded hover:bg-[#D4AF37] hover:text-black transition-all shadow-[0_0_12px_rgba(212,175,55,0.15)]"
            >
              Get Free Quote
            </button>
            <button
              onClick={() => handleLinkClick('booking')}
              className="px-5 py-2 bg-gradient-to-r from-[#FFF1C5] via-[#D4AF37] to-[#B88E18] text-black text-xs uppercase tracking-[0.18em] font-bold rounded hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Online</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-wider font-semibold rounded"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[108px] bottom-0 bg-[#08080A]/98 backdrop-blur-xl border-b border-white/10 z-50 overflow-y-auto p-6 flex flex-col justify-between animate-in fade-in duration-200">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold pb-2 border-b border-white/10">
              Navigation Menu
            </p>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center justify-between text-left py-2.5 px-3 rounded-lg text-sm tracking-wider uppercase transition-colors ${
                      isActive
                        ? 'bg-[#D4AF37]/15 text-[#D4AF37] font-bold border border-[#D4AF37]/40'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37] opacity-70" />
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                onOpenQuote();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded border border-[#D4AF37] text-[#D4AF37] text-xs font-bold uppercase tracking-widest text-center"
            >
              Get Instant Quote
            </button>
            <button
              onClick={() => handleLinkClick('booking')}
              className="w-full py-3 rounded bg-gradient-to-r from-[#FFF1C5] via-[#D4AF37] to-[#B88E18] text-black text-xs font-bold uppercase tracking-widest text-center shadow-lg"
            >
              Book Service Online
            </button>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded bg-zinc-900 border border-white/10 text-white text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Directly</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
