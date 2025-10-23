/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import travelImage from '../../assets/Travel-Images/travelite-08.webp';

const TravelPlanning = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-32 py-16 bg-white md:gap-20">
      {/* Left Image */}
      <motion.div
        className="relative flex justify-center md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute -z-10 top-10 left-10"></div>
        <img
          src={travelImage}
          alt="Travel Couple"
          className="object-cover"
        />
      </motion.div>

      {/* Right Text Content */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-blue-500 text-sm font-semibold mb-2">
          We Are Trusted
        </p>
        <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-4">
          The Wanderer's Guide: <br />
          <span className="text-gray-800">Expert Travel Planning</span>
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Our team of experts will work tirelessly to create a customized
          itinerary that meets your unique needs and preferences, ensuring that
          every moment is an unforgettable experience.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Don’t miss out on the journey of a lifetime. Book with us today and
          get ready for an adventure that will leave you breathless!
        </p>

        {/* Stats Section */}
        <div className="flex flex-wrap gap-8 md:gap-16">
          <motion.div
            className="text-center md:text-left"
            whileInView={{ scale: [0.8, 1] }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-blue-600">
              <CountUp end={1500} duration={2} />+
            </h3>
            <p className="text-gray-700 mt-2">Growth Solutions</p>
          </motion.div>

          <motion.div
            className="text-center md:text-left"
            whileInView={{ scale: [0.8, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-blue-600">
              <CountUp end={50000} duration={2.5} separator="," />K+
            </h3>
            <p className="text-gray-700 mt-2">Expansion Experts</p>
          </motion.div>

          <motion.div
            className="text-center md:text-left"
            whileInView={{ scale: [0.8, 1] }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-blue-600">
              <CountUp end={340} duration={2} />+
            </h3>
            <p className="text-gray-700 mt-2">Innovative Consulting</p>
          </motion.div>
        </div>

     
      </motion.div>
    </section>
  );
};

export default TravelPlanning;
