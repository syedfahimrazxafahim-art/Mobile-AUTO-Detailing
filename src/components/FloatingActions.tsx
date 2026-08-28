import React from 'react';
import { BUSINESS_INFO } from '../data/detailingData';
import { MessageSquare, Phone, Calculator } from 'lucide-react';

interface FloatingActionsProps {
  onOpenQuote: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenQuote }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Quick Calculator Floating Button */}
      <button
        onClick={onOpenQuote}
        className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#121216]/90 backdrop-blur-md border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-black transition-all shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
      >
        <Calculator className="w-3.5 h-3.5" />
        <span>Instant Quote</span>
      </button>

      <div className="flex items-center gap-2">
        {/* Direct Call Button */}
        <a
          href={BUSINESS_INFO.phoneLink}
          className="w-12 h-12 rounded-full bg-[#0A0A0C] border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 hover:bg-[#D4AF37] hover:text-black transition-all"
          title={`Call or text ${BUSINESS_INFO.phoneFormatted}`}
          aria-label="Call Mobile AUTO Detailing"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Pulse Floating Button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 transition-all group"
          title="Direct WhatsApp Chat"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 pointer-events-none" />
          <MessageSquare className="w-6 h-6 fill-current text-white" />
          <span className="sr-only">WhatsApp Chat</span>
        </a>
      </div>
    </div>
  );
};
