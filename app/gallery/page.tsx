"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Camera, X } from "lucide-react";
import Image from "next/image";

const galleryCategories = [
  { id: "all", name: "All" },
  { id: "challet", name: "Mountain Challet" },
  { id: "spa", name: "Spa & Pools" },
];

const galleryImages = [
  // Mountain Challet Images
  { category: "challet", src: "/moutainchallet/hero_moutainchallet.avif", title: "Mountain Challet", aspect: "wide" },
  { category: "challet", src: "/moutainchallet/mc3.avif", title: "Mountain Challet", aspect: "square" },
  { category: "challet", src: "/moutainchallet/mc4.avif", title: "Mountain Challet", aspect: "tall" },
  { category: "challet", src: "/moutainchallet/mc5.avif", title: "Mountain Challet", aspect: "square" },
  { category: "challet", src: "/moutainchallet/mc6.avif", title: "Mountain Challet", aspect: "wide" },
  { category: "challet", src: "/moutainchallet/mc7.avif", title: "Mountain Challet", aspect: "square" },
  { category: "challet", src: "/moutainchallet/mc8.avif", title: "Mountain Challet", aspect: "tall" },
  { category: "challet", src: "/moutainchallet/mc9.avif", title: "Mountain Challet", aspect: "square" },
  { category: "challet", src: "/moutainchallet/mc10.avif", title: "Mountain Challet", aspect: "wide" },

  // Spa & Pool Images
  { category: "spa", src: "/spa/spa1.avif", title: "Spa & Pools", aspect: "square" },
  { category: "spa", src: "/spa/spa2.avif", title: "Spa & Pools", aspect: "wide" },
  { category: "spa", src: "/spa/spa3.avif", title: "Spa & Pools", aspect: "tall" },
  { category: "spa", src: "/spa/spa4.avif", title: "Spa & Pools", aspect: "square" },
  { category: "spa", src: "/spa/spa5.avif", title: "Spa & Pools", aspect: "wide" },
  { category: "spa", src: "/spa/spa6.avif", title: "Spa & Pools", aspect: "square" },
  { category: "spa", src: "/spa/spa7.avif", title: "Spa & Pools", aspect: "tall" },
  { category: "spa", src: "/spa/spa8.avif", title: "Spa & Pools", aspect: "square" },
  { category: "spa", src: "/spa/spa9.avif", title: "Spa & Pools", aspect: "wide" },
  { category: "spa", src: "/spa/spa10.avif", title: "Spa & Pools", aspect: "square" },
  { category: "spa", src: "/spa/spa11.avif", title: "Spa & Pools", aspect: "tall" },
  { category: "spa", src: "/spa/spa12.avif", title: "Spa & Pools", aspect: "square" },
  { category: "spa", src: "/spa/spa13.avif", title: "Spa & Pools", aspect: "wide" },
  { category: "spa", src: "/spa/spa14.avif", title: "Spa & Pools", aspect: "square" },
  { category: "spa", src: "/spa/spa15.avif", title: "Spa & Pools", aspect: "tall" },
  { category: "spa", src: "/spa/spa16.avif", title: "Spa & Pools", aspect: "square" },
  { category: "spa", src: "/spa/spa17.avif", title: "Spa & Pools", aspect: "wide" },
  { category: "spa", src: "/spa/spa18.avif", title: "Spa & Pools", aspect: "square" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const router = useRouter();

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handleBookingClick = () => {
    router.push("/#booking-widget");
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070')] bg-cover bg-center opacity-30" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Camera className="h-16 w-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              A visual journey through the beauty and elegance of Burchmulla Resort
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(index)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  image.aspect === "tall" ? "md:row-span-2" :
                  image.aspect === "wide" ? "md:col-span-2" :
                  ""
                }`}
              >
                <div className={`relative ${
                  image.aspect === "tall" ? "h-[600px]" :
                  image.aspect === "wide" ? "h-80" :
                  "h-80"
                }`}>
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6 z-10">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-lg font-semibold">
                        {image.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "16/9" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[selectedImage]?.src || ""}
                alt={filteredImages[selectedImage]?.title || ""}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="text-white text-2xl font-serif font-bold drop-shadow-lg">
                  {filteredImages[selectedImage]?.title}
                </p>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(prev => prev! > 0 ? prev! - 1 : filteredImages.length - 1);
                }}
                className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors"
              >
                Previous
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(prev => prev! < filteredImages.length - 1 ? prev! + 1 : 0);
                }}
                className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Experience It Yourself
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              These images are just a glimpse. Book your stay and create your own memories.
            </p>
            <button
              onClick={handleBookingClick}
              className="px-10 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:scale-105"
              suppressHydrationWarning
            >
              Book Your Stay
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
