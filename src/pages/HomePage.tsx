import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES, PACKAGES, TESTIMONIALS, FAQS, GALLERY_ITEMS } from '../data/detailingData';
import { BrandImage } from '../components/BrandImage';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { 
  Sparkles, 
  Phone, 
  MessageSquare, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Clock, 
  CheckCircle2, 
  Car, 
  Truck, 
  Sailboat, 
  Plane, 
  Star, 
  ChevronDown, 
  MapPin, 
  Check 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeVehicle, setActiveVehicle] = useState<string>('Cars');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const vehicleIcons: Record<string, React.ReactNode> = {
    Cars: <Car className="w-5 h-5" />,
    SUVs: <Car className="w-5 h-5" />,
    Trucks: <Truck className="w-5 h-5" />,
    RVs: <Truck className="w-5 h-5" />,
    Boats: <Sailboat className="w-5 h-5" />,
    Planes: <Plane className="w-5 h-5" />
  };

  return (
    <div className="space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-8 overflow-hidden bg-gradient-to-b from-[#050505] via-[#0A0A0E] to-[#050505]">
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.05),transparent_40%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Headline & High-Conversion Copy */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141418] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>Premium Mobile Service • Los Angeles, CA</span>
            </div>

            {/* Main Luxury Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif text-white font-light leading-[1.12]">
                Professional Results <br />
                <span className="gold-gradient-text font-normal">At Your Doorstep</span>
              </h1>
              <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We bring museum-grade paint correction, multi-year ceramic coating, and bespoke detailing directly to your home, office, or hangar. 100% self-contained with deionized spot-free water.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('booking')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FFF1C5] via-[#D4AF37] to-[#B88E18] text-black font-bold uppercase tracking-widest text-xs rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>

              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-7 py-4 border border-[#D4AF37]/60 text-[#D4AF37] font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-[#D4AF37] hover:text-black transition-all flex items-center justify-center gap-2 bg-black/40 backdrop-blur"
              >
                <Sparkles className="w-4 h-4" />
                <span>Instant Quote Calculator</span>
              </button>
            </div>

            {/* Quick Contact & Direct Call Strip */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400 border-t border-white/10">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="flex items-center gap-2 text-white hover:text-[#D4AF37] font-semibold transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Call/Text: {BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span>WhatsApp Instant Dispatch</span>
              </a>
            </div>

            {/* Key Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2 max-w-md mx-auto lg:mx-0 text-center">
              <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/5">
                <span className="block text-2xl font-serif font-bold text-[#D4AF37]">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400">Mobile Self-Contained</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/5">
                <span className="block text-2xl font-serif font-bold text-[#D4AF37]">95%+</span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400">Swirl Defect Removal</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/5">
                <span className="block text-2xl font-serif font-bold text-[#D4AF37]">7 Days</span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400">7am - 7pm Service</span>
              </div>
            </div>
          </div>

          {/* Right Column: Official Brand Asset & Poster Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md relative">
              {/* Golden Ambient Aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#D4AF37]/40 via-[#FFF1C5]/20 to-[#B88E18]/40 rounded-2xl blur-xl opacity-60 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl bg-black p-1">
                <BrandImage
                  imageKey="LOGO"
                  alt="Mobile AUTO Detailing Official Brand Poster & Services Reference"
                  className="w-full h-auto object-cover rounded-xl"
                  interactive={true}
                  priorityBadge="Official Brand Identity"
                />
              </div>

              {/* Bottom Quick Feature Floating Tag */}
              <div className="mt-3 bg-[#0F0F14]/90 backdrop-blur border border-white/10 p-3 rounded-xl flex items-center justify-between text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Licensed, Insured & Ceramic Certified</span>
                </div>
                <span className="text-[#D4AF37] font-semibold">Greater Los Angeles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VEHICLE CATEGORIES SELECTOR BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-6 rounded-2xl bg-[#0B0B0E] border border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Specialized Vehicle Capabilities</p>
              <h2 className="text-xl sm:text-2xl font-serif text-white">We Service All Vehicle Classes</h2>
            </div>
            <p className="text-xs text-zinc-400 max-w-md">
              From daily sedans and exotic supercars to heavy-duty lifted trucks, marine crafts, and aircraft.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {BUSINESS_INFO.vehicleTypes.map((type) => {
              const active = activeVehicle === type;
              return (
                <button
                  key={type}
                  onClick={() => setActiveVehicle(type)}
                  className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2.5 transition-all text-center ${
                    active
                      ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                      : 'bg-zinc-950/60 border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className={`p-2.5 rounded-full ${active ? 'bg-[#D4AF37] text-black' : 'bg-zinc-900 text-[#D4AF37]'}`}>
                    {vehicleIcons[type] || <Car className="w-5 h-5" />}
                  </div>
                  <span className="font-semibold text-xs tracking-wider uppercase">{type}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE DETAILING SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Precision Automotive Craftsmanship
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-white">
            Specialized Detailing Services
          </h2>
          <p className="text-sm text-zinc-400">
            Engineered treatments designed to restore factory paint depth, eliminate stubborn defects, and seal in multi-year protective armor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="luxury-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  {service.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <p className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider">Key Benefits:</p>
                  <ul className="space-y-1.5 text-xs text-zinc-400">
                    {service.benefits.slice(0, 3).map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase">Starting From</span>
                  <p className="text-xl font-serif font-bold text-[#D4AF37]">${service.startingPrice}</p>
                </div>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/10 text-xs font-semibold text-zinc-200 group-hover:border-[#D4AF37] group-hover:text-white transition-all flex items-center gap-1.5"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE 50/50 PAINT CORRECTION SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0D0D12] via-[#08080B] to-[#0D0D12] border border-[#D4AF37]/40 shadow-2xl space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D4AF37]/10 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold border border-[#D4AF37]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Real Vehicle Transformation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white leading-tight">
                See the 50/50 Swirl Elimination Difference
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Swirl marks, automatic car wash scratches, and oxidation scatter light and make even black luxury cars appear dull and grey. Our multi-stage paint correction levels the clear coat to unlock uncompromised, liquid-glass reflection.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-red-950/80 border border-red-500/50 flex items-center justify-center text-red-300 font-bold text-[10px]">
                    L
                  </div>
                  <span>Left Panel: Spider webbing, clear coat haze & deep wash scratches.</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-300 font-bold text-[10px]">
                    R
                  </div>
                  <span>Right Panel: 2-Step compounded & jeweled mirror finish.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('booking')}
                  className="px-6 py-3 bg-[#D4AF37] hover:bg-[#b88e18] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg"
                >
                  Book Paint Correction
                </button>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="px-5 py-3 border border-white/20 text-white hover:border-[#D4AF37] font-semibold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  View Full Gallery
                </button>
              </div>
            </div>

            {/* Right: Interactive 50/50 Slider */}
            <div className="lg:col-span-7">
              <BeforeAfterSlider />
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED REAL RESULTS GALLERY SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Verified Detailing Transformations
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Real Work Across Los Angeles
            </h2>
          </div>

          <button
            onClick={() => onNavigate('gallery')}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold hover:text-[#FFF1C5] transition-colors"
          >
            <span>View All Gallery Showcases</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="luxury-card rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <BrandImage
                  imageKey={item.imageKey}
                  alt={item.title}
                  aspectRatio="4/3"
                  priorityBadge={item.resultsBadge}
                  interactive={true}
                />
                <div className="p-5 space-y-2">
                  <p className="text-[11px] text-[#D4AF37] uppercase tracking-wider font-semibold">
                    {item.vehicle}
                  </p>
                  <h3 className="text-base font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span>Duration: {item.duration}</span>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="text-[#D4AF37] hover:underline font-medium"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. DETAILING PACKAGES COMPARISON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Transparent Tiered Packages
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-white">
            Choose Your Detailing Level
          </h2>
          <p className="text-sm text-zinc-400">
            Every package is carried out on-site using deionized spot-free water, premium pH-neutral chemicals, and ultra-plush microfiber towels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between space-y-8 relative ${
                pkg.popular
                  ? 'bg-[#101016] border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.2)]'
                  : 'bg-[#0A0A0E] border border-white/10'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4AF37] text-black font-bold uppercase text-[10px] tracking-widest rounded-full shadow-lg">
                  Most Requested In Los Angeles
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-white">{pkg.name}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{pkg.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-black/60 border border-white/5 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-zinc-400 uppercase">Coupe / Sedan</span>
                    <span className="text-2xl font-serif font-bold text-[#D4AF37]">${pkg.prices.sedan}</span>
                  </div>
                  <div className="flex items-baseline justify-between text-xs text-zinc-400">
                    <span>Mid-Size SUV / Crossover</span>
                    <span className="font-semibold text-zinc-200">${pkg.prices.suv}</span>
                  </div>
                  <div className="flex items-baseline justify-between text-xs text-zinc-400">
                    <span>Full-Size Truck / 3-Row SUV</span>
                    <span className="font-semibold text-zinc-200">${pkg.prices.truck}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">Included In Package:</p>
                  <ul className="space-y-2.5 text-xs text-zinc-300">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => onNavigate('booking')}
                  className={`w-full py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs transition-all ${
                    pkg.popular
                      ? 'bg-[#D4AF37] text-black hover:bg-[#FFF1C5] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                      : 'bg-zinc-900 text-white hover:bg-white hover:text-black border border-white/10'
                  }`}
                >
                  Select & Book Package
                </button>
                <p className="text-[10px] text-center text-zinc-500">Estimated Duration: {pkg.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. THE MOBILE ADVANTAGE (WHY CHOOSE US) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0D0D11] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              The Mobile Advantage
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Why Los Angeles Chooses Mobile AUTO Detailing
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Skip the inconvenience of driving to a shop, waiting in waiting rooms, or arranging rides. We bring a fully equipped, self-powered detailing studio directly to your driveway or workspace.
            </p>

            <div className="space-y-4 pt-2">
              {[
                { title: '100% Self-Contained Rig', desc: 'Own power generator & 100-gallon deionized spot-free water tank.' },
                { title: 'Artisanal Multi-Stage Polishing', desc: 'Dual-action machines with zero risk of burn-through or clear coat damage.' },
                { title: 'Real Time WhatsApp Communication', desc: 'Direct updates, arrival ETAs, and photo progress sent to your phone.' },
                { title: 'Zero Compromise On Location', desc: 'Same flawless result achieved in residential driveways or corporate garages.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
              <h4 className="text-base font-serif font-bold text-white">Licensed & Insured</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Complete multi-million dollar garage-keepers & general liability coverage for exotics, luxury, and daily vehicles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
              <Award className="w-8 h-8 text-[#D4AF37]" />
              <h4 className="text-base font-serif font-bold text-white">Ceramic Certified</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Trained in high-grade 9H and graphene nano-coatings with infrared heat curing techniques.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
              <MapPin className="w-8 h-8 text-[#D4AF37]" />
              <h4 className="text-base font-serif font-bold text-white">Full LA County Coverage</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Serving Downtown LA, Beverly Hills, Santa Monica, Pasadena, Glendale, Irvine, and coastal cities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
              <Clock className="w-8 h-8 text-[#D4AF37]" />
              <h4 className="text-base font-serif font-bold text-white">7 Days A Week</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Flexible early morning and weekend time slots from 7:00 AM to 7:00 PM to fit your busy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Client Satisfaction
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-white">
            What Vehicle Owners Say
          </h2>
          <div className="flex items-center justify-center gap-1 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="text-xs font-bold text-white ml-2">5.0 Star Rating Across LA</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="luxury-card rounded-2xl p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-1">
                <p className="text-xs font-bold text-white">{t.name}</p>
                <p className="text-[10px] text-[#D4AF37]">{t.vehicle} • {t.location}</p>
                <p className="text-[10px] text-zinc-500">{t.service}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Common Questions</p>
          <h2 className="text-2xl sm:text-3xl font-serif text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#0D0D11] border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-white hover:text-[#D4AF37] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
