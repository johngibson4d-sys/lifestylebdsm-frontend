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
    title: "Dungeon Room 1", 
    category: "Rooms", 
    description: "Professional BDSM dungeon room",
    imageUrl: "/_ (1).jpeg"
  },
  { 
    id: 2, 
    title: "Dungeon Room 2", 
    category: "Rooms", 
    description: "Professional BDSM dungeon room",
    imageUrl: "/_ (2).jpeg"
  },
  { 
    id: 3, 
    title: "Dungeon Room 3", 
    category: "Rooms", 
    description: "Professional BDSM dungeon room",
    imageUrl: "/_ (3).jpeg"
  },
  { 
    id: 4, 
    title: "Dungeon Room 4", 
    category: "Rooms", 
    description: "Professional BDSM dungeon room",
    imageUrl: "/_ (4).jpeg"
  },
  { 
    id: 5, 
    title: "Dungeon Room 5", 
    category: "Rooms", 
    description: "Professional BDSM dungeon room",
    imageUrl: "/_ (5).jpeg"
  },
  { 
    id: 6, 
    title: "Dungeon Room 6", 
    category: "Rooms", 
    description: "Professional BDSM dungeon room",
    imageUrl: "/_ (6).jpeg"
  },
  { 
    id: 7, 
    title: "Dungeon Entrance", 
    category: "Common Areas", 
    description: "Welcoming entrance with elegant design",
    imageUrl: "/_ (7).jpeg"
  },
  { 
    id: 8, 
    title: "Reception Area", 
    category: "Common Areas", 
    description: "Professional reception desk",
    imageUrl: "/_ (8).jpeg"
  },
  { 
    id: 9, 
    title: "Corridor View", 
    category: "Common Areas", 
    description: "Well-lit corridors with modern design",
    imageUrl: "/_ (9).jpeg"
  },
  { 
    id: 10, 
    title: "Dungeon Exterior", 
    category: "Exterior", 
    description: "Beautiful dungeon building facade",
    imageUrl: "/_ (10).jpeg"
  },
  { 
    id: 11, 
    title: "Parking Area", 
    category: "Exterior", 
    description: "Convenient parking facilities",
    imageUrl: "/_ (11).jpeg"
  },
  { 
    id: 12, 
    title: "Garden View", 
    category: "Exterior", 
    description: "Peaceful garden area",
    imageUrl: "/_ (12).jpeg"
  },
  { 
    id: 13, 
    title: "Dungeon Room 7", 
    category: "Rooms", 
    description: "Professional BDSM dungeon room",
    imageUrl: "/_ (13).jpeg"
  },
  { 
    id: 14, 
    title: "Dungeon Room 8", 
    category: "Rooms", 
    description: "Professional BDSM dungeon room",
    imageUrl: "/_ (14).jpeg"
  },
  { 
    id: 15, 
    title: "Dungeon Room 9", 
    category: "Rooms", 
    description: "Professional BDSM dungeon room",
    imageUrl: "/_ (15).jpeg"
  },
  { 
    id: 16, 
    title: "Dungeon Room 10", 
    category: "Rooms", 
    description: "Professional BDSM dungeon room",
    imageUrl: "/_ (16).jpeg"
  },
  { 
    id: 17, 
    title: "Dungeon Room 11", 
    category: "Rooms", 
    description: "Professional BDSM dungeon room",
    imageUrl: "/_ (17).jpeg"
  },
  { 
    id: 18, 
    title: "Dungeon Room 12", 
    category: "Rooms", 
    description: "Professional BDSM dungeon room",
    imageUrl: "/_ (18).jpeg"
  },
  { 
    id: 19, 
    title: "Dungeon Room 13", 
    category: "Rooms", 
    description: "Professional BDSM dungeon room",
    imageUrl: "/_ (19).jpeg"
  },
  { 
    id: 20, 
    title: "Dungeon Room 14", 
    category: "Rooms", 
    description: "Professional BDSM dungeon room",
    imageUrl: "/_ (20).jpeg"
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
            Dungeon <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a virtual tour of our beautiful dungeon. Explore our themed rooms, play areas, 
            and facilities to see what makes Lifestyle BDSM Dungeon special.
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
            Book your session now and enjoy the freedom and exploration you&apos;ve seen in our gallery.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Book Your Session
          </a>
        </div>
      </section>
    </div>
  );
}
