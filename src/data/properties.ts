import { PropertyAsset, TeamMember, CoreValue, KeyStat } from '../types';

export const KEY_STATS: KeyStat[] = [
  {
    value: "30+",
    numericValue: 30,
    suffix: "+ Years",
    label: "30+ Years of Experience",
    sublabel: "Decades of Dallas CRE expertise"
  },
  {
    value: "44.42%",
    numericValue: 44.42,
    suffix: "%",
    label: "44.42% Average IRR",
    sublabel: "Proven historical track record"
  },
  {
    value: "2.08x",
    numericValue: 2.08,
    suffix: "x",
    label: "2.08x Equity Multiple",
    sublabel: "Disciplined capital multiplication"
  },
  {
    value: "2-3 Years",
    numericValue: 3,
    suffix: " Yrs",
    label: "2-3 Year Hold Period",
    sublabel: "Agile value-add repositioning"
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    number: "01",
    title: "Integrity",
    description: "We do what we say we are going to do."
  },
  {
    number: "02",
    title: "Prosperity",
    description: "We strive to prosper personally and professionally."
  },
  {
    number: "03",
    title: "Confidence",
    description: "We are confident in our abilities to succeed."
  },
  {
    number: "04",
    title: "Family",
    description: "We put our families first."
  },
  {
    number: "05",
    title: "Team",
    description: "We are a team of professionals."
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "stacey-davis",
    name: "Stacey Davis",
    role: "CEO & Managing Partner",
    bio: "Stacey has decades of experience to provide davisRE and its investors with aggressive asset management. A graduate of the Cox School of Business at Southern Methodist University, Stacey prides herself on building meaningful relationships and leading her team with integrity.",
    email: "sdavis@davis-re.com",
    headshot: "/stacey-davis.jpg"
  },
  {
    id: "andrew-hanson",
    name: "Andrew Hanson",
    role: "Head of Acquisitions",
    bio: "Andrew leads acquisitions at davisRE, sourcing and acquiring value-add multifamily investments. With a deep network and 5 years of experience, he identifies high-potential properties across Texas.",
    email: "ahanson@davis-re.com",
    headshot: "/andrew-hanson.jpg"
  },
  {
    id: "donna-perkins",
    name: "Donna Perkins",
    role: "Director of Operations",
    bio: "Donna has over 20 years of experience supporting senior management. She ensures seamless operations and is revered for her attention to detail and organizational prowess.",
    email: "dperkins@davis-re.com",
    headshot: "/donna-perkins.jpg"
  }
];

