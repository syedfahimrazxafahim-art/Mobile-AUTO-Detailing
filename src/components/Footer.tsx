import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES } from '../data/detailingData';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, Sparkles, ExternalLink, ArrowUpRight, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-white/10 text-zinc-400 text-sm">
      {/* Luxury Pre-Footer Booking Callout */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#0D0D12] via-[#14141A] to-[#0D0D12] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <p className="text-[#D4AF37] font-serif text-sm uppercase tracking-[0.25em] font-semibold">
              Ready for Showroom Gloss at Your Doorstep?
            </p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white font-normal">
              Book Your Premium Mobile Detailing Today
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We service private residences, executive office parking, luxury condominiums, marinas, and hangars across Greater Los Angeles.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-widest font-semibold rounded hover:bg-[#D4AF37] hover:text-black transition-all shadow-[0_0_20px_rgba(212,175,55,0.15)]"
            >
              Get Free Instant Quote
            </button>
            <button
              onClick={() => handleNav('booking')}
              className="px-8 py-3.5 bg-gradient-to-r from-[#FFF1C5] via-[#D4AF37] to-[#B88E18] text-black text-xs uppercase tracking-widest font-bold rounded hover:brightness-110 transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              Schedule Online
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-12 w-auto max-w-[140px] rounded bg-[#08080A] border border-[#D4AF37]/40 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.25)] overflow-hidden">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="Mobile AUTO Detailing Official Logo"
                referrerPolicy="no-referrer"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold tracking-widest text-white uppercase leading-none">
                Mobile AUTO
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-semibold mt-1">
                Detailing Specialists
              </span>
            </div>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            Los Angeles premier mobile automotive detailing, paint correction, and ceramic coating specialists. Bringing professional craftsmanship, deionized spot-free water, and high-gloss perfection right to your driveway or office.
          </p>

          {/* Core Trust Badges */}
          <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-zinc-300 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#D4AF37]" /> Fully Self-Contained Rig
            </span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-zinc-300 flex items-center gap-1">
              <Award className="w-3 h-3 text-[#D4AF37]" /> 100% Satisfaction
            </span>
          </div>

          {/* Social Links */}
          <div className="pt-2">
            <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold mb-2">Connect With Us</p>
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded bg-zinc-900 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/50 text-xs text-zinc-300 hover:text-white transition-all"
              >
                <span>Official Facebook Profile</span>
                <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
              </a>
            </div>
          </div>
        </div>

        {/* Specialized Services Column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Specialized Services
          </h4>
          <ul className="space-y-2.5 text-xs">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60 group-hover:bg-[#D4AF37]" />
                  <span>{s.title}</span>
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNav('services')}
                className="text-[#D4AF37] font-semibold hover:underline flex items-center gap-1 pt-1"
              >
                <span>View All 3 Detailing Packages</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </li>
          </ul>
        </div>

        {/* Fleet & Vehicles Column */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Vehicles Serviced
          </h4>
          <ul className="space-y-2 text-xs">
            {BUSINESS_INFO.vehicleTypes.map((v) => (
              <li key={v} className="flex items-center gap-2 text-zinc-400">
                <Sparkles className="w-2.5 h-2.5 text-[#D4AF37]" />
                <span>{v}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
              Sitemap
            </h4>
            <div className="flex flex-col space-y-1.5 text-xs">
              <button onClick={() => handleNav('home')} className="text-left hover:text-white">Home</button>
              <button onClick={() => handleNav('gallery')} className="text-left hover:text-white">50/50 Gallery</button>
              <button onClick={() => handleNav('service-areas')} className="text-left hover:text-white">Service Areas</button>
              <button onClick={() => handleNav('about')} className="text-left hover:text-white">Our Craftsmanship</button>
              <button onClick={() => handleNav('contact')} className="text-left hover:text-white">Contact & Location</button>
            </div>
          </div>
        </div>

        {/* Contact & Hours Column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Direct Contact & Hours
          </h4>
          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider">Call or Text Anytime</p>
                <a href={BUSINESS_INFO.phoneLink} className="text-white font-bold hover:text-[#D4AF37] transition-colors text-sm">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider">Instant WhatsApp</p>
                <a href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline">
                  Chat (949) 386-3313
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider">Service Hub</p>
                <p className="text-zinc-300">Los Angeles, California</p>
                <p className="text-[11px] text-zinc-500">Serving LA County & Orange County</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider">Operating Schedule</p>
                <p className="text-zinc-300">{BUSINESS_INFO.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 bg-[#050505] py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Mobile AUTO Detailing. All rights reserved. Professional Results At Your Doorstep.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-[#D4AF37]">Los Angeles Mobile Automotive Detailing</span>
            <span>•</span>
            <span>Ceramic Coating & Paint Correction</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
