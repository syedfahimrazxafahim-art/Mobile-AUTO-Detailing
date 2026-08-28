/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingActions } from './components/FloatingActions';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookingPage } from './pages/BookingPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);

  // Scroll to top whenever the user switches page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
  };

  const handleOpenQuote = () => {
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />;
      case 'gallery':
        return <GalleryPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />;
      case 'service-areas':
        return <ServiceAreasPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'booking':
        return <BookingPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-[#EAEAEA] font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full relative">
        {renderActivePage()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* Interactive Quick Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        onNavigateToBooking={() => {
          handleCloseQuote();
          handleNavigate('booking');
        }}
      />

      {/* Sticky Floating Quick Contact & Action Buttons */}
      <FloatingActions onOpenQuote={handleOpenQuote} />
    </div>
  );
}
