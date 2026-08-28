import React, { useState } from 'react';
import { BUSINESS_INFO, SERVICES, PACKAGES } from '../data/detailingData';
import { X, Calculator, Sparkles, Check, MessageSquare, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToBooking: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, onNavigateToBooking }) => {
  const [vehicleType, setVehicleType] = useState<'sedan' | 'suv' | 'truck' | 'specialty'>('sedan');
  const [selectedPackage, setSelectedPackage] = useState<string>('signature-enhancement');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['headlights']);
  const [zipCode, setZipCode] = useState<string>('90210');
  const [customerName, setCustomerName] = useState<string>('');

  if (!isOpen) return null;

  // Pricing calculation
  const getBasePackagePrice = () => {
    const pkg = PACKAGES.find(p => p.id === selectedPackage);
    if (!pkg) return 0;
    if (vehicleType === 'sedan') return pkg.prices.sedan;
    if (vehicleType === 'suv') return pkg.prices.suv;
    if (vehicleType === 'truck') return pkg.prices.truck;
    return 350; // Specialty base estimate
  };

  const addonPrices: Record<string, { name: string; price: number }> = {
    headlights: { name: 'Headlight Optical Restoration', price: 99 },
    waterspot: { name: 'Water Spot & Mineral Dissolve', price: 149 },
    scratches: { name: 'Spot Scratch Removal & Wet Sand', price: 129 },
    rockchip: { name: 'OEM Rock Chip Touch-Up Fill', price: 139 },
    ceramicGlass: { name: 'Ceramic Glass Rain Shield', price: 79 }
  };

  const getAddonsTotal = () => {
    return selectedAddons.reduce((sum, key) => sum + (addonPrices[key]?.price || 0), 0);
  };

  const totalEstimate = getBasePackagePrice() + getAddonsTotal();

  const toggleAddon = (key: string) => {
    if (selectedAddons.includes(key)) {
      setSelectedAddons(selectedAddons.filter(k => k !== key));
    } else {
      setSelectedAddons([...selectedAddons, key]);
    }
  };

  const handleWhatsAppBooking = () => {
    const pkgName = PACKAGES.find(p => p.id === selectedPackage)?.name || selectedPackage;
    const addonsList = selectedAddons.map(k => addonPrices[k]?.name).join(', ') || 'None';
    const text = encodeURIComponent(
      `Hello Mobile AUTO Detailing!\n\nI calculated a quick quote on your website:\n- Name: ${customerName || 'Customer'}\n- Vehicle Type: ${vehicleType.toUpperCase()}\n- Package: ${pkgName}\n- Add-ons: ${addonsList}\n- Estimated Total: $${totalEstimate}\n- Los Angeles Area / ZIP: ${zipCode}\n\nPlease let me know your earliest mobile availability!`
    );
    window.open(`https://wa.me/19493863313?text=${text}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0F0F14] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-white/10 hover:border-[#D4AF37]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6 pr-8">
          <div className="h-12 w-auto max-w-[100px] shrink-0 rounded bg-[#08080A] border border-[#D4AF37]/40 p-1 flex items-center justify-center overflow-hidden hidden sm:flex">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="Mobile AUTO Detailing Logo"
              referrerPolicy="no-referrer"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              <span>Instant Mobile Quote Calculator</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
              Estimate Your Detailing Price
            </h3>
            <p className="text-xs text-zinc-400">
              No hidden fees. 100% self-contained mobile service at your home or office in Los Angeles.
            </p>
          </div>
        </div>

        <div className="space-y-6 text-sm">
          {/* Step 1: Vehicle Type */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
              1. Select Vehicle Size / Class
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'sedan', label: 'Coupe / Sedan', sub: 'Standard Size' },
                { id: 'suv', label: 'Crossover / SUV', sub: 'Mid-Size / 2-Row' },
                { id: 'truck', label: 'Truck / Large SUV', sub: '3-Row / Crew Cab' },
                { id: 'specialty', label: 'RV / Boat / Plane', sub: 'Custom Fleet' }
              ].map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVehicleType(v.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    vehicleType === v.id
                      ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-[0_0_12px_rgba(212,175,55,0.25)]'
                      : 'bg-zinc-900/60 border-white/10 text-zinc-400 hover:border-white/20'
                  }`}
                >
                  <p className="font-semibold text-xs text-white">{v.label}</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">{v.sub}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Detailing Package */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
              2. Select Primary Detailing Package
            </label>
            <div className="space-y-2">
              {PACKAGES.map((pkg) => {
                const isSelected = selectedPackage === pkg.id;
                const price = vehicleType === 'sedan' ? pkg.prices.sedan : vehicleType === 'suv' ? pkg.prices.suv : vehicleType === 'truck' ? pkg.prices.truck : 'Custom';
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                        : 'bg-zinc-900/60 border-white/10 text-zinc-300 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                        isSelected ? 'bg-[#D4AF37] border-[#D4AF37] text-black' : 'border-zinc-600'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-xs sm:text-sm text-white">{pkg.name}</p>
                          {pkg.popular && (
                            <span className="text-[9px] bg-[#D4AF37] text-black font-bold uppercase px-1.5 py-0.5 rounded">
                              Most Popular
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-zinc-400 line-clamp-1">{pkg.tagline}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-base font-serif font-bold text-[#D4AF37]">
                        ${price}
                      </span>
                      <p className="text-[10px] text-zinc-500">{pkg.duration}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Add-on Treatments */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
              3. Specialized Add-on Enhancements (Optional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(addonPrices).map(([key, item]) => {
                const checked = selectedAddons.includes(key);
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleAddon(key)}
                    className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-all ${
                      checked
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white'
                        : 'bg-zinc-900/50 border-white/10 text-zinc-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        checked ? 'bg-[#D4AF37] border-[#D4AF37] text-black' : 'border-zinc-600'
                      }`}>
                        {checked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-medium text-white">{item.name}</span>
                    </div>
                    <span className="text-xs text-[#D4AF37] font-semibold">+${item.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Location / Contact Quick Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                Your Los Angeles ZIP Code
              </label>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="e.g. 90210"
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                Your Name / Preferred Contact
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Marcus"
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          {/* Total & Action Bar */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#14141C] p-4 rounded-xl border border-[#D4AF37]/30">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-zinc-400">Estimated Mobile Total</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#D4AF37]">
                  ${totalEstimate}
                </span>
                <span className="text-xs text-zinc-400">including on-site mobile dispatch</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleWhatsAppBooking}
                className="flex-1 sm:flex-initial px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book via WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onNavigateToBooking();
                }}
                className="flex-1 sm:flex-initial px-4 py-2.5 bg-[#D4AF37] hover:bg-[#b88e18] text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Full Booking Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
