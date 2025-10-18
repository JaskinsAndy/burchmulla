"use client";

import { motion } from "framer-motion";
import { Waves, Sun, Moon, Users, ShieldCheck, Clock, Droplet, MapPin, Calendar, Info, AlertCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ImageCarousel from "@/components/image-carousel";

const spaImages = [
  "/spa/spa1.avif",
  "/spa/spa2.avif",
  "/spa/spa3.avif",
  "/spa/spa4.avif",
  "/spa/spa5.avif",
  "/spa/spa6.avif",
  "/spa/spa7.avif",
  "/spa/spa8.avif",
  "/spa/spa9.avif",
  "/spa/spa10.avif",
  "/spa/spa11.avif",
  "/spa/spa12.avif",
  "/spa/spa13.avif",
  "/spa/spa14.avif",
  "/spa/spa15.avif",
  "/spa/spa16.avif",
  "/spa/spa17.avif",
  "/spa/spa18.avif",
];

export default function SpaPage() {
  const [selectedPool, setSelectedPool] = useState<"summer" | "yearRound">("summer");

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/spa/spa4.avif"
            alt="Burchmulla Resort Spa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
          >
            Swimming Pools & Wellness
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Experience tranquility in our halal-oriented pools with designated hours
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Traditionally Halal-Oriented Property
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Burchmulla Resort offers two exceptional swimming pools with designated usage times to ensure the comfort and privacy of all our guests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pool Selection Tabs */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full bg-white p-2 shadow-lg">
              <button
                onClick={() => setSelectedPool("summer")}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-200 ${
                  selectedPool === "summer"
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Sun className="inline-block mr-2 h-5 w-5" />
                Summer Pool
              </button>
              <button
                onClick={() => setSelectedPool("yearRound")}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-200 ${
                  selectedPool === "yearRound"
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Moon className="inline-block mr-2 h-5 w-5" />
                Year-Round Pool
              </button>
            </div>
          </div>

          {/* Summer Pool Details */}
          {selectedPool === "summer" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-4">
                    <Sun className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-gray-900">Summer Pool</h3>
                    <p className="text-gray-600">Outdoor Paradise</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Operating Hours</p>
                      <p className="text-gray-600">9:00 AM to 6:00 PM (Sunset Oriented)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">Outdoor</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Waves className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Features</p>
                      <p className="text-gray-600">Open-air swimming with natural sunlight and mountain views</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/spa/spa5.avif"
                  alt="Summer Pool"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          )}

          {/* Year-Round Pool Details */}
          {selectedPool === "yearRound" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <Moon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-gray-900">Year-Round Pool</h3>
                    <p className="text-gray-600">Indoor Oasis</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Operating Hours</p>
                      <p className="text-gray-600">9:00 AM to 10:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">Indoor</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Reservation</p>
                      <p className="text-gray-600">Available upon reservation • Private rental from 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/spa/spa6.avif"
                  alt="Year-Round Pool"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Pool Rules */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Info className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              General Pool Rules
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              For your safety and comfort, please observe the following guidelines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Supervision",
                rules: [
                  "Children under 12 must be accompanied by an adult",
                  "Lifeguards on duty during operating hours",
                  "Parents responsible for children&apos;s safety"
                ]
              },
              {
                icon: <Droplet className="h-8 w-8" />,
                title: "Health & Hygiene",
                rules: [
                  "Shower before entering the pool",
                  "No pool use with open wounds or illness",
                  "Maintain personal hygiene standards"
                ]
              },
              {
                icon: <ShieldCheck className="h-8 w-8" />,
                title: "Proper Attire",
                rules: [
                  "Appropriate swimwear required",
                  "No jeans, cut-offs, or street clothes",
                  "Swim diapers required for babies/toddlers"
                ]
              },
              {
                icon: <AlertCircle className="h-8 w-8" />,
                title: "Behavior",
                rules: [
                  "No running, diving, or rough play",
                  "Respect other guests&apos; privacy",
                  "Maintain a quiet environment"
                ]
              },
              {
                icon: <Waves className="h-8 w-8" />,
                title: "Food & Drinks",
                rules: [
                  "No food in pool area",
                  "No glass containers allowed",
                  "Plastic containers only for beverages"
                ]
              },
              {
                icon: <Sun className="h-8 w-8" />,
                title: "Pool Equipment",
                rules: [
                  "Toys and floats allowed with consideration",
                  "Return equipment after use",
                  "Do not disturb other guests"
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted rounded-3xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">{rule}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Rental Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Moon className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Private Pool Rental
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Enjoy exclusive access to our Year-Round Indoor Pool
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Clock className="h-10 w-10 mx-auto mb-3" />
                <p className="font-semibold mb-1">Available From</p>
                <p className="text-2xl font-bold">7:00 PM</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Calendar className="h-10 w-10 mx-auto mb-3" />
                <p className="font-semibold mb-1">Rental Basis</p>
                <p className="text-2xl font-bold">Hourly</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Info className="h-10 w-10 mx-auto mb-3" />
                <p className="font-semibold mb-1">Pricing</p>
                <p className="text-2xl font-bold">As Per List</p>
              </div>
            </div>
            <button className="px-10 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:scale-105" suppressHydrationWarning>
              Inquire About Private Rental
            </button>
          </motion.div>
        </div>
      </section>

      {/* Spa Gallery */}
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
              Spa & Pool Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Explore our world-class facilities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ImageCarousel images={spaImages} alt="Spa & Pool Facilities" />
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Important Information
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Safety equipment is for emergency use only - do not tamper</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Burchmulla Resort is not responsible for lost or stolen items - please keep belongings secure</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>All guests must comply with lifeguard and staff instructions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Guests not following rules may be asked to leave the pool area</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
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
            <Waves className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Ready to Relax?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              We appreciate your cooperation and hope you have a wonderful time at Burchmulla Resort&#39;s swimming pools. For questions or assistance, contact our poolside attendants or front desk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 shadow-xl hover:scale-105" suppressHydrationWarning>
                Book Your Stay
              </button>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
