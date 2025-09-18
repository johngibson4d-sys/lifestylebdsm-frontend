import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30 z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-20"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury hotel room"
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
              Experience luxury accommodations with hourly booking flexibility. 
              Your perfect stay awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/rooms" 
                className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Your Room
              </Link>
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
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer premium accommodations with flexible hourly booking options 
              to suit your unique needs and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-accent/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Hourly Booking</h3>
              <p className="text-gray-400">
                Book rooms by the hour for maximum flexibility. Perfect for short stays, 
                meetings, or quick getaways.
              </p>
            </div>

            <div className="text-center p-8 bg-accent/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Premium Rooms</h3>
              <p className="text-gray-400">
                All our rooms feature modern amenities, comfortable furnishings, 
                and elegant design for your ultimate comfort.
              </p>
            </div>

            <div className="text-center p-8 bg-accent/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Easy Reservation</h3>
              <p className="text-gray-400">
                Simple online booking process. Just provide your details, 
                select your time, and you&apos;re all set for your stay.
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
              "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ].map((imageUrl, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl aspect-[4/3]">
                <Image
                  src={imageUrl}
                  alt={`Hotel room ${index + 1}`}
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
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience luxury and comfort with our flexible hourly booking system. 
            Your perfect room is just a click away.
          </p>
          <Link 
            href="/rooms" 
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Reserve Your Room Now
          </Link>
        </div>
      </section>
    </div>
  );
}
