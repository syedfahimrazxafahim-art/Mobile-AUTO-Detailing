import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/detailingData';
import { BrandImage } from '../components/BrandImage';
import { Sparkles, ShieldCheck, Award, CheckCircle2, Clock, Wrench, HeartHandshake, Phone, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-20">
      {/* Title */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold border border-[#D4AF37]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Craft & Standards</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-white font-normal">
          Excellence In Mobile Automotive Care
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          Founded on uncompromised passion for automotive aesthetics, Mobile AUTO Detailing delivers artisanal paint correction and long-lasting ceramic protection across Los Angeles.
        </p>
      </div>

      {/* Main Story & Brand Poster Integration */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">The Mobile AUTO Detailing Standard</p>
          <h2 className="text-3xl font-serif text-white leading-snug">
            Why We Refuse Commercial Car Wash Shortcuts
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Automated tunnel car washes and rapid hand-wash stations inflict thousands of microscopic swirl scratches into your clear coat on every visit. They use harsh recycled high-alkaline soaps and contaminated brushes that dull your vehicle’s factory finish.
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            We treat every car, truck, RV, and marine craft as an optical canvas. By utilizing filtered deionized 0-PPM spot-free water, single-use ultra-plush microfibers, and precision dual-action polishers, we safely level imperfections and lock in glass-hard ceramic coatings.
          </p>

          <div className="pt-2 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-950 border border-white/10">
              <span className="text-xl font-serif font-bold text-[#D4AF37] block">0 PPM</span>
              <span className="text-[11px] text-zinc-400">Deionized Spot-Free Water</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-white/10">
              <span className="text-xl font-serif font-bold text-[#D4AF37]">9H / Graphene</span>
              <span className="text-[11px] text-zinc-400">Pro Nano-Ceramic Armor</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl p-1 bg-black">
            <BrandImage
              imageKey="LOGO"
              alt="Mobile AUTO Detailing Brand Mission & Official Poster"
              interactive={true}
              priorityBadge="Artisanal Mobile Lab"
            />
          </div>
        </div>
      </div>

      {/* 4 Core Pillars */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Our 4 Core Pillars</p>
          <h2 className="text-3xl font-serif text-white">The Quality Promise</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_INFO.corePillars.map((pillar, idx) => (
            <div key={idx} className="luxury-card rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-white">{pillar.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* In The Field Visual Evidence Gallery */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Field Craftsmanship</p>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">Real Transformations Across Southern California</h2>
          </div>
          <button
            onClick={() => onNavigate('gallery')}
            className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold hover:text-[#FFF1C5] flex items-center gap-1.5"
          >
            <span>Explore Before & After Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="luxury-card rounded-2xl overflow-hidden group">
            <BrandImage
              imageKey="IMG2"
              alt="50/50 Paint Correction Test Panel"
              aspectRatio="4/3"
              interactive={true}
              priorityBadge="Paint Correction"
            />
            <div className="p-4">
              <p className="text-xs font-serif font-bold text-white">50/50 Swirl Elimination</p>
              <p className="text-[11px] text-zinc-400">Rotary compound & jeweling polish</p>
            </div>
          </div>

          <div className="luxury-card rounded-2xl overflow-hidden group">
            <BrandImage
              imageKey="IMG"
              alt="Kia Optima Headlight Restoration"
              aspectRatio="4/3"
              interactive={true}
              priorityBadge="Headlight Clarity"
            />
            <div className="p-4">
              <p className="text-xs font-serif font-bold text-white">Headlight Optical Renewal</p>
              <p className="text-[11px] text-zinc-400">4-Stage wet sanding + UV barrier</p>
            </div>
          </div>

          <div className="luxury-card rounded-2xl overflow-hidden group">
            <BrandImage
              imageKey="IMG1"
              alt="Truck Tailgate Water Spot Removal"
              aspectRatio="4/3"
              interactive={true}
              priorityBadge="Decontamination"
            />
            <div className="p-4">
              <p className="text-xs font-serif font-bold text-white">Water Spot Mineral Dissolve</p>
              <p className="text-[11px] text-zinc-400">Acid decontam on black truck paint</p>
            </div>
          </div>

          <div className="luxury-card rounded-2xl overflow-hidden group">
            <BrandImage
              imageKey="IMG3"
              alt="Door Panel Scratch Repair & Mirror Gloss"
              aspectRatio="4/3"
              interactive={true}
              priorityBadge="Scratch Repair"
            />
            <div className="p-4">
              <p className="text-xs font-serif font-bold text-white">Mirror Reflection Finish</p>
              <p className="text-[11px] text-zinc-400">Deep gloss scratch eradication</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailer Commitment Call to Action */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0D0D12] via-[#16161F] to-[#0D0D12] border border-[#D4AF37]/40 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-serif text-white">Experience Detailing Perfection In Your Driveway</h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
          Contact our team directly at (949) 386-3313 or book online to secure your preferred mobile detailing window.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('booking')}
            className="px-8 py-3.5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-[#FFF1C5] transition-all shadow-lg"
          >
            Book Appointment
          </button>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3.5 border border-white/20 text-white font-semibold uppercase tracking-widest text-xs rounded-xl hover:border-[#D4AF37] transition-all"
          >
            Calculate Quote
          </button>
        </div>
      </div>
    </div>
  );
};
