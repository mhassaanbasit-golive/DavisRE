import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Building2, TrendingUp, DollarSign, Layers, Hash, Calendar, ArrowRight } from 'lucide-react';
import { PropertyAsset } from '../types';

interface BurtonPropertyModalProps {
  property: PropertyAsset | null;
  onClose: () => void;
  onInquire: (property: PropertyAsset) => void;
}

export const BurtonPropertyModal: React.FC<BurtonPropertyModalProps> = ({
  property,
  onClose,
  onInquire,
}) => {
  if (!property) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay: rgba(0,0,0,0.4) with backdrop-filter: blur(4px) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Modal Container: max-width: 800px, border-radius: 24px, pure white #FFFFFF, black text */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-[800px] bg-white text-black rounded-[24px] shadow-2xl overflow-hidden z-10 border border-gray-100 my-8"
        >
          {/* Close button - clean white background with black X icon in top right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 bg-white/90 hover:bg-white text-black rounded-full shadow-md backdrop-blur-md transition-all duration-200 border border-gray-200 hover:scale-105"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 w-full bg-gray-100 overflow-hidden">
            <img
              src={property.heroImage}
              alt={property.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div>
                <span className="inline-block px-3 py-1 bg-[#52B768] text-white text-xs tracking-wider uppercase font-sans font-semibold rounded-full mb-2">
                  {property.category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                  {property.title}
                </h3>
                <p className="text-white/90 text-sm font-sans flex items-center gap-1.5 mt-1">
                  <Building2 className="w-4 h-4 text-[#52B768]" />
                  {property.address}, {property.cityState}
                </p>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Description */}
            <p className="text-gray-700 font-sans text-sm sm:text-base leading-relaxed">
              {property.description}
            </p>

            {/* 2-Column Specs Grid (IRR, Equity Multiple, Asset Class, Total Units) */}
            <div className="border-t border-b border-gray-100 py-6">
              <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#52B768] mb-4">
                Asset Investment Specifications
              </h4>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-sans uppercase tracking-wider mb-1">
                    <TrendingUp className="w-4 h-4 text-[#52B768]" />
                    Internal Rate of Return
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-black">
                    {property.irr.toFixed(2)}% <span className="text-xs text-gray-400 font-sans font-normal">IRR</span>
                  </div>
                </div>

                <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-sans uppercase tracking-wider mb-1">
                    <DollarSign className="w-4 h-4 text-[#52B768]" />
                    Equity Multiple
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-black">
                    {property.equityMultiple.toFixed(2)}x <span className="text-xs text-gray-400 font-sans font-normal">EqMult</span>
                  </div>
                </div>

                <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-sans uppercase tracking-wider mb-1">
                    <Layers className="w-4 h-4 text-[#52B768]" />
                    Asset Class
                  </div>
                  <div className="text-base sm:text-lg font-sans font-semibold text-black">
                    {property.assetClass}
                  </div>
                </div>

                <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-sans uppercase tracking-wider mb-1">
                    <Hash className="w-4 h-4 text-[#52B768]" />
                    Total Units / Scale
                  </div>
                  <div className="text-base sm:text-lg font-sans font-semibold text-black">
                    {property.totalUnits}
                  </div>
                </div>
              </div>
            </div>

            {/* Hold period indicator */}
            <div className="flex items-center justify-between text-xs text-gray-500 font-sans px-2">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#52B768]" />
                Target Hold Period: <strong className="text-black font-medium">{property.holdPeriod}</strong>
              </span>
              <span className="text-gray-400">Headquarters: Dallas, TX</span>
            </div>

            {/* Brand green button at bottom */}
            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  onInquire(property);
                }}
                className="w-full py-4 bg-[#52B768] hover:bg-[#409753] text-white font-sans font-semibold rounded-xl text-base tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200"
              >
                Inquire About This Asset
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
