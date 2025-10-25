import React from "react";
import { FaArrowRight } from "react-icons/fa";
import beachImg from "../../assets/Travel-connects/image-1.jpg";
import desertImg from "../../assets/Travel-connects/image-2.jpg";
import cityImg from "../../assets/Travel-connects/image-3.jpg";

const TravelConnection = () => {
  return (
    <section className="max-w-7xl mx-auto px-2 py-10 border-b mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl ld ">
            We don’t just sell travel –{" "}
            <span className="text-orange-500 font-bold">we create connections.</span>
          </h2>
          <p className="mt-3 text-2xl md:text-3xl  ">
            Connections between people, cultures, and experiences that will stay with you forever.
          </p>
        </div>

        {/* Right Side Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Circle Images - closer overlap */}
          <div className="flex items-center -space-x-4 md:-space-x-6">
            <img
              src={beachImg}
              alt="Beach"
              className="w-20 h-20 md:w-25 md:h-25 rounded-full object-cover border-4 border-white shadow-md"
            />
            <img
              src={desertImg}
              alt="Desert"
              className="w-20 h-20  md:w-25 md:h-25 rounded-full object-cover border-4 border-white shadow-md"
            />
            <img
              src={cityImg}
              alt="City"
              className="w-20 h-20 md:w-25 md:h-25 rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>

          {/* Text + Link */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-1 ">
              Have Fun With Us!
            </h3>
            <a
              href="/all-packages"
               className="relative text-blue-600 font-medium inline-flex items-center gap-1
             after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
             after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all 
             after:duration-300 hover:after:w-full hover:text-blue-800"
            >
              Explore More Destinations <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelConnection;
