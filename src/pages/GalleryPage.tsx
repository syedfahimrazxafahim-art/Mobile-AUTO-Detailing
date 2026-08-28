import React, { useState } from 'react';
import { PageId } from '../types';
import { GALLERY_ITEMS } from '../data/detailingData';
import { BrandImage } from '../components/BrandImage';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Sparkles, Clock, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems = activeFilter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      {/* Page Title */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold border border-[#D4AF37]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real Transformation Evidence</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-white font-normal">
          Before & After Detailing Gallery
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          Examine real transformations performed across Los Angeles. From 50/50 test panel swirl elimination to oxidized headlight restoration and mineral water spot decontamination.
        </p>
      </div>

      {/* Interactive 50/50 Slider Spotlight */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0D0D12] border border-[#D4AF37]/40 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">Featured Transformation</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">50/50 Dark Blue Paint Correction Test Panel</h2>
          </div>
          <span className="text-xs px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-semibold w-fit">
            95% Swirl Elimination
          </span>
        </div>

        <BeforeAfterSlider />
      </div>

      {/* Filter Tabs */}
      <div className="space-y-8">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/10 pb-4">
          {[
            { id: 'all', label: 'All Showcases' },
            { id: 'paint-correction', label: 'Paint Correction' },
            { id: 'headlights', label: 'Headlight Restoration' },
            { id: 'water-spots', label: 'Water Spot Removal' },
            { id: 'scratches', label: 'Scratch Repair' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeFilter === f.id
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)] font-bold'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="luxury-card rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10"
            >
              <div>
                <BrandImage
                  imageKey={item.imageKey}
                  alt={item.title}
                  aspectRatio="16/9"
                  priorityBadge={item.resultsBadge}
                  interactive={true}
                  className="rounded-t-3xl rounded-b-none"
                />

                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="text-[#D4AF37] font-semibold uppercase tracking-wider">{item.vehicle}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">{item.description}</p>

                  <div className="space-y-2 pt-3 border-t border-white/5 text-xs">
                    <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/20 flex items-start gap-2.5">
                      <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-red-300 block">Initial Condition:</span>
                        <span className="text-zinc-400">{item.beforeDesc}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-emerald-300 block">Achieved Result:</span>
                        <span className="text-zinc-400">{item.afterDesc}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                <span className="text-xs text-zinc-400">Treatment: {item.treatment}</span>
                <button
                  onClick={() => onNavigate('booking')}
                  className="px-4 py-2 rounded-lg bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#FFF1C5] transition-colors flex items-center gap-1"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
