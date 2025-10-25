import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AddPackage = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);

  const handleAddPackage = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const newTour = Object.fromEntries(formData.entries());

    // Add guide information manually to the form data
    newTour.guide_name = user?.displayName || "";
    newTour.guide_email = user?.email || "";
    newTour.guide_photo = user?.photoURL || "";
    newTour.likedBy = [];
    newTour.bookingCount = 0; 
    newTour.created_at = new Date().toISOString(); 

    // save tour data to database
    axios
      .post(`${import.meta.env.VITE_API_URL}/add-tour`, newTour)
      .then((data) => {
        console.log(data);
        toast.success(" Data added Successfully!", {
          position: "top-right",
          autoClose: 2000,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });

  

    // console.log("New Tour Package:", newTour);
  };

  return (
    <div className="px-4 md:px-12 lg:px-24 py-10 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-10 mt-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Craft Your Next Adventure
        </h1>
        <p className="text-base md:text-lg  leading-relaxed max-w-3xl mx-auto">
          Create unforgettable travel experiences by designing the perfect tour
          package. Share your unique destinations with travelers seeking
          authentic adventures and lasting memories around the globe.
        </p>
      </div>

      <form
        onSubmit={handleAddPackage}
        className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border border-gray-100"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Tour Name */}
          <fieldset className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-blue-300">
            <label className="label font-semibold text-gray-700">
              Tour Name
            </label>
            <input
              type="text"
              name="tour_name"
              className="input input-bordered w-full bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enchanting Bali Discovery"
              required
            />
          </fieldset>

          {/* Image URL */}
          <fieldset className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-blue-300">
            <label className="label font-semibold text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              className="input input-bordered w-full bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="https://example.com/scenic-view.jpg"
              required
            />
          </fieldset>

          {/* Duration */}
          <fieldset className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-blue-300">
            <label className="label font-semibold text-gray-700">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              className="input input-bordered w-full bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="5 Days 4 Nights"
              required
            />
          </fieldset>

          {/* Departure Location */}
          <fieldset className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-blue-300">
            <label className="label font-semibold text-gray-700">
              Departure Location
            </label>
            <input
              type="text"
              name="departure_location"
              className="input input-bordered w-full bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Jakarta International Airport"
              required
            />
          </fieldset>

          {/* Destination */}
          <fieldset className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-blue-300">
            <label className="label font-semibold text-gray-700">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              className="input input-bordered w-full bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Bali, Indonesia"
              required
            />
          </fieldset>

          {/* Price */}
          <fieldset className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-blue-300">
            <label className="label font-semibold text-gray-700">Price</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                name="price"
                className="input input-bordered w-full bg-white pl-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="899"
                required
              />
            </div>
          </fieldset>

          {/* Departure Date */}
          <fieldset className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-blue-300">
            <label className="label font-semibold text-gray-700">
              Departure Date
            </label>
            <input
              type="date"
              name="departure_date"
              className="input input-bordered w-full bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </fieldset>

          {/* Contact No */}
          <fieldset className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-blue-300">
            <label className="label font-semibold text-gray-700">
              Contact No
            </label>
            <input
              type="text"
              name="guide_contact_no"
              className="input input-bordered w-full bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="+1 (555) 123-4567"
              required
            />
          </fieldset>

          {/* Guide Information */}
          <fieldset className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 col-span-1 sm:col-span-2 lg:col-span-3">
            <label className="label font-semibold text-gray-700">
              Guide Information
            </label>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <img
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full object-cover"
                    src={user?.photoURL || "default-avatar.png"}
                    alt={user?.displayName || "Guide Photo"}
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      {user && user.displayName}
                    </p>
                    <p className="text-sm text-gray-500">
                      {user && user.email}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    Current Guide
                  </span>
                </div>
              </div>

              {/* Hidden inputs for guide data */}
              <input
                type="hidden"
                name="guide_name"
                value={user?.displayName || ""}
              />
              <input
                type="hidden"
                name="guide_email"
                value={user?.email || ""}
              />
              <input
                type="hidden"
                name="guide_photo"
                value={user?.photoURL || ""}
              />

              <p className="text-sm text-gray-500 text-center">
                Guide information is automatically included from your Firebase
                authentication
              </p>
            </div>
          </fieldset>

          {/* Package Details */}
          <fieldset className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-blue-300 col-span-1 sm:col-span-2 lg:col-span-3">
            <label className="label font-semibold text-gray-700">
              Package Details
            </label>
            <textarea
              name="package_details"
              className="textarea textarea-bordered w-full bg-white h-32 md:h-40 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Describe the amazing experiences, accommodations, activities, and inclusions that make this tour special..."
              required
            />
          </fieldset>
        </div>

        <div className="mt-8 md:mt-12 flex justify-center">
          <button
            type="submit"
            className="btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none px-8 md:px-12 py-3 md:py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md"
          >
            <span className="flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Launch Your Tour Package
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPackage;
