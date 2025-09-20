'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What are your operating hours?",
    answer: "We operate 24/7 to accommodate your schedule. Our dungeon is available for bookings at any time that works for you."
  },
  {
    id: 2,
    question: "Do you provide equipment and toys?",
    answer: "Yes, all our rooms come fully equipped with premium BDSM equipment, toys, and accessories. We maintain the highest standards of cleanliness and safety."
  },
  {
    id: 3,
    question: "Is there a minimum age requirement?",
    answer: "All participants must be 18 years or older."
  },
  {
    id: 4,
    question: "What safety measures do you have in place?",
    answer: "Safety is our top priority. We follow SSC (Safe, Sane, Consensual) principles, provide safety equipment, and have emergency protocols in place."
  },
  {
    id: 5,
    question: "Can I book for multiple people?",
    answer: "Yes, we accommodate both individual and group bookings. Please specify the number of participants when making your reservation."
  },
  {
    id: 6,
    question: "What is your cancellation policy?",
    answer: "We require 24-hour notice for cancellations. Same-day cancellations may incur a fee. Please contact us to discuss any changes to your booking."
  },
  {
    id: 7,
    question: "Do you offer photography services?",
    answer: "Yes, we offer professional photography services for those who want to document their sessions. This must be arranged in advance."
  },
  {
    id: 8,
    question: "Is parking available?",
    answer: "Yes, we provide secure, private parking for all our clients. Your discretion and privacy are always protected."
  },
  {
    id: 9,
    question: "Where are you located?",
    answer: "We have over 83 dungeons managed by Legacy BDSM with over 75 in the United States. Discover A Legacy BDSM dungeon near you Now. Privately nestled above a bustling neighborhood, with cafes, restaurants, bars, pharmacy, banks, and shops all within walking distance. You will certainly feel far removed from all of this, once you ascend into our space. With soundproof walls, beautiful lighting and private Dungeon Rooms."
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
    subject: ''
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast.success('❓ Thank you for your question! We will get back to you within 24 hours.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
    setFormData({ name: '', email: '', question: '', subject: '' });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our BDSM dungeon services, 
            or ask us anything you&apos;d like to know.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqData.map((item) => (
              <div key={item.id} className="bg-accent/50 rounded-xl border border-primary/20 overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent/70 transition-colors duration-200"
                >
                  <h3 className="text-white font-semibold text-lg">{item.question}</h3>
                  <svg 
                    className={`w-5 h-5 text-primary transition-transform duration-200 ${
                      openItems.includes(item.id) ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask a Question Form */}
      <section className="py-20 bg-gradient-to-b from-accent to-black">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Still Have <span className="text-primary">Questions?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Can&apos;t find what you&apos;re looking for? Ask us directly and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Subject *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none transition-colors duration-200"
              >
                <option value="">Select a subject</option>
                <option value="booking">Booking & Reservations</option>
                <option value="equipment">Equipment & Facilities</option>
                <option value="safety">Safety & Guidelines</option>
                <option value="pricing">Pricing & Packages</option>
                <option value="other">Other Questions</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Your Question *</label>
              <textarea
                name="question"
                value={formData.question}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-200 resize-none"
                placeholder="Please describe your question in detail..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-red-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 transform hover:scale-105"
            >
              Send Question
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
