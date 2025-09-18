'use client';

import { useState } from 'react';

interface PaymentFormProps {
  roomName: string;
  pricePerHour: number;
  priceOvernight: number;
  hours: number;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function PaymentForm({ roomName, pricePerHour, priceOvernight, hours, onSuccess, onCancel }: PaymentFormProps) {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    email: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const totalAmount = pricePerHour * hours;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      setPaymentData(prev => ({ ...prev, [name]: formatted }));
    }
    // Format expiry date
    else if (name === 'expiryDate') {
      const formatted = value.replace(/\D/g, '').replace(/(.{2})/, '$1/').substring(0, 5);
      setPaymentData(prev => ({ ...prev, [name]: formatted }));
    }
    // Limit CVV to 3 digits
    else if (name === 'cvv') {
      const formatted = value.replace(/\D/g, '').substring(0, 3);
      setPaymentData(prev => ({ ...prev, [name]: formatted }));
    }
    else {
      setPaymentData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);   
      onSuccess();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-accent rounded-xl max-w-md w-full p-6 border border-primary/20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Payment Details</h2>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Booking Summary */}
        <div className="bg-black/30 p-4 rounded-lg mb-6">
          <h3 className="text-white font-semibold mb-3">Booking Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-300">
              <span>Room:</span>
              <span>{roomName}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Duration:</span>
              <span>{hours} hour{hours > 1 ? 's' : ''}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Rate:</span>
              <span>${pricePerHour}/hour | ${priceOvernight}/night</span>
            </div>
            <div className="border-t border-primary/20 pt-2 mt-2">
              <div className="flex justify-between text-white font-semibold">
                <span>Total:</span>
                <span className="text-primary">${totalAmount}</span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-2">Cardholder Name</label>
            <input
              type="text"
              name="cardholderName"
              value={paymentData.cardholderName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-200"
              placeholder="Name on card"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleInputChange}
              required
              maxLength={19}
              className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-200"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium mb-2">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={paymentData.expiryDate}
                onChange={handleInputChange}
                required
                maxLength={5}
                className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-200"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">CVV</label>
              <input
                type="text"
                name="cvv"
                value={paymentData.cvv}
                onChange={handleInputChange}
                required
                maxLength={3}
                className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-200"
                placeholder="123"
              />
            </div>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Email for Receipt</label>
            <input
              type="email"
              name="email"
              value={paymentData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-200"
              placeholder="your@email.com"
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
                `Pay $${totalAmount}`
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
            Your payment information is secure and encrypted.
          </div>
        </div>
      </div>
    </div>
  );
}
