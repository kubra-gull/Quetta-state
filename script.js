/**
 * ==========================================================================
 * QUETTA STATE — AI Real Estate Property Management System
 * Core Application Engine: script.js (Pure Vanilla JavaScript)
 * ==========================================================================
 */

// --- Initial Demo Data Store ---
const DEFAULT_PROPERTIES = [
  {
    id: "prop-1",
    title: "Modern Luxury Family House",
    location: "Jinnah Town",
    address: "Street 4, Sector B, Jinnah Town, Quetta",
    type: "House",
    purpose: "Buy",
    price: 22500000,
    priceFormatted: "PKR 22.5 Million",
    bedrooms: 4,
    bathrooms: 4,
    area: "10 Marla",
    status: "For Sale",
    verified: true,
    featured: true,
    views: 412,
    saves: 48,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An architect-designed double-storey family residence in prime Jinnah Town. Equipped with 10kW solar system, underground water tank, custom Italian kitchen, solid oak woodwork, and landscaped front lawn. Close to Beaconhouse School and Serena Hotel.",
    features: ["10kW Solar Backup", "Underground Water Tank", "Italian Kitchen", "Lawn & Car Porch", "24/7 Security", "Near Schools"],
    agent: {
      name: "Malik Jahangir",
      phone: "+92 333 7812345",
      email: "jahangir@quettastate.com"
    }
  },
  {
    id: "prop-2",
    title: "Executive Spanish Villa",
    location: "Samungli Road",
    address: "Adjacent to PAF Colony, Samungli Road, Quetta",
    type: "Villa",
    purpose: "Buy",
    price: 38000000,
    priceFormatted: "PKR 38.0 Million",
    bedrooms: 5,
    bathrooms: 6,
    area: "1 Kanal",
    status: "For Sale",
    verified: true,
    featured: true,
    views: 580,
    saves: 72,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Palatial 1-Kanal Spanish elevation villa offering luxurious living with servant quarters, basement home theater, spacious rooftop garden, and 4-car parking. Peaceful secure neighborhood with dual-supply gas and fresh borehole.",
    features: ["Spanish Elevation", "Basement Home Theater", "4 Car Parking", "Dual Gas Meters", "Rooftop Garden", "Servant Quarters"],
    agent: {
      name: "Sardar Asfand Baloch",
      phone: "+92 300 8371920",
      email: "asfand@quettastate.com"
    }
  },
  {
    id: "prop-3",
    title: "Contemporary 2-Bed Luxury Apartment",
    location: "Satellite Town",
    address: "Block 4, Near Degree College, Satellite Town, Quetta",
    type: "Apartment",
    purpose: "Rent",
    price: 65000,
    priceFormatted: "PKR 65,000 / mo",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,250 Sq Ft",
    status: "For Rent",
    verified: true,
    featured: false,
    views: 290,
    saves: 31,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Spacious and naturally ventilated second-floor apartment in a newly built family complex. Features elevator access, dedicated parking bay, generator backup, and high-speed fiber internet wiring.",
    features: ["Elevator Access", "Dedicated Parking", "Generator Backup", "Gated Complex", "Balcony View"],
    agent: {
      name: "Babar Kakar",
      phone: "+92 312 8899112",
      email: "babar@quettastate.com"
    }
  },
  {
    id: "prop-4",
    title: "Prime Commercial Plaza & Offices",
    location: "Airport Road",
    address: "Main Airport Road, Near Chiltan Market, Quetta",
    type: "Commercial",
    purpose: "Buy",
    price: 65000000,
    priceFormatted: "PKR 65.0 Million",
    bedrooms: 0,
    bathrooms: 6,
    area: "14 Marla (Ground + 3)",
    status: "For Sale",
    verified: true,
    featured: true,
    views: 620,
    saves: 54,
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "High-yield commercial plaza situated on heavy footfall Airport Road. Features 8 road-front retail shops, 12 corporate executive offices, basement warehouse, and high-capacity transformer.",
    features: ["Main Road Frontage", "Commercial Electricity", "8 Shops + 12 Offices", "Basement Storage", "High ROI Rental Yield"],
    agent: {
      name: "Malik Jahangir",
      phone: "+92 333 7812345",
      email: "jahangir@quettastate.com"
    }
  },
  {
    id: "prop-5",
    title: "Elegant Single-Storey Bungalow",
    location: "Brewery Road",
    address: "Gulshan Street, Brewery Road, Quetta",
    type: "House",
    purpose: "Buy",
    price: 18500000,
    priceFormatted: "PKR 18.5 Million",
    bedrooms: 3,
    bathrooms: 3,
    area: "8 Marla",
    status: "For Sale",
    verified: true,
    featured: false,
    views: 310,
    saves: 39,
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Charming, well-maintained single-storey bungalow with cozy fireplace, open-plan dining room, solid perimeter boundary walls, and dedicated space for solar inverter. Safe and peaceful community near Bolan Medical Complex.",
    features: ["Single Storey Layout", "Fireplace", "Water Supply Line", "Car Garage", "Near Hospitals"],
    agent: {
      name: "Sardar Asfand Baloch",
      phone: "+92 300 8371920",
      email: "asfand@quettastate.com"
    }
  },
  {
    id: "prop-6",
    title: "Spacious 3-Bed Ground Floor Portion",
    location: "Jinnah Town",
    address: "Sector A, Jinnah Town, Quetta",
    type: "House",
    purpose: "Rent",
    price: 90000,
    priceFormatted: "PKR 90,000 / mo",
    bedrooms: 3,
    bathrooms: 3,
    area: "10 Marla Portion",
    status: "For Rent",
    verified: true,
    featured: false,
    views: 450,
    saves: 62,
    images: [
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Independent ground-floor portion with separate gate entry, private car porch, lush green lawn, drawing dining room, and brand new sanitary fittings in all attached bathrooms.",
    features: ["Separate Gate Entry", "Private Lawn", "Gas Heater Points", "Prime Sector A Location", "Separate Utility Meters"],
    agent: {
      name: "Babar Kakar",
      phone: "+92 312 8899112",
      email: "babar@quettastate.com"
    }
  },
  {
    id: "prop-7",
    title: "1-Kanal Residential Corner Plot",
    location: "Zarghoon Road",
    address: "Near Serena Hotel Link, Zarghoon Road, Quetta",
    type: "Plot",
    purpose: "Buy",
    price: 28000000,
    priceFormatted: "PKR 28.0 Million",
    bedrooms: 0,
    bathrooms: 0,
    area: "1 Kanal (Corner)",
    status: "For Sale",
    verified: true,
    featured: true,
    views: 520,
    saves: 85,
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Clear-title, CDA/QDA approved corner residential plot ready for immediate construction. Dual road access (50 ft and 40 ft), underground utilities connectivity, and highly prestigious VIP neighborhood.",
    features: ["Corner Plot", "Dual Wide Roads", "QDA Approved", "Underground Electricity", "Immediate Possession"],
    agent: {
      name: "Malik Jahangir",
      phone: "+92 333 7812345",
      email: "jahangir@quettastate.com"
    }
  },
  {
    id: "prop-8",
    title: "Newly Built 4-Bed Designer House",
    location: "Sariab Road",
    address: "Near University of Balochistan, Sariab Road, Quetta",
    type: "House",
    purpose: "Buy",
    price: 16500000,
    priceFormatted: "PKR 16.5 Million",
    bedrooms: 4,
    bathrooms: 4,
    area: "7 Marla",
    status: "For Sale",
    verified: true,
    featured: false,
    views: 280,
    saves: 22,
    images: [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Affordable and stylish newly constructed double-storey home featuring premium Turkish tiles, false ceilings, aluminum windows, and ample water reservoir.",
    features: ["Newly Built", "Turkish Tile Flooring", "Water Reservoir", "Close to University", "Modern Kitchen"],
    agent: {
      name: "Sardar Asfand Baloch",
      phone: "+92 300 8371920",
      email: "asfand@quettastate.com"
    }
  },
  {
    id: "prop-9",
    title: "Fully Furnished Studio Apartment",
    location: "Model Town",
    address: "Heights Tower, Model Town, Quetta",
    type: "Apartment",
    purpose: "Rent",
    price: 45000,
    priceFormatted: "PKR 45,000 / mo",
    bedrooms: 1,
    bathrooms: 1,
    area: "650 Sq Ft",
    status: "For Rent",
    verified: true,
    featured: false,
    views: 195,
    saves: 18,
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Turnkey fully furnished executive studio apartment with air conditioner, sofa set, refrigerator, smart LED TV, and CCTV surveillance.",
    features: ["Fully Furnished", "Smart TV & AC", "CCTV Security", "Dedicated Lift", "Low Maintenance"],
    agent: {
      name: "Babar Kakar",
      phone: "+92 312 8899112",
      email: "babar@quettastate.com"
    }
  },
  {
    id: "prop-10",
    title: "Grand Royal Villa with Private Garden",
    location: "Cantt",
    address: "Officers Lane, Cantt Area, Quetta",
    type: "Villa",
    purpose: "Buy",
    price: 55000000,
    priceFormatted: "PKR 55.0 Million",
    bedrooms: 6,
    bathrooms: 7,
    area: "2 Kanal",
    status: "For Sale",
    verified: true,
    featured: true,
    views: 740,
    saves: 110,
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Supreme luxury residence in Quetta Cantt with highest security standards. Features expansive manicured gardens, pine trees, central heating radiators, granite countertops, and guest suite.",
    features: ["Cantt Security", "Central Heating", "2 Kanal Land", "Private Pine Garden", "Guest Suite"],
    agent: {
      name: "Malik Jahangir",
      phone: "+92 333 7812345",
      email: "jahangir@quettastate.com"
    }
  },
  {
    id: "prop-11",
    title: "Commercial Retail Shop on Ground Floor",
    location: "Jinnah Town",
    address: "Jinnah Avenue Commercial Center, Quetta",
    type: "Shop",
    purpose: "Buy",
    price: 12000000,
    priceFormatted: "PKR 12.0 Million",
    bedrooms: 0,
    bathrooms: 1,
    area: "350 Sq Ft",
    status: "For Sale",
    verified: true,
    featured: false,
    views: 240,
    saves: 29,
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Ready-to-occupy retail shop situated directly in the heart of Jinnah Town commercial hub. Ideal for pharmacies, boutique studios, or courier centers.",
    features: ["Ground Floor", "Glass Front", "High Footfall", "Electricity & Backup", "Immediate Rental Income"],
    agent: {
      name: "Babar Kakar",
      phone: "+92 312 8899112",
      email: "babar@quettastate.com"
    }
  },
  {
    id: "prop-12",
    title: "5 Marla Residential Plot in Developed Society",
    location: "Nawan Killi",
    address: "Green City Phase 1, Nawan Killi, Quetta",
    type: "Plot",
    purpose: "Buy",
    price: 5200000,
    priceFormatted: "PKR 5.2 Million",
    bedrooms: 0,
    bathrooms: 0,
    area: "5 Marla",
    status: "For Sale",
    verified: true,
    featured: false,
    views: 180,
    saves: 15,
    images: [
      "https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Budget-friendly 5 Marla residential plot in rapidly developing sector with paved roads, streetlights, and piped gas line laying in progress.",
    features: ["Budget Friendly", "Paved Road Access", "Electricity Available", "Clear Registry", "Fast Growing Area"],
    agent: {
      name: "Sardar Asfand Baloch",
      phone: "+92 300 8371920",
      email: "asfand@quettastate.com"
    }
  },
  {
    id: "prop-13",
    title: "Spacious 4-Bed House with Basement",
    location: "Satellite Town",
    address: "Near Liaquat Park, Satellite Town, Quetta",
    type: "House",
    purpose: "Buy",
    price: 24500000,
    priceFormatted: "PKR 24.5 Million",
    bedrooms: 4,
    bathrooms: 4,
    area: "12 Marla",
    status: "For Sale",
    verified: true,
    featured: true,
    views: 430,
    saves: 50,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Solid double-storey brick house with full storage basement, wide 40ft front road, marble floors, and reliable sweet water connection.",
    features: ["Storage Basement", "Sweet Water Supply", "Marble Flooring", "Wide Street", "Near Parks & Masjid"],
    agent: {
      name: "Malik Jahangir",
      phone: "+92 333 7812345",
      email: "jahangir@quettastate.com"
    }
  },
  {
    id: "prop-14",
    title: "Commercial Office Floor in Tech Hub",
    location: "Samungli Road",
    address: "Silicon Tower, Samungli Road, Quetta",
    type: "Office",
    purpose: "Rent",
    price: 150000,
    priceFormatted: "PKR 150,000 / mo",
    bedrooms: 0,
    bathrooms: 2,
    area: "2,000 Sq Ft",
    status: "For Rent",
    verified: true,
    featured: false,
    views: 320,
    saves: 40,
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Open floor plan modern commercial office space ready for software houses, call centers, or NGOs. Fully air conditioned with optical fiber network.",
    features: ["Open Workspace", "Optical Fiber", "Backup Generator", "Conference Room", "Ample Parking"],
    agent: {
      name: "Babar Kakar",
      phone: "+92 312 8899112",
      email: "babar@quettastate.com"
    }
  }
];

const DEFAULT_LEADS = [
  {
    id: "lead-1",
    name: "Ahmed Khan",
    phone: "+92 333 7891234",
    email: "ahmed.khan@gmail.com",
    budget: 25000000,
    budgetFormatted: "PKR 25.0M",
    location: "Jinnah Town",
    propertyType: "House",
    purpose: "Buy",
    bedrooms: 3,
    timeline: "Within 1 Month",
    requirements: "Wants a family-friendly house near beaconhouse school, must have solar setup and underground water storage.",
    score: 92,
    priority: "Hot",
    status: "Qualified",
    createdAt: "2026-08-28",
    notes: "Very serious cash buyer. Verified bank pre-approval. Pre-scheduled visit for Sector B house."
  },
  {
    id: "lead-2",
    name: "Dr. Farooq Tareen",
    phone: "+92 300 9238471",
    email: "dr.farooq@bmcq.edu.pk",
    budget: 38000000,
    budgetFormatted: "PKR 38.0M",
    location: "Samungli Road",
    propertyType: "Villa",
    purpose: "Buy",
    bedrooms: 5,
    timeline: "Immediate (1-2 Weeks)",
    requirements: "Looking for 1 Kanal Spanish elevation villa with ample lawn and separate servant quarters.",
    score: 95,
    priority: "Hot",
    status: "Qualified",
    createdAt: "2026-08-29",
    notes: "Senior doctor at BMC. Needs quiet secure community with 4-car garage."
  },
  {
    id: "lead-3",
    name: "Sadia Baloch",
    phone: "+92 313 8847291",
    email: "sadia.baloch@unicef.org",
    budget: 70000,
    budgetFormatted: "PKR 70,000 / mo",
    location: "Satellite Town",
    propertyType: "Apartment",
    purpose: "Rent",
    bedrooms: 2,
    timeline: "Within 1 Month",
    requirements: "Prefers 2nd floor with elevator, security guard, and power backup.",
    score: 84,
    priority: "Hot",
    status: "Qualified",
    createdAt: "2026-08-30",
    notes: "UN staff member on 2-year posting. Excellent rental profile."
  },
  {
    id: "lead-4",
    name: "Capt. Bilal Kasi",
    phone: "+92 321 8291038",
    email: "bilal.kasi@army.gov.pk",
    budget: 55000000,
    budgetFormatted: "PKR 55.0M",
    location: "Cantt",
    propertyType: "Villa",
    purpose: "Buy",
    bedrooms: 5,
    timeline: "2-3 Months",
    requirements: "Spacious house inside Cantt or immediate boundary. Needs pine tree garden.",
    score: 76,
    priority: "Warm",
    status: "Qualified",
    createdAt: "2026-08-25",
    notes: "Relocating to Quetta Garrison in November. Wants verified legal title only."
  },
  {
    id: "lead-5",
    name: "Tariq Jamali",
    phone: "+92 334 8172635",
    email: "tariq.jamali@gmail.com",
    budget: 18000000,
    budgetFormatted: "PKR 18.0M",
    location: "Brewery Road",
    propertyType: "House",
    purpose: "Buy",
    bedrooms: 3,
    timeline: "3-6 Months",
    requirements: "Single storey preferred for elderly parents. Close to main hospital.",
    score: 68,
    priority: "Warm",
    status: "Qualified",
    createdAt: "2026-08-26",
    notes: "Exploring options, budget is somewhat flexible if property has borehole."
  },
  {
    id: "lead-6",
    name: "Engr. Usman Durrani",
    phone: "+92 345 7718293",
    email: "usman.durrani@techpulse.pk",
    budget: 160000,
    budgetFormatted: "PKR 160,000 / mo",
    location: "Samungli Road",
    propertyType: "Office",
    purpose: "Rent",
    bedrooms: 0,
    timeline: "Immediate (1-2 Weeks)",
    requirements: "Requires 1,800+ sq ft open office floor with fiber internet and dedicated parking.",
    score: 88,
    priority: "Hot",
    status: "Qualified",
    createdAt: "2026-08-31",
    notes: "Expanding software development studio to Quetta branch."
  },
  {
    id: "lead-7",
    name: "Mrs. Hina Bugti",
    phone: "+92 301 9928172",
    email: "hina.bugti@outlook.com",
    budget: 12000000,
    budgetFormatted: "PKR 12.0M",
    location: "Jinnah Town",
    propertyType: "Shop",
    purpose: "Buy",
    bedrooms: 0,
    timeline: "6+ Months",
    requirements: "Looking for commercial investment property with guaranteed 8% minimum ROI.",
    score: 55,
    priority: "Warm",
    status: "Under Review",
    createdAt: "2026-08-20",
    notes: "Waiting for maturity of fixed deposit before final commitment."
  },
  {
    id: "lead-8",
    name: "Kamran Rind",
    phone: "+92 315 6672819",
    email: "kamran.rind@yahoo.com",
    budget: 5000000,
    budgetFormatted: "PKR 5.0M",
    location: "Sariab Road",
    propertyType: "Plot",
    purpose: "Buy",
    bedrooms: 0,
    timeline: "Undefined / Inquiring",
    requirements: "Just general inquiry on plot prices.",
    score: 35,
    priority: "Cold",
    status: "Unqualified",
    createdAt: "2026-08-22",
    notes: "Unverified budget, slow to respond on phone."
  }
];

const DEFAULT_VISITS = [
  {
    id: "visit-1",
    leadId: "lead-1",
    leadName: "Ahmed Khan",
    propertyId: "prop-1",
    propertyTitle: "Modern Luxury Family House",
    propertyLocation: "Jinnah Town",
    date: "2026-09-02",
    time: "4:00 PM",
    agentName: "Malik Jahangir",
    notes: "Customer specifically requested to inspect 10kW solar system and underground tank.",
    status: "Upcoming"
  },
  {
    id: "visit-2",
    leadId: "lead-2",
    leadName: "Dr. Farooq Tareen",
    propertyId: "prop-2",
    propertyTitle: "Executive Spanish Villa",
    propertyLocation: "Samungli Road",
    date: "2026-09-03",
    time: "5:30 PM",
    agentName: "Sardar Asfand Baloch",
    notes: "Dr. Tareen will bring his family architect to check layout.",
    status: "Upcoming"
  },
  {
    id: "visit-3",
    leadId: "lead-3",
    leadName: "Sadia Baloch",
    propertyId: "prop-3",
    propertyTitle: "Contemporary 2-Bed Luxury Apartment",
    propertyLocation: "Satellite Town",
    date: "2026-09-01",
    time: "2:00 PM",
    agentName: "Babar Kakar",
    notes: "Inspecting elevator operation and backup generator wiring.",
    status: "Completed"
  }
];

const DEFAULT_FOLLOWUPS = [
  {
    id: "fu-1",
    leadId: "lead-1",
    leadName: "Ahmed Khan",
    type: "Call",
    dueDate: "2026-09-01",
    dueTime: "11:30 AM",
    propertyTitle: "Modern Luxury Family House (Jinnah Town)",
    notes: "Confirm visit time and share registry map documents.",
    status: "Pending"
  },
  {
    id: "fu-2",
    leadId: "lead-2",
    leadName: "Dr. Farooq Tareen",
    type: "WhatsApp",
    dueDate: "2026-09-01",
    dueTime: "3:00 PM",
    propertyTitle: "Executive Spanish Villa (Samungli Road)",
    notes: "Send drone video walkthrough of 1-Kanal villa.",
    status: "Pending"
  },
  {
    id: "fu-3",
    leadId: "lead-6",
    leadName: "Engr. Usman Durrani",
    type: "Property Visit",
    dueDate: "2026-09-04",
    dueTime: "4:30 PM",
    propertyTitle: "Silicon Tower Office Space",
    notes: "Discuss lease terms and commercial fiber line.",
    status: "Pending"
  }
];

// --- State Management with LocalStorage ---
const DB_KEYS = {
  PROPERTIES: "QUETTA_STATE_PROPERTIES_V1",
  LEADS: "QUETTA_STATE_LEADS_V1",
  VISITS: "QUETTA_STATE_VISITS_V1",
  FOLLOWUPS: "QUETTA_STATE_FOLLOWUPS_V1",
  FAVORITES: "QUETTA_STATE_FAVORITES_V1",
  THEME: "QUETTA_STATE_THEME_V1"
};

class QuettaStateStore {
  constructor() {
    this.init();
  }

  init() {
    if (!localStorage.getItem(DB_KEYS.PROPERTIES)) {
      localStorage.setItem(DB_KEYS.PROPERTIES, JSON.stringify(DEFAULT_PROPERTIES));
    }
    if (!localStorage.getItem(DB_KEYS.LEADS)) {
      localStorage.setItem(DB_KEYS.LEADS, JSON.stringify(DEFAULT_LEADS));
    }
    if (!localStorage.getItem(DB_KEYS.VISITS)) {
      localStorage.setItem(DB_KEYS.VISITS, JSON.stringify(DEFAULT_VISITS));
    }
    if (!localStorage.getItem(DB_KEYS.FOLLOWUPS)) {
      localStorage.setItem(DB_KEYS.FOLLOWUPS, JSON.stringify(DEFAULT_FOLLOWUPS));
    }
    if (!localStorage.getItem(DB_KEYS.FAVORITES)) {
      localStorage.setItem(DB_KEYS.FAVORITES, JSON.stringify(["prop-1", "prop-2"]));
    }
  }

  getProperties() {
    return JSON.parse(localStorage.getItem(DB_KEYS.PROPERTIES) || "[]");
  }

  saveProperties(props) {
    localStorage.setItem(DB_KEYS.PROPERTIES, JSON.stringify(props));
  }

  getLeads() {
    return JSON.parse(localStorage.getItem(DB_KEYS.LEADS) || "[]");
  }

  saveLeads(leads) {
    localStorage.setItem(DB_KEYS.LEADS, JSON.stringify(leads));
  }

  getVisits() {
    return JSON.parse(localStorage.getItem(DB_KEYS.VISITS) || "[]");
  }

  saveVisits(visits) {
    localStorage.setItem(DB_KEYS.VISITS, JSON.stringify(visits));
  }

  getFollowups() {
    return JSON.parse(localStorage.getItem(DB_KEYS.FOLLOWUPS) || "[]");
  }

  saveFollowups(fu) {
    localStorage.setItem(DB_KEYS.FOLLOWUPS, JSON.stringify(fu));
  }

  getFavorites() {
    return JSON.parse(localStorage.getItem(DB_KEYS.FAVORITES) || "[]");
  }

  toggleFavorite(propId) {
    let favs = this.getFavorites();
    if (favs.includes(propId)) {
      favs = favs.filter(id => id !== propId);
    } else {
      favs.push(propId);
    }
    localStorage.setItem(DB_KEYS.FAVORITES, JSON.stringify(favs));
    return favs;
  }

  resetAllData() {
    localStorage.setItem(DB_KEYS.PROPERTIES, JSON.stringify(DEFAULT_PROPERTIES));
    localStorage.setItem(DB_KEYS.LEADS, JSON.stringify(DEFAULT_LEADS));
    localStorage.setItem(DB_KEYS.VISITS, JSON.stringify(DEFAULT_VISITS));
    localStorage.setItem(DB_KEYS.FOLLOWUPS, JSON.stringify(DEFAULT_FOLLOWUPS));
    localStorage.setItem(DB_KEYS.FAVORITES, JSON.stringify(["prop-1", "prop-2"]));
  }
}

const store = new QuettaStateStore();

// --- Business Logic: AI Matching & Lead Scoring Engine ---
/**
 * Property Matching Weighted Algorithm:
 * - Budget Match: 30%
 * - Location Match: 25%
 * - Property Type: 15%
 * - Bedrooms: 15%
 * - Purpose: 10%
 * - Features / Keywords: 5%
 */
function calculatePropertyMatch(criteria, property) {
  let score = 0;
  const reasons = [];
  const compromises = [];

  // 1. Purpose (10%)
  if (!criteria.purpose || criteria.purpose === "All" || property.purpose.toLowerCase() === criteria.purpose.toLowerCase()) {
    score += 10;
    reasons.push(`Matches your ${property.purpose} preference`);
  } else {
    compromises.push(`Property is for ${property.purpose}, while your target is ${criteria.purpose}`);
  }

  // 2. Budget Match (30%)
  if (criteria.budget && Number(criteria.budget) > 0) {
    const budget = Number(criteria.budget);
    const propPrice = property.price;
    if (propPrice <= budget) {
      score += 30;
      reasons.push(`Within your budget (PKR ${formatCurrency(propPrice)})`);
    } else if (propPrice <= budget * 1.15) {
      score += 18;
      compromises.push(`Slightly above budget by ${(Math.round(((propPrice - budget) / budget) * 100))}%`);
    } else if (propPrice <= budget * 1.3) {
      score += 8;
      compromises.push(`Exceeds preferred budget by ${(Math.round(((propPrice - budget) / budget) * 100))}%`);
    } else {
      score += 0;
      compromises.push(`Significantly exceeds budget limit`);
    }
  } else {
    score += 30; // budget not constrained
  }

  // 3. Location Match (25%)
  if (!criteria.location || criteria.location === "All" || criteria.location === "Quetta") {
    score += 25;
    reasons.push(`Located in Quetta prime area (${property.location})`);
  } else if (property.location.toLowerCase().includes(criteria.location.toLowerCase())) {
    score += 25;
    reasons.push(`Exact preferred location match in ${property.location}`);
  } else {
    score += 5;
    compromises.push(`Located in ${property.location} instead of preferred ${criteria.location}`);
  }

  // 4. Property Type (15%)
  if (!criteria.propertyType || criteria.propertyType === "All" || property.type.toLowerCase() === criteria.propertyType.toLowerCase()) {
    score += 15;
    reasons.push(`Exact property type match (${property.type})`);
  } else {
    compromises.push(`Property is a ${property.type}, while looking for ${criteria.propertyType}`);
  }

  // 5. Bedrooms (15%)
  if (criteria.bedrooms && criteria.bedrooms !== "Any" && Number(criteria.bedrooms) > 0) {
    const targetBeds = Number(criteria.bedrooms);
    if (property.bedrooms >= targetBeds) {
      score += 15;
      reasons.push(`Meets bedroom requirement (${property.bedrooms} Beds)`);
    } else {
      const diff = targetBeds - property.bedrooms;
      score += Math.max(0, 15 - diff * 8);
      compromises.push(`Has ${property.bedrooms} bedrooms (you requested ${targetBeds})`);
    }
  } else {
    score += 15;
  }

  // 6. Keywords / Features (5%)
  if (criteria.requirements && criteria.requirements.trim().length > 0) {
    const reqWords = criteria.requirements.toLowerCase().split(/\s+/);
    let matchedFeatures = 0;
    const combinedText = (property.description + " " + property.features.join(" ")).toLowerCase();

    reqWords.forEach(word => {
      if (word.length > 3 && combinedText.includes(word)) {
        matchedFeatures++;
      }
    });

    if (matchedFeatures > 0) {
      score += 5;
      reasons.push(`Matches your specific keywords and lifestyle preferences`);
    } else {
      score += 2;
    }
  } else {
    score += 5;
  }

  score = Math.min(100, Math.max(10, Math.round(score)));

  // Generate Humanized AI Explanation
  let aiExplanation = `This property is a ${score >= 85 ? "strong" : score >= 65 ? "moderate" : "potential"} match because it is located in ${property.location}, priced at ${property.priceFormatted}, and offers ${property.bedrooms > 0 ? property.bedrooms + " bedrooms" : property.area}.`;
  if (reasons.length > 1) {
    aiExplanation += ` Key highlights: ${reasons.slice(0, 2).join(", ")}.`;
  }

  return {
    score,
    reasons,
    compromises,
    aiExplanation
  };
}

/**
 * Lead Qualification Weighted Algorithm:
 * - Budget Confirmed: 25%
 * - Location Confirmed: 20%
 * - Property Type: 15%
 * - Timeline: 20%
 * - Contact Details: 10%
 * - Requirements Detailed: 10%
 */
function calculateLeadScore(lead) {
  let score = 0;

  // Budget (+25)
  if (lead.budget && Number(lead.budget) > 0) score += 25;

  // Location (+20)
  if (lead.location && lead.location !== "Other" && lead.location.trim().length > 0) score += 20;

  // Type (+15)
  if (lead.propertyType && lead.propertyType.trim().length > 0) score += 15;

  // Timeline (+20)
  if (lead.timeline) {
    if (lead.timeline.includes("Immediate") || lead.timeline.includes("1-2 Weeks")) score += 20;
    else if (lead.timeline.includes("1 Month")) score += 18;
    else if (lead.timeline.includes("2-3 Months")) score += 12;
    else score += 5;
  }

  // Contact (+10)
  if (lead.phone && lead.email) score += 10;
  else if (lead.phone || lead.email) score += 5;

  // Requirements (+10)
  if (lead.requirements && lead.requirements.length > 15) score += 10;
  else if (lead.requirements) score += 5;

  let priority = "Cold";
  if (score >= 80) priority = "Hot";
  else if (score >= 50) priority = "Warm";

  return { score, priority };
}

// --- Formatters & Helpers ---
function formatCurrency(amount) {
  if (typeof amount !== "number") return amount;
  if (amount >= 10000000) {
    return (amount / 10000000).toFixed(1) + " Crore / " + (amount / 1000000).toFixed(1) + "M";
  } else if (amount >= 1000000) {
    return (amount / 1000000).toFixed(1) + "M";
  } else {
    return amount.toLocaleString();
  }
}

function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// --- Toast Notification Manager ---
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "✓";
  if (type === "warning") icon = "⚠️";
  if (type === "error") icon = "✕";
  if (type === "info") icon = "ℹ️";

  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-msg">${escapeHTML(message)}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hiding");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 4000);
}

