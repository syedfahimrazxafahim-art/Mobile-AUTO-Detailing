import { ServiceItem, DetailingPackage, GalleryItem, Testimonial, ServiceArea } from '../types';

export const BUSINESS_INFO = {
  name: 'Mobile AUTO Detailing',
  tagline: 'Professional Results at Your Doorstep',
  subTagline: 'We Come To You – Home, Office, Anywhere!',
  logoUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1787945116/LOGO.jpg',
  imgUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1787945161/IMG.jpg',
  img1Url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1787945157/IMG1.jpg',
  img2Url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1787945149/IMG2.jpg',
  img3Url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1787945147/IMG3.jpg',
  phone: '949-386-3313',
  phoneFormatted: '(949) 386-3313',
  phoneLink: 'tel:9493863313',
  whatsappNumber: '19493863313',
  whatsappUrl: 'https://wa.me/19493863313?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20mobile%20detailing%20services%20for%20my%20vehicle.',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61590078285496',
  location: 'Los Angeles, California',
  serviceAreasSummary: 'Greater Los Angeles & Orange County Metro Areas',
  hours: 'Mon - Sun: 7:00 AM – 7:00 PM (7 Days a Week)',
  vehicleTypes: ['Cars', 'SUVs', 'Trucks', 'RVs', 'Boats', 'Planes'] as const,
  corePillars: [
    { title: 'High-Quality Detailing', desc: 'Precision craftsmanship with multi-stage correction & streak-free finishes.' },
    { title: 'Premium Products', desc: 'Commercial-grade ceramic coatings, pH-neutral soaps & high-lubricity polishes.' },
    { title: 'Attention to Detail', desc: 'Every crevice, trim, wheel barrel, and leather stitch treated with care.' },
    { title: 'Satisfaction Guaranteed', desc: '100% committed to exceeding expectations before we pack up our mobile rig.' }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'paint-correction',
    title: 'Polishing & Paint Correction',
    shortDesc: '1-Step & 2-Step machine polishing to permanently eliminate swirls, holograms, oxidation, and restore deep reflection.',
    fullDesc: 'Using professional dual-action and rotary polishers alongside precision cutting compounds, we level microscopic clear coat imperfections. 1-Step enhances gloss by 60–75%, while our multi-stage 2-Step eliminates up to 90–95% of swirls, scratches, and haze.',
    benefits: [
      'Eliminates 85–95% of swirl marks & light scratches',
      'Restores deep mirror-like optical clarity and gloss',
      'Removes oxidation and UV fading on clear coats',
      'Prepares surface perfectly for ceramic coatings'
    ],
    duration: '3.5 - 6.0 Hours',
    startingPrice: 199,
    iconName: 'Sparkles',
    badge: 'Signature Specialist Service',
    recommendedFor: 'Vehicles with swirl marks, spider-webbing from car washes, or dull paint finish.',
    imageKey: 'IMG2',
    steps: [
      'Decontaminating foam wash & iron fallout removal',
      'Clay bar surface treatment for glass-smooth paint',
      'Stage 1: Heavy cutting compound to level defects',
      'Stage 2: Micro-finishing polish for intense jewel reflection',
      'IPA wipe-down to inspect true clear coat clarity'
    ]
  },
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating (9H & Graphene)',
    shortDesc: 'Professional nano-ceramic barrier providing years of extreme hydrophobic beading, UV defense, and self-cleaning gloss.',
    fullDesc: 'Our ultra-durable ceramic coatings chemically bond to your paintwork, forming a glass-hard sacrificial shield. Protect your vehicle against harsh California sun, bird droppings, acid rain, road grime, and tree sap while locking in an everlasting wet-look shine.',
    benefits: [
      'Multi-year durable hydrophobic shield (3 to 7 Years)',
      'Intense water-beading & self-cleaning properties',
      'Maximum UV & oxidation defense against sun fade',
      'Resistant to chemical stains, bug etchings & bird droppings'
    ],
    duration: '4.0 - 8.0 Hours',
    startingPrice: 499,
    iconName: 'ShieldCheck',
    badge: 'Ultimate Long-Term Protection',
    recommendedFor: 'New luxury vehicles, freshly corrected paint, exotics, and daily drivers desiring zero-effort maintenance.',
    imageKey: 'IMG3',
    steps: [
      'Full decontamination wash and mechanical clay bar',
      'Paint correction polishing for defect-free surface',
      'Surface prep solvent wipe to ensure pure bonding',
      'Layered hand application of 9H nano-ceramic liquid',
      'IR heat curing and 24-hour hydrophobic seal activation'
    ]
  },
  {
    id: 'water-spot-removal',
    title: 'Water Spot & Mineral Removal',
    shortDesc: 'Specialized chemical decontamination and light compounding to dissolve stubborn baked-in calcium and acid rain etchings.',
    fullDesc: 'Hard tap water, sprinkler overspray, and industrial fallout bake into your clear coat and glass under the intense sun. Our specialized non-abrasive mineral acids and leveling compounds safely dissolve mineral deposits without gouging your clear coat.',
    benefits: [
      'Safely dissolves stubborn hard water mineral scales',
      'Restores crystal clarity to glass, paint, and chrome trims',
      'Prevents permanent etching into automotive clear coat',
      'Smooths textured rough surfaces back to glass touch'
    ],
    duration: '1.5 - 3.0 Hours',
    startingPrice: 149,
    iconName: 'Droplets',
    badge: 'Deep Decontamination',
    recommendedFor: 'Cars parked near lawn sprinklers, coastal marine environments, and rain-spotted glass.',
    imageKey: 'IMG1',
    steps: [
      'Chemical mineral acid bath to soften calcium crusts',
      'Agitation with ultra-soft horsehair detailing brushes',
      'Clay bar decontamination to lift sub-surface sediments',
      'Machine jeweling polish to eliminate residual halos'
    ]
  },
  {
    id: 'scratch-removal',
    title: 'Scratch Removal & Defect Leveling',
    shortDesc: 'Targeted spot correction, wet sanding, and rotary compound leveling for fingernail-depth clear coat scuffs.',
    fullDesc: 'Accidental key scuffs, bush brush marks, shopping cart rubbings, and door contact can often be safely eliminated without an expensive body shop repainting. We measure clear coat depth and safely level the surrounding coat for seamless invisible repair.',
    benefits: [
      'Eliminates clear coat scratches without costly panel repainting',
      'Digital paint depth gauge measurement for safety',
      'Preserves original factory OEM paint value',
      'Finished with protective sealant or ceramic topping'
    ],
    duration: '1.0 - 2.5 Hours',
    startingPrice: 129,
    iconName: 'Wrench',
    badge: 'Precision Spot Repair',
    recommendedFor: 'Door handle fingernail scratches, bumper rub marks, clear coat scuffs, and brush scrapes.',
    imageKey: 'IMG3',
    steps: [
      'Precision paint thickness digital verification',
      'Ultra-fine micro-sanding (2000–3000 grit) if required',
      'High-speed rotary leveling with micro-abrasives',
      'Orbital finishing to blend optical reflection'
    ]
  },
  {
    id: 'headlight-restoration',
    title: 'Headlight Optical Restoration',
    shortDesc: 'Multi-stage wet sanding and UV-cured polymer sealant to transform yellowed, foggy headlights back to crystal-clear optical brilliance.',
    fullDesc: 'Oxidized polycarbonate headlights severely compromise your night vision safety and age your vehicle’s front look. We strip dead oxidized plastic through progressive wet sanding, polish to glass transparency, and apply an OEM UV blocking sealant.',
    benefits: [
      'Restores 100% optical clarity and nighttime illumination safety',
      'Saves hundreds compared to complete assembly replacement',
      'UV protective ceramic barrier prevents yellowing return',
      'Dramatically elevates front-end luxury appearance'
    ],
    duration: '1.0 - 1.5 Hours',
    startingPrice: 99,
    iconName: 'Sun',
    badge: 'Night Vision & Clarity',
    recommendedFor: 'Vehicles with yellowed, foggy, cloudy, or hazy headlight lenses.',
    imageKey: 'IMG',
    steps: [
      'Precision masking of surrounding paintwork & bumper edges',
      'Multi-stage wet sanding (800, 1500, 2500, 3000 grit)',
      'High-gloss optical plastic compounding & buffing',
      'Ceramic UV-inhibiting clear sealant coating cure'
    ]
  },
  {
    id: 'rock-chip-repair',
    title: 'Rock Chip & Touch-Up Repair',
    shortDesc: 'Exact factory color-matched paint fill, leveling, and clear coat blending for highway gravel and rock damage.',
    fullDesc: 'Highway debris and gravel leave unsightly white pit marks on hoods, bumpers, and side mirrors. We custom match OEM paint codes, inject micro-resin pigment into the chip cavity, level it flush, and polish it smooth.',
    benefits: [
      'Prevents rust formation and primer degradation',
      'Factory OEM paint code color matching',
      'Levels crater pits flush with surrounding clear coat',
      'High-durability clear coat blend'
    ],
    duration: '1.5 - 2.5 Hours',
    startingPrice: 139,
    iconName: 'Crosshair',
    badge: 'Factory Color Matched',
    recommendedFor: 'Highway-driven vehicles with gravel chips on front bumper, hood, and fenders.',
    imageKey: 'LOGO',
    steps: [
      'Cavity cleaning and degreasing with isopropyl solvent',
      'Precision OEM paint pigment injection with micro-applicator',
      'Infrared heat drying to solidify resin layer',
      'Precision wet block leveling & blending polish'
    ]
  }
];

