'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/20 via-primary/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the philosophy and tradition behind Lifestyle BDSM Dungeon, 
            where your fantasies become reality in a safe, consensual environment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Since its inception, Lifestyle BDSM Dungeon has been home for many Lifestyle Mistresses and renowned Dominatrices. We operate on the philosophy of safe, sane and consensual play, built upon the foundation of education.
              </p>

              <p className="text-lg">
                <span className="text-primary font-bold">LIFESTYLE BDSM</span> is steeped in tradition while governed by the BDSM principles of Honor, Loyalty, and Dedication.
              </p>

              <p className="text-lg">
                We prioritize your safety and discretion, ensuring secure and satisfying experiences based on your personal fantasies. We assure any of our guests - your discretion is our priority. There is no repercussion for play, only the pleasure of exploring your deepest desires knowing your fantasies and secrets are safe with us.
              </p>

              <p className="text-lg">
                With BDSM themed rooms and a fully-equipped facility, the possibilities of exploring all elements of BDSM, including domination, submission, fetishes, feminization and fantasy role-play, are endless in our beautiful <span className="text-primary font-bold">LIFESTYLE BDSM dungeon</span>. We love having fun with those seeking a transformation or any form of exploration with a talented Dominatrix.
              </p>

              <p className="text-lg">
                Your fantasy is our mission, and we aim to cater each experience to your particular needs and desires.
              </p>

              <div className="text-center mt-12">
                <p className="text-xl font-semibold text-white mb-4">
                  Join us for some fun. Come experience what freedom feels like.
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="/gallery" 
                    className="bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105"
                  >
                    Explore Our Dungeons
                  </a>
                  <a 
                    href="/contact" 
                    className="bg-secondary hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105"
                  >
                    Book Your Session
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-accent to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at Lifestyle BDSM Dungeon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Safety First</h3>
              <p className="text-gray-300">
                Safe, sane, and consensual play is the foundation of everything we do. Your well-being is our top priority.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Discretion</h3>
              <p className="text-gray-300">
                Your privacy and discretion are sacred to us. Your secrets and fantasies are safe with our trusted team.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Honor & Loyalty</h3>
              <p className="text-gray-300">
                Governed by BDSM principles of Honor, Loyalty, and Dedication, we maintain the highest standards of service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your <span className="text-primary">Journey?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the freedom of exploration in our premium BDSM dungeon facilities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/gallery" 
              className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 transform hover:scale-105"
            >
              View Our Dungeons
            </a>
            <a 
              href="/contact" 
              className="bg-secondary hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 transform hover:scale-105"
            >
              Book Your Session
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
