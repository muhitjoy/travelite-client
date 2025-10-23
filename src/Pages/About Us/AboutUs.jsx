import React from "react";
import { MapPin, Users, Award, Heart } from "lucide-react";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-success mb-6">
          Our Story in Every Journey
        </h1>
        <p className="text-xl text-info max-w-3xl mx-auto">
          We believe that travel has the power to transform lives, create
          lasting memories, and connect people across cultures. Our mission is
          to make extraordinary experiences accessible to everyone.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
          <Users className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
            50K+
          </h3>
          <p className="text-gray-600 dark:text-gray-300">Happy Travelers</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
          <MapPin className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
            150+
          </h3>
          <p className="text-gray-600 dark:text-gray-300">Destinations</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
          <Award className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
            12+
          </h3>
          <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
          <Heart className="w-12 h-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
            98%
          </h3>
          <p className="text-gray-600 dark:text-gray-300">Satisfaction Rate</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
          <div className="w-16 h-2 bg-blue-600 rounded-full mb-6"></div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            To create unforgettable travel experiences that inspire personal
            growth, cultural understanding, and lifelong memories. We're
            committed to sustainable tourism that benefits both travelers and
            local communities.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
          <div className="w-16 h-2 bg-green-600 rounded-full mb-6"></div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            To become the world's most trusted travel companion, making
            extraordinary adventures accessible to everyone while preserving the
            beauty and culture of every destination we touch.
          </p>
        </div>
      </div>

      {/* Team Values */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center text-	warning-content mb-12">
          What Makes Us Different
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold text-warning mb-3">
              Local Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our guides are local experts who share authentic experiences and
              hidden gems you won't find in guidebooks.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💚</span>
            </div>
            <h3 className="text-xl font-semibold text-success mb-3">
              Sustainable Travel
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We're committed to eco-friendly practices and supporting local
              communities through responsible tourism.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-semibold text-error mb-3">
              Personalized Service
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              From planning to execution, we provide personalized attention to
              make your journey truly special.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of travelers who have trusted us with their most
          memorable journeys.
        </p>
        <Link to='/all-packages'> 
          {" "}
          <button className="bg-white cursor-pointer text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Explore Our Packages
          </button>
        </Link>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="fixed top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="fixed top-1/2 right-20 w-6 h-6 bg-green-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="fixed bottom-1/3 left-1/4 w-3 h-3 bg-yellow-400 rounded-full opacity-25 animate-ping"></div>
    </div>
  );
};

export default AboutUs;
