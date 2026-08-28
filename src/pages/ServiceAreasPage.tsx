import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICE_AREAS, BUSINESS_INFO } from '../data/detailingData';
import { MapPin, Search, CheckCircle2, Sparkles, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServiceAreasPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const ServiceAreasPage: React.FC<ServiceAreasPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAreas = SERVICE_AREAS.filter(area => 
    area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.zipCodes.some(zip => zip.includes(searchQuery))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      {/* Title */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold border border-[#D4AF37]/30">
          <MapPin className="w-3.5 h-3.5" />
          <span>Mobile Coverage Directory</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-white font-normal">
          Los Angeles & Orange County Service Areas
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          We bring our fully self-contained mobile detailing rig directly to your home, office, parking structure, marina, or aviation hangar across Southern California.
        </p>

        {/* ZIP / Area Search Bar */}
        <div className="max-w-md mx-auto pt-4 relative">
          <Search className="w-4 h-4 text-[#D4AF37] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by neighborhood or ZIP code (e.g. 90210, Beverly Hills)..."
            className="w-full bg-[#0D0D12] border border-white/15 rounded-2xl pl-11 pr-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] shadow-lg"
          />
        </div>
      </div>

      {/* Service Areas Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAreas.map((area) => (
          <div
            key={area.id}
            className="luxury-card rounded-3xl p-7 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded bg-[#D4AF37]/15 text-[#D4AF37]">
                  {area.region}
                </span>
                <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Mobile Unit Active
                </span>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-white">{area.name}</h3>
                <p className="text-xs text-zinc-400 mt-1">Covering primary residential and corporate corridors.</p>
              </div>

              {/* Sample Zip Codes */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wider">Served Postal ZIP Codes:</span>
                <div className="flex flex-wrap gap-1.5">
                  {area.zipCodes.map((zip) => (
                    <span key={zip} className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[11px] text-zinc-300 font-mono">
                      {zip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Popular Services in area */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wider">Most Requested:</span>
                <div className="space-y-1">
                  {area.popularServices.map((srv, i) => (
                    <p key={i} className="text-xs text-zinc-300 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                      <span>{srv}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => onNavigate('booking')}
                className="w-full py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#FFF1C5] text-black font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <span>Book Service in this Area</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* On-Site Requirements Logistics Callout */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0D0D12] border border-white/10 space-y-6">
        <div className="max-w-2xl space-y-2">
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Location Requirements</p>
          <h2 className="text-2xl sm:text-3xl font-serif text-white">How Our Mobile Service Operates</h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            We are 100% self-sufficient. You do NOT need to provide outdoor water spigots or electrical outlets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-2">
            <h4 className="text-sm font-serif font-bold text-white">1. Residential Driveways</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We simply require enough clearance to park our detailing van alongside your vehicle.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-2">
            <h4 className="text-sm font-serif font-bold text-white">2. Corporate Office Parking</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Detailing while you work. Quiet inverter generator operation approved in executive office plazas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-2">
            <h4 className="text-sm font-serif font-bold text-white">3. Marinas & Private Hangars</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Fully insured with garage-keepers liability for boats, yachts, and private aircraft detailing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
