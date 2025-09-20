'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import BookingForm from '@/components/BookingForm';
import { toast } from 'react-toastify';

export default function Home() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookingSuccess = () => {
    setShowBookingForm(false);
    toast.success('🎉 Thank you for your booking request! We will contact you within 24 hours to confirm your session.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  const handleBookingCancel = () => {
    setShowBookingForm(false);
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30 z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-20"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">

            <Image
              src="/bdsm-cover.jpg"
              alt="Luxury BDSM dungeon room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-primary/30 to-black/60"></div>
        </div>
        <div className="w-full h-full flex items-center justify-center relative z-30">
          <div className="text-center z-30 relative">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Lifestyle <span className="text-primary">BDSM</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience freedom and exploration in our beautiful Lifestyle BDSM dungeon. 
              Come experience what freedom feels like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowBookingForm(true)}
                className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Your Session
              </button>
              <Link 
                href="/gallery" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-primary">Lifestyle BDSM</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
              Since its inception, Lifestyle BDSM Dungeon has been home for many Lifestyle Mistresses and renowned Dominatrices. 
              We operate on the philosophy of safe, sane and consensual play, built upon the foundation of education.
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              LIFESTYLE BDSM is steeped in tradition while governed by the BDSM principles of Honor, Loyalty, and Dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-accent/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Safety & Discretion</h3>
              <p className="text-gray-400">
                We prioritize your safety and discretion, ensuring secure and satisfying experiences 
                based on your personal fantasies. Your discretion is our priority.
              </p>
            </div>

            <div className="text-center p-8 bg-accent/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">BDSM Themed Rooms</h3>
              <p className="text-gray-400">
                With BDSM themed rooms and a fully-equipped facility, the possibilities of exploring 
                all elements of BDSM, including domination, submission, fetishes, feminization and fantasy role-play, are endless.
              </p>
            </div>

            <div className="text-center p-8 bg-accent/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Your Fantasy, Our Mission</h3>
              <p className="text-gray-400">
                We love having fun with those seeking a transformation or any form of exploration with a talented Dominatrix. 
                Your fantasy is our mission, and we aim to cater each experience to your particular needs and desires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-primary">Beautiful</span> Spaces
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Take a glimpse at our elegantly designed rooms and common areas.
            </p>
            <Link 
              href="/gallery" 
              className="inline-block bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Full Gallery
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Images */}
            {[
              "/_ (1).jpeg",
              "/_ (2).jpeg",
              "/_ (3).jpeg",
              "/_ (4).jpeg",
              "/_ (5).jpeg",
              "/_ (6).jpeg",
              "/_ (7).jpeg",
              "/_ (8).jpeg",
              "/_ (9).jpeg"
            ].map((imageUrl, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl aspect-[4/3]">
                <Image
                  src={imageUrl}
                  alt={`BDSM dungeon room ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to explore and have some fun?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            There is no repercussion for play, only the pleasure of exploring your deepest desires 
            knowing your fantasies and secrets are safe with us.
          </p>
          <button 
            onClick={() => setShowBookingForm(true)}
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Book Your Session Now
          </button>
        </div>
      </section>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <BookingForm
          onSuccess={handleBookingSuccess}
          onCancel={handleBookingCancel}
        />
      )}
    </div>
  );
}
