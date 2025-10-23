import React, { useEffect, useState } from "react";
// import { FaSearch, FaStar, FaGlobeAmericas, FaUmbrellaBeach, FaMountain, City } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import PackageCard from "./PackageCard";
import {
  FaCity,
  FaGlobeAmericas,
  FaMountain,
  FaSearch,
  FaStar,
  FaUmbrellaBeach,
} from "react-icons/fa";
import Loader from "../../Components/Loader/Loader";

const AllPackages = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader></Loader>
      </div>
    );
  }

  // Categories for filtering
  const categories = [
    {
      id: "all",
      name: "All Tours",
      icon: <FaGlobeAmericas />,
      count: data.length,
    },
    {
      id: "beach",
      name: "Beach",
      icon: <FaUmbrellaBeach />,
      count: data.filter((p) => p.category === "beach").length,
    },
    {
      id: "mountain",
      name: "Mountain",
      icon: <FaMountain />,
      count: data.filter((p) => p.category === "mountain").length,
    },
    {
      id: "city",
      name: "City",
      icon: <FaCity />,
      count: data.filter((p) => p.category === "city").length,
    },
  ];

  // Filter packages based on search and category
  const filteredPackages = data.filter((packageItem) => {
    const matchesSearch =
      searchTerm === "" ||
      packageItem.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      packageItem.destination
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      packageItem.description?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "all" || packageItem.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <FaStar className="text-yellow-300" />
              <span className="text-sm font-semibold">
                Discover Your Perfect Getaway
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Explore The
              <span className="block bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                World With Us
              </span>
            </h1>

            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Unforgettable journeys await. From tropical beaches to mountain
              peaks, discover your next adventure with our curated travel
              experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">50+</div>
                <div className="text-blue-100 text-sm">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">10K+</div>
                <div className="text-blue-100 text-sm">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">5★</div>
                <div className="text-blue-100 text-sm">Rated Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">24/7</div>
                <div className="text-blue-100 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-12"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-white"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-white"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 -mt-8 relative z-10">
        {/* Search Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
              Find Your Dream Vacation
            </h2>

            {/* Search Bar */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400 text-lg" />
              </div>
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search destinations, activities, or packages..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 hover:bg-white"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-200 transform scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                  }`}
                >
                  <span className="text-sm">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? "bg-white text-blue-500"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Featured Packages
            </h2>
            <p className="text-gray-600">
              {filteredPackages.length} amazing{" "}
              {filteredPackages.length === 1 ? "package" : "packages"} found
              {searchTerm && ` for "${searchTerm}"`}
              {activeCategory !== "all" &&
                ` in ${categories.find((c) => c.id === activeCategory)?.name}`}
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <div className="flex items-center gap-2 text-amber-500">
              <FaStar />
              <span className="font-semibold text-gray-700">
                Top Rated Experiences
              </span>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((packageItem) => (
              <PackageCard key={packageItem._id} packageItem={packageItem} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                <FaSearch className="text-3xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                No packages found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any packages matching your search. Try
                adjusting your filters or search terms.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                className="bg-blue-500 text-white px-8 py-3 rounded-xl hover:bg-blue-600 transition-colors font-semibold shadow-lg shadow-blue-200"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready for Your Next Adventure?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
              Join thousands of satisfied travelers who have discovered the
              world with us. Your dream vacation is just a click away.
            </p>
            <Link to="/">
              {" "}
              <button className="bg-white cursor-pointer text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Get Travel Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPackages;
