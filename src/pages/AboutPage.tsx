import React from 'react';
import { motion } from 'motion/react';
import { Mail, Shield, Award, Heart, Users, CheckCircle2 } from 'lucide-react';
import { CORE_VALUES, TEAM_MEMBERS } from '../data/properties';

interface AboutPageProps {
  onOpenInquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="bg-white text-black font-sans pb-20">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight">
            Driven by Integrity, Prosperity, and Confidence.
          </h1>
          <p className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed">
            davisRE is an entrepreneurial real estate investment company delivering value-add returns to our investors by identifying emerging markets, acquiring underperforming assets, and improving communities through strategic capital investment. We offer exceptional returns to investors and provide executive leadership with an established track record in office, retail, and multifamily assets.
          </p>
        </div>
      </section>

      {/* Core Values Section (5-Step Elegance Layout) */}
      <section className="py-16 sm:py-20 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black">
              Our Core Institutional Values
            </h2>
            <p className="text-xs font-sans uppercase tracking-widest text-[#52B768] font-bold">
              The 5 Principles Guiding Every Investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {CORE_VALUES.map((value) => (
              <motion.div
                key={value.number}
                whileHover={{ y: -4 }}
                className="bg-gray-50/80 p-6 rounded-2xl border border-gray-100 hover:border-[#52B768] transition-all space-y-3 relative overflow-hidden"
              >
                <div className="text-3xl font-serif font-bold text-[#52B768]">
                  {value.number}
                </div>
                <h3 className="text-xl font-serif font-bold text-black">
                  {value.title}
                </h3>
                <p className="text-xs text-gray-600 font-sans leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section (Clean White Cards, Studio Headshots on Plain White BG) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black">
              Executive Leadership & Management
            </h2>
            <p className="text-gray-600 font-sans text-sm">
              Extensive hands-on real estate investment and asset management experience in Dallas, Texas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all space-y-6 p-6"
              >
                {/* Studio Headshot on Plain White Background */}
                <div className="w-full aspect-square bg-white rounded-xl overflow-hidden border border-gray-100 p-2">
                  <img
                    src={member.headshot}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-black">
                      {member.name}
                    </h3>
                    <p className="text-xs font-sans font-bold uppercase tracking-wider text-[#52B768] mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="pt-2 border-t border-gray-100">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-black hover:text-[#52B768] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#52B768]" />
                      <span>{member.email}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="bg-gray-50/80 p-8 rounded-2xl border border-gray-200 max-w-3xl mx-auto text-center space-y-4 mt-12">
            <h3 className="text-2xl font-serif font-bold text-black">
              Partner With Our Dallas Executive Leadership
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-sans max-w-lg mx-auto leading-relaxed">
              We invite accredited investors, institutional partners, and commercial property owners to connect with our acquisitions team today.
            </p>
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 bg-[#52B768] hover:bg-[#409753] text-white font-sans text-xs uppercase tracking-wider font-semibold rounded-xl shadow-sm transition-all"
            >
              Contact Our Team Directly
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
