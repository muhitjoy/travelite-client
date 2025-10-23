import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { MapPin } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const SwiperEffectCard = () => {
  const slides = [
    { img: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg', location: 'Bali, Indonesia' },
    { img: 'https://images.pexels.com/photos/28448947/pexels-photo-28448947.jpeg', location: 'Santorini, Greece' },
    { img: 'https://images.pexels.com/photos/34385420/pexels-photo-34385420.jpeg', location: 'Kyoto, Japan' },
    { img: 'https://images.pexels.com/photos/2931062/pexels-photo-2931062.jpeg', location: 'Banff, Canada' },
    { img: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg', location: 'Paris, France' },
    { img: 'https://images.pexels.com/photos/34394891/pexels-photo-34394891.jpeg', location: 'Machu Picchu, Peru' },
    { img: 'https://images.pexels.com/photos/879478/pexels-photo-879478.jpeg', location: 'Cappadocia, Turkey' },
    { img: 'https://images.pexels.com/photos/163776/venice-gondola-sunset-italian-163776.jpeg', location: 'Venice, Italy' },
    { img: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg', location: 'New York, USA' },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-10 py-16 flex flex-col items-center">
      {/* Section Heading */}
      <p className="text-blue-500 font-bold mb-2 text-center uppercase tracking-wide">
        Top Destinations
      </p>
      <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10 leading-snug max-w-3xl">
        Where Culture Meets Adventure: Explore The World With Us
      </h1>

      {/* Swiper Section */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="!w-[230px] sm:!w-[300px] md:!w-[350px] lg:!w-[420px] relative transition-all duration-300"
          >
            {/* Image */}
            <img
              src={slide.img}
              alt={slide.location}
              className="rounded-2xl shadow-lg w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
            />

            {/* Location Tag */}
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs sm:text-sm font-semibold flex items-center gap-1 px-2 py-1 rounded-full shadow-md">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span>{slide.location}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperEffectCard;
