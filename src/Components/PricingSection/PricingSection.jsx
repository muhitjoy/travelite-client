/* eslint-disable no-unused-vars */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Plane, CalendarDays, MapPin, CreditCard, Wallet } from "lucide-react";
import { Link } from "react-router";

const AnimatedPrice = ({ price }) => (
  <motion.span
    key={price}
    initial={{ opacity: 0, filter: "blur(8px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="inline-block"
  >
    {price}
  </motion.span>
);

const TourPackagePayment = () => {
  const [isOneTime, setIsOneTime] = useState(true);
  const oneTimeRef = useRef(null);
  const installmentRef = useRef(null);
  const [activeLeft, setActiveLeft] = useState(0);
  const [activeWidth, setActiveWidth] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      if (isOneTime && oneTimeRef.current) {
        setActiveLeft(oneTimeRef.current.offsetLeft);
        setActiveWidth(oneTimeRef.current.offsetWidth);
      } else if (!isOneTime && installmentRef.current) {
        setActiveLeft(installmentRef.current.offsetLeft);
        setActiveWidth(installmentRef.current.offsetWidth);
      }
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [isOneTime]);

  const packages = [
    {
      name: "Tropical Escape",
      location: "Bali, Indonesia",
      duration: "7 Days / 6 Nights",
      oneTimePrice: "$899",
      installmentPrice: "$299 x 3",
      features: [
        "4-Star Resort Stay",
        "Daily Breakfast",
        "Airport Transfers",
        "Island Hopping Tour",
        "Free Travel Insurance",
      ],
      isPopular: false,
    },
    {
      name: "European Explorer",
      location: "Paris, Rome, Amsterdam",
      duration: "10 Days / 9 Nights",
      oneTimePrice: "$1,799",
      installmentPrice: "$599 x 3",
      features: [
        "Luxury Hotel Stay",
        "Flight Tickets Included",
        "Guided City Tours",
        "Museum Passes",
        "Priority Airport Transfers",
      ],
      isPopular: true,
    },
    {
      name: "Himalayan Adventure",
      location: "Nepal, Bhutan",
      duration: "8 Days / 7 Nights",
      oneTimePrice: "$1,299",
      installmentPrice: "$433 x 3",
      features: [
        "Mountain Trekking",
        "Local Guide",
        "All Meals Included",
        "Cultural Excursions",
        "24/7 Assistance",
      ],
      isPopular: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700" />

      {/* Section Content */}
      <div className="relative z-10 font-inter py-20 px-6 sm:px-10 lg:px-20 flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            The World Awaits, Are You Ready?
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose how you’d like to pay for your next journey — one-time or
            easy installments. Adventure is just a payment away!
          </p>
        </div>

        {/* Toggle */}
        <div className="relative flex items-center justify-center mb-12 p-1 border border-gray-300 dark:border-gray-700 rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
          <button
            ref={oneTimeRef}
            onClick={() => setIsOneTime(true)}
            className={`relative z-10 py-2 px-6 rounded-full text-sm font-medium transition-all ${
              isOneTime
                ? "text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            One-Time Payment
          </button>
          <button
            ref={installmentRef}
            onClick={() => setIsOneTime(false)}
            className={`relative z-10 py-2 px-6 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
              !isOneTime
                ? "text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            Pay in Installments
            <span className="px-2 py-0.5 bg-pink-500 text-white text-xs font-bold rounded-full">
              Flexible
            </span>
          </button>

          {/* Animated Toggle Background */}
          {activeWidth > 0 && (
            <motion.div
              className="absolute inset-y-1 rounded-full bg-pink-500 shadow-md"
              initial={false}
              animate={{ left: activeLeft, width: activeWidth }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </div>

        {/* Packages */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 40px -10px rgba(0,0,0,0.2), 0 8px 16px -6px rgba(255,0,128,0.15)",
              }}
              className={`relative p-8 rounded-2xl border transition-all backdrop-blur-xl ${
                pkg.isPopular
                  ? "border-pink-500 bg-white/80 dark:bg-gray-900/70"
                  : "border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/60"
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {pkg.name}
              </h3>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                <MapPin className="w-4 h-4 mr-1 text-pink-500" /> {pkg.location}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                <CalendarDays className="w-4 h-4 mr-1 text-blue-500" />{" "}
                {pkg.duration}
              </div>

              {/* Price */}
              <div className="text-4xl font-extrabold text-pink-600 dark:text-pink-400 mb-4">
                <AnimatedPrice
                  price={isOneTime ? pkg.oneTimePrice : pkg.installmentPrice}
                />
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-4 w-4 text-pink-500 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3">{f}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-2 px-4 rounded-md font-medium shadow-md flex items-center justify-center gap-2 ${
                  pkg.isPopular
                    ? "bg-pink-500 hover:bg-pink-600 text-white"
                    : "bg-white/80 dark:bg-gray-800/70 text-pink-600 border border-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/30"
                }`}
              >
                {isOneTime ? (
                  <Link to="/all-packages">
                    <div className="flex gap-2 items-center">
                      <CreditCard className="w-4 h-4" /> Get Started
                    </div>
                  </Link>
                ) : (
                  <>
                    <Wallet className="w-4 h-4" /> Start Installments
                  </>
                )}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TourPackagePayment;
