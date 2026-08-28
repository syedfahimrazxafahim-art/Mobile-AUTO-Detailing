import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/detailingData';
import { Phone, MessageSquare, MapPin, Clock, ExternalLink, Send, CheckCircle2, Sparkles } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Paint Correction');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Mobile AUTO Detailing!\n\n` +
      `Name: ${name || 'Customer'}\n` +
      `Phone: ${phone || 'N/A'}\n` +
      `Vehicle: ${vehicle || 'N/A'}\n` +
      `Service Needed: ${serviceNeeded}\n` +
      `Message: ${message || 'Inquiring about mobile detailing availability in Los Angeles.'}`
    );
    window.open(`https://wa.me/19493863313?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      {/* Title */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold border border-[#D4AF37]/30">
          <Phone className="w-3.5 h-3.5" />
          <span>Direct Los Angeles Dispatch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-white font-normal">
          Contact Mobile AUTO Detailing
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          Call, text, or WhatsApp us anytime for instant quotes, emergency water spot removal, or scheduled mobile appointments throughout Greater Los Angeles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Contact Info & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-[#0D0D12] border border-white/10 space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white">Direct Channels</h2>

            <div className="space-y-5 text-sm">
              {/* Phone / Text */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Call or Text 24/7</p>
                  <a href={BUSINESS_INFO.phoneLink} className="text-lg font-serif font-bold text-white hover:text-[#D4AF37] transition-colors">
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Direct line to lead detailing specialist</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">WhatsApp Instant Booking</p>
                  <a href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-emerald-400 hover:underline">
                    Chat (949) 386-3313
                  </a>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Send photos of vehicle defects for fast assessment</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Service Region</p>
                  <p className="text-white font-bold">{BUSINESS_INFO.location}</p>
                  <p className="text-[11px] text-zinc-400">Mobile service across LA County & Orange County</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Operating Schedule</p>
                  <p className="text-white font-bold">{BUSINESS_INFO.hours}</p>
                  <p className="text-[11px] text-zinc-400">Available 7 days a week, early mornings & weekends</p>
                </div>
              </div>
            </div>

            {/* Social Link */}
            <div className="pt-2 border-t border-white/10">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-[#D4AF37]/15 border border-white/10 hover:border-[#D4AF37]/40 text-xs font-semibold text-zinc-200 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <span>Visit Official Facebook Page</span>
                <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-[#0D0D12] border border-white/10 space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif font-bold text-white">Send Us An Inquiry</h2>
            <p className="text-xs text-zinc-400">
              Have questions about ceramic warranties, heavy water spot acid washes, or corporate fleet bookings? Send us a message below.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-xs text-zinc-300">
                Thank you for contacting Mobile AUTO Detailing. A detailing coordinator will contact you promptly at {phone || 'your phone number'}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 rounded-lg bg-zinc-900 border border-white/10 text-xs text-zinc-300 hover:text-white"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 font-semibold uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Michael Thorne"
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 font-semibold uppercase tracking-wider mb-1">
                    Phone Number (Call / Text) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. (949) 386-3313"
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 font-semibold uppercase tracking-wider mb-1">
                    Vehicle Make, Model & Year
                  </label>
                  <input
                    type="text"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    placeholder="e.g. 2024 BMW X5 (Black)"
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 font-semibold uppercase tracking-wider mb-1">
                    Service of Interest
                  </label>
                  <select
                    value={serviceNeeded}
                    onChange={(e) => setServiceNeeded(e.target.value)}
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Paint Correction">Paint Correction (1-Step / 2-Step)</option>
                    <option value="Ceramic Coating">9H Ceramic Coating Protection</option>
                    <option value="Water Spot Removal">Water Spot & Mineral Dissolve</option>
                    <option value="Headlight Restoration">Headlight Optical Restoration</option>
                    <option value="Full Mobile Package">Full Mobile Executive / Signature Package</option>
                    <option value="Other / Multiple Vehicles">Fleet / Boat / Specialty Vehicle</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 font-semibold uppercase tracking-wider mb-1">
                  Your Message or Location Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your detailing goals, vehicle location in Los Angeles, or any specific defect concerns..."
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#D4AF37] hover:bg-[#FFF1C5] text-black font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
