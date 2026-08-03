export interface PropertyAsset {
  id: string;
  title: string;
  address: string;
  cityState: string;
  irr: number; // e.g. 71.20
  equityMultiple: number; // e.g. 2.36
  category: 'Commercial' | 'Multifamily' | 'Repositioning';
  assetClass: string;
  totalUnits: string;
  holdPeriod: string;
  heroImage: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  email: string;
  headshot: string;
}

export interface CoreValue {
  number: string;
  title: string;
  description: string;
}

export interface KeyStat {
  value: string;
  numericValue?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
