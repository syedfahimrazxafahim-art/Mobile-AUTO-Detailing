import React, { useState } from 'react';
import { Sparkles, Maximize2, Shield, Eye } from 'lucide-react';

interface BrandImageProps {
  imageKey: 'LOGO' | 'IMG' | 'IMG1' | 'IMG2' | 'IMG3';
  alt: string;
  className?: string;
  aspectRatio?: 'auto' | '16/9' | '4/3' | '1/1' | '9/16' | '3/4';
  priorityBadge?: string;
  interactive?: boolean;
}

export const BrandImage: React.FC<BrandImageProps> = ({
  imageKey,
  alt,
  className = '',
  aspectRatio = 'auto',
  priorityBadge,
  interactive = false
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Asset path mappings
  const imageSources: Record<string, string> = {
    LOGO: 'https://res.cloudinary.com/fzobzdco/image/upload/v1787945116/LOGO.jpg',
    IMG: 'https://res.cloudinary.com/fzobzdco/image/upload/v1787945161/IMG.jpg',
    IMG1: 'https://res.cloudinary.com/fzobzdco/image/upload/v1787945157/IMG1.jpg',
    IMG2: 'https://res.cloudinary.com/fzobzdco/image/upload/v1787945149/IMG2.jpg',
    IMG3: 'https://res.cloudinary.com/fzobzdco/image/upload/v1787945147/IMG3.jpg'
  };

  const src = imageSources[imageKey] || 'https://res.cloudinary.com/fzobzdco/image/upload/v1787945116/LOGO.jpg';

  // Specific fallback illustrations in case direct image file load encounters local sandboxing
  const renderArtisticFallback = () => {
    switch (imageKey) {
      case 'LOGO':
        return (
          <div className="w-full h-full bg-gradient-to-b from-[#111115] via-[#09090C] to-[#050505] p-6 flex flex-col items-center justify-center text-center relative border border-[#D4AF37]/30 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.15),transparent_70%)]" />
            <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(212,175,55,0.3)] bg-black/80">
              <span className="font-serif text-2xl font-bold text-[#D4AF37]">M</span>
            </div>
            <h2 className="text-xl md:text-2xl font-serif font-bold tracking-wider text-white uppercase">
              Mobile <span className="text-[#D4AF37]">AUTO</span> Detailing
            </h2>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] mt-1 font-semibold">
              Professional Results At Your Doorstep
            </p>
            <div className="mt-3 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded text-[11px] text-[#F3D068]">
              We Come To You – Home, Office, Anywhere!
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-[10px] text-zinc-300">
              <span className="bg-black/60 px-2 py-0.5 rounded border border-white/10">Polishing</span>
              <span className="bg-black/60 px-2 py-0.5 rounded border border-white/10">Ceramic Coating</span>
              <span className="bg-black/60 px-2 py-0.5 rounded border border-white/10">Water Spots</span>
              <span className="bg-black/60 px-2 py-0.5 rounded border border-white/10">Scratches</span>
            </div>
          </div>
        );
      case 'IMG2':
        return (
          <div className="w-full h-full min-h-[300px] bg-zinc-950 relative overflow-hidden flex flex-col justify-end p-6 border border-[#D4AF37]/30">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-950 to-blue-950/60" />
            <div className="absolute inset-0 grid grid-cols-2 opacity-90">
              <div className="border-r-2 border-[#D4AF37] p-4 flex flex-col justify-between bg-black/40 relative">
                <span className="text-xs font-mono uppercase bg-red-950/80 text-red-300 px-2 py-1 rounded w-fit border border-red-500/40">BEFORE: Swirl Webbing & Haze</span>
                <div className="w-full h-24 border border-dashed border-red-500/30 rounded flex items-center justify-center text-xs text-zinc-400">
                  Micro-Scratches & Swirls
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between bg-blue-950/20 relative">
                <span className="text-xs font-mono uppercase bg-emerald-950/80 text-emerald-300 px-2 py-1 rounded w-fit border border-emerald-500/40">AFTER: 2-Step Mirror Glass Finish</span>
                <div className="w-full h-24 bg-gradient-to-tr from-cyan-900/20 to-blue-600/30 border border-[#D4AF37]/50 rounded flex items-center justify-center text-xs text-[#D4AF37] font-semibold">
                  100% Swirl-Free Reflection
                </div>
              </div>
            </div>
            <div className="relative z-10 bg-black/85 backdrop-blur px-4 py-2 rounded border border-white/10 flex items-center justify-between">
              <span className="text-xs text-white font-medium">50/50 Inspection Test Panel Demonstration</span>
              <span className="text-xs text-[#D4AF37] font-serif font-bold">Mobile AUTO Detailing</span>
            </div>
          </div>
        );
      case 'IMG':
        return (
          <div className="w-full h-full min-h-[260px] bg-zinc-950 relative overflow-hidden flex flex-col justify-end p-5 border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.25),transparent_70%)]" />
            <div className="relative z-10 flex items-center justify-between bg-black/80 backdrop-blur p-3 rounded border border-white/10">
              <div>
                <p className="text-xs text-[#D4AF37] font-serif uppercase tracking-wider">Restored Optical Lens</p>
                <p className="text-sm font-semibold text-white">Kia Optima Headlight Clarity</p>
              </div>
              <span className="text-[11px] bg-[#D4AF37]/20 text-[#D4AF37] px-2.5 py-1 rounded border border-[#D4AF37]/40 font-medium">
                UV Ceramic Sealed
              </span>
            </div>
          </div>
        );
      case 'IMG1':
        return (
          <div className="w-full h-full min-h-[260px] bg-zinc-950 relative overflow-hidden flex flex-col justify-end p-5 border border-white/10">
            <div className="relative z-10 flex items-center justify-between bg-black/80 backdrop-blur p-3 rounded border border-white/10">
              <div>
                <p className="text-xs text-[#D4AF37] font-serif uppercase tracking-wider">Heavy-Duty Decontamination</p>
                <p className="text-sm font-semibold text-white">Truck Tailgate Hard Water Spot Removal</p>
              </div>
              <span className="text-[11px] bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded border border-amber-500/40 font-medium">
                Acid Dissolve
              </span>
            </div>
          </div>
        );
      case 'IMG3':
        return (
          <div className="w-full h-full min-h-[260px] bg-zinc-950 relative overflow-hidden flex flex-col justify-end p-5 border border-white/10">
            <div className="relative z-10 flex items-center justify-between bg-black/80 backdrop-blur p-3 rounded border border-white/10">
              <div>
                <p className="text-xs text-[#D4AF37] font-serif uppercase tracking-wider">Mobile Precision Polishing</p>
                <p className="text-sm font-semibold text-white">Side Door Mirror Gloss & Scratch Repair</p>
              </div>
              <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/40 font-medium">
                High Reflection
              </span>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div 
        className={`relative overflow-hidden rounded-xl bg-[#0A0A0C] border border-white/10 group ${className}`}
        style={{ aspectRatio: aspectRatio !== 'auto' ? aspectRatio : undefined }}
      >
        {!imgError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          renderArtisticFallback()
        )}

        {priorityBadge && (
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 bg-black/85 backdrop-blur-md rounded-full border border-[#D4AF37]/50 text-[#D4AF37] text-[11px] font-semibold shadow-lg">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>{priorityBadge}</span>
          </div>
        )}

        {interactive && (
          <button
            onClick={() => setModalOpen(true)}
            className="absolute bottom-3 right-3 z-10 w-9 h-9 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37]"
            title="Inspect Full Image"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#111115] border border-[#D4AF37]/40 rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[80vh] flex items-center justify-center overflow-hidden rounded-xl bg-black">
              {!imgError ? (
                <img
                  src={src}
                  alt={alt}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto object-contain rounded-lg"
                />
              ) : (
                renderArtisticFallback()
              )}
            </div>
            <div className="p-4 flex items-center justify-between border-t border-white/10 mt-2">
              <div>
                <h4 className="text-white font-serif font-bold text-base">{alt}</h4>
                <p className="text-xs text-[#D4AF37]">Mobile AUTO Detailing • Los Angeles, CA</p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-1.5 rounded bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#b88e18] transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
