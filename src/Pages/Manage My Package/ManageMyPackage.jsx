import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

import {
  FaEdit,
  FaTrashAlt,
  FaEye,
  FaCalendarAlt,
  FaClock,
  FaDollarSign,
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaUsers,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router";
import { toast } from "react-toastify";

const ManageMyPackage = () => {
  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/my-packages/${user?.email}`).then(
      (res) => {
        setMyData(res.data);
      }
    );
  }, [user?.email]);
  console.log(myData, user?.email);

  const handleDelete = (_id) => {
    fetch(`${import.meta.env.VITE_API_URL}/tours/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          setMyData((prev) =>
            prev.filter((singleTour) => singleTour._id !== _id)
          );
          toast.success(" Your package has been deleted!", {
            position: "top-right",
            autoClose: 2000,
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <FaGlobeAmericas className="mr-2" />
            Tour Management Portal
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Curate Unforgettable
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              {" "}
              Journeys{" "}
            </span>
            with Precision
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform wanderlust into well-crafted adventures. Manage your tour
            packages with powerful tools that help you create, organize, and
            optimize unforgettable travel experiences for your clients.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-200">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600">
                Active Packages:
              </span>
              <span className="font-bold text-gray-800">{myData.length}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-200">
              <FaUsers className="text-blue-500" />
              <span className="text-sm font-medium text-gray-600">
                Total Capacity:
              </span>
              <span className="font-bold text-gray-800">
                {myData.reduce((sum, item) => sum + (item.capacity || 0), 0)}
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-200">
              <FaStar className="text-yellow-500" />
              <span className="text-sm font-medium text-gray-600">
                Average Rating:
              </span>
              <span className="font-bold text-gray-800">4.8/5</span>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">
                Ready to Create Magic?
              </h2>
              <p className="text-blue-100 opacity-90">
                Launch your next extraordinary adventure. Our tools make package
                creation seamless and stunning.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link to="/add-package">
                {" "}
                <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  + Create New Package
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table Header */}
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">#</th>
                  <th className="py-4 px-6 text-left font-semibold">
                    Tour Details
                  </th>
                  <th className="py-4 px-6 text-left font-semibold">Guide</th>
                  <th className="py-4 px-6 text-left font-semibold">Price</th>
                  <th className="py-4 px-6 text-left font-semibold">
                    Duration
                  </th>
                  <th className="py-4 px-6 text-left font-semibold">
                    Departure
                  </th>
                  <th className="py-4 px-6 text-center font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-200">
                {myData.map((data, index) => (
                  <tr
                    key={data._id}
                    className="hover:bg-blue-50 transition-all duration-200 group"
                  >
                    {/* Serial Number */}
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full font-bold">
                        {index + 1}
                      </div>
                    </td>

                    {/* Tour Details */}
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                            {data.tour_name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {data.category || "Adventure Tour"}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Guide */}
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {data.guide_name?.charAt(0) || "G"}
                        </div>
                        <span className="font-medium text-gray-700">
                          {data.guide_name || "Local Guide"}
                        </span>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2 text-green-600">
                        <FaDollarSign className="text-lg" />
                        <span className="text-xl font-bold">
                          {data.price || "0"}
                        </span>
                        <span className="text-sm text-gray-500">/person</span>
                      </div>
                    </td>

                    {/* Duration */}
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2 text-purple-600">
                        <FaClock className="text-lg" />
                        <span className="font-medium">
                          {data.duration || "N/A"}
                        </span>
                      </div>
                    </td>

                    {/* Departure Date */}
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2 text-orange-600">
                        <FaCalendarAlt className="text-lg" />
                        <span className="font-medium">
                          {data.departure_date || "Not scheduled"}
                        </span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6">
                      <div className="flex justify-center space-x-3">
                        <Link to={`/updatePackage/${data._id}`}>
                          <button
                            className="p-3 cursor-pointer bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 hover:scale-110 transition-all duration-200 group relative"
                            title="Edit Package"
                          >
                            <FaEdit className="text-lg" />
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                              Edit
                            </span>
                          </button>
                        </Link>

                        <button
                          onClick={() => handleDelete(data._id)}
                          className="p-3 cursor-pointer bg-red-100 text-red-600 rounded-xl hover:bg-red-200 hover:scale-110 transition-all duration-200 group relative"
                          title="Delete Package"
                        >
                          <FaTrashAlt className="text-lg" />
                          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Delete
                          </span>
                        </button>

                        <Link to={`/featured-tour-details/${data._id}`}>
                          {" "}
                          <button
                            className="p-3 cursor-pointer bg-green-100 text-green-600 rounded-xl hover:bg-green-200 hover:scale-110 transition-all duration-200 group relative"
                            title="View Details"
                          >
                            <FaEye className="text-lg" />
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                              View
                            </span>
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {myData.length === 0 && (
            <div className="text-center py-16">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-blue-400 text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-3">
                No Adventures Created Yet
              </h3>
              <p className="text-gray-500 max-w-md mx-auto text-lg mb-8">
                Your journey to creating unforgettable travel experiences starts
                here. Design your first tour package and begin sharing the
                world's wonders.
              </p>
              <Link to="/add-package">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Create Your First Package
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Footer Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Portfolio Value</p>
                <p className="text-2xl font-bold text-green-600 mt-1">
                  $
                  {myData
                    .reduce(
                      (sum, item) => sum + (parseFloat(item.price) || 0),
                      0
                    )
                    .toLocaleString()}
                </p>
              </div>
              <FaDollarSign className="text-2xl text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Experiences</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">
                  {myData.length}
                </p>
              </div>
              <FaGlobeAmericas className="text-2xl text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Upcoming Journeys</p>
                <p className="text-2xl font-bold text-orange-600 mt-1">
                  {myData.filter((item) => item.departure_date).length}
                </p>
              </div>
              <FaCalendarAlt className="text-2xl text-orange-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Satisfaction Rate</p>
                <p className="text-2xl font-bold text-purple-600 mt-1">98%</p>
              </div>
              <FaStar className="text-2xl text-purple-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMyPackage;
