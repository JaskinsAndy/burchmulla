"use client";

import { useState, type KeyboardEvent } from "react";
import { Calendar, Users, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function BookingWidget() {
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [guests, setGuests] = useState(2);

  const incrementGuests = () => {
    if (guests < 10) {
      setGuests(guests + 1);
    }
  };

  const decrementGuests = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  const handleGuestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    if (value >= 1 && value <= 10) {
      setGuests(value);
    } else if (value < 1) {
      setGuests(1);
    } else if (value > 10) {
      setGuests(10);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!arrivalDate || !departureDate) {
      window.alert("Please select your arrival and departure dates.");
      return;
    }

    if (arrivalDate >= departureDate) {
      window.alert("Departure date must be after arrival date.");
      return;
    }

    const searchParams = new URLSearchParams({
      locale: "en",
      from_widget: "true",
      checkInDate: arrivalDate,
      checkOutDate: departureDate,
      referrer: "canvas",
      currency: "UZS",
    });

    searchParams.append("items[0][adults]", guests.toString());
    searchParams.append("items[0][children]", "0");
    searchParams.append("items[0][infants]", "0");

    const bookingUrl = `https://direct-book.com/properties/burchmullaresortsdirect?${searchParams.toString()}`;

    window.open(bookingUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div
        role="form"
        onKeyDown={handleKeyDown}
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Arrival Date */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-white/90 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              Arrival
            </label>
            <input
              type="date"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/90 backdrop-blur-sm border border-white/30 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-70 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
              required
              suppressHydrationWarning
            />
          </div>

          {/* Departure Date */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-white/90 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              Departure
            </label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              min={arrivalDate}
              className="w-full px-4 py-3 rounded-xl bg-white/90 backdrop-blur-sm border border-white/30 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-70 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
              required
              suppressHydrationWarning
            />
          </div>

          {/* Guests Counter */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-white/90 mb-2">
              <Users className="w-4 h-4 mr-2" />
              Guests
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={decrementGuests}
                disabled={guests <= 1}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm border border-white/30 text-gray-900 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                suppressHydrationWarning
              >
                <Minus className="w-5 h-5" />
              </button>
              <input
                type="number"
                value={guests}
                onChange={handleGuestChange}
                min="1"
                max="10"
                className="flex-1 text-center px-4 py-3 rounded-xl bg-white/90 backdrop-blur-sm border border-white/30 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                suppressHydrationWarning
              />
              <button
                type="button"
                onClick={incrementGuests}
                disabled={guests >= 10}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm border border-white/30 text-gray-900 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                suppressHydrationWarning
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-4 sm:mt-6">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 min-h-[48px]"
            suppressHydrationWarning
          >
            Check Availability
          </button>
        </div>
      </div>
    </motion.div>
  );
}