export const PACKAGES: DetailingPackage[] = [
  {
    id: 'express-mobile',
    name: 'Executive Mobile Detail',
    tagline: 'Comprehensive maintenance clean inside & out at your location.',
    popular: false,
    prices: {
      sedan: 140,
      suv: 165,
      truck: 185,
      rvBoat: 'Custom Quote'
    },
    duration: '1.5 - 2.0 Hours',
    perfectFor: 'Regular monthly upkeep, lease return touch-ups, or rapid weekend refreshment.',
    features: [
      '100% Deionized spot-free water wash & high-foam pre-soak',
      'Hand dry with ultra-plush microfiber towels',
      'Full wheel face, barrel, and tire cleaning + non-sling dressing',
      'Interior thorough vacuum (seats, carpets, trunk)',
      'Dashboard, console, and door panel wipe down & UV protectant',
      'Streak-free glass cleaning inside & out',
      'Spray sealant for 4–6 weeks of hydrophobic shine'
    ]
  },
  {
    id: 'signature-enhancement',
    name: 'Signature Paint & Interior Renewal',
    tagline: 'Deep interior sanitization paired with 1-step gloss enhancement polishing.',
    popular: true,
    prices: {
      sedan: 280,
      suv: 330,
      truck: 370,
      rvBoat: 'Custom Quote'
    },
    duration: '3.0 - 4.5 Hours',
    perfectFor: 'Vehicles needing noticeable gloss boost, swirl reduction, and deep interior shampooing.',
    features: [
      'Everything in Executive Mobile Detail plus:',
      'Chemical iron fallout decontamination & full clay bar treatment',
      '1-Step Machine Polish (enhances gloss by 70% & clears haze)',
      'Steam sanitization of AC vents, cup holders & crevices',
      'Leather deep clean, conditioning & rejuvenation massage',
      'Carpet & fabric upholstery extraction / spot stain removal',
      '6-Month high-grade ceramic spray sealant coating',
      'Exhaust tip polished & exterior plastics restored'
    ]
  },
  {
    id: 'presidential-correction',
    name: 'Presidential 9H Ceramic & Multi-Stage',
    tagline: 'Museum-grade 2-stage paint correction and multi-year ceramic armor.',
    popular: false,
    prices: {
      sedan: 599,
      suv: 699,
      truck: 799,
      rvBoat: 'Custom Quote'
    },
    duration: '5.5 - 8.0 Hours',
    perfectFor: 'Exotics, luxury daily drivers, show cars, and owners demanding flawless perfection.',
    features: [
      'Everything in Signature Renewal plus:',
      'Full multi-stage 2-Step compounding & jeweling polish (90%+ swirl elimination)',
      'Professional 9H Nano-Ceramic Coating applied to all painted surfaces',
      'Ceramic coating applied to wheel faces and windshield glass',
      'Headlight optical restoration & UV barrier shield',
      'Engine bay detail, degreasing & satin dressing',
      'Full interior leather ceramic protection layer',
      '3 to 5 Year Warranty certificate & care kit'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: '50/50 Multi-Stage Paint Correction',
    category: 'paint-correction',
    vehicle: 'BMW M-Sport Sedan / Dark Metallic Blue',
    treatment: '2-Step Rotary Compounding & Dual-Action Jeweling Polish',
    duration: '5.5 Hours',
    description: 'Direct 50/50 test panel under high-intensity inspection light showing severe car wash swirl webs on the left vs mirror-gloss swirl-free perfection on the right.',
    beforeDesc: 'Heavy swirl webbing, wash scratches, and oxidized clear coat causing severe light scattering.',
    afterDesc: 'Glass-smooth optical depth, crystal clarity, and 95%+ swirl elimination ready for ceramic bonding.',
    imageKey: 'IMG2',
    resultsBadge: '95% Swirl Elimination'
  },
  {
    id: 'gal-2',
    title: 'Crystal Clear Headlight Restoration',
    category: 'headlights',
    vehicle: 'Kia Optima / Obsidian Black',
    treatment: '4-Stage Wet Sanding (800-3000 Grit) + UV Ceramic Sealant',
    duration: '1.2 Hours',
    description: 'Severely oxidized, yellowed, and cloudy polycarbonate headlight restored back to OEM showroom optical clarity with UV-blocking barrier.',
    beforeDesc: 'Cloudy yellow oxidation, reduced night beam penetration, pitted polycarbonate lens.',
    afterDesc: '100% crystal-clear optical light transmission with long-lasting UV defense coating.',
    imageKey: 'IMG',
    resultsBadge: '100% Optical Clarity'
  },
  {
    id: 'gal-3',
    title: 'Heavy Truck Water Spot & Tailgate Decontamination',
    category: 'water-spots',
    vehicle: 'Chevrolet Silverado High Country / Black Onyx',
    treatment: 'Mineral Acid Dissolve + Heavy Claying + Single-Step Gloss Polish',
    duration: '3.0 Hours',
    description: 'Heavy mineral deposit and calcium scale elimination from truck tailgate and rear bumper without damaging clear coat.',
    beforeDesc: 'Hundreds of baked-in sprinkler calcium rings and hard water etching on black paint.',
    afterDesc: 'Flawless deep gloss with zero mineral residue and hydrophobic spray armor.',
    imageKey: 'IMG1',
    resultsBadge: 'Total Mineral Eradication'
  },
  {
    id: 'gal-4',
    title: 'Mobile Scratch Removal & Deep Reflection',
    category: 'scratches',
    vehicle: 'Luxury SUV Door Panel / Jet Black',
    treatment: 'Targeted Spot Wet Sanding & Rotary Micro-Compound Blend',
    duration: '2.0 Hours',
    description: 'Elimination of deep clear coat brush scrapes on vehicle side panel, leaving a razor-sharp mirror reflection of surrounding environment.',
    beforeDesc: 'Visible white scuffs and scratches across door panel catchable by fingernail.',
    afterDesc: 'Mirror-sharp reflective finish with zero trace of prior scrape damage.',
    imageKey: 'IMG3',
    resultsBadge: 'Seamless Mirror Gloss'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Marcus Vance',
    location: 'Beverly Hills, CA',
    vehicle: 'Porsche 911 GT3 (Black)',
    rating: 5,
    service: '2-Step Paint Correction & 9H Ceramic Coating',
    comment: 'The 50/50 difference on my black Porsche was mind-blowing. They came straight to my office in Beverly Hills, set up their completely self-contained rig with spot-free water, and spent 6 hours perfecting every inch. The paint looks better than when I drove it off the showroom floor!',
    date: '2 weeks ago'
  },
  {
    id: 't-2',
    name: 'Sophia Chen',
    location: 'Irvine / Newport Coast',
    vehicle: 'Range Rover Sport',
    rating: 5,
    service: 'Full Signature Detail & Water Spot Removal',
    comment: 'Living near sprinklers ruined my tailgate and hood with horrible white water spots. Mobile AUTO Detailing came to my driveway and removed 100% of the spots without needing a body shop repaint. Fast, respectful, and very communicative on WhatsApp.',
    date: '1 month ago'
  },
  {
    id: 't-3',
    name: 'David Rodriguez',
    location: 'Downtown Los Angeles, CA',
    vehicle: 'Tesla Model S Plaid',
    rating: 5,
    service: 'Headlight Restoration & Ceramic Coating',
    comment: 'My headlights were getting foggy from the sun. After 1 hour with these guys, they look brand new! Also got the 3-year ceramic coating. The hydrophobic water beading in the rain is incredible. Highly recommended.',
    date: '3 weeks ago'
  },
  {
    id: 't-4',
    name: 'Elena Rostova',
    location: 'Santa Monica, CA',
    vehicle: 'Mercedes-Benz G63 AMG',
    rating: 5,
    service: 'Executive Mobile Detail & Scratch Repair',
    comment: 'Had a nasty bush scratch down the passenger side door. They blended it away seamlessly in my garage. Pure artistry and white-glove mobile service.',
    date: 'Just recently'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'la-metro',
    name: 'Central & Downtown Los Angeles',
    region: 'LA County',
    zipCodes: ['90012', '90013', '90014', '90015', '90017', '90021', '90071'],
    popularServices: ['Paint Correction', 'Executive Mobile Detail', 'Ceramic Coating']
  },
  {
    id: 'west-la',
    name: 'West Los Angeles & Coastal',
    region: 'LA County',
    zipCodes: ['90024', '90025', '90049', '90401', '90402', '90405', '90291', '90292'],
    popularServices: ['Water Spot Removal', '9H Ceramic Coating', 'Exotic Car Detailing']
  },
  {
    id: 'beverly-hills',
    name: 'Beverly Hills & Hollywood Hills',
    region: 'LA County',
    zipCodes: ['90210', '90211', '90212', '90069', '90046', '90068'],
    popularServices: ['Presidential 9H Ceramic', 'Multi-Stage Paint Correction', 'Scratch Removal']
  },
  {
    id: 'san-fernando',
    name: 'San Fernando Valley & Glendale',
    region: 'LA County',
    zipCodes: ['91403', '91436', '91604', '91505', '91201', '91316', '91364'],
    popularServices: ['Headlight Restoration', 'Full Mobile Detailing', 'Rock Chip Repair']
  },
  {
    id: 'orange-county',
    name: 'Orange County & Coastal Metro',
    region: 'Orange County',
    zipCodes: ['92660', '92661', '92663', '92657', '92602', '92618', '92620'],
    popularServices: ['Boat & RV Detailing', 'Truck Detailing', 'Ceramic Armor']
  }
];

export const FAQS = [
  {
    q: 'Do I need to provide water or electricity at my location?',
    a: 'No! Our mobile detailing van is 100% self-contained with our own commercial quiet generator, deionized spot-free water tank, high-pressure equipment, and lighting rigs. We can detail in your home driveway, apartment complex parking, corporate office, or airport hangar.'
  },
  {
    q: 'What is the difference between 1-step and 2-step paint correction?',
    a: 'A 1-Step polish uses an all-in-one compound/polish to eliminate 60–75% of light haze and boost gloss dramatically. A 2-Step correction begins with a heavy cutting compound to eliminate 90–95% of deep swirl marks and scratches, followed by a secondary jeweling polish to achieve pure mirror-like optical perfection.'
  },
  {
    q: 'How long does ceramic coating last?',
    a: 'Depending on the package selected, our professional 9H and graphene ceramic coatings provide real chemical protection lasting from 3 to 7 years. Unlike traditional waxes that wash off in 3–4 weeks, ceramic coatings cure into a permanent sacrificial glass shield.'
  },
  {
    q: 'Do you service vehicles other than standard passenger cars?',
    a: 'Yes! We specialize in Cars, SUVs, Lifted & Heavy-Duty Trucks, Luxury RVs, Boats/Marine crafts, and Private Aircraft. Our equipment and scaffolding allow us to handle oversized vehicle restoration effortlessly.'
  },
  {
    q: 'How do I book an appointment or get a free quote?',
    a: 'You can use our interactive online quote & booking calculator on this website, call or text us directly at 949-386-3313, or tap the WhatsApp button for instantaneous scheduling.'
  }
];
