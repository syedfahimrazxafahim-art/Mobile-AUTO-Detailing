import React, { useState } from 'react';
import { PageId, VehicleCategory } from '../types';
import { PACKAGES, SERVICES, BUSINESS_INFO } from '../data/detailingData';
import { 
  Calendar, 
  Clock, 
  Car, 
  Truck, 
  Sailboat, 
  Plane, 
  Check, 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface BookingPageProps {
  onNavigate: (page: PageId) => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({ onNavigate }) => {
  const [step, setStep] = useState<number>(1);
  const [vehicleCategory, setVehicleCategory] = useState<VehicleCategory>('Cars');
  const [vehicleMakeModel, setVehicleMakeModel] = useState<string>('');
  const [vehicleColor, setVehicleColor] = useState<string>('');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('signature-enhancement');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['headlights']);
  
  // Location & Scheduling
  const [locationType, setLocationType] = useState<'home' | 'office' | 'condo' | 'hangar'>('home');
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [cityZip, setCityZip] = useState<string>('Los Angeles, CA 90210');
  const [preferredDate, setPreferredDate] = useState<string>('2026-08-30');
  const [preferredTime, setPreferredTime] = useState<string>('morning');
  
  // Client Details
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  const addonOptions = [
    { id: 'headlights', name: 'Headlight Optical Restoration & UV Seal', price: 99 },
    { id: 'waterspots', name: 'Tailgate / Paint Water Spot Mineral Dissolve', price: 149 },
    { id: 'scratches', name: 'Door / Panel Spot Scratch Wet Sand & Polish', price: 129 },
    { id: 'rockchip', name: 'OEM Color-Matched Rock Chip Touch-Up Fill', price: 139 },
    { id: 'engine', name: 'Engine Bay Deep Degrease & Dressing', price: 89 },
    { id: 'ceramicGlass', name: 'Windshield Hydrophobic Ceramic Coating', price: 79 }
  ];

  const getVehiclePricingTier = (): 'sedan' | 'suv' | 'truck' => {
    if (vehicleCategory === 'Cars') return 'sedan';
    if (vehicleCategory === 'SUVs') return 'suv';
    return 'truck';
  };

  const selectedPackage = PACKAGES.find(p => p.id === selectedPackageId) || PACKAGES[0];
  const tier = getVehiclePricingTier();
  const basePrice = selectedPackage.prices[tier] || 250;
  
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const found = addonOptions.find(a => a.id === id);
    return sum + (found?.price || 0);
  }, 0);

  const grandTotal = basePrice + addonsTotal;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleCompleteBooking = (viaWhatsApp: boolean = false) => {
    setBookingConfirmed(true);

    if (viaWhatsApp) {
      const text = encodeURIComponent(
        `*NEW MOBILE DETAILING APPOINTMENT REQUEST*\n\n` +
        `👤 *Client:* ${clientName || 'Valued Customer'}\n` +
        `📞 *Phone:* ${clientPhone || 'Provided via Booking'}\n` +
        `🚗 *Vehicle:* ${vehicleCategory} - ${vehicleMakeModel || 'Standard'} (${vehicleColor || 'Black'})\n` +
        `✨ *Package:* ${selectedPackage.name} ($${basePrice})\n` +
        `➕ *Add-ons:* ${selectedAddons.join(', ') || 'None'} (+$${addonsTotal})\n` +
        `💰 *Estimated Total:* $${grandTotal}\n` +
        `📍 *Location:* ${streetAddress ? `${streetAddress}, ` : ''}${cityZip} (${locationType.toUpperCase()})\n` +
        `📅 *Requested Date:* ${preferredDate} (${preferredTime.toUpperCase()})\n` +
        `📝 *Notes:* ${notes || 'Standard detailing'}\n\n` +
        `Please confirm our mobile appointment schedule!`
      );
      window.open(`https://wa.me/19493863313?text=${text}`, '_blank');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      {/* Title */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold border border-[#D4AF37]/30">
          <Calendar className="w-3.5 h-3.5" />
          <span>Instant On-Site Scheduling</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-white font-normal">
          Book Mobile Detailing Online
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400">
          Customize your service package, set your preferred date and time, and our self-contained mobile unit will arrive ready to transform your vehicle.
        </p>
      </div>

      {bookingConfirmed ? (
        <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#0D0D12] border border-[#D4AF37] text-center space-y-6 shadow-[0_0_50px_rgba(212,175,55,0.2)] animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-black flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Appointment Request Received!
            </h2>
            <p className="text-sm text-zinc-300">
              Thank you, <span className="text-[#D4AF37] font-semibold">{clientName || 'valued customer'}</span>. Our mobile detailing coordinator is reviewing your request for <span className="text-white font-medium">{preferredDate}</span>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-black/60 border border-white/10 text-left text-xs text-zinc-300 space-y-2 max-w-md mx-auto">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-zinc-500">Service:</span>
              <span className="font-semibold text-white">{selectedPackage.name}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-zinc-500">Vehicle:</span>
              <span className="text-white">{vehicleCategory} ({vehicleMakeModel || 'Standard'})</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-zinc-500">Location:</span>
              <span className="text-white">{cityZip}</span>
            </div>
            <div className="flex justify-between pt-1 text-sm font-bold">
              <span className="text-[#D4AF37]">Total Estimate:</span>
              <span className="text-[#D4AF37]">${grandTotal}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Confirm Instantly On WhatsApp</span>
            </a>
            <a
              href={BUSINESS_INFO.phoneLink}
              className="w-full sm:w-auto px-6 py-3 bg-zinc-900 border border-white/10 text-white hover:border-[#D4AF37] font-semibold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call / Text Us</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Booking Form (Left 8 Cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#0D0D12] border border-white/10 space-y-8">
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-semibold">
              {[
                { s: 1, label: 'Vehicle' },
                { s: 2, label: 'Package' },
                { s: 3, label: 'Add-ons' },
                { s: 4, label: 'Location & Time' },
                { s: 5, label: 'Review' }
              ].map((item) => (
                <button
                  key={item.s}
                  onClick={() => setStep(item.s)}
                  className={`flex items-center gap-1.5 transition-colors ${
                    step === item.s 
                      ? 'text-[#D4AF37]' 
                      : step > item.s 
                        ? 'text-zinc-300' 
                        : 'text-zinc-600'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    step === item.s 
                      ? 'bg-[#D4AF37] text-black' 
                      : step > item.s 
                        ? 'bg-zinc-800 text-[#D4AF37]' 
                        : 'bg-zinc-900 text-zinc-600'
                  }`}>
                    {item.s}
                  </span>
                  <span className="hidden sm:inline uppercase tracking-wider">{item.label}</span>
                </button>
              ))}
            </div>

            {/* STEP 1: VEHICLE */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-1">1. Select Your Vehicle Type</h3>
                  <p className="text-xs text-zinc-400">Choose your vehicle class so we can allocate proper machine pads and compounds.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { type: 'Cars', icon: <Car className="w-5 h-5" />, desc: 'Sedan, Coupe, Hatchback' },
                    { type: 'SUVs', icon: <Car className="w-5 h-5" />, desc: 'Mid-Size & Full-Size SUV' },
                    { type: 'Trucks', icon: <Truck className="w-5 h-5" />, desc: 'Crew Cab, Lifted, Dually' },
                    { type: 'RVs', icon: <Truck className="w-5 h-5" />, desc: 'Motorhome, Travel Trailer' },
                    { type: 'Boats', icon: <Sailboat className="w-5 h-5" />, desc: 'Marine, Yacht, Speedboat' },
                    { type: 'Planes', icon: <Plane className="w-5 h-5" />, desc: 'Private Aviation, Turboprop' }
                  ].map((v) => (
                    <button
                      key={v.type}
                      type="button"
                      onClick={() => setVehicleCategory(v.type as VehicleCategory)}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between h-28 transition-all ${
                        vehicleCategory === v.type
                          ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                          : 'bg-zinc-950 border-white/10 text-zinc-400 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`p-2 rounded-lg ${vehicleCategory === v.type ? 'bg-[#D4AF37] text-black' : 'bg-zinc-900 text-[#D4AF37]'}`}>
                          {v.icon}
                        </span>
                        {vehicleCategory === v.type && <Check className="w-4 h-4 text-[#D4AF37]" />}
                      </div>
                      <div>
                        <p className="font-bold text-xs text-white">{v.type}</p>
                        <p className="text-[10px] text-zinc-400">{v.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                      Vehicle Year, Make & Model
                    </label>
                    <input
                      type="text"
                      value={vehicleMakeModel}
                      onChange={(e) => setVehicleMakeModel(e.target.value)}
                      placeholder="e.g. 2023 Porsche 911 / Tesla Model S"
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                      Paint Color & Condition
                    </label>
                    <input
                      type="text"
                      value={vehicleColor}
                      onChange={(e) => setVehicleColor(e.target.value)}
                      placeholder="e.g. Metallic Black (Heavy Swirls)"
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-[#FFF1C5] transition-all flex items-center gap-2"
                  >
                    <span>Continue to Packages</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: PACKAGE */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-1">2. Choose Primary Detailing Package</h3>
                  <p className="text-xs text-zinc-400">Pricing adjusts automatically for your selected {vehicleCategory}.</p>
                </div>

                <div className="space-y-3">
                  {PACKAGES.map((pkg) => {
                    const isSelected = selectedPackageId === pkg.id;
                    const price = pkg.prices[tier];
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedPackageId(pkg.id)}
                        className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                          isSelected
                            ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                            : 'bg-zinc-950 border-white/10 text-zinc-300 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center border mt-1 shrink-0 ${
                            isSelected ? 'bg-[#D4AF37] border-[#D4AF37] text-black' : 'border-zinc-600'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-sm sm:text-base text-white">{pkg.name}</h4>
                              {pkg.popular && (
                                <span className="text-[9px] bg-[#D4AF37] text-black font-bold uppercase px-2 py-0.5 rounded">
                                  Top Pick
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-zinc-400">{pkg.tagline}</p>
                            <p className="text-[11px] text-zinc-500">Est. Duration: {pkg.duration}</p>
                          </div>
                        </div>

                        <div className="text-right sm:border-l sm:border-white/10 sm:pl-6 shrink-0">
                          <span className="text-2xl font-serif font-bold text-[#D4AF37]">${price}</span>
                          <p className="text-[10px] text-zinc-500">Mobile inclusive</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 rounded-xl border border-white/10 text-zinc-400 text-xs font-semibold hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-6 py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-[#FFF1C5] transition-all flex items-center gap-2"
                  >
                    <span>Configure Add-ons</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: ADD-ONS */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-1">3. Select Specialized Enhancements</h3>
                  <p className="text-xs text-zinc-400">Target specific defects like headlights, water spots, or deep scratches.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {addonOptions.map((item) => {
                    const checked = selectedAddons.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleAddon(item.id)}
                        className={`p-4 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all ${
                          checked
                            ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-md'
                            : 'bg-zinc-950 border-white/10 text-zinc-400 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded flex items-center justify-center border shrink-0 ${
                            checked ? 'bg-[#D4AF37] border-[#D4AF37] text-black' : 'border-zinc-600'
                          }`}>
                            {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span className="text-xs font-semibold text-white">{item.name}</span>
                        </div>
                        <span className="text-xs font-serif font-bold text-[#D4AF37] shrink-0">+${item.price}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 rounded-xl border border-white/10 text-zinc-400 text-xs font-semibold hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="px-6 py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-[#FFF1C5] transition-all flex items-center gap-2"
                  >
                    <span>Location & Schedule</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: LOCATION & TIME */}
            {step === 4 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-1">4. Service Location & Preferred Date</h3>
                  <p className="text-xs text-zinc-400">Tell us where to dispatch our mobile rig in the Los Angeles area.</p>
                </div>

                {/* Location Type */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'home', label: 'Residential Driveway' },
                    { id: 'office', label: 'Corporate Office' },
                    { id: 'condo', label: 'Condo / Garage' },
                    { id: 'hangar', label: 'Hangar / Marina' }
                  ].map((loc) => (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setLocationType(loc.id as any)}
                      className={`p-3 rounded-xl border text-center text-xs font-semibold uppercase tracking-wider transition-all ${
                        locationType === loc.id
                          ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                          : 'bg-zinc-950 text-zinc-400 border-white/10'
                      }`}
                    >
                      {loc.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                      Street Address & Unit / Lot #
                    </label>
                    <input
                      type="text"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      placeholder="e.g. 1042 Wilshire Blvd, Suite 400"
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                      City & ZIP Code
                    </label>
                    <input
                      type="text"
                      value={cityZip}
                      onChange={(e) => setCityZip(e.target.value)}
                      placeholder="e.g. Los Angeles, CA 90024"
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                      Preferred Service Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                      Preferred Arrival Window
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="morning">Morning (7:00 AM – 11:00 AM)</option>
                      <option value="midday">Mid-Day (11:00 AM – 3:00 PM)</option>
                      <option value="afternoon">Afternoon (3:00 PM – 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    onClick={() => setStep(3)}
                    className="px-5 py-2.5 rounded-xl border border-white/10 text-zinc-400 text-xs font-semibold hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(5)}
                    className="px-6 py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-[#FFF1C5] transition-all flex items-center gap-2"
                  >
                    <span>Final Contact & Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: REVIEW & CONTACT */}
            {step === 5 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-1">5. Contact Information & Confirmation</h3>
                  <p className="text-xs text-zinc-400">Where should we send arrival updates and confirmation photos?</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. David Vance"
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                      Phone Number (Call / Text / WhatsApp)
                    </label>
                    <input
                      type="tel"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="e.g. (949) 386-3313"
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                    Special Vehicle Notes or Defect Areas (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Heavy swirl marks on black hood, dog hair in rear cargo area, gate code 1234..."
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                {/* Final Action Submission */}
                <div className="pt-4 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => handleCompleteBooking(true)}
                      className="py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Book Instantly via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => handleCompleteBooking(false)}
                      className="py-4 bg-[#D4AF37] hover:bg-[#FFF1C5] text-black font-bold uppercase tracking-wider text-xs rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    >
                      Confirm Online Request
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-zinc-500">
                    No payment required upfront. Pay upon 100% inspection satisfaction on-site.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Booking Summary Sidebar (Right 4 Cols) */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-[#0A0A0E] border border-[#D4AF37]/30 space-y-6 sticky top-28">
            <div className="space-y-1 border-b border-white/10 pb-4">
              <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold">Live Quote Summary</span>
              <h3 className="text-xl font-serif font-bold text-white">Your Mobile Service</h3>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex justify-between items-center text-zinc-300">
                <span className="text-zinc-500">Vehicle Type:</span>
                <span className="font-semibold text-white">{vehicleCategory}</span>
              </div>

              <div className="flex justify-between items-start text-zinc-300">
                <div>
                  <span className="font-semibold text-white block">{selectedPackage.name}</span>
                  <span className="text-[10px] text-zinc-500">Est. {selectedPackage.duration}</span>
                </div>
                <span className="font-serif font-bold text-[#D4AF37]">${basePrice}</span>
              </div>

              {selectedAddons.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-[11px] font-semibold text-zinc-400 uppercase">Selected Add-ons:</span>
                  {selectedAddons.map((id) => {
                    const add = addonOptions.find(a => a.id === id);
                    if (!add) return null;
                    return (
                      <div key={id} className="flex justify-between text-zinc-400">
                        <span className="line-clamp-1">{add.name}</span>
                        <span className="text-[#D4AF37] font-semibold">+${add.price}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="pt-4 border-t border-white/10 space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm uppercase font-semibold text-white">Estimated Total:</span>
                  <span className="text-3xl font-serif font-bold text-[#D4AF37]">${grandTotal}</span>
                </div>
                <p className="text-[10px] text-zinc-500">Includes complete mobile travel & equipment setup</p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 space-y-2 text-[11px] text-zinc-400">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <p>We do not pack up until you inspect the gloss and confirm every panel is flawless.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
