'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface BookingFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export default function BookingForm({ onSuccess, onCancel }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mistressName: '',
    hours: '1',
    minutes: '0',
    date: '',
    time: '',
    specialRequests: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value 
    }));
  };

  const calculateTotal = () => {
    const hours = parseFloat(formData.hours) || 0;
    const minutes = parseFloat(formData.minutes) || 0;
    const totalMinutes = (hours * 60) + minutes;
    const totalHours = totalMinutes / 60;
    
    if (totalHours >= 24) {
      return 500; // Overnight rate
    }
    return Math.ceil(totalHours * 200); // $200 per hour, rounded up
  };

  const getDurationText = () => {
    const hours = parseFloat(formData.hours) || 0;
    const minutes = parseFloat(formData.minutes) || 0;
    const totalMinutes = (hours * 60) + minutes;
    const totalHours = totalMinutes / 60;
    
    if (totalHours >= 24) {
      return 'Overnight (24+ hours)';
    }
    if (hours === 1 && minutes === 0) {
      return '1 hour';
    }
    if (hours === 0 && minutes > 0) {
      return `${minutes} minutes`;
    }
    if (minutes === 0) {
      return `${hours} hour${hours > 1 ? 's' : ''}`;
    }
    return `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minutes`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    console.log('🚀 BookingForm: Starting form submission');
    console.log('📝 BookingForm: Form data:', formData);

    try {
      console.log('🌐 BookingForm: Making API call to /api/send-booking');
      
      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('📡 BookingForm: API response status:', response.status);
      console.log('📡 BookingForm: API response ok:', response.ok);

      if (response.ok) {
        console.log('✅ BookingForm: Success!');
        toast.success('🎉 Booking request sent successfully! We will contact you within 24 hours.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        onSuccess();
      } else {
        const errorData = await response.json();
        console.log('❌ BookingForm: Error response:', errorData);
        toast.error(`❌ ${errorData.error || 'Failed to send booking request'}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error('❌ BookingForm: Network error:', error);
      toast.error('❌ Failed to send booking request. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-accent rounded-xl max-w-md w-full p-6 border border-primary/20 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Book Your Session</h2>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Pricing Info */}
        <div className="bg-black/30 p-4 rounded-lg mb-6">
          <h3 className="text-white font-semibold mb-3">Session Pricing</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-300">
              <span>Rate:</span>
              <span>$200/hour | $500/overnight</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Duration:</span>
              <span>{getDurationText()}</span>
            </div>
            <div className="border-t border-primary/20 pt-2 mt-2">
              <div className="flex justify-between text-white font-semibold">
                <span>Total:</span>
                <span className="text-primary">${calculateTotal()}</span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-2"> Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-200"
              placeholder="Enter your  Name"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Email Address *</label>
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

          <div>
            <label className="block text-white font-medium mb-2">Preferred Mistress *</label>
            <input
              type="text"
              name="mistressName"
              value={formData.mistressName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-200"
              placeholder="Enter mistress name"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Duration *</label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-300 text-sm mb-1">Hours</label>
                <input
                  type="number"
                  name="hours"
                  value={formData.hours}
                  onChange={handleInputChange}
                  min="0"
                  max="48"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-200"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">Minutes</label>
                <input
                  type="number"
                  name="minutes"
                  value={formData.minutes}
                  onChange={handleInputChange}
                  min="0"
                  max="59"
                  step="15"
                  className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-200"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-300">
              <span>Rate: $200/hour | $500/overnight (24+ hours)</span>
            </div>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Preferred Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none transition-colors duration-200"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Preferred Time *</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none transition-colors duration-200"
            >
              <option value="">Select time</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="21:00">9:00 PM</option>
              <option value="22:00">10:00 PM</option>
              <option value="23:00">11:00 PM</option>
              <option value="00:00">12:00 AM (Midnight)</option>
            </select>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Special Requests</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-200 resize-none"
              placeholder="Any special requests or preferences for your session..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-3 border border-primary/30 text-primary hover:bg-primary/10 rounded-lg font-medium transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isProcessing}
              className="flex-1 bg-primary hover:bg-red-700 disabled:bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                `Book Session - $${calculateTotal()}`
              )}
            </button>
          </div>
        </form>

        {/* Security Notice */}
        <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
          <div className="flex items-center text-sm text-gray-300">
            <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your booking information is secure and confidential. We will contact you within 24 hours to confirm your session.
          </div>
        </div>
      </div>
    </div>
  );
}
