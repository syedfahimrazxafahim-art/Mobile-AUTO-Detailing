import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES, PACKAGES, BUSINESS_INFO } from '../data/detailingData';
import { BrandImage } from '../components/BrandImage';
import { Sparkles, CheckCircle2, Clock, DollarSign, ArrowRight, ShieldCheck, Wrench, Droplets, Sun, Crosshair, Phone } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [selectedVehicleType, setSelectedVehicleType] = useState<'sedan' | 'suv' | 'truck'>('sedan');

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Droplets': return <Droplets className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'Sun': return <Sun className="w-6 h-6" />;
      case 'Crosshair': return <Crosshair className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-20">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold border border-[#D4AF37]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Full Menu & Tiered Pricing</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-white font-normal">
          Specialized Detailing & Packages
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          From targeted scratch leveling to complete multi-year ceramic armor, explore our comprehensive range of on-site automotive treatments for Greater Los Angeles.
        </p>
      </div>

      {/* 1. THREE COMPREHENSIVE DETAILING PACKAGES */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Tiered All-In-One Packages</p>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">Full Mobile Detailing Packages</h2>
          </div>

          {/* Vehicle Selector Tabs */}
          <div className="flex items-center p-1 bg-zinc-900 rounded-xl border border-white/10">
            {[
              { id: 'sedan', label: 'Coupe / Sedan' },
              { id: 'suv', label: 'Mid-Size SUV' },
              { id: 'truck', label: 'Truck / Large SUV' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedVehicleType(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedVehicleType === tab.id
                    ? 'bg-[#D4AF37] text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => {
            const price = pkg.prices[selectedVehicleType];
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-7 flex flex-col justify-between space-y-6 relative ${
                  pkg.popular
                    ? 'bg-[#111116] border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.2)]'
                    : 'bg-[#0A0A0D] border border-white/10'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif font-bold text-white">{pkg.name}</h3>
                    {pkg.popular && (
                      <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded bg-[#D4AF37] text-black">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400">{pkg.tagline}</p>

                  <div className="p-4 rounded-xl bg-black/60 border border-white/5 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase">Selected Vehicle Price</span>
                      <p className="text-2xl font-serif font-bold text-[#D4AF37]">${price}</p>
                    </div>
                    <div className="text-right text-xs text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider">Features Included:</p>
                    <ul className="space-y-2 text-xs text-zinc-300">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <button
                    onClick={() => onNavigate('booking')}
                    className="w-full py-3 bg-[#D4AF37] hover:bg-[#FFF1C5] text-black font-bold uppercase tracking-wider text-xs rounded-xl transition-all shadow-md"
                  >
                    Select This Package
                  </button>
                  <p className="text-[10px] text-center text-zinc-500">Includes complete on-site mobile service</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. SPECIALIZED A LA CARTE TREATMENTS */}
      <div className="space-y-10 pt-8">
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Specialized Corrections</p>
          <h2 className="text-3xl font-serif text-white">Targeted Detailing & Restoration Services</h2>
        </div>

        <div className="space-y-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#0D0D12] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">
                      Service {index + 1} of {SERVICES.length}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-zinc-300">
                  <span className="text-[#D4AF37] font-semibold">Recommended for: </span>
                  {service.recommendedFor}
                </div>

                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-white uppercase tracking-wider">Multi-Step Process:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
                    {service.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-zinc-800 text-[#D4AF37] flex items-center justify-center text-[10px] font-bold">
                          {i + 1}
                        </span>
                        <span className="line-clamp-1">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-4 flex flex-col justify-between h-full">
                {service.imageKey && (
                  <div className="overflow-hidden rounded-xl border border-white/10">
                    <BrandImage
                      imageKey={service.imageKey}
                      alt={`${service.title} Result Example`}
                      aspectRatio="16/9"
                      interactive={true}
                      priorityBadge={service.badge || "Verified Result"}
                    />
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs text-zinc-400 uppercase">Estimated Starting Cost</span>
                    <span className="text-2xl font-serif font-bold text-[#D4AF37]">${service.startingPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span>Average Service Duration</span>
                    <span className="text-white font-medium">{service.duration}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => onNavigate('booking')}
                    className="w-full py-3 rounded-xl bg-[#D4AF37] hover:bg-[#FFF1C5] text-black font-bold uppercase tracking-wider text-xs transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenQuote}
                    className="w-full py-2.5 rounded-xl border border-white/10 hover:border-[#D4AF37] text-zinc-300 hover:text-white text-xs font-medium uppercase tracking-wider transition-all"
                  >
                    Add to Custom Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
