"use client";

import { motion } from "framer-motion";
import { ChefHat, Wine, Coffee, UtensilsCrossed, Clock, MapPin, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const restaurants = [
  {
    name: "The Grand Terrace",
    cuisine: "International Fine Dining",
    description: "Savor exceptional cuisine with panoramic valley views in an elegant atmosphere",
    hours: "Dinner: 6:00 PM - 11:00 PM",
    specialties: ["Dry-Aged Steaks", "Fresh Seafood", "Chef&apos;s Tasting Menu", "Wine Pairings"],
    dressCode: "Smart Casual",
    rating: 4.9,
  },
  {
    name: "Silk Road Kitchen",
    cuisine: "Traditional Uzbek",
    description: "Authentic Uzbek flavors and Central Asian delicacies in a warm, traditional setting",
    hours: "Lunch & Dinner: 12:00 PM - 10:00 PM",
    specialties: ["Plov", "Shashlik", "Lagman", "Samsa", "Traditional Breads"],
    dressCode: "Casual",
    rating: 4.8,
  },
  {
    name: "Garden Café",
    cuisine: "All-Day Dining",
    description: "Relaxed dining with fresh, seasonal ingredients and garden-to-table philosophy",
    hours: "All Day: 7:00 AM - 11:00 PM",
    specialties: ["Breakfast Buffet", "Fresh Salads", "Artisan Sandwiches", "Healthy Bowls"],
    dressCode: "Casual",
    rating: 4.7,
  },
  {
    name: "The Wine Cellar",
    cuisine: "Wine Bar & Tapas",
    description: "Intimate wine lounge featuring rare vintages and gourmet small plates",
    hours: "Evening: 5:00 PM - 1:00 AM",
    specialties: ["Curated Wine Selection", "Artisan Cheeses", "Charcuterie", "Spanish Tapas"],
    dressCode: "Smart Casual",
    rating: 4.9,
  },
];

export default function DiningPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070")] bg-cover bg-center opacity-30" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
          >
            Culinary Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            A gastronomic journey through flavors from around the world
          </motion.p>
        </div>
      </section>

      {/* Restaurants Section */}
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
              Our Restaurants
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four distinct dining experiences, each offering exceptional cuisine
            </p>
          </motion.div>

          <div className="space-y-12">
            {restaurants.map((restaurant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-muted rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Restaurant Image */}
                  <div className="lg:col-span-1 relative h-64 lg:h-auto bg-gradient-to-br from-primary/30 to-accent/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-900">{restaurant.rating}</span>
                    </div>
                  </div>

                  {/* Restaurant Details */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                          {restaurant.name}
                        </h3>
                        <p className="text-lg text-primary font-medium">{restaurant.cuisine}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {restaurant.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3 text-gray-700">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{restaurant.hours}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700">
                        <ChefHat className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Dress Code: {restaurant.dressCode}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Signature Dishes
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {restaurant.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 group-hover:scale-105">
                      <span>Make a Reservation</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              The Burchmulla Difference
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              What makes our dining experience exceptional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ChefHat className="h-10 w-10" />,
                title: "Award-Winning Chefs",
                description: "Internationally trained culinary masters",
              },
              {
                icon: <MapPin className="h-10 w-10" />,
                title: "Local Ingredients",
                description: "Fresh, organic produce from local farms",
              },
              {
                icon: <Wine className="h-10 w-10" />,
                title: "Curated Wine List",
                description: "Exceptional wines from around the world",
              },
              {
                icon: <UtensilsCrossed className="h-10 w-10" />,
                title: "Private Dining",
                description: "Exclusive experiences for special occasions",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Room Dining Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Coffee className="h-16 w-16 text-primary mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                In-Room Dining
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Enjoy the finest cuisine in the privacy and comfort of your room. Our 24-hour
                in-room dining service offers an extensive menu featuring dishes from all our
                restaurants.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "24/7 room service",
                  "Full restaurant menus available",
                  "Special dietary accommodations",
                  "Private balcony dining setup",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-200">
                <span>View Menu</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Reserve Your Table
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Book your dining experience or contact our concierge for special requests
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 shadow-xl hover:scale-105">
                Make Reservation
              </button>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                Contact Concierge
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