// --- Application UI Controller ---
class QuettaStateApp {
  constructor() {
    this.currentFilter = {
      purpose: "All",
      location: "All",
      propertyType: "All",
      priceRange: "All",
      bedrooms: "Any",
      status: "All"
    };

    this.activeGallery = {
      images: [],
      currentIndex: 0
    };

    this.init();
  }

  init() {
    this.initTheme();
    this.initNavbar();
    this.initSearch();
    this.initPropertyGrid();
    this.initAIStudio();
    this.initLeadDashboard();
    this.initModals();
    this.initAnalyticsCharts();
    this.updateFavBadge();
    this.setupEventListeners();
  }

  // --- Theme Management ---
  initTheme() {
    const savedTheme = localStorage.getItem(DB_KEYS.THEME) || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeButton(savedTheme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem(DB_KEYS.THEME, nextTheme);
    this.updateThemeButton(nextTheme);
    showToast(`Switched to ${nextTheme === "dark" ? "Dark" : "Light"} Mode`, "info");
    this.initAnalyticsCharts();
  }

  updateThemeButton(theme) {
    const btn = document.getElementById("themeToggleBtn");
    if (btn) {
      btn.innerHTML = theme === "dark" ? "☀️" : "🌙";
      btn.title = `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`;
    }
  }

  // --- Sticky Navigation & Mobile Drawer ---
  initNavbar() {
    const hamburger = document.getElementById("hamburgerBtn");
    const drawer = document.getElementById("mobileNavDrawer");
    const overlay = document.getElementById("mobileNavOverlay");
    const closeBtn = document.getElementById("mobileNavClose");

    const toggleDrawer = (open) => {
      if (open) {
        drawer.classList.add("open");
        overlay.classList.add("open");
      } else {
        drawer.classList.remove("open");
        overlay.classList.remove("open");
      }
    };

    if (hamburger) hamburger.addEventListener("click", () => toggleDrawer(true));
    if (closeBtn) closeBtn.addEventListener("click", () => toggleDrawer(false));
    if (overlay) overlay.addEventListener("click", () => toggleDrawer(false));

    // Nav Links Smooth Scroll
    document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          toggleDrawer(false);
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }

  // --- Search Bar & Filters ---
  initSearch() {
    const searchForm = document.getElementById("searchPropertiesForm");
    const purposeTabs = document.querySelectorAll(".search-tab-btn");
    const toggleAdvBtn = document.getElementById("toggleAdvancedFilters");
    const advPanel = document.getElementById("advancedFiltersPanel");
    const clearBtn = document.getElementById("clearSearchFilters");

    purposeTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        purposeTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        this.currentFilter.purpose = tab.dataset.purpose || "All";
        this.filterAndRenderProperties();
      });
    });

    if (toggleAdvBtn && advPanel) {
      toggleAdvBtn.addEventListener("click", () => {
        advPanel.classList.toggle("open");
        toggleAdvBtn.innerHTML = advPanel.classList.contains("open") 
          ? "Hide Advanced Filters ▲" 
          : "Advanced Filters ▼";
      });
    }

    if (searchForm) {
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.readSearchFormValues();
        this.filterAndRenderProperties();
        const gridSection = document.getElementById("properties");
        if (gridSection) gridSection.scrollIntoView({ behavior: "smooth" });
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (searchForm) searchForm.reset();
        purposeTabs.forEach(t => t.classList.remove("active"));
        purposeTabs[0].classList.add("active");
        this.currentFilter = {
          purpose: "All",
          location: "All",
          propertyType: "All",
          priceRange: "All",
          bedrooms: "Any",
          status: "All"
        };
        this.filterAndRenderProperties();
        showToast("Filters reset to all properties", "info");
      });
    }
  }

  readSearchFormValues() {
    const loc = document.getElementById("searchLocation")?.value || "All";
    const type = document.getElementById("searchType")?.value || "All";
    const beds = document.getElementById("searchBeds")?.value || "Any";
    const priceRange = document.getElementById("searchPriceRange")?.value || "All";
    const status = document.getElementById("searchStatus")?.value || "All";

    this.currentFilter.location = loc;
    this.currentFilter.propertyType = type;
    this.currentFilter.bedrooms = beds;
    this.currentFilter.priceRange = priceRange;
    this.currentFilter.status = status;
  }

  // --- Property Grid Renderer ---
  initPropertyGrid() {
    this.filterAndRenderProperties();
  }

  filterAndRenderProperties() {
    const grid = document.getElementById("propertyListingsGrid");
    if (!grid) return;

    let props = store.getProperties();

    // Apply Filter Criteria
    if (this.currentFilter.purpose !== "All") {
      props = props.filter(p => p.purpose.toLowerCase() === this.currentFilter.purpose.toLowerCase());
    }
    if (this.currentFilter.location !== "All") {
      props = props.filter(p => p.location.toLowerCase().includes(this.currentFilter.location.toLowerCase()));
    }
    if (this.currentFilter.propertyType !== "All") {
      props = props.filter(p => p.type.toLowerCase() === this.currentFilter.propertyType.toLowerCase());
    }
    if (this.currentFilter.status !== "All") {
      props = props.filter(p => p.status.toLowerCase() === this.currentFilter.status.toLowerCase());
    }
    if (this.currentFilter.bedrooms !== "Any") {
      const minBeds = parseInt(this.currentFilter.bedrooms, 10);
      props = props.filter(p => p.bedrooms >= minBeds);
    }
    if (this.currentFilter.priceRange !== "All") {
      if (this.currentFilter.priceRange === "under10") props = props.filter(p => p.price < 10000000);
      else if (this.currentFilter.priceRange === "10to20") props = props.filter(p => p.price >= 10000000 && p.price <= 20000000);
      else if (this.currentFilter.priceRange === "20to30") props = props.filter(p => p.price > 20000000 && p.price <= 30000000);
      else if (this.currentFilter.priceRange === "30to50") props = props.filter(p => p.price > 30000000 && p.price <= 50000000);
      else if (this.currentFilter.priceRange === "50plus") props = props.filter(p => p.price > 50000000);
    }

    const countDisplay = document.getElementById("propertyResultsCount");
    if (countDisplay) {
      countDisplay.textContent = `Showing ${props.length} Properties in Quetta`;
    }

    if (props.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>No properties match your current criteria</h3>
          <p>Try broadening your location, budget, or bedroom filters to see more results.</p>
          <button class="btn btn-primary" style="margin-top: 1.25rem;" onclick="app.resetFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    const favorites = store.getFavorites();

    grid.innerHTML = props.map(prop => {
      const isFav = favorites.includes(prop.id);
      const badgeClass = prop.purpose === "Buy" ? "badge-sale" : "badge-rent";
      const statusBadge = prop.status === "Sold" ? `<span class="badge badge-sold">Sold</span>` 
                        : prop.status === "Rented" ? `<span class="badge badge-rented">Rented</span>` : "";

      return `
        <div class="property-card" id="card-${prop.id}">
          <div class="property-media">
            <img src="${prop.images[0]}" alt="${escapeHTML(prop.title)}" class="property-img" loading="lazy">
            <div class="property-badges">
              <span class="badge ${badgeClass}">${prop.purpose === "Buy" ? "For Sale" : "For Rent"}</span>
              ${statusBadge}
              ${prop.verified ? '<span class="badge badge-verified">✓ Verified</span>' : ''}
            </div>
            <button class="fav-toggle-btn ${isFav ? 'active' : ''}" onclick="app.toggleFav('${prop.id}')" title="${isFav ? 'Remove from favorites' : 'Save to favorites'}">
              ${isFav ? '❤️' : '🤍'}
            </button>
          </div>
          <div class="property-content">
            <div class="property-price-row">
              <div class="property-price">${prop.priceFormatted}</div>
              <div class="property-type-tag">${prop.type}</div>
            </div>
            <h3 class="property-title">${escapeHTML(prop.title)}</h3>
            <div class="property-location">
              <span>📍</span> ${escapeHTML(prop.location)}, Quetta
            </div>
            <div class="property-specs">
              <div class="spec-item">🛏️ ${prop.bedrooms > 0 ? prop.bedrooms + " Beds" : "N/A"}</div>
              <div class="spec-item">🚿 ${prop.bathrooms > 0 ? prop.bathrooms + " Baths" : "N/A"}</div>
              <div class="spec-item">📐 ${prop.area}</div>
            </div>
            <div class="property-footer">
              <button class="btn btn-secondary btn-sm" style="flex: 1;" onclick="app.openPropertyDetails('${prop.id}')">View Details</button>
              <button class="btn btn-primary btn-sm" style="flex: 1;" onclick="app.openVisitModalForProp('${prop.id}')">Schedule Visit</button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  resetFilters() {
    const clearBtn = document.getElementById("clearSearchFilters");
    if (clearBtn) clearBtn.click();
  }

  toggleFav(propId) {
    const favs = store.toggleFavorite(propId);
    const isFav = favs.includes(propId);
    this.updateFavBadge();
    this.filterAndRenderProperties();
    showToast(isFav ? "❤️ Property saved to favorites!" : "Property removed from favorites", "info");
  }

  updateFavBadge() {
    const favs = store.getFavorites();
    const badge = document.getElementById("navFavBadge");
    if (badge) {
      badge.textContent = favs.length;
      badge.style.display = favs.length > 0 ? "flex" : "none";
    }
  }

  openFavoritesModal() {
    const favIds = store.getFavorites();
    const properties = store.getProperties().filter(p => favIds.includes(p.id));
    const modalBody = document.getElementById("favModalBody");
    const modal = document.getElementById("favoritesModal");

    if (!modalBody || !modal) return;

    if (properties.length === 0) {
      modalBody.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🤍</div>
          <h4>You haven't saved any favorites yet.</h4>
          <p>Click the heart icon on any property card to save it for easy access and comparison.</p>
        </div>
      `;
    } else {
      modalBody.innerHTML = `
        <div class="property-grid" style="grid-template-columns: 1fr;">
          ${properties.map(p => `
            <div style="display: flex; gap: 1.25rem; background: var(--bg-surface-subtle); padding: 1rem; border-radius: var(--radius-lg); align-items: center;">
              <img src="${p.images[0]}" style="width: 110px; height: 80px; object-fit: cover; border-radius: var(--radius-md);" />
              <div style="flex-grow: 1;">
                <h4 style="font-size: 1.05rem; margin-bottom: 0.2rem;">${escapeHTML(p.title)}</h4>
                <div style="color: var(--color-emerald); font-weight: 700;">${p.priceFormatted}</div>
                <div style="font-size: 0.82rem; color: var(--text-muted);">📍 ${p.location} • ${p.area}</div>
              </div>
              <button class="btn btn-secondary btn-sm" onclick="app.openPropertyDetails('${p.id}'); app.closeModal('favoritesModal');">View</button>
              <button class="btn btn-sm" style="color: #ef4444;" onclick="app.toggleFav('${p.id}'); app.openFavoritesModal();">Remove</button>
            </div>
          `).join("")}
        </div>
      `;
    }

    modal.classList.add("open");
  }

  // --- AI Property Recommendations Studio ---
  initAIStudio() {
    const form = document.getElementById("aiRecommendationsForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.generateAIPropertyMatches();
    });
  }

  generateAIPropertyMatches() {
    const budgetVal = document.getElementById("aiBudget")?.value || "";
    const locVal = document.getElementById("aiLocation")?.value || "All";
    const typeVal = document.getElementById("aiType")?.value || "All";
    const bedsVal = document.getElementById("aiBeds")?.value || "Any";
    const purposeVal = document.getElementById("aiPurpose")?.value || "Buy";
    const reqsVal = document.getElementById("aiRequirements")?.value || "";

    const criteria = {
      budget: budgetVal ? parseFloat(budgetVal) : null,
      location: locVal,
      propertyType: typeVal,
      bedrooms: bedsVal,
      purpose: purposeVal,
      requirements: reqsVal
    };

    const properties = store.getProperties();
    const scoredList = properties.map(p => {
      const matchResult = calculatePropertyMatch(criteria, p);
      return {
        property: p,
        ...matchResult
      };
    });

    // Sort by match score descending
    scoredList.sort((a, b) => b.score - a.score);

    const topMatches = scoredList.slice(0, 4);
    const resultsContainer = document.getElementById("aiResultsContainer");

    if (!resultsContainer) return;

    resultsContainer.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
        <h3 style="font-size: 1.35rem; font-family: var(--font-body); font-weight: 700;">
          ✨ Quetta State AI Found ${topMatches.length} Matches for You
        </h3>
        <span class="brand-badge">Sorted by AI Match Accuracy</span>
      </div>
      ${topMatches.map(item => `
        <div class="ai-match-result-card">
          <div>
            <img src="${item.property.images[0]}" alt="${escapeHTML(item.property.title)}" style="width: 100%; height: 180px; object-fit: cover; border-radius: var(--radius-lg); margin-bottom: 0.75rem;" />
            <div class="match-score-display">
              <div class="score-circle" style="--score: ${item.score}">
                <span>${item.score}%</span>
              </div>
              <div>
                <div style="font-weight: 700; font-size: 1rem; color: var(--color-emerald);">Quetta State AI Match</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">${item.score >= 80 ? "🔥 Highly Recommended" : "Suitable Option"}</div>
              </div>
            </div>
            <button class="btn btn-primary btn-sm" style="width: 100%;" onclick="app.requestVisitFromAI('${item.property.id}')">Request Visit Now →</button>
          </div>
          <div>
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.4rem;">
              <h3 style="font-size: 1.25rem; font-family: var(--font-heading);">${escapeHTML(item.property.title)}</h3>
              <span style="font-weight: 800; color: var(--color-emerald); font-size: 1.2rem;">${item.property.priceFormatted}</span>
            </div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">
              📍 ${escapeHTML(item.property.location)}, Quetta • ${item.property.area} • ${item.property.bedrooms > 0 ? item.property.bedrooms + " Beds" : "Commercial"}
            </div>

            <!-- Why This Property Matches Section -->
            <div class="ai-rationale-box">
              <h5>🤖 Why this property matches you:</h5>
              <p>${item.aiExplanation}</p>
              <ul class="match-checklist">
                ${item.reasons.map(r => `<li class="positive">✓ ${r}</li>`).join("")}
                ${item.compromises.map(c => `<li class="negative">⚠️ ${c}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      `).join("")}
    `;

    showToast("✨ Quetta State AI computed personalized recommendations!", "success");
  }

  requestVisitFromAI(propId) {
    this.openVisitModalForProp(propId);
  }

  // --- Lead Management Dashboard (Agent Portal) ---
  initLeadDashboard() {
    this.renderDashboardStats();
    this.renderLeadsTable("All");
    this.renderUpcomingVisitsList();
    this.renderFollowupAlerts();

    // Lead Priority Filter Pills
    document.querySelectorAll(".dash-pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".dash-pill-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const priority = btn.dataset.priority || "All";
        this.renderLeadsTable(priority);
      });
    });
  }

  renderDashboardStats() {
    const leads = store.getLeads();
    const props = store.getProperties();
    const visits = store.getVisits();
    const followups = store.getFollowups();

    const totalLeadsEl = document.getElementById("statTotalLeads");
    const qualifiedLeadsEl = document.getElementById("statQualifiedLeads");
    const totalPropsEl = document.getElementById("statTotalProperties");
    const followupsDueEl = document.getElementById("statFollowupsDue");

    if (totalLeadsEl) totalLeadsEl.textContent = leads.length;
    if (qualifiedLeadsEl) qualifiedLeadsEl.textContent = leads.filter(l => l.score >= 50).length;
    if (totalPropsEl) totalPropsEl.textContent = props.length;
    if (followupsDueEl) followupsDueEl.textContent = followups.filter(f => f.status === "Pending").length;
  }

  renderLeadsTable(priorityFilter = "All") {
    const tbody = document.getElementById("leadsTableBody");
    if (!tbody) return;

    let leads = store.getLeads();

    if (priorityFilter !== "All") {
      leads = leads.filter(l => l.priority.toLowerCase() === priorityFilter.toLowerCase());
    }

    if (leads.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-muted);">
            No leads found in this priority tier.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = leads.map(lead => {
      const priClass = lead.priority === "Hot" ? "priority-hot" 
                     : lead.priority === "Warm" ? "priority-warm" : "priority-cold";
      const priIcon = lead.priority === "Hot" ? "🔥" : lead.priority === "Warm" ? "🟡" : "❄️";
      const fillClass = lead.priority === "Hot" ? "fill-hot" 
                      : lead.priority === "Warm" ? "fill-warm" : "fill-cold";

      return `
        <tr>
          <td>
            <div class="lead-name-cell">
              <span>${escapeHTML(lead.name)}</span>
              <span class="lead-contact-sub">${escapeHTML(lead.phone)} • ${escapeHTML(lead.email)}</span>
            </div>
          </td>
          <td><strong>${lead.budgetFormatted}</strong></td>
          <td>📍 ${escapeHTML(lead.location)}</td>
          <td>${lead.propertyType} (${lead.purpose})</td>
          <td>
            <div style="display: flex; align-items: center;">
              <div class="score-bar-wrap">
                <div class="score-bar-fill ${fillClass}" style="width: ${lead.score}%"></div>
              </div>
              <strong style="font-size: 0.85rem;">${lead.score}%</strong>
            </div>
          </td>
          <td>
            <span class="priority-tag ${priClass}">${priIcon} ${lead.priority}</span>
          </td>
          <td>
            <div style="display: flex; gap: 0.4rem;">
              <button class="btn btn-secondary btn-sm" onclick="app.openLeadProfile('${lead.id}')">Profile & Match</button>
              <button class="btn btn-primary btn-sm" onclick="app.openScheduleVisitForLead('${lead.id}')">Visit</button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  renderUpcomingVisitsList() {
    const container = document.getElementById("dashVisitsContainer");
    if (!container) return;

    const visits = store.getVisits();
    if (visits.length === 0) {
      container.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem;">No upcoming visits scheduled.</p>`;
      return;
    }

    container.innerHTML = visits.map(v => `
      <div class="visit-card-item">
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.2rem;">${escapeHTML(v.leadName)}</div>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.2rem;">🏠 ${escapeHTML(v.propertyTitle)}</div>
          <div style="font-size: 0.78rem; color: var(--color-emerald); font-weight: 600;">Agent: ${escapeHTML(v.agentName)} • 📍 ${escapeHTML(v.propertyLocation)}</div>
        </div>
        <div class="visit-date-badge">
          <div>${v.date}</div>
          <div style="font-size: 0.75rem; opacity: 0.9;">${v.time}</div>
        </div>
      </div>
    `).join("");
  }

  renderFollowupAlerts() {
    const container = document.getElementById("dashFollowupsContainer");
    if (!container) return;

    const followups = store.getFollowups().filter(f => f.status === "Pending");
    if (followups.length === 0) {
      container.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem;">All follow-up tasks are up to date! 🎉</p>`;
      return;
    }

    container.innerHTML = followups.map(fu => `
      <div class="alert-item">
        <div class="alert-content">
          <h5>⚠️ Follow-Up Due: ${escapeHTML(fu.leadName)}</h5>
          <p><strong>Action:</strong> ${fu.type} at ${fu.dueTime} regarding ${escapeHTML(fu.propertyTitle)}</p>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.2rem;">Note: ${escapeHTML(fu.notes)}</p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.4rem;">
          <button class="btn btn-primary btn-sm" onclick="app.completeFollowup('${fu.id}')">Done ✓</button>
          <button class="btn btn-secondary btn-sm" onclick="app.rescheduleFollowup('${fu.id}')">Reschedule</button>
        </div>
      </div>
    `).join("");
  }

  completeFollowup(fuId) {
    let fus = store.getFollowups();
    fus = fus.map(f => f.id === fuId ? { ...f, status: "Completed" } : f);
    store.saveFollowups(fus);
    this.renderFollowupAlerts();
    this.renderDashboardStats();
    showToast("Follow-up marked as completed ✓", "success");
  }

  rescheduleFollowup(fuId) {
    const newDate = prompt("Enter new follow-up date (YYYY-MM-DD):", "2026-09-05");
    if (!newDate) return;
    let fus = store.getFollowups();
    fus = fus.map(f => f.id === fuId ? { ...f, dueDate: newDate } : f);
    store.saveFollowups(fus);
    this.renderFollowupAlerts();
    showToast(`Follow-up rescheduled to ${newDate}`, "info");
  }

  // --- Lead Profile & AI Match Drawer/Modal ---
  openLeadProfile(leadId) {
    const lead = store.getLeads().find(l => l.id === leadId);
    if (!lead) return;

    const modal = document.getElementById("leadProfileModal");
    const modalBody = document.getElementById("leadProfileModalBody");
    if (!modal || !modalBody) return;

    // Calculate Top Matching Properties for this Lead
    const criteria = {
      budget: lead.budget,
      location: lead.location,
      propertyType: lead.propertyType,
      bedrooms: lead.bedrooms,
      purpose: lead.purpose,
      requirements: lead.requirements
    };

    const properties = store.getProperties();
    const matches = properties.map(p => ({
      property: p,
      ...calculatePropertyMatch(criteria, p)
    })).sort((a, b) => b.score - a.score).slice(0, 3);

    modalBody.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
        <!-- Lead Information -->
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <h3 style="font-size: 1.4rem;">${escapeHTML(lead.name)}</h3>
            <span class="priority-tag ${lead.priority === 'Hot' ? 'priority-hot' : 'priority-warm'}">
              ${lead.priority === 'Hot' ? '🔥 Hot Lead' : '🟡 Warm Lead'} (${lead.score}%)
            </span>
          </div>

          <div style="background: var(--bg-surface-subtle); padding: 1.25rem; border-radius: var(--radius-lg); margin-bottom: 1.25rem;">
            <div style="font-size: 0.85rem; margin-bottom: 0.4rem;"><strong>📞 Phone:</strong> ${escapeHTML(lead.phone)}</div>
            <div style="font-size: 0.85rem; margin-bottom: 0.4rem;"><strong>✉️ Email:</strong> ${escapeHTML(lead.email)}</div>
            <div style="font-size: 0.85rem; margin-bottom: 0.4rem;"><strong>💰 Budget:</strong> ${lead.budgetFormatted}</div>
            <div style="font-size: 0.85rem; margin-bottom: 0.4rem;"><strong>📍 Preferred Area:</strong> ${escapeHTML(lead.location)}, Quetta</div>
            <div style="font-size: 0.85rem; margin-bottom: 0.4rem;"><strong>🏠 Desired Property:</strong> ${lead.bedrooms > 0 ? lead.bedrooms + " Bed " : ""}${lead.propertyType} (${lead.purpose})</div>
            <div style="font-size: 0.85rem;"><strong>⏱️ Buying Timeline:</strong> ${lead.timeline}</div>
          </div>

          <div style="margin-bottom: 1.25rem;">
            <h4 style="font-size: 0.95rem; font-family: var(--font-body); font-weight: 700; margin-bottom: 0.4rem;">Specific Requirements:</h4>
            <p style="font-size: 0.88rem; background: var(--bg-surface-subtle); padding: 0.75rem; border-radius: var(--radius-md);">
              "${escapeHTML(lead.requirements)}"
            </p>
          </div>

          <div>
            <h4 style="font-size: 0.95rem; font-family: var(--font-body); font-weight: 700; margin-bottom: 0.4rem;">Agent Notes:</h4>
            <textarea id="leadNotesInput" class="form-control" rows="3">${escapeHTML(lead.notes)}</textarea>
            <button class="btn btn-secondary btn-sm" style="margin-top: 0.5rem;" onclick="app.saveLeadNotes('${lead.id}')">Save Notes</button>
          </div>
        </div>

        <!-- AI Property Matches for this Lead -->
        <div>
          <h4 style="font-size: 1.1rem; font-family: var(--font-body); font-weight: 700; margin-bottom: 1rem; color: var(--color-emerald);">
            🤖 Quetta State AI Recommendations for ${escapeHTML(lead.name)}
          </h4>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${matches.map(m => `
              <div style="border: 1px solid var(--border-light); padding: 1rem; border-radius: var(--radius-lg); background: var(--bg-surface);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                  <strong style="font-size: 0.95rem;">${escapeHTML(m.property.title)}</strong>
                  <span class="badge" style="background: var(--color-emerald); color: #fff;">${m.score}% Match</span>
                </div>
                <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                  📍 ${m.property.location} • ${m.property.priceFormatted}
                </div>
                <p style="font-size: 0.82rem; color: var(--text-main); margin-bottom: 0.5rem;">${m.aiExplanation}</p>
                <div style="display: flex; gap: 0.5rem;">
                  <button class="btn btn-primary btn-sm" onclick="app.scheduleVisitDirect('${lead.id}', '${m.property.id}')">Schedule Visit for this Property</button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    modal.classList.add("open");
  }

  saveLeadNotes(leadId) {
    const val = document.getElementById("leadNotesInput")?.value || "";
    let leads = store.getLeads();
    leads = leads.map(l => l.id === leadId ? { ...l, notes: val } : l);
    store.saveLeads(leads);
    showToast("Lead notes updated successfully ✓", "success");
  }

  // --- Visit Scheduling System ---
  openScheduleVisitForLead(leadId) {
    const lead = store.getLeads().find(l => l.id === leadId);
    this.openVisitModal(lead ? lead.id : null, null);
  }

  openVisitModalForProp(propId) {
    this.openVisitModal(null, propId);
  }

  scheduleVisitDirect(leadId, propId) {
    this.closeModal("leadProfileModal");
    this.openVisitModal(leadId, propId);
  }

  openVisitModal(leadId = null, propId = null) {
    const modal = document.getElementById("scheduleVisitModal");
    const leadSelect = document.getElementById("visitLeadSelect");
    const propSelect = document.getElementById("visitPropSelect");
    const dateInput = document.getElementById("visitDateInput");

    if (!modal || !leadSelect || !propSelect) return;

    // Populate Leads Dropdown
    const leads = store.getLeads();
    leadSelect.innerHTML = `<option value="">-- Select Customer / Lead --</option>` + 
      leads.map(l => `<option value="${l.id}" ${l.id === leadId ? 'selected' : ''}>${escapeHTML(l.name)} (${l.phone}) - Budget: ${l.budgetFormatted}</option>`).join("");

    // Populate Properties Dropdown
    const props = store.getProperties();
    propSelect.innerHTML = `<option value="">-- Select Quetta Property --</option>` + 
      props.map(p => `<option value="${p.id}" ${p.id === propId ? 'selected' : ''}>${escapeHTML(p.title)} (${p.location}) - ${p.priceFormatted}</option>`).join("");

    // Set default tomorrow date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (dateInput) {
      dateInput.value = tomorrow.toISOString().split("T")[0];
      dateInput.min = new Date().toISOString().split("T")[0];
    }

    modal.classList.add("open");
  }

  handleScheduleVisitSubmit(e) {
    e.preventDefault();
    const leadId = document.getElementById("visitLeadSelect")?.value;
    const propId = document.getElementById("visitPropSelect")?.value;
    const date = document.getElementById("visitDateInput")?.value;
    const time = document.getElementById("visitTimeInput")?.value || "4:00 PM";
    const agent = document.getElementById("visitAgentInput")?.value || "Malik Jahangir";
    const notes = document.getElementById("visitNotesInput")?.value || "Standard on-site inspection";

    if (!leadId || !propId || !date) {
      showToast("Please select customer, property, and valid date", "warning");
      return;
    }

    const lead = store.getLeads().find(l => l.id === leadId);
    const prop = store.getProperties().find(p => p.id === propId);

    const newVisit = {
      id: `visit-${Date.now()}`,
      leadId,
      leadName: lead ? lead.name : "Customer",
      propertyId: propId,
      propertyTitle: prop ? prop.title : "Property",
      propertyLocation: prop ? prop.location : "Quetta",
      date,
      time,
      agentName: agent,
      notes,
      status: "Upcoming"
    };

    const visits = store.getVisits();
    visits.push(newVisit);
    store.saveVisits(visits);

    // Also auto-generate a follow-up reminder
    const newFollowup = {
      id: `fu-${Date.now()}`,
      leadId,
      leadName: lead ? lead.name : "Customer",
      type: "Property Visit",
      dueDate: date,
      dueTime: time,
      propertyTitle: prop ? prop.title : "Quetta Property",
      notes: `Attend scheduled visit at ${prop ? prop.location : 'site'}.`,
      status: "Pending"
    };
    const followups = store.getFollowups();
    followups.push(newFollowup);
    store.saveFollowups(followups);

    this.closeModal("scheduleVisitModal");
    this.renderUpcomingVisitsList();
    this.renderFollowupAlerts();
    this.renderDashboardStats();

    showToast(`✓ Visit successfully scheduled with ${newVisit.leadName} for ${date} at ${time}!`, "success");
  }

  // --- Property Details Lightbox & Gallery ---
  openPropertyDetails(propId) {
    const prop = store.getProperties().find(p => p.id === propId);
    if (!prop) return;

    const modal = document.getElementById("propertyDetailsModal");
    const modalBody = document.getElementById("propertyDetailsModalBody");
    if (!modal || !modalBody) return;

    this.activeGallery.images = prop.images;
    this.activeGallery.currentIndex = 0;

    modalBody.innerHTML = `
      <div class="gallery-container">
        <div class="gallery-main">
          <img id="galleryMainImage" src="${prop.images[0]}" alt="${escapeHTML(prop.title)}" class="gallery-main-img" />
          ${prop.images.length > 1 ? `
            <button class="gallery-nav-btn gallery-prev" onclick="app.cycleGallery(-1)">◀</button>
            <button class="gallery-nav-btn gallery-next" onclick="app.cycleGallery(1)">▶</button>
          ` : ''}
        </div>
        ${prop.images.length > 1 ? `
          <div class="gallery-thumbs">
            ${prop.images.map((img, idx) => `
              <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" onclick="app.setGalleryIndex(${idx})">
                <img src="${img}" alt="thumbnail" />
              </div>
            `).join("")}
          </div>
        ` : ''}
      </div>

      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5rem;">
        <h2 style="font-size: 1.8rem; font-family: var(--font-heading);">${escapeHTML(prop.title)}</h2>
        <div style="font-size: 1.6rem; font-weight: 800; color: var(--color-emerald); font-family: var(--font-body);">${prop.priceFormatted}</div>
      </div>

      <div style="font-size: 1rem; color: var(--text-muted); margin-bottom: 1.5rem;">
        📍 ${escapeHTML(prop.address || prop.location + ", Quetta")} • <span style="font-weight: 700; color: var(--color-gold);">${prop.status}</span>
      </div>

      <div class="property-specs" style="font-size: 1rem; padding: 1rem 0; margin-bottom: 1.5rem;">
        <div class="spec-item">🛏️ ${prop.bedrooms > 0 ? prop.bedrooms + " Bedrooms" : "Commercial/Plot"}</div>
        <div class="spec-item">🚿 ${prop.bathrooms > 0 ? prop.bathrooms + " Bathrooms" : "N/A"}</div>
        <div class="spec-item">📐 Area: ${prop.area}</div>
        <div class="spec-item">🏢 Type: ${prop.type}</div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; font-family: var(--font-body); font-weight: 700;">Property Overview:</h4>
        <p style="color: var(--text-main); line-height: 1.7;">${escapeHTML(prop.description)}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; font-family: var(--font-body); font-weight: 700;">Features & Amenities:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${prop.features.map(f => `<span class="brand-badge" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;">✓ ${escapeHTML(f)}</span>`).join("")}
        </div>
      </div>

      <!-- Location Section -->
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; font-family: var(--font-body); font-weight: 700;">Location & Neighborhood:</h4>
        <div class="location-map-box">
          <div class="map-grid-overlay"></div>
          <div class="map-pin">
            <div class="map-pin-icon">📍</div>
            <div style="font-weight: 700; font-size: 1rem;">${escapeHTML(prop.location)}, Quetta</div>
            <div style="font-size: 0.75rem; opacity: 0.8;">Near Schools • Markets • Hospitals • Public Transport</div>
          </div>
        </div>
      </div>

      <!-- Agent Contact Details -->
      <div style="background: var(--bg-surface-subtle); padding: 1.25rem; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: space-between; flex-wrap: gap; margin-bottom: 1.5rem;">
        <div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">Assigned Property Agent:</div>
          <div style="font-size: 1.1rem; font-weight: 700;">${escapeHTML(prop.agent.name)}</div>
          <div style="font-size: 0.85rem; color: var(--color-emerald); font-weight: 600;">📞 ${escapeHTML(prop.agent.phone)}</div>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-primary btn-sm" onclick="app.openVisitModalForProp('${prop.id}'); app.closeModal('propertyDetailsModal');">Schedule Visit</button>
          <button class="btn btn-outline-gold btn-sm" onclick="app.askChatbotAboutProp('${escapeHTML(prop.title)}')">Ask Quetta AI</button>
        </div>
      </div>
    `;

    modal.classList.add("open");
  }

  cycleGallery(direction) {
    const len = this.activeGallery.images.length;
    if (len <= 1) return;
    this.activeGallery.currentIndex = (this.activeGallery.currentIndex + direction + len) % len;
    this.updateGalleryView();
  }

  setGalleryIndex(index) {
    this.activeGallery.currentIndex = index;
    this.updateGalleryView();
  }

  updateGalleryView() {
    const mainImg = document.getElementById("galleryMainImage");
    if (mainImg) {
      mainImg.src = this.activeGallery.images[this.activeGallery.currentIndex];
    }
    const thumbs = document.querySelectorAll(".gallery-thumb");
    thumbs.forEach((th, idx) => {
      if (idx === this.activeGallery.currentIndex) th.classList.add("active");
      else th.classList.remove("active");
    });
  }

  // --- Add / Manage Property Modal ---
  openAddPropertyModal() {
    const modal = document.getElementById("addPropertyModal");
    if (modal) modal.classList.add("open");
  }

  handleAddPropertySubmit(e) {
    e.preventDefault();
    const title = document.getElementById("addPropTitle")?.value || "";
    const type = document.getElementById("addPropType")?.value || "House";
    const purpose = document.getElementById("addPropPurpose")?.value || "Buy";
    const priceNum = parseFloat(document.getElementById("addPropPrice")?.value || "0");
    const location = document.getElementById("addPropLocation")?.value || "Jinnah Town";
    const area = document.getElementById("addPropArea")?.value || "10 Marla";
    const beds = parseInt(document.getElementById("addPropBeds")?.value || "0", 10);
    const baths = parseInt(document.getElementById("addPropBaths")?.value || "0", 10);
    const desc = document.getElementById("addPropDesc")?.value || "";
    const imgUrl = document.getElementById("addPropImage")?.value || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80";

    if (!title || priceNum <= 0) {
      showToast("Please enter a valid title and price", "warning");
      return;
    }

    const newProp = {
      id: `prop-${Date.now()}`,
      title,
      location,
      address: `${location}, Quetta`,
      type,
      purpose,
      price: priceNum,
      priceFormatted: purpose === "Buy" ? `PKR ${formatCurrency(priceNum)}` : `PKR ${priceNum.toLocaleString()} / mo`,
      bedrooms: beds,
      bathrooms: baths,
      area,
      status: purpose === "Buy" ? "For Sale" : "For Rent",
      verified: true,
      featured: false,
      views: 1,
      saves: 0,
      images: [imgUrl],
      description: desc || "Modern real estate property in prime Quetta neighborhood with complete amenities.",
      features: ["Verified Property", "Water Supply", "Electricity", "Safe Neighborhood"],
      agent: {
        name: "Malik Jahangir",
        phone: "+92 333 7812345",
        email: "agent@quettastate.com"
      }
    };

    const properties = store.getProperties();
    properties.unshift(newProp);
    store.saveProperties(properties);

    this.closeModal("addPropertyModal");
    document.getElementById("addPropertyForm")?.reset();
    this.filterAndRenderProperties();
    this.renderDashboardStats();

    showToast("✓ Property added successfully to Quetta State!", "success");
  }

  // --- Quick Filter Helper ---
  quickFilterSearch(location = "All", type = "All", priceRange = "All") {
    this.currentFilter.location = location;
    this.currentFilter.propertyType = type;
    this.currentFilter.priceRange = priceRange;

    // Update Search Dropdowns if present
    const locSelect = document.getElementById("searchLocation");
    const typeSelect = document.getElementById("searchType");
    const priceSelect = document.getElementById("searchPriceRange");
    if (locSelect) locSelect.value = location;
    if (typeSelect) typeSelect.value = type;
    if (priceSelect) priceSelect.value = priceRange;

    this.filterAndRenderProperties();
    const propsSection = document.getElementById("properties");
    if (propsSection) propsSection.scrollIntoView({ behavior: "smooth" });
    showToast(`Showing ${type === 'All' ? 'properties' : type + 's'} in ${location}`, "info");
  }

  // --- Analytics Visuals ---
  initAnalyticsCharts() {
    this.drawLocationDemandChart();
    this.drawLeadDistributionChart();
  }

  drawLocationDemandChart() {
    const canvas = document.getElementById("locationDemandCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width = canvas.parentElement?.clientWidth || 340;
    const h = canvas.height = 220;
    ctx.clearRect(0, 0, w, h);

    const locations = [
      { name: "Jinnah Town", value: 38 },
      { name: "Samungli Rd", value: 28 },
      { name: "Satellite Town", value: 18 },
      { name: "Airport Rd", value: 14 },
      { name: "Brewery Rd", value: 10 }
    ];

    const maxVal = 40;
    const barWidth = 32;
    const gap = (w - (barWidth * locations.length)) / (locations.length + 1);
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";

    locations.forEach((loc, i) => {
      const x = gap + i * (barWidth + gap);
      const barHeight = (loc.value / maxVal) * (h - 60);
      const y = h - 30 - barHeight;

      // Bar Fill
      const grad = ctx.createLinearGradient(0, y, 0, h - 30);
      grad.addColorStop(0, "#10b981");
      grad.addColorStop(1, "#059669");
      ctx.fillStyle = grad;
      ctx.fillRect(x, y, barWidth, barHeight);

      // Value label
      ctx.fillStyle = isDark ? "#f8fafc" : "#0f172a";
      ctx.font = "bold 11px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`${loc.value}%`, x + barWidth / 2, y - 6);

      // Category label
      ctx.fillStyle = isDark ? "#94a3b8" : "#64748b";
      ctx.font = "10px sans-serif";
      ctx.fillText(loc.name.split(" ")[0], x + barWidth / 2, h - 12);
    });
  }

  drawLeadDistributionChart() {
    const canvas = document.getElementById("leadQualityCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width = canvas.parentElement?.clientWidth || 340;
    const h = canvas.height = 220;
    ctx.clearRect(0, 0, w, h);

    const centerX = w / 2;
    const centerY = h / 2 - 10;
    const radius = 65;

    const leads = store.getLeads();
    const hotCount = leads.filter(l => l.priority === "Hot").length;
    const warmCount = leads.filter(l => l.priority === "Warm").length;
    const coldCount = leads.filter(l => l.priority === "Cold").length;
    const total = leads.length || 1;

    const segments = [
      { color: "#ef4444", count: hotCount, label: "Hot" },
      { color: "#f59e0b", count: warmCount, label: "Warm" },
      { color: "#3b82f6", count: coldCount, label: "Cold" }
    ];

    let startAngle = -0.5 * Math.PI;

    segments.forEach(seg => {
      const sliceAngle = (seg.count / total) * 2 * Math.PI;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.arc(centerX, centerY, radius - 24, startAngle + sliceAngle, startAngle, true);
      ctx.closePath();
      ctx.fillStyle = seg.color;
      ctx.fill();
      startAngle += sliceAngle;
    });

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    ctx.fillStyle = isDark ? "#f8fafc" : "#0f172a";
    ctx.font = "bold 16px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`${Math.round((hotCount / total) * 100)}%`, centerX, centerY + 6);

    ctx.font = "10px sans-serif";
    ctx.fillStyle = isDark ? "#94a3b8" : "#64748b";
    ctx.fillText("Hot Leads", centerX, h - 8);
  }

  // --- Modals Setup ---
  initModals() {
    document.querySelectorAll(".modal-close-btn, .modal-cancel-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const modal = btn.closest(".modal-overlay");
        if (modal) modal.classList.remove("open");
      });
    });

    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.classList.remove("open");
      });
    });
  }

  closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove("open");
  }

  // --- Event Listeners Setup ---
  setupEventListeners() {
    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) themeBtn.addEventListener("click", () => this.toggleTheme());

    const navFavBtn = document.getElementById("navFavBtn");
    if (navFavBtn) navFavBtn.addEventListener("click", () => this.openFavoritesModal());

    const addPropBtn = document.getElementById("navAddPropertyBtn");
    const heroListPropBtn = document.getElementById("heroListPropBtn");
    if (addPropBtn) addPropBtn.addEventListener("click", () => this.openAddPropertyModal());
    if (heroListPropBtn) heroListPropBtn.addEventListener("click", () => this.openAddPropertyModal());

    const addPropForm = document.getElementById("addPropertyForm");
    if (addPropForm) addPropForm.addEventListener("submit", (e) => this.handleAddPropertySubmit(e));

    const visitForm = document.getElementById("scheduleVisitForm");
    if (visitForm) visitForm.addEventListener("submit", (e) => this.handleScheduleVisitSubmit(e));

    window.addEventListener("resize", () => {
      this.initAnalyticsCharts();
    });
  }
}

// Global App Instance
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new QuettaStateApp();
});
