import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, LayoutDashboard, PieChart, FileText, Activity, ShieldCheck, ArrowRight, Download, CheckCircle, ChevronRight, Eye } from 'lucide-react';

interface InvestorPortalPageProps {
  onOpenInquiry: () => void;
}

export const InvestorPortalPage: React.FC<InvestorPortalPageProps> = ({ onOpenInquiry }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const features = [
    {
      icon: LayoutDashboard,
      title: "Easy Access",
      description: "Easy-to-read dashboard summarizing your portfolio."
    },
    {
      icon: PieChart,
      title: "Understand Your Assets",
      description: "Detailed information on each investment, equity multiple, and current value."
    },
    {
      icon: FileText,
      title: "Document Organization",
      description: "Paper documents are digitally stored, safe, and secure with CMy."
    },
    {
      icon: Activity,
      title: "Real-Time Performance",
      description: "Access to performance metrics with real-time dashboards."
    }
  ];

  const mockPortfolio = [
    {
      assetName: "The Carolina (Dallas, TX)",
      allocation: "$250,000",
      currentValuation: "$342,500",
      irr: "71.20%",
      distributions: "$68,400",
      status: "Actively Distributing"
    },
    {
      assetName: "Glendale Oaks (Dallas, TX)",
      allocation: "$150,000",
      currentValuation: "$289,500",
      irr: "49.41%",
      distributions: "$48,200",
      status: "Actively Distributing"
    },
    {
      assetName: "Reiger Park (Dallas, TX)",
      allocation: "$200,000",
      currentValuation: "$298,000",
      irr: "68.24%",
      distributions: "$54,000",
      status: "Stabilized"
    }
  ];

  return (
    <div className="bg-white text-black font-sans pb-20">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight">
            Backed By Innovative Technology.
          </h1>
          <p className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed">
            Our Investor Portal provides an easy-to-read dashboard that contains a summary of all our investments. It’s designed to keep complex information simple and organized.
          </p>
        </div>
      </section>

      {/* 4 High-End White Portal Feature Cards */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all space-y-4"
                >
                  <div className="w-12 h-12 bg-[#C5A880]/15 text-[#C5A880] rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-black">
                    {feat.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm font-sans leading-relaxed">
                    {feat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accredited Investor Interactive Portal Preview Simulator */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="bg-gray-50 p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-lg space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-6">
              <div>
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#C5A880]">
                  CMy Institutional Investor Network
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black mt-1">
                  Accredited Investor Portal Access
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-sans text-gray-600">256-Bit Encrypted Vault</span>
              </div>
            </div>

            {!isAuthenticated ? (
              <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-gray-200 space-y-5 shadow-sm">
                <div className="text-center space-y-1">
                  <div className="w-12 h-12 bg-[#C5A880]/15 text-[#C5A880] rounded-full flex items-center justify-center mx-auto mb-2">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-black">
                    Investor Authentication
                  </h4>
                  <p className="text-xs text-gray-500 font-sans">
                    Log in or test the preview dashboard below.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsAuthenticated(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-sans font-semibold text-gray-700 mb-1">
                      Registered Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="investor@accredited.com"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-sans outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-gray-700 mb-1">
                      Password / Security Code
                    </label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-sans outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#C5A880] hover:bg-[#b0936b] text-white font-sans text-xs uppercase tracking-wider font-semibold rounded-xl shadow-sm transition-colors"
                  >
                    Authenticate Investor Session
                  </button>
                </form>

                <div className="text-center pt-2">
                  <button
                    onClick={() => setIsAuthenticated(true)}
                    className="text-xs text-[#C5A880] hover:underline font-sans font-medium"
                  >
                    Launch Interactive Demo Portfolio Preview →
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-serif font-bold">
                      A
                    </div>
                    <div>
                      <h4 className="text-sm font-sans font-bold text-black">
                        Accredited Investor Demo Session
                      </h4>
                      <p className="text-xs text-gray-500 font-sans">
                        Portfolio ID: #DAVIS-RE-9402 • Total Allocated: $600,000
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsAuthenticated(false)}
                    className="text-xs font-sans text-gray-500 hover:text-black border border-gray-200 px-3 py-1.5 rounded-lg"
                  >
                    Log Out
                  </button>
                </div>

                {/* Performance Summary Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-gray-200">
                    <span className="text-xs text-gray-500 font-sans uppercase">Total Portfolio Value</span>
                    <div className="text-2xl font-serif font-bold text-black mt-1">$930,000</div>
                    <span className="text-[11px] text-emerald-600 font-sans font-semibold">+55.0% Overall Gain</span>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-gray-200">
                    <span className="text-xs text-gray-500 font-sans uppercase">Cumulative Distributions</span>
                    <div className="text-2xl font-serif font-bold text-[#C5A880] mt-1">$170,600</div>
                    <span className="text-[11px] text-gray-500 font-sans">Quarterly Wire Payouts</span>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-gray-200">
                    <span className="text-xs text-gray-500 font-sans uppercase">Weighted Avg IRR</span>
                    <div className="text-2xl font-serif font-bold text-black mt-1">62.95%</div>
                    <span className="text-[11px] text-gray-500 font-sans">2.2 Yrs Avg Hold</span>
                  </div>
                </div>

                {/* Asset Breakdown Table */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-x-auto">
                  <div className="p-4 border-b border-gray-100 font-serif font-bold text-lg text-black">
                    Active Asset Holdings
                  </div>
                  <table className="w-full text-left border-collapse text-xs font-sans">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 uppercase tracking-wider">
                        <th className="p-3.5">Property Asset</th>
                        <th className="p-3.5">Capital Committed</th>
                        <th className="p-3.5">Current Value</th>
                        <th className="p-3.5">Net IRR</th>
                        <th className="p-3.5">Distributions</th>
                        <th className="p-3.5">Documents</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {mockPortfolio.map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50">
                          <td className="p-3.5 font-semibold text-black">{item.assetName}</td>
                          <td className="p-3.5 text-gray-700">{item.allocation}</td>
                          <td className="p-3.5 text-black font-semibold">{item.currentValuation}</td>
                          <td className="p-3.5 text-[#C5A880] font-bold">{item.irr}</td>
                          <td className="p-3.5 text-gray-700">{item.distributions}</td>
                          <td className="p-3.5">
                            <button className="flex items-center gap-1 text-[#C5A880] hover:underline font-semibold">
                              <Download className="w-3.5 h-3.5" />
                              <span>2025 K-1</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black">
            Invest with davisRE
          </h2>
          <p className="text-gray-600 font-sans text-base leading-relaxed max-w-xl mx-auto">
            Leverage our expertise to build your real estate portfolio.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 bg-[#C5A880] hover:bg-[#b0936b] text-white font-sans text-sm uppercase tracking-wider font-semibold rounded-xl shadow-md transition-all"
            >
              Request Accredited Investor Information
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
