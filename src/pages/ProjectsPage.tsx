import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, TrendingUp, DollarSign, Layers, ArrowUpRight, Search } from 'lucide-react';
import { PROPERTY_ASSETS } from '../data/properties';
import { PropertyAsset } from '../types';

interface ProjectsPageProps {
  onOpenPropertyModal: (property: PropertyAsset) => void;
  onOpenInquiry: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onOpenPropertyModal,
  onOpenInquiry,
}) => {
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterOptions = ['All', 'Commercial', 'Multifamily', 'Repositioning'];

  const filteredProperties = PROPERTY_ASSETS.filter((property) => {
    const matchesFilter = filter === 'All' || property.category === filter;
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.cityState.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white text-black font-sans pb-20">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight">
            Our Active Real Estate Investments.
          </h1>
          <h2 className="text-base sm:text-lg text-gray-600 font-sans leading-relaxed">
            The davisRE portfolio boasts dozens of cost-efficient properties in dynamic and up-and-coming areas.
          </h2>
        </div>
      </section>

      {/* Filter Bar & Controls */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 sm:top-24 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pill Filters */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-semibold transition-all shrink-0 cursor-pointer ${
                  filter === opt
                    ? 'bg-black text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search address, name, city..."
              className="w-full bg-gray-50 border border-gray-200 rounded-full pl-10 pr-4 py-2 text-xs font-sans text-black placeholder-gray-400 outline-none focus:border-[#52B768]"
            />
          </div>
        </div>
      </section>

      {/* Property Cards Grid (White Cards with 16px radius as specified) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -6 }}
                  onClick={() => onOpenPropertyModal(property)}
                  className="bg-white rounded-[16px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    {/* Hero Thumbnail */}
                    <div className="relative h-52 bg-gray-100 overflow-hidden">
                      <img
                        src={property.heroImage}
                        alt={property.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider text-black border border-gray-200 shadow-sm">
                        {property.category}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/75 text-white backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-sans font-semibold flex items-center gap-1">
                        <span>Click for Details</span>
                        <ArrowUpRight className="w-3 h-3 text-[#52B768]" />
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-black group-hover:text-[#52B768] transition-colors">
                          {property.title}
                        </h3>
                        <p className="text-xs text-gray-500 font-sans mt-1 flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5 text-[#52B768]" />
                          {property.address} • {property.cityState}
                        </p>
                      </div>

                      {/* Financial Metrics Box */}
                      <div className="grid grid-cols-2 gap-3 bg-gray-50/80 p-3.5 rounded-xl border border-gray-100">
                        <div>
                          <span className="text-[10px] font-sans uppercase font-bold text-gray-400 block">
                            Historical IRR
                          </span>
                          <span className="text-xl font-serif font-bold text-black">
                            {property.irr.toFixed(2)}%
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] font-sans uppercase font-bold text-gray-400 block">
                            Equity Multiple
                          </span>
                          <span className="text-xl font-serif font-bold text-black">
                            {property.equityMultiple.toFixed(2)}x
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-gray-600 font-sans line-clamp-2 leading-relaxed">
                        {property.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Button Trigger */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenPropertyModal(property);
                      }}
                      className="w-full py-2.5 bg-gray-100 hover:bg-[#52B768] text-black hover:text-white font-sans text-xs uppercase tracking-wider font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5"
                    >
                      <span>View Asset Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
              <p className="text-gray-500 font-sans text-sm">
                No active properties match your current search criteria.
              </p>
              <button
                onClick={() => {
                  setFilter('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-black text-white font-sans text-xs uppercase tracking-wider font-semibold rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
