import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building, TrendingUp, ShieldCheck, Users, Briefcase, Award, CheckCircle2 } from 'lucide-react';
import { KEY_STATS, PROPERTY_ASSETS, TEAM_MEMBERS } from '../data/properties';
import { PropertyAsset } from '../types';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenPropertyModal: (property: PropertyAsset) => void;
  onOpenInquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenPropertyModal,
  onOpenInquiry,
}) => {
  return (
    <div className="bg-white text-black font-sans">
      {/* SECTION 1: HERO SECTION - High-key bright Dallas skyline architectural photo */}
      <section className="relative bg-white pt-8 pb-16 sm:py-20 lg:py-28 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Rule 8: No pre-headlines / eyebrows above heading! */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-[1.1] tracking-tight">
                Real Estate Investment & Development in Dallas, Texas.
              </h1>

              <h2 className="text-base sm:text-lg lg:text-xl text-gray-700 font-sans font-normal leading-relaxed max-w-2xl">
                With over 30 years of experience, davisRE is an expert in identifying underperforming properties, improving neighborhoods, and capitalizing on dynamic markets to deliver substantial returns.
              </h2>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onNavigate('projects')}
                  className="px-8 py-4 bg-[#52B768] hover:bg-[#409753] text-white font-sans text-sm font-semibold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Our Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-8 py-4 bg-white hover:bg-gray-50 text-black border border-gray-300 font-sans text-sm font-semibold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Meet the Team</span>
                </button>
              </div>

              {/* Key Trust Highlights */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-gray-100 text-xs text-gray-600 font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#52B768]" />
                  <span>Dallas CRE Syndicator</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#52B768]" />
                  <span>Accredited Investor Focused</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-[#52B768]" />
                  <span>Value-Add Repositioning</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: High-key architectural hero frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 aspect-[4/3] bg-gray-100">
                <img
                  src="/src/assets/images/dallas_skyline_hero_1785785217786.jpg"
                  alt="Dallas Texas Skyline Architectural View"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/20 text-black shadow-lg w-full">
                    <p className="text-xs uppercase font-sans font-bold text-[#52B768] tracking-wider">
                      Dallas Headquarters
                    </p>
                    <p className="text-sm font-serif font-bold text-black mt-0.5">
                      3000 San Jacinto St, Dallas, TX
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: KEY PERFORMANCE STATS - Dynamic Counters */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {KEY_STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 hover:border-[#52B768]/50 transition-all text-center sm:text-left"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#52B768] mt-2">
                  {stat.label}
                </div>
                <div className="text-xs font-sans text-gray-500 mt-1">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INVESTMENT PILLARS - 3 Editorial Cards */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black">
              Institutional Investment Pillars
            </h2>
            <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
              Targeting high-yield, low-risk opportunities across Dallas commercial repositioning and Texas Class B & C multifamily assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all space-y-4"
            >
              <div className="w-12 h-12 bg-[#52B768]/15 text-[#52B768] rounded-xl flex items-center justify-center">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">
                Office & Retail Repositioning
              </h3>
              <p className="text-gray-600 text-sm font-sans leading-relaxed">
                Acquirers of underperforming assets in the Dallas/Fort Worth market with a focus on strategic capital improvements.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all space-y-4"
            >
              <div className="w-12 h-12 bg-[#52B768]/15 text-[#52B768] rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">
                Class B & C Multifamily Communities
              </h3>
              <p className="text-gray-600 text-sm font-sans leading-relaxed">
                Expanding across Texas to deliver high-yield, low-risk returns through dynamic asset management.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all space-y-4"
            >
              <div className="w-12 h-12 bg-[#52B768]/15 text-[#52B768] rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">
                Superior Property Management
              </h3>
              <p className="text-gray-600 text-sm font-sans leading-relaxed">
                Delivering value-add returns to our investors via rigorous financial oversight and capital allocation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOMEPAGE PREVIEWS - Short previews for Strategy, Track Record, Team, Projects */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
          {/* Preview 1: Strategy & Track Record */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gray-50/80 p-8 sm:p-12 rounded-3xl border border-gray-100">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-3xl font-serif font-bold text-black">
                Proven Track Record in Dynamic Markets
              </h3>
              <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed max-w-2xl">
                Our strategic focus on repositioning underperforming commercial office and Class B/C multifamily assets has delivered an average 44.42% IRR and 2.08x Equity Multiple over 2-3 year hold periods.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onNavigate('strategy')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#52B768] text-white font-sans text-xs uppercase tracking-wider font-semibold rounded-xl hover:bg-[#409753] transition-colors"
              >
                <span>View Full Strategy →</span>
              </button>
            </div>
          </div>

          {/* Preview 2: Featured Projects */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="text-3xl font-serif font-bold text-black">
                  Active Property Portfolio
                </h3>
                <p className="text-gray-600 font-sans text-sm mt-1">
                  Click any property card to view complete IRR, Equity Multiple, and asset specs.
                </p>
              </div>
              <button
                onClick={() => onNavigate('projects')}
                className="text-xs font-sans font-bold uppercase tracking-widest text-[#52B768] hover:underline flex items-center gap-1"
              >
                <span>View Full Portfolio →</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROPERTY_ASSETS.slice(0, 3).map((property) => (
                <div
                  key={property.id}
                  onClick={() => onOpenPropertyModal(property)}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={property.heroImage}
                      alt={property.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider text-black border border-gray-200">
                      {property.category}
                    </div>
                  </div>
                  <div className="p-5 space-y-3">
                    <div>
                      <h4 className="text-xl font-serif font-bold text-black group-hover:text-[#52B768] transition-colors">
                        {property.title}
                      </h4>
                      <p className="text-xs text-gray-500 font-sans mt-0.5">
                        {property.address} | {property.cityState}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100 text-xs font-sans">
                      <div>
                        <span className="text-gray-400 block">IRR</span>
                        <strong className="text-black font-semibold text-sm">{property.irr.toFixed(2)}%</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Equity Multiple</span>
                        <strong className="text-black font-semibold text-sm">{property.equityMultiple.toFixed(2)}x</strong>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preview 3: Who We Are (Team) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gray-50/80 p-8 sm:p-12 rounded-3xl border border-gray-100">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-3xl font-serif font-bold text-black">
                Executive Leadership Team
              </h3>
              <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed max-w-2xl">
                Led by CEO Stacey Davis, a graduate of SMU Cox School of Business, our executive leadership brings decades of combined hands-on experience in Dallas CRE acquisitions, operations, and investor relations.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-black text-white font-sans text-xs uppercase tracking-wider font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                <span>View Full Team →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CALL TO ACTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black">
            Leverage Our Expertise To Build Your Portfolio.
          </h2>
          <p className="text-gray-600 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            davisRE invites accredited investors to explore co-investment opportunities across high-potential commercial and multifamily assets in Dallas, Texas.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 bg-[#52B768] hover:bg-[#409753] text-white font-sans text-sm font-semibold uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              Inquire About Current Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
