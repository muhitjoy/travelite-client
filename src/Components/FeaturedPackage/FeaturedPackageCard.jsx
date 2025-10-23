import React, { useEffect, useState } from "react";
import {
  FaClock,
  FaClosedCaptioning,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";
import SingleCard from "./SingleCard";
import { Link } from "react-router";

const FeaturedPackageCard = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior:"smooth"})
  }

  useEffect(() => {
    fetch("http://localhost:3000/featured-tours")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setTours(data);
      })
      .catch((error) => {
        console.log("Error fetching featured tours", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading Featured tours...</p>;
  }

  return (
    <div className="py-16">
      {/* ======= Header Text ======= */}
      <div className="text-center px-8 pt-8 pb-4">
        <p className="text-blue-600 md:text-xl font-semibold mb-1">
          Hottest Tours
        </p>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-3 leading-snug">
          The Journey Of A Lifetime: Create Unforgettable Memories
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Get ready to embark on the journey of a lifetime! Our travel agency is
          dedicated to crafting unforgettable experiences that will leave you
          with lifelong memories.
        </p>
      </div>

      {/* ======= Card Grid Section ======= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-10">
        {/* ======= Single Card ======= */}

        {tours.map((tour) => (
          <SingleCard key={tour._id} tour={tour}></SingleCard>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/all-packages">
          {" "}
          <button onClick={scrollToTop} className="btn">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPackageCard;
