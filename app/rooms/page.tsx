"use client";

import { motion } from "framer-motion";
import { Bed, Users, Maximize, Wifi, Coffee, Wind, Tv, Bath, Star, ArrowRight, Flame, Utensils } from "lucide-react";
import Link from "next/link";
import ImageCarousel from "@/components/image-carousel";

const mountainChalletImages = [
  "/moutainchallet/hero_moutainchallet.avif",
  "/moutainchallet/mc3.avif",
  "/moutainchallet/mc4.avif",
  "/moutainchallet/mc5.avif",
  "/moutainchallet/mc6.avif",
  "/moutainchallet/mc7.avif",
  "/moutainchallet/mc8.avif",
  "/moutainchallet/mc9.avif",
  "/moutainchallet/mc10.avif",
];

export default function RoomsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070')] bg-cover bg-center opacity-30" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
          >
            Mountain Challet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Your serene mountain retreat with breathtaking panoramic views
          </motion.p>
        </div>
      </section>

      {/* Main Room Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Image Carousel */}
            <ImageCarousel images={mountainChalletImages} alt="Mountain Challet" />

            {/* Room Details */}
            <div className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                <div className="mb-4 lg:mb-0">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-2">
                    Mountain Challet
                  </h2>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-600 ml-2">5.0</span>
                  </div>
                </div>
                <div className="text-left lg:text-right">
                  <span className="text-4xl font-bold text-primary">From $450</span>
                  <span className="text-gray-600">/night</span>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Chalet with a serene and warm atmosphere, featuring wooden finishes and muted colors to create a cozy environment for relaxation. The spacious windows offer stunning panoramic views of the mountains and reservoir, allowing residents to enjoy the magnificent natural landscapes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The chalet has two bedrooms, one with a king-sized bed and the other with twin beds. Additionally, there is a fireplace lounge, a kitchen, and a barbecue area, providing a well-rounded space for both indoor and outdoor activities. This combination of features suggests a comfortable and inviting retreat in a picturesque setting.
                </p>
              </div>

              {/* Room Specs */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 pb-8 border-b border-gray-200">
                <div className="flex flex-col items-center text-center p-4 bg-muted rounded-2xl">
                  <Maximize className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm text-gray-600 mb-1">Size</span>
                  <span className="text-lg font-semibold text-gray-900">85 m²</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted rounded-2xl">
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm text-gray-600 mb-1">Guests</span>
                  <span className="text-lg font-semibold text-gray-900">4-6</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted rounded-2xl">
                  <Bed className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm text-gray-600 mb-1">Bedrooms</span>
                  <span className="text-lg font-semibold text-gray-900">2</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted rounded-2xl">
                  <Bath className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm text-gray-600 mb-1">Bathrooms</span>
                  <span className="text-lg font-semibold text-gray-900">2</span>
                </div>
              </div>

              {/* Features & Amenities */}
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Features & Amenities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: <Flame className="h-5 w-5" />, text: "Fireplace Lounge" },
                    { icon: <Utensils className="h-5 w-5" />, text: "Full Kitchen" },
                    { icon: <Utensils className="h-5 w-5" />, text: "BBQ Area" },
                    { icon: <Bed className="h-5 w-5" />, text: "King-Sized Bed" },
                    { icon: <Bed className="h-5 w-5" />, text: "Twin Beds" },
                    { icon: <Maximize className="h-5 w-5" />, text: "Panoramic Mountain Views" },
                    { icon: <Wifi className="h-5 w-5" />, text: "High-Speed WiFi" },
                    { icon: <Wind className="h-5 w-5" />, text: "Climate Control" },
                    { icon: <Tv className="h-5 w-5" />, text: "Smart TV" },
                    { icon: <Coffee className="h-5 w-5" />, text: "Coffee Maker" },
                    { icon: <Bath className="h-5 w-5" />, text: "Luxury Bathrooms" },
                    { icon: <Star className="h-5 w-5" />, text: "Premium Wooden Finishes" },
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-muted transition-colors"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {feature.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 shadow-xl hover:scale-105" suppressHydrationWarning>
                  <span>Book This Challet</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <Link
                  href="/"
                  className="flex-1 flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
              Ready to Experience Mountain Serenity?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Book your stay at our Mountain Challet and immerse yourself in nature&#39;s beauty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:scale-105" suppressHydrationWarning>
                Check Availability
              </button>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
