import React from "react";
import { FaClock, FaMapMarkerAlt, FaUser, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router";

const SingleCard = ({ tour }) => {

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: "smooth"})
}


  const {
    _id,
    image,
    tour_name,
    destination,
    duration,
    price,
    guide_name,
    guide_photo,
    departure_date,
  } = tour;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      {/* Image Section with Guide Badge */}
      <div className="relative">
        <img
          src={image}
          alt={tour_name}
          className="w-full h-64 object-cover "
        />
       

        {/* Guide Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 text-white rounded-full px-3 py-1 backdrop-blur-sm">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <img
              src={guide_photo}
              alt={guide_name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xs  font-medium ">{guide_name}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="cursor-pointer text-xl font-bold text-gray-900 mb-4 hover:text-blue-400 line-clamp-2">
          {tour_name}
        </h3>

        {/* Compact Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="truncate text-gray-800 hover:text-blue-500 hover:underline font-semibold">
              {destination}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaClock className="text-blue-500" />
            <span className="text-gray-800 font-semibold">{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaCalendarAlt className="text-blue-500" />
            <span className="truncate text-gray-800 font-semibold">
              {departure_date}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaUser className="text-blue-500" />
            <span className="truncate text-gray-800 font-semibold">
              {guide_name}
            </span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between border-t pt-4">
          <Link to={`/featured-tour-details/${_id}`}>
            <button onClick={scrollToTop} className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              View Details
            </button>
          </Link>
          <div className="text-right">
            <p className="text-2xl font-bold text-orange-500">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
