import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeLabel = 'BEFORE: Severe Swirl Marks & Scratches',
  afterLabel = 'AFTER: 2-Step Paint Correction & Mirror Gloss',
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent | TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent | MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const stopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', stopDragging);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', stopDragging);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, stopDragging]);

  return (
    <div className={`relative flex flex-col ${className}`}>
      {/* Top Status Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            Interactive 50/50 Proof
          </span>
        </div>
        <div className="text-xs text-zinc-400 flex items-center gap-1.5">
          <MoveHorizontal className="w-4 h-4 text-[#D4AF37]" />
          <span>Drag the gold slider bar to compare real results</span>
        </div>
      </div>

      {/* Main Image Slider Viewport */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#D4AF37]/40 shadow-2xl bg-black"
      >
        {/* Full Image (Base) */}
        <img
          src={BUSINESS_INFO.img2Url}
          alt="50/50 Paint Correction Before and After on Dark Blue Vehicle Door"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Dynamic Overlay & Annotation on the left (Swirls / Defects) */}
        <div 
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none bg-black/10 backdrop-contrast-125"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/85 backdrop-blur-md border border-red-500/40 text-red-200 text-xs font-semibold shadow-lg">
            <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
            <span className="whitespace-nowrap">{beforeLabel}</span>
          </div>
        </div>

        {/* Dynamic Overlay & Annotation on the right (Flawless Mirror Finish) */}
        <div 
          className="absolute inset-y-0 right-0 overflow-hidden pointer-events-none"
          style={{ width: `${100 - sliderPosition}%` }}
        >
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/85 backdrop-blur-md border border-emerald-500/40 text-emerald-200 text-xs font-semibold shadow-lg">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="whitespace-nowrap">{afterLabel}</span>
          </div>
        </div>

        {/* Draggable Divider Handle Line */}
        <div
          className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Vertical Golden Beam */}
          <div className="w-0.5 h-full bg-gradient-to-b from-[#FFF1C5] via-[#D4AF37] to-[#B88E18] shadow-[0_0_15px_rgba(212,175,55,0.8)]" />

          {/* Golden Handle Center Disc */}
          <div className="absolute w-11 h-11 rounded-full bg-[#0A0A0C] border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.6)] flex items-center justify-center text-[#D4AF37]">
            <MoveHorizontal className="w-5 h-5" />
          </div>
        </div>

        {/* Bottom Technical Tag */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs text-zinc-300">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-semibold text-white">BMW M-Sport Sedan Paint Correction</span>
            <span className="hidden sm:inline text-zinc-500">•</span>
            <span className="hidden sm:inline text-zinc-400">Captured under 2000-Lumen Inspection Light</span>
          </div>
          <span className="text-[#D4AF37] font-mono font-medium">95%+ Defect Removal</span>
        </div>
      </div>

      {/* Preset Quick Jump Buttons */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          onClick={() => setSliderPosition(20)}
          className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
            sliderPosition < 35 
              ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold shadow-[0_0_12px_rgba(212,175,55,0.3)]' 
              : 'bg-zinc-900/80 text-zinc-300 border-white/10 hover:border-[#D4AF37]/50'
          }`}
        >
          View More Before
        </button>
        <button
          onClick={() => setSliderPosition(50)}
          className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
            sliderPosition >= 35 && sliderPosition <= 65 
              ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold shadow-[0_0_12px_rgba(212,175,55,0.3)]' 
              : 'bg-zinc-900/80 text-zinc-300 border-white/10 hover:border-[#D4AF37]/50'
          }`}
        >
          50 / 50 Split
        </button>
        <button
          onClick={() => setSliderPosition(80)}
          className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
            sliderPosition > 65 
              ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold shadow-[0_0_12px_rgba(212,175,55,0.3)]' 
              : 'bg-zinc-900/80 text-zinc-300 border-white/10 hover:border-[#D4AF37]/50'
          }`}
        >
          View More After (Gloss)
        </button>
      </div>
    </div>
  );
};
