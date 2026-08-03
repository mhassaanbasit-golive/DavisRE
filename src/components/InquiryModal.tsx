import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Send, Lock, Building2 } from 'lucide-react';
import { PropertyAsset } from '../types';

interface InquiryModalProps {
  property?: PropertyAsset | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  property,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isAccredited: 'Yes',
    investmentAmount: '$100,000 - $250,000',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          message: `Inquiry regarding asset: ${property ? property.title : 'General Portfolio'}`,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg bg-white rounded-[24px] p-6 sm:p-8 text-black shadow-2xl z-10 border border-gray-100 my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-6">
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#52B768]">
                  Accredited Investor Relations
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black mt-1">
                  {property ? `Inquire: ${property.title}` : 'Invest with davisRE'}
                </h3>
                {property && (
                  <p className="text-xs text-gray-500 font-sans mt-1 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-[#52B768]" />
                    {property.address}, {property.cityState} | Target IRR: {property.irr}%
                  </p>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-sans font-semibold text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#52B768]"
                      placeholder="Stacey"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-semibold text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#52B768]"
                      placeholder="Davis"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-sans font-semibold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#52B768]"
                      placeholder="investor@domain.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-semibold text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#52B768]"
                      placeholder="(214) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-gray-700 mb-1">
                    Are you an accredited investor?
                  </label>
                  <div className="flex gap-4 pt-1">
                    {['Yes', 'No'].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer text-sm font-sans">
                        <input
                          type="radio"
                          name="accredited"
                          value={option}
                          checked={formData.isAccredited === option}
                          onChange={(e) => setFormData({ ...formData, isAccredited: e.target.value })}
                          className="accent-[#52B768]"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-gray-700 mb-1">
                    Target Investment Allocation
                  </label>
                  <select
                    value={formData.investmentAmount}
                    onChange={(e) => setFormData({ ...formData, investmentAmount: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#52B768]"
                  >
                    <option>$50,000 - $100,000</option>
                    <option>$100,000 - $250,000</option>
                    <option>$250,000 - $500,000</option>
                    <option>$500,000 - $1,000,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-gray-700 mb-1">
                    Additional Comments or Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#52B768]"
                    placeholder="Requesting confidential PPM or detailed financial model..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-[#52B768] hover:bg-[#409753] text-white font-sans font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    {loading ? (
                      <span>Transmitting confidential request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Investment Inquiry</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-gray-400 text-center font-sans flex items-center justify-center gap-1 mt-2">
                  <Lock className="w-3 h-3 text-[#52B768]" />
                  Confidential. For accredited investors only. davisRE Dallas, TX.
                </p>
              </form>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#52B768]/15 text-[#52B768] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">
                Inquiry Received
              </h3>
              <p className="text-sm text-gray-600 font-sans max-w-sm mx-auto leading-relaxed">
                Thank you for your interest in davisRE. An executive partner from our Dallas office will contact you directly to review accredited investment details.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-black text-white font-sans text-xs uppercase tracking-wider font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
