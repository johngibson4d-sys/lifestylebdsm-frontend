'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

const galleryImages: GalleryImage[] = [
  { 
    id: 1, 
    title: "Deluxe Suite - Living Area", 
    category: "Rooms", 
    description: "Spacious living area with modern furnishings",
    imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 2, 
    title: "Deluxe Suite - Bedroom", 
    category: "Rooms", 
    description: "Elegant bedroom with king-size bed",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 3, 
    title: "Executive Room", 
    category: "Rooms", 
    description: "Business-friendly room with work desk",
    imageUrl: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 4, 
    title: "Standard Room", 
    category: "Rooms", 
    description: "Comfortable standard accommodation",
    imageUrl: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 5, 
    title: "Premium Suite - Bathroom", 
    category: "Rooms", 
    description: "Luxury bathroom with jacuzzi",
    imageUrl: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 6, 
    title: "Premium Suite - Balcony", 
    category: "Rooms", 
    description: "Private balcony with stunning views",
    imageUrl: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 7, 
    title: "Hotel Lobby", 
    category: "Common Areas", 
    description: "Welcoming lobby with elegant design",
    imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 8, 
    title: "Reception Area", 
    category: "Common Areas", 
    description: "Professional reception desk",
    imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 9, 
    title: "Corridor View", 
    category: "Common Areas", 
    description: "Well-lit corridors with modern design",
    imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 10, 
    title: "Hotel Exterior", 
    category: "Exterior", 
    description: "Beautiful hotel building facade",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 11, 
    title: "Parking Area", 
    category: "Exterior", 
    description: "Convenient parking facilities",
    imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 12, 
    title: "Garden View", 
    category: "Exterior", 
    description: "Peaceful garden area",
    imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
];

const categories = ["All", "Rooms", "Common Areas", "Exterior"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/20 via-primary/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Hotel <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a virtual tour of our beautiful hotel. Explore our rooms, common areas, 
            and facilities to see what makes Lifestyle BDSM Hotel special.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-accent/50 text-gray-300 hover:bg-accent hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group cursor-pointer bg-gradient-to-br from-secondary/30 to-primary/20 rounded-xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={image.imageUrl}
                    alt={image.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">{image.title}</h3>
                  <p className="text-gray-400 text-sm">{image.description}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 text-white hover:text-primary transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-accent rounded-xl overflow-hidden border border-primary/20">
              <div className="aspect-video relative">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h2>
                <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience It Yourself?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your room now and enjoy the luxury and comfort you&apos;ve seen in our gallery.
          </p>
          <a 
            href="/rooms" 
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Book Your Stay
          </a>
        </div>
      </section>
    </div>
  );
}
