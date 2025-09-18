'use client';

import Link from 'next/link';
import { useState } from 'react';
import BookingForm from './BookingForm';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookingSuccess = () => {
    setShowBookingForm(false);
    alert('Thank you for your booking request! We will contact you within 24 hours to confirm your session.');
  };

  const handleBookingCancel = () => {
    setShowBookingForm(false);
  };

  return (
    <nav className="bg-black border-b border-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-white font-bold text-xl">Lifestyle BDSM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/gallery" 
              className="text-white hover:text-primary transition-colors duration-200 font-medium"
            >
              Gallery
            </Link>
            <Link 
              href="/faq" 
              className="text-white hover:text-primary transition-colors duration-200 font-medium"
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            <button 
              onClick={() => setShowBookingForm(true)}
              className="bg-primary hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-primary/20">
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/gallery" 
                className="block px-3 py-2 text-white hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/faq" 
                className="block px-3 py-2 text-white hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-white hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button 
                onClick={() => {
                  setShowBookingForm(true);
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 bg-primary hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-200 mx-3 mt-2"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <BookingForm
          onSuccess={handleBookingSuccess}
          onCancel={handleBookingCancel}
        />
      )}
    </nav>
  );
}
