import React from 'react';
import { Building2, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { DavisReLogo } from './DavisReLogo';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-black border-t border-gray-100 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-100">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left cursor-pointer focus:outline-none hover:opacity-90 transition-opacity block"
            >
              <DavisReLogo variant="compact" size="sm" />
            </button>
            <p className="text-gray-600 text-sm max-w-md leading-relaxed font-sans">
              davisRE is an entrepreneurial real estate investment company in Dallas, TX with over 30 years of experience acquiring underperforming assets, executing value-add capital improvements, and delivering superior returns to accredited investors.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#52B768] text-white font-sans text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-[#409753] transition-colors"
              >
                Accredited Investor Access
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#52B768]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#52B768] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#52B768] transition-colors">
                  About Us & Team
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('strategy')} className="hover:text-[#52B768] transition-colors">
                  Strategy & Track Record
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-[#52B768] transition-colors">
                  Projects & Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portal')} className="hover:text-[#52B768] transition-colors">
                  Investor Portal
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#52B768] transition-colors">
                  Contact Headquarters
                </button>
              </li>
            </ul>
          </div>

          {/* Dallas Office Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#52B768]">
              Dallas Headquarters
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#52B768] shrink-0 mt-0.5" />
                <span>3000 San Jacinto St, Dallas, TX 75204, USA</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#52B768] shrink-0" />
                <a href="tel:2149790400" className="hover:text-[#52B768] transition-colors">
                  (214) 979-0400
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#52B768] shrink-0" />
                <a href="mailto:sdavis@davis-re.com" className="hover:text-[#52B768] transition-colors">
                  sdavis@davis-re.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Mandatory Rule 7 Footer Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
          <div>
            © {new Date().getFullYear()} davisRE. All Rights Reserved. Confidential Real Estate Syndication.
          </div>
          
          {/* Rule 7 Mandatory Line: Demo Made By getGoLive.io in 12px, rgba(0,0,0,0.5) */}
          <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.5)' }} className="font-sans font-medium">
            Demo Made By getGoLive.io
          </div>
        </div>
      </div>
    </footer>
  );
};
