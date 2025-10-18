"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Award, Users, Heart, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[url("https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070")] bg-cover bg-center opacity-30" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Where tradition meets luxury in the heart of Uzbekistan
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Burchmulla Resort was founded with a vision to create an unparalleled destination
                that celebrates the natural beauty and rich cultural heritage of Uzbekistan. Nestled
                in the breathtaking landscapes of the Burchmulla region, our resort has become a
                sanctuary for travelers seeking authentic experiences and luxurious comfort.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since opening our doors, we have remained committed to providing exceptional service,
                preserving the environment, and supporting the local community. Every aspect of
                Burchmulla Resort reflects our dedication to creating meaningful connections between
                our guests, the land, and Uzbek traditions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we stand as a testament to sustainable luxury tourism, offering world-class
                amenities while honoring the natural splendor that surrounds us.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl" />
                <div className="h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl" />
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl" />
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10" />,
                title: "Excellence",
                description: "Unwavering commitment to the highest standards in every detail",
              },
              {
                icon: <Heart className="h-10 w-10" />,
                title: "Hospitality",
                description: "Genuine warmth and personalized service for every guest",
              },
              {
                icon: <Leaf className="h-10 w-10" />,
                title: "Sustainability",
                description: "Protecting and preserving our natural environment for future generations",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Community",
                description: "Supporting and celebrating local culture and traditions",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95793.61088117476!2d69.58624!3d41.13876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d7a4aa33f97%3A0x9c5f6d5b8c7a4b3c!2sBurchmulla%2C%20Tashkent%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Burchmulla Resort Location"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <MapPin className="h-16 w-16 text-primary mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Find Us in Paradise
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Located in the picturesque Burchmulla district of the Tashkent Region, our resort
                offers easy access while maintaining the tranquility of a remote mountain retreat.
                Just a scenic drive from Tashkent, you&apos;ll discover a world away from the everyday.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Burchmulla, Tashkent Region<br />
                      Uzbekistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+998 97 437 37 37</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">book@br.uz</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Reception Hours</h4>
                    <p className="text-gray-600">24/7 Concierge Service</p>
                  </div>
                </div>
              </div>

              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-200" suppressHydrationWarning>
                <span>Get Directions</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Recognition & Awards
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Honored for our commitment to excellence and sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2024",
                award: "Best Luxury Resort",
                organization: "Uzbekistan Tourism Awards",
              },
              {
                year: "2023",
                award: "Sustainable Tourism Leader",
                organization: "Central Asia Hospitality Awards",
              },
              {
                year: "2023",
                award: "Excellence in Spa Services",
                organization: "International Spa Association",
              },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
              >
                <Award className="h-12 w-12 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">{award.year}</div>
                <h3 className="text-xl font-serif font-semibold mb-2">{award.award}</h3>
                <p className="text-white/80 text-sm">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Ready to Experience Burchmulla?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join us for an unforgettable escape where luxury meets nature
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/rooms"
                className="inline-flex items-center justify-center px-10 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 shadow-xl hover:scale-105"
              >
                Book Your Stay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="px-10 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200" suppressHydrationWarning>
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
