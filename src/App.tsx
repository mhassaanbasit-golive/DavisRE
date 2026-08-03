import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { StrategyPage } from './pages/StrategyPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { InvestorPortalPage } from './pages/InvestorPortalPage';
import { ContactPage } from './pages/ContactPage';
import { BurtonPropertyModal } from './components/BurtonPropertyModal';
import { InquiryModal } from './components/InquiryModal';
import { AskDavisAiWidget } from './components/AskDavisAiWidget';
import { PropertyAsset } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProperty, setSelectedProperty] = useState<PropertyAsset | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [inquiryProperty, setInquiryProperty] = useState<PropertyAsset | null>(null);

  // Scroll to top on page navigation
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPropertyModal = (property: PropertyAsset) => {
    setSelectedProperty(property);
  };

  const handleClosePropertyModal = () => {
    setSelectedProperty(null);
  };

  const handleOpenInquiry = (property?: PropertyAsset | null) => {
    setInquiryProperty(property || null);
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
    setInquiryProperty(null);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col justify-between selection:bg-[#52B768] selection:text-white">
      {/* Persistent Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry(null)}
      />

      {/* Main Page Routing View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenPropertyModal={handleOpenPropertyModal}
            onOpenInquiry={() => handleOpenInquiry(null)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onOpenInquiry={() => handleOpenInquiry(null)} />
        )}

        {currentPage === 'strategy' && (
          <StrategyPage
            onNavigate={handleNavigate}
            onOpenInquiry={() => handleOpenInquiry(null)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onOpenPropertyModal={handleOpenPropertyModal}
            onOpenInquiry={() => handleOpenInquiry(null)}
          />
        )}

        {currentPage === 'portal' && (
          <InvestorPortalPage onOpenInquiry={() => handleOpenInquiry(null)} />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Persistent Footer ending strictly with Demo Made By getGoLive.io */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry(null)}
      />

      {/* Burton Group-Style Lightbox Modal (Rule 2) */}
      <BurtonPropertyModal
        property={selectedProperty}
        onClose={handleClosePropertyModal}
        onInquire={(prop) => handleOpenInquiry(prop)}
      />

      {/* General / Asset Specific Investment Inquiry Modal */}
      <InquiryModal
        property={inquiryProperty}
        isOpen={isInquiryOpen}
        onClose={handleCloseInquiry}
      />

      {/* "Ask davisRE AI" Golden Glow Pill Widget (Rule 4) */}
      <AskDavisAiWidget />
    </div>
  );
}
