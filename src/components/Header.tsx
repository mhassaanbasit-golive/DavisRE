import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Lock, Building2 } from 'lucide-react';
import { DavisReLogo } from './DavisReLogo';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenInquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'strategy', label: 'Strategy & Track Record' },
    { id: 'projects', label: 'Projects & Portfolio' },
    { id: 'portal', label: 'Investor Portal' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 sm:h-24 flex items-center justify-between">
        {/* Brand Logo - Official davisRE logo from image */}
        <button
          onClick={() => handleNavClick('home')}
          className="group text-left cursor-pointer focus:outline-none py-1 hover:opacity-90 transition-opacity"
          aria-label="davisRE Home"
        >
          <DavisReLogo variant="compact" size="sm" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative font-sans text-xs uppercase tracking-widest font-semibold py-1 transition-colors cursor-pointer ${
                  isActive ? 'text-black font-bold' : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#52B768]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('portal')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-sans font-semibold text-black hover:text-[#52B768] transition-colors"
          >
            <Lock className="w-3.5 h-3.5 text-[#52B768]" />
            Investor Login
          </button>
          <button
            onClick={onOpenInquiry}
            className="px-5 py-2.5 bg-[#52B768] hover:bg-[#409753] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Invest With Us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button - Rule 6 */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-black hover:text-[#52B768] focus:outline-none"
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Strict Mobile Architecture Menu Drawer - Rule 6 */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden px-5 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-3 border-b border-gray-100 pb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-sans text-sm uppercase tracking-wider font-semibold py-2 transition-colors flex items-center justify-between ${
                    currentPage === item.id ? 'text-[#52B768] font-bold' : 'text-black'
                  }`}
                >
                  <span>{item.label}</span>
                  {currentPage === item.id && (
                    <span className="w-2 h-2 rounded-full bg-[#52B768]" />
                  )}
                </button>
              ))}
            </div>

            {/* CTAs inside Mobile Menu - Rule 6 Requirement */}
            <div className="pt-2 space-y-3">
              <button
                onClick={() => handleNavClick('portal')}
                className="w-full py-3 bg-gray-50 border border-gray-200 text-black font-sans text-xs font-semibold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4 text-[#52B768]" />
                Investor Portal Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3.5 bg-[#52B768] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Invest With davisRE</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
