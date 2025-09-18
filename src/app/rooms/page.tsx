'use client';

import { useState } from 'react';
import Image from 'next/image';
import PaymentForm from '@/components/PaymentForm';

interface Room {
  id: number;
  name: string;
  description: string;
  pricePerHour: number;
  priceOvernight: number;
  amenities: string[];
  images: string[];
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Deluxe Suite",
    description: "Spacious suite with modern amenities and elegant decor. Perfect for extended stays or special occasions.",
    pricePerHour: 200,
    priceOvernight: 500,
    amenities: ["King Size Bed", "Private Bathroom", "Mini Bar", "WiFi", "Air Conditioning", "Room Service"],
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: 2,
    name: "Executive Room",
    description: "Comfortable room with business amenities and contemporary design. Ideal for business travelers.",
    pricePerHour: 200,
    priceOvernight: 500,
    amenities: ["Queen Size Bed", "Private Bathroom", "Work Desk", "WiFi", "Air Conditioning", "Coffee Maker"],
    images: [
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: 3,
    name: "Standard Room",
    description: "Cozy room with essential amenities and comfortable furnishings. Great value for short stays.",
    pricePerHour: 200,
    priceOvernight: 500,
    amenities: ["Double Bed", "Private Bathroom", "WiFi", "Air Conditioning", "TV", "Safe"],
    images: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: 4,
    name: "Premium Suite",
    description: "Luxury suite with premium amenities and stunning views. The ultimate in comfort and style.",
    pricePerHour: 200,
    priceOvernight: 500,
    amenities: ["King Size Bed", "Private Bathroom", "Jacuzzi", "Mini Bar", "WiFi", "Air Conditioning", "Room Service", "Balcony"],
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  }
];

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    date: '',
    hours: 0
  });

  const handleReserveClick = (room: Room) => {
    setSelectedRoom(room);
    setShowReservationForm(true);
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      date: formData.get('date') as string,
      hours: parseInt(formData.get('hours') as string)
    };
    setReservationData(data);
    setShowReservationForm(false);
    setShowPaymentForm(true);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentForm(false);
    setSelectedRoom(null);
    setReservationData({ name: '', email: '', date: '', hours: 0 });
    alert('Payment successful! Your reservation has been confirmed.');
  };

  const handlePaymentCancel = () => {
    setShowPaymentForm(false);
    setShowReservationForm(true);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/20 via-primary/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-primary">Rooms</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our selection of beautifully designed rooms, all available for hourly booking 
            to fit your schedule perfectly.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <div key={room.id} className="bg-accent/30 rounded-xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300">
                {/* Room Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.images[0]}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{room.name}</h3>
                    <div className="text-right">
                      <p className="text-primary font-bold text-xl">${room.pricePerHour}/hour</p>
                      <p className="text-secondary font-bold text-lg">${room.priceOvernight}/night</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{room.description}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Amenities:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleReserveClick(room)}
                    className="w-full bg-primary hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Reserve This Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form Modal */}
      {showReservationForm && selectedRoom && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-accent rounded-xl max-w-md w-full p-6 border border-primary/20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Reserve {selectedRoom.name}</h2>
              <button
                onClick={() => setShowReservationForm(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleReservationSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Number of Hours</label>
                <select
                  name="hours"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none transition-colors duration-200"
                >
                  <option value="">Select hours</option>
                  <option value="1">1 Hour</option>
                  <option value="2">2 Hours</option>
                  <option value="3">3 Hours</option>
                  <option value="4">4 Hours</option>
                  <option value="6">6 Hours</option>
                  <option value="8">8 Hours</option>
                  <option value="12">12 Hours</option>
                  <option value="24">24 Hours</option>
                </select>
              </div>

              <div className="bg-black/30 p-4 rounded-lg">
                <div className="flex justify-between text-white mb-2">
                  <span>Room: {selectedRoom.name}</span>
                  <span>${selectedRoom.pricePerHour}/hour | ${selectedRoom.priceOvernight}/night</span>
                </div>
                <div className="flex justify-between text-white font-semibold">
                  <span>Total (estimated):</span>
                  <span className="text-primary">$0.00</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowReservationForm(false)}
                  className="flex-1 px-4 py-3 border border-primary/30 text-primary hover:bg-primary/10 rounded-lg font-medium transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Pricing Info Section */}
      <section className="py-20 bg-gradient-to-b from-black to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Simple <span className="text-primary">Pricing</span> for All Rooms
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            All our rooms feature the same competitive pricing. Choose between hourly or overnight stays 
            to suit your needs perfectly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-accent/50 p-8 rounded-xl border border-primary/20">
              <h3 className="text-white font-semibold mb-4 text-xl">Hourly Rate</h3>
              <p className="text-primary font-bold text-4xl mb-2">$200</p>
              <p className="text-gray-400 text-lg">per hour</p>
              <p className="text-gray-300 text-sm mt-3">Perfect for short stays, meetings, or quick getaways</p>
            </div>
            <div className="bg-accent/50 p-8 rounded-xl border border-primary/20">
              <h3 className="text-white font-semibold mb-4 text-xl">Overnight Rate</h3>
              <p className="text-primary font-bold text-4xl mb-2">$500</p>
              <p className="text-gray-400 text-lg">per night</p>
              <p className="text-gray-300 text-sm mt-3">Ideal for extended stays and overnight experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Form */}
      {showPaymentForm && selectedRoom && (
        <PaymentForm
          roomName={selectedRoom.name}
          pricePerHour={selectedRoom.pricePerHour}
          priceOvernight={selectedRoom.priceOvernight}
          hours={reservationData.hours}
          onSuccess={handlePaymentSuccess}
          onCancel={handlePaymentCancel}
        />
      )}
    </div>
  );
}
