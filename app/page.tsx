"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Utensils, Waves, Mountain, Calendar, ArrowRight } from "lucide-react";
import BookingWidget from "@/components/booking-widget";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/burchhero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Welcome to Paradise
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover the perfect blend of luxury, tranquility, and Uzbek hospitality
              in the heart of nature
            </motion.p>
            <div className="pt-8">
              <BookingWidget />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Experience Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every detail crafted for your comfort and enjoyment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sparkles className="h-10 w-10" />,
                title: "Luxury Spa",
                description: "Rejuvenate your body and soul with our world-class spa treatments",
              },
              {
                icon: <Utensils className="h-10 w-10" />,
                title: "Fine Dining",
                description: "Savor exquisite cuisine crafted by our award-winning chefs",
              },
              {
                icon: <Waves className="h-10 w-10" />,
                title: "Pool & Wellness",
                description: "Relax by our infinity pool overlooking breathtaking landscapes",
              },
              {
                icon: <Mountain className="h-10 w-10" />,
                title: "Nature Trails",
                description: "Explore scenic hiking trails through pristine natural beauty",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-muted p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                A Sanctuary in Uzbekistan
              </h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Nestled in the breathtaking landscapes of Burchmulla, our resort offers
                an unparalleled escape from the ordinary. Experience the perfect harmony
                of traditional Uzbek hospitality and modern luxury.
              </p>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                From our elegantly appointed rooms to our world-class amenities, every
                aspect of Burchmulla Resort has been designed to create unforgettable
                moments and lasting memories.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-full bg-white text-primary hover:bg-gray-100 transition-all duration-200"
              >
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="h-48 bg-white/20 backdrop-blur-sm rounded-2xl" />
                <div className="h-64 bg-white/20 backdrop-blur-sm rounded-2xl" />
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-64 bg-white/20 backdrop-blur-sm rounded-2xl" />
                <div className="h-48 bg-white/20 backdrop-blur-sm rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Calendar className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Begin Your Journey
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Book your stay today and discover why Burchmulla Resort is Uzbekistan&apos;s
              premier destination for luxury and relaxation.
            </p>
            <Link
              href="/rooms"
              className="inline-flex items-center px-10 py-4 text-lg font-semibold rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Check Availability
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
