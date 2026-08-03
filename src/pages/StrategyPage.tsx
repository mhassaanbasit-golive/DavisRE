import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, ShieldCheck, DollarSign, Clock, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { KEY_STATS } from '../data/properties';

interface StrategyPageProps {
  onNavigate: (page: string) => void;
  onOpenInquiry: () => void;
}

export const StrategyPage: React.FC<StrategyPageProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div className="bg-white text-black font-sans pb-20">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight">
            Investment Strategy for Dynamic Markets.
          </h1>
          <p className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed">
            At davisRE, our experience in repositioning underperforming assets puts us in an ideal position to capitalize on commercial real estate opportunities in today's ever-shifting landscape. We're currently focused on expanding our portfolio across Texas to include Class B and C multifamily communities. We believe this strategy will deliver the best long-term risk-adjusted returns.
          </p>
        </div>
      </section>

      {/* Financial Track Record Display */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-serif font-bold text-black">
              Proven Financial Track Record
            </h2>
            <p className="text-xs font-sans uppercase tracking-widest text-[#52B768] font-bold">
              Historical Portfolio Performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50/80 p-8 rounded-2xl border border-gray-200 text-center space-y-2"
            >
              <div className="text-5xl font-serif font-bold text-[#52B768]">
                44.42%
              </div>
              <div className="text-sm font-sans font-bold uppercase tracking-wider text-black pt-1">
                Average Net IRR
              </div>
              <p className="text-xs text-gray-500 font-sans">
                Internal rate of return across equity distributions
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50/80 p-8 rounded-2xl border border-gray-200 text-center space-y-2"
            >
              <div className="text-5xl font-serif font-bold text-[#52B768]">
                2.08x
              </div>
              <div className="text-sm font-sans font-bold uppercase tracking-wider text-black pt-1">
                Equity Multiple
              </div>
              <p className="text-xs text-gray-500 font-sans">
                Average capital multiplication factor
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50/80 p-8 rounded-2xl border border-gray-200 text-center space-y-2"
            >
              <div className="text-5xl font-serif font-bold text-[#52B768]">
                2-3 Yrs
              </div>
              <div className="text-sm font-sans font-bold uppercase tracking-wider text-black pt-1">
                Target Hold Period
              </div>
              <p className="text-xs text-gray-500 font-sans">
                Agile turnaround & recapitalization timeline
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Value Creation */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black">
              The Value-Add Investment Framework
            </h2>
            <p className="text-gray-600 font-sans text-sm mt-2 leading-relaxed">
              Our systematic approach to identifying underperforming properties and unlocking equity value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 bg-[#52B768]/15 text-[#52B768] rounded-xl flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">
                Off-Market Acquisition
              </h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                Leveraging deep Dallas broker relationships and proprietary sourcing to acquire distressed or mismanaged office, retail, and Class B/C residential assets below replacement cost.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 bg-[#52B768]/15 text-[#52B768] rounded-xl flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">
                Targeted Capital Improvements
              </h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                Executing immediate exterior curb-appeal modernizations, interior finish upgrades, mechanical efficiency enhancements, and community amenity additions within months of closing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 bg-[#52B768]/15 text-[#52B768] rounded-xl flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">
                Operational Optimization
              </h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                Replacing sluggish legacy property management with hands-on, aggressive asset management, tightening operational expenses, and optimizing rental rate structures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 bg-[#52B768]/15 text-[#52B768] rounded-xl flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">
                Strategic Capital Disposition
              </h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                Refinancing or selling stabilized assets within a tight 2-3 year window to return capital and realized profits to accredited equity partners.
              </p>
            </div>
          </div>

          <div className="pt-8 text-center">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-sans text-xs uppercase tracking-wider font-semibold rounded-xl hover:bg-gray-800 transition-colors"
            >
              <span>Explore Active Investment Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
