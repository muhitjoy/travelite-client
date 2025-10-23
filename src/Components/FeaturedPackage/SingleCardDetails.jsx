import React, { use, useEffect, useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import {
  FaStar,
  FaHeart,
  FaShare,
  FaClock,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaPhone,
  FaArrowLeft,
  FaHome,
} from "react-icons/fa";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const SingleCardDetails = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const [tourData, setTourData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [bookingData, setBookingData] = useState({
    buyer_name: user?.displayName || "",
    buyer_email: user?.email || "",
    notes: "",
  });

  const likedBy = tourData?.likedBy || [];
  const email = tourData?.guide_email;
  const [liked, setLiked] = useState(likedBy.includes(user?.email));
  const [likeCount, setLikeCount] = useState(likedBy.length);
  const [bookingCount, setBookingCount] = useState(tourData?.bookingCount || 0);

  useEffect(() => {
    setLiked(likedBy.includes(user?.email));
    setLikeCount(likedBy.length);
  }, [likedBy, user]);

  useEffect(() => {
    if (tourData?.bookingCount !== undefined) {
      setBookingCount(tourData.bookingCount);
    }
  }, [tourData]);

  // handle like/dislike
  const handleLike = () => {
    if (!user) {
      toast.info("Please login to like this tour", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    if (user?.email === email) {
      toast.warning("You can't like your own post", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    // handle like toggle api fetch
    axios
      .patch(`${import.meta.env.VITE_API_URL}/like/${tourData._id}`, {
        email: user?.email,
      })
      .then((data) => {
        console.log(data?.data);
        const isLiked = data?.data?.liked;
        // update like state
        setLiked(isLiked);

        // update likeCount State
        setLikeCount((prev) => (isLiked ? prev + 1 : prev - 1));
        
        toast.success(isLiked ? "Liked! ❤️" : "Like removed", {
          position: "top-right",
          autoClose: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to update like", {
          position: "top-right",
          autoClose: 2000,
        });
      });
  };

  useEffect(() => {
    const dataDetails = data.find((singleData) => singleData._id === id);
    setTourData(dataDetails);
  }, [data, id]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    // Prepare booking data according to your collection schema
    const bookingPayload = {
      tour_id: id,
      tour_name: tourData.tour_name,
      guide_name: tourData.guide_name,
      guide_email: tourData.guide_email,
      guide_contact_no: tourData.guide_contact_no,
      buyer_name: bookingData.buyer_name,
      buyer_email: bookingData.buyer_email,
      booking_date: new Date().toISOString(),
      departure_date: tourData.departure_date,
      departure_location: tourData.departure_location,
      destination: tourData.destination,
      notes: bookingData.notes,
      status: "pending",
      price: tourData.price,
      userEmail: bookingData.buyer_email
    };

    // Make API call to your backend endpoint
    axios.post(`${import.meta.env.VITE_API_URL}/place-booking/${id}`, {
      bookingData: bookingPayload
    })
      .then(response => {
        console.log("Booking successful:", response.data);
        toast.success("Booking confirmed successfully", {
          position: "top-right",
          autoClose: 2000,
        });
        
        // Update booking count locally
        setBookingCount(prev => prev + 1);
        
        setShowModal(false);
        // Reset form
        setBookingData({
          buyer_name: user?.displayName || "",
          buyer_email: user?.email || "",
          notes: "",
        });
      })
      .catch(error => {
        console.error("Booking failed:", error);
        toast.error("Booking failed. Please try again.", {
          position: "top-right",
          autoClose: 2000,
        });
      });
  };

  console.log(id);

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  if (!tourData)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Navigation Header - Responsive */}
      <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 border-b border-gray-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-purple-600 transition-all duration-300 bg-white px-3 py-2 sm:px-4 sm:py-2 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md text-sm sm:text-base"
              >
                <FaArrowLeft className="text-xs sm:text-sm" />
                <span className="font-medium">Back</span>
              </button>

              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-purple-600 transition-all duration-300 bg-white px-3 py-2 sm:px-4 sm:py-2 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md text-sm sm:text-base"
              >
                <FaHome className="text-xs sm:text-sm" />
                <span className="font-medium">Home</span>
              </button>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 sm:p-3 rounded-xl transition-all duration-300 ${
                  isLiked
                    ? "bg-red-50 text-red-500 border border-red-200 shadow-md"
                    : "bg-white text-gray-400 hover:text-red-500 border border-gray-200 hover:border-red-200"
                } hover:shadow-md`}
              >
                <FaHeart
                  className={
                    isLiked
                      ? "fill-current text-sm sm:text-base"
                      : "text-sm sm:text-base"
                  }
                />
              </button>
              <button className="p-2 sm:p-3 rounded-xl bg-white border border-gray-200 text-gray-400 hover:text-purple-500 hover:border-purple-200 hover:shadow-md transition-all duration-300">
                <FaShare className="text-sm sm:text-base" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Responsive */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Hero Section */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-gray-100 overflow-hidden">
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
                <img
                  src={tourData.image}
                  alt={tourData.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-6">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg sm:shadow-2xl">
                    ⭐ Popular
                  </span>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-6 right-3 sm:right-6">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-2xl">
                    {tourData.name}
                  </h1>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 md:gap-4 text-white/90 text-xs sm:text-sm">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <FaMapMarkerAlt className="text-red-300 text-xs sm:text-sm" />
                      <span className="font-semibold">
                        {tourData.destination}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <FaStar className="text-yellow-300 text-xs sm:text-sm" />
                      <span>4.8 • 127 Reviews</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats - Responsive Grid */}
              <div className="p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                  <div className="text-center p-2 sm:p-3 md:p-4 bg-gradient-to-br from-purple-50 to-white rounded-xl sm:rounded-2xl border border-purple-100 shadow-sm">
                    <FaClock className="text-purple-600 text-lg sm:text-xl md:text-2xl mx-auto mb-1 sm:mb-2 md:mb-3" />
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                      Duration
                    </div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">
                      {tourData.duration}
                    </div>
                  </div>

                  <div className="text-center p-2 sm:p-3 md:p-4 bg-gradient-to-br from-green-50 to-white rounded-xl sm:rounded-2xl border border-green-100 shadow-sm">
                    <div className="text-lg sm:text-xl md:text-2xl mx-auto mb-1 sm:mb-2 md:mb-3">
                      💰
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                      Price
                    </div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">
                      ${tourData.price}
                    </div>
                  </div>

                  <div className="text-center p-2 sm:p-3 md:p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl border border-blue-100 shadow-sm">
                    <FaCalendarAlt className="text-blue-600 text-lg sm:text-xl md:text-2xl mx-auto mb-1 sm:mb-2 md:mb-3" />
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                      Departure
                    </div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">
                      {tourData.departure_date}
                    </div>
                  </div>

                  <div className="text-center p-2 sm:p-3 md:p-4 bg-gradient-to-br from-orange-50 to-white rounded-xl sm:rounded-2xl border border-orange-100 shadow-sm">
                    <FaUser className="text-orange-600 text-lg sm:text-xl md:text-2xl mx-auto mb-1 sm:mb-2 md:mb-3" />
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                      Bookings
                    </div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">
                      {bookingCount}+
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide Information */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-gray-100 p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                Your Expert Guide
              </h2>
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl border border-purple-100 ">
                <img
                  src={tourData.guide_photo}
                  alt={tourData.guide_name}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-white shadow-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 truncate">
                        {tourData.guide_name}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Professional Tour Guide
                      </p>
                      <div className="flex items-center gap-1 sm:gap-2 mt-1">
                        <div className="flex gap-0.5 sm:gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                              key={star}
                              className="text-yellow-400 text-xs sm:text-sm"
                            />
                          ))}
                        </div>
                        <span className="text-gray-500 text-xs sm:text-sm">
                          4.9/5 (89)
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <div className="flex items-center gap-1 sm:gap-2 text-gray-700 text-xs sm:text-sm">
                        <FaPhone className="text-green-500 text-xs sm:text-sm" />
                        <span className="font-semibold truncate">
                          {tourData.guide_contact_no || "Contact Available"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tour Details */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-gray-100 p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                Tour Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-blue-50 rounded-lg sm:rounded-xl">
                    <FaMapMarkerAlt className="text-blue-600 text-sm sm:text-base" />
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm text-gray-600">
                        Departure From
                      </div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                        {tourData.departure_location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-green-50 rounded-lg sm:rounded-xl">
                    <FaMapMarkerAlt className="text-green-600 text-sm sm:text-base" />
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm text-gray-600">
                        Destination
                      </div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                        {tourData.destination}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl">
                    <FaCalendarAlt className="text-purple-600 text-sm sm:text-base" />
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm text-gray-600">
                        Departure Date
                      </div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">
                        {tourData.departure_date}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-orange-50 rounded-lg sm:rounded-xl">
                    <FaUser className="text-orange-600 text-sm sm:text-base" />
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm text-gray-600">
                        Total Bookings
                      </div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">
                        {bookingCount} People
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                  Experience Overview
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                  {tourData.package_details}
                </p>
                
                {/* Like Section - Improved Design */}
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <button
                        onClick={handleLike}
                        className={`flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                          liked 
                            ? "bg-blue-500 text-white shadow-lg shadow-blue-200" 
                            : "bg-white text-gray-700 border border-gray-300 hover:border-blue-300 hover:bg-blue-50"
                        }`}
                      >
                        {liked ? (
                          <AiFillLike className="text-lg sm:text-xl" />
                        ) : (
                          <AiOutlineLike className="text-lg sm:text-xl" />
                        )}
                        <span className="text-sm sm:text-base">
                          {liked ? "Liked" : "Like this tour"}
                        </span>
                      </button>
                      
                      <div className="flex flex-col">
                        <span className="text-lg sm:text-xl font-bold text-gray-900">
                          {likeCount}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-600">
                          {likeCount === 1 ? "person likes" : "people like"} this tour
                        </span>
                      </div>
                    </div>
                    
                    {/* Additional Engagement Stats */}
                    <div className="hidden sm:flex items-center gap-4 text-sm text-gray-600">
                      <div className="text-center">
                        <div className="font-bold text-gray-900">{bookingCount}</div>
                        <div className="text-xs">Bookings</div>
                      </div>
                      <div className="w-px h-8 bg-gray-300"></div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900">4.8</div>
                        <div className="text-xs">Rating</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Engagement Stats */}
                  <div className="sm:hidden flex items-center justify-around mt-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-sm">{bookingCount}</div>
                      <div className="text-xs text-gray-600">Bookings</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-sm">4.8</div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-sm">{likeCount}</div>
                      <div className="text-xs text-gray-600">Likes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card - Responsive */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 sm:top-24 lg:top-28 bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-gray-200 p-4 sm:p-6">
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                  ${tourData.price}
                </div>
                <div className="text-gray-500 text-sm sm:text-base">
                  per person
                </div>
                <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-green-600 font-semibold">
                  ✅ Free cancellation • Best price
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex justify-between items-center py-1 sm:py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-xs sm:text-sm">
                    Duration
                  </span>
                  <span className="font-semibold text-gray-900 text-xs sm:text-sm">
                    {tourData.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 sm:py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-xs sm:text-sm">
                    Group Size
                  </span>
                  <span className="font-semibold text-gray-900 text-xs sm:text-sm">
                    Max 12 people
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 sm:py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-xs sm:text-sm">
                    Booked
                  </span>
                  <span className="font-semibold text-blue-600 text-xs sm:text-sm">
                    {bookingCount} people
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 sm:py-2">
                  <span className="text-gray-600 text-xs sm:text-sm">
                    Difficulty
                  </span>
                  <span className="font-semibold text-green-600 text-xs sm:text-sm">
                    Easy
                  </span>
                </div>
              </div>

              {/* Book Now Button */}
              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-lg transform hover:scale-105 transition-all duration-300 mb-3 sm:mb-4"
              >
                Book Now
              </button>

              <div className="text-center space-y-1 sm:space-y-2">
                <div className="text-xs sm:text-sm text-gray-600">
                  {" "}
                  <span className="font-semibold text-gray-900">
                    {bookingCount}+
                  </span>{" "}
                  booked
                </div>
                <div className="text-xs text-gray-500">
                  Secure • Instant confirmation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal - Responsive */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl sm:rounded-3xl shadow-2xl transform animate-scale-in max-h-[85vh] sm:max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 sm:p-4 md:p-5 rounded-t-2xl sm:rounded-t-3xl text-white sticky top-0">
              <h2 className="text-lg sm:text-xl font-bold text-center">
                Complete Booking
              </h2>
              <p className="text-center text-purple-100 mt-1 text-xs sm:text-sm">
                Secure your spot
              </p>
            </div>

            <form
              onSubmit={handleBookingSubmit}
              className="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3"
            >
              {/* Tour Info - Compact */}
              <div className="space-y-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Tour Package
                  </label>
                  <input
                    type="text"
                    value={tourData.tour_name}
                    readOnly
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 text-xs sm:text-sm font-semibold text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Total Price
                  </label>
                  <input
                    type="text"
                    value={`$${tourData.price}`}
                    readOnly
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 text-xs sm:text-sm font-semibold text-green-600"
                  />
                </div>
              </div>

              {/* Buyer Info - Compact */}
              <div className="space-y-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="buyer_name"
                    value={bookingData.buyer_name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-200 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="buyer_email"
                    value={bookingData.buyer_email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-200 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Auto Date */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Booking Date
                </label>
                <input
                  type="text"
                  value={new Date().toLocaleDateString()}
                  readOnly
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 text-xs sm:text-sm font-semibold"
                />
              </div>

              {/* Special Note - Smaller */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Notes <span className="text-gray-500 font-normal">(Optional)</span>
                </label>
                <textarea
                  name="notes"
                  value={bookingData.notes}
                  onChange={handleInputChange}
                  placeholder="Any special requirements or notes..."
                  rows="2"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-200 transition-all duration-200 resize-none"
                ></textarea>
              </div>

              {/* Submit Button - Smaller */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm shadow-lg transform hover:scale-105 transition-all duration-300 mt-2 sm:mt-3"
              >
                Confirm Booking • ${tourData.price}
              </button>
            </form>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 sm:top-3 right-2 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm text-xs sm:text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCardDetails;