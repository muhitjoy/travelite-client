/* eslint-disable no-unused-vars */
import { motion, useAnimation } from 'framer-motion';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import travelGirl from '../../assets/Travel-Girl/treavel-girl.webp';

const TravelInStyle = () => {
  const [tourismPercent, setTourismPercent] = useState(0);
  const [hotelPercent, setHotelPercent] = useState(0);

  const tourismControls = useAnimation();
  const hotelControls = useAnimation();

  useEffect(() => {
    // Animate percentage numbers smoothly
    let tourismStart = 0;
    let hotelStart = 0;

    const tourismInterval = setInterval(() => {
      tourismStart += 1;
      setTourismPercent(tourismStart);
      if (tourismStart >= 94) clearInterval(tourismInterval);
    }, 20);

    const hotelInterval = setInterval(() => {
      hotelStart += 1;
      setHotelPercent(hotelStart);
      if (hotelStart >= 86) clearInterval(hotelInterval);
    }, 25);

    // Animate progress bars using Framer Motion
    tourismControls.start({ width: '94%' });
    hotelControls.start({ width: '86%' });

    return () => {
      clearInterval(tourismInterval);
      clearInterval(hotelInterval);
    };
  }, [tourismControls, hotelControls]);

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-white overflow-hidden">
      {/* Left Side Text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="md:w-1/2 space-y-6"
      >
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
          Our Advantages
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Travel In Style: Luxury Getaways <br /> For The Discerning
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Our team of experts has spent years honing their skills in the travel industry, and we’ve built a reputation for providing unparalleled service and attention to detail. We know that every traveler is different, and we take the time to get to know you before planning your trip.
        </p>

        <div className="space-y-4">
          {/* Tourism Benefits Progress */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <p className="font-medium text-gray-800">Tourism Benefits</p>
              <span className="text-sm text-gray-600">{tourismPercent}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-blue-600 h-3 rounded-full origin-left"
                initial={{ width: 0 }}
                animate={tourismControls}
                transition={{ duration: 2, ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* Luxury Hotels Progress */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <p className="font-medium text-gray-800">Luxury Hotels</p>
              <span className="text-sm text-gray-600">{hotelPercent}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-blue-600 h-3 rounded-full origin-left"
                initial={{ width: 0 }}
                animate={hotelControls}
                transition={{ duration: 2.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>

        <button className="flex items-center gap-2 text-blue-600 font-semibold hover:underline mt-4">
          Learn More <span>→</span>
        </button>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative"
      >
        <img
          src={travelGirl}
          alt="Luxury Travel"
          className="object-cover w-full max-w-[500px] h-auto md:h-[500px]"
        />

        <div className="absolute bottom-4 right-4 bg-red-500 text-white flex items-center gap-2 px-3 py-1 rounded-full text-xs md:text-sm shadow-md">
          <Star className="w-4 h-4 fill-white" />
          <span>4.9 (1.2K Reviews)</span>
        </div>
      </motion.div>
    </div>
  );
};

export default TravelInStyle;
