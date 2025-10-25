/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoLocationOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


import image1 from '../../assets/Travel-Images/image-1.jpeg'
import image2 from '../../assets/Travel-Images/image-2.jpeg'
import image3 from '../../assets/Travel-Images/image-3.jpeg'
import image4 from '../../assets/Travel-Images/image-4.jpeg'

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/mamuhit.joy.1/" },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/muhit_joy20/?hl=en",
    },
    { icon: <FaYoutube />, url: "https://www.youtube.com/" },
    { icon: <FaTwitter />, url: "https://x.com/muhit_official" },
    { icon: <FaGithub />, url: "https://github.com/muhitjoy" },
  ];

  const slides = [
    {
      image: image1,
      location: "Bergen, Norway",
      h2: "Discover Bergen’s Fjords Gateway to Norway’s Natural Wonders",
      p: "Sail through stunning fjords and witness breathtaking landscapes. A journey into Norway’s serene wonders!",
    },
    {
      image: image2,
      location: "Surat Thani, Thailand",
      h2: "Escape To Thailand and Unleash the Magic of Your Next Great Adventure",
      p: "Get ready to embark on the journey of a lifetime! Our travel agency crafts unforgettable experiences.",
    },
    {
      image: image3,
      location: "Malé, Maldives",
      h2: "Relax in the Pristine Beaches of Maldives – Crystal Waters and White Sands",
      p: "Relax on pristine beaches, snorkel in vibrant reefs, and enjoy stunning sunsets. The perfect tropical getaway awaits!",
    },
    {
      image: image4,
      location: "London, United Kingdom",
      h2: "Experience London Like Never Before: Historic Landmarks and Vibrant Streets",
      p: "Explore iconic landmarks like Big Ben, Tower Bridge, and the London Eye. Stroll historic streets and enjoy world-class museums.",
    },
  ];

  // Motion variants for child animation
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper h-[500px] sm:h-full md:h-[560px] lg:h-[620px]"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Image */}
            <motion.img
              src={slide.image}
              alt={slide.h2}
              loading="lazy"
              className="w-full h-full object-cover object-center rounded-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: loadedImages[index] ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              onLoad={() =>
                setLoadedImages((prev) => ({ ...prev, [index]: true }))
              }
            />

            {/* Overlay content: only show if image loaded */}
            <AnimatePresence mode="wait">
              {activeIndex === index && loadedImages[index] && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-black/40 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:p-18 text-white"
                >
                  {/* Location */}
                  <motion.p
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xs sm:text-sm md:text-lg mb-2 flex items-center gap-2"
                  >
                    <IoLocationOutline /> {slide.location}
                  </motion.p>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    {/* H2 */}
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-full md:w-1/2 text-center md:text-left"
                    >
                      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        {slide.h2}
                      </h2>
                    </motion.div>

                    {/* Paragraph + Button */}
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="w-full md:w-1/2 flex flex-col md:justify-end items-center md:items-end"
                    >
                      <p className="max-w-lg mt-2 md:mt-0 text-md sm:text-sm md:text-lg lg:text-2xl text-center md:text-right">
                        {slide.p}
                      </p>

                      <Link to="/all-packages">
                        <button className="mt-4 px-6 py-2 sm:px-8 sm:py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300 text-sm sm:text-base">
                          Explore All Packages
                        </button>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Social Media Section */}
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-6 text-center md:text-left"
                  >
                    <p className="text-xs sm:text-sm md:text-base mb-3">
                      Follow Our Socials
                    </p>
                    <div className="flex gap-3 justify-center md:justify-start">
                      {socialLinks.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-blue-300 transition-all duration-300"
                        >
                          <span className="text-white text-sm sm:text-base">
                            {social.icon}
                          </span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