export const PROPERTY_ASSETS: PropertyAsset[] = [
  {
    id: "carolina",
    title: "The Carolina",
    address: "4929 Reiger",
    cityState: "Dallas, TX",
    irr: 71.20,
    equityMultiple: 2.36,
    category: "Multifamily",
    assetClass: "Class B Multifamily",
    totalUnits: "32 Units",
    holdPeriod: "2.5 Years",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
    description: "Value-add multifamily acquisition in historic East Dallas. Executed interior modernizations, exterior landscape upgrades, and optimized lease rates to deliver an exceptional 71.20% IRR for equity partners."
  },
  {
    id: "glendale-oaks",
    title: "Glendale Oaks",
    address: "5656 Live Oak",
    cityState: "Dallas, TX",
    irr: 49.41,
    equityMultiple: 3.86,
    category: "Multifamily",
    assetClass: "Class C to B Repositioning",
    totalUnits: "48 Units",
    holdPeriod: "3.0 Years",
    heroImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200",
    description: "Complete physical and operational property turnaround on Live Oak. Repositioned community assets, implemented professional on-site management, and achieved a 3.86x equity multiple."
  },
  {
    id: "paragon",
    title: "Paragon",
    address: "4718-4722 Reiger",
    cityState: "Dallas, TX",
    irr: 27.25,
    equityMultiple: 2.37,
    category: "Repositioning",
    assetClass: "Urban Repositioning",
    totalUnits: "24 Units",
    holdPeriod: "2.0 Years",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    description: "Targeted repositioning in the urban core of East Dallas. Enhanced curb appeal, upgraded building mechanicals, and optimized leasing structures to yield a 2.37x equity return."
  },
  {
    id: "reiger-park",
    title: "Reiger Park",
    address: "4618 Reiger",
    cityState: "Dallas, TX",
    irr: 68.24,
    equityMultiple: 2.08,
    category: "Multifamily",
    assetClass: "Class B Multifamily",
    totalUnits: "28 Units",
    holdPeriod: "2.0 Years",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    description: "Strategic infill acquisition capitalizing on Dallas urban renewal trends. Rapid execution of capital improvement strategy resulted in a 68.24% net IRR to investors."
  },
  {
    id: "the-canopy",
    title: "The Canopy",
    address: "9201 Kanis",
    cityState: "Little Rock, AK",
    irr: 35.00,
    equityMultiple: 2.80,
    category: "Multifamily",
    assetClass: "Class B Multifamily",
    totalUnits: "112 Units",
    holdPeriod: "3.0 Years",
    heroImage: "/multifamily-complex.jpg",
    description: "112-unit garden-style community acquisition. Enhanced operational cash flows through proactive asset management and institutional capital upgrades."
  },
  {
    id: "highland-midtown",
    title: "Highland Midtown",
    address: "400 N University",
    cityState: "Little Rock, AK",
    irr: 16.67,
    equityMultiple: 1.66,
    category: "Commercial",
    assetClass: "Commercial Office & Retail",
    totalUnits: "64,000 Sq Ft",
    holdPeriod: "3.0 Years",
    heroImage: "/commercial-office.jpg",
    description: "Prime commercial corridor repositioning. Secured long-term credit tenants and modernized physical infrastructure to stabilize risk-adjusted cash flows."
  },
  {
    id: "marquee-gaston",
    title: "The Marquee on Gaston",
    address: "5515 Gaston",
    cityState: "Dallas, TX",
    irr: 16.39,
    equityMultiple: 1.43,
    category: "Multifamily",
    assetClass: "Class B Multifamily",
    totalUnits: "36 Units",
    holdPeriod: "2.0 Years",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    description: "Boutique Gaston Avenue residential asset. Streamlined operational expenses, refreshed common amenities, and established consistent occupancy performance."
  },
  {
    id: "the-newport",
    title: "The Newport",
    address: "4950 Live Oak",
    cityState: "Dallas, TX",
    irr: 30.37,
    equityMultiple: 1.50,
    category: "Multifamily",
    assetClass: "Class B Multifamily",
    totalUnits: "40 Units",
    holdPeriod: "2.0 Years",
    heroImage: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1200",
    description: "Infill Dallas residential opportunity. Rebranded and repositioned asset to capture strong market demand along the Live Oak corridor."
  },
  {
    id: "the-view",
    title: "The View",
    address: "800-808 Blaylock",
    cityState: "Dallas, TX",
    irr: 50.55,
    equityMultiple: 2.66,
    category: "Repositioning",
    assetClass: "Urban Repositioning Asset",
    totalUnits: "52 Units",
    holdPeriod: "2.5 Years",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    description: "Underperforming asset acquisition transformed through targeted capital expenditure, achieving a 50.55% IRR and 2.66x equity multiple."
  },
  {
    id: "the-wilshire",
    title: "The Wilshire",
    address: "811 Skillman",
    cityState: "Dallas, TX",
    irr: 56.69,
    equityMultiple: 2.30,
    category: "Multifamily",
    assetClass: "Class B Multifamily",
    totalUnits: "44 Units",
    holdPeriod: "2.0 Years",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    description: "Skillman Street multifamily community. Capitalized on dynamic Dallas submarket growth to deliver exceptional risk-adjusted investor distribution."
  }
];
