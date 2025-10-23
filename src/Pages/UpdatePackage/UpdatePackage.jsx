import axios from "axios";
import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdatePackage = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const {
    _id,
    tour_name,
    image,
    duration,
    departure_location,
    destination,
    price,
    departure_date,
    guide_contact_no,
    package_details,
  } = data;

  const handleUpdateTour = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateTour = Object.fromEntries(formData.entries());

    console.log("Updating tour:", updateTour);

    try {
      // Send update tour to the database
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/tours/${_id}`,
        updateTour
      );

      console.log("Update successful:", response.data);

      // Show success message or redirect
      toast.success(" Tour package updated successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
      navigate("/"); // Redirect to tours page after successful update


    } catch (error) {
      console.error("Error updating tour:", error);
      toast.error("Failed to update tour package. Please try again.", {
          position: "bottom-right",
          autoClose: 2000,
        })
        
    }
  };

  const handleCancel = () => {
    // Navigate back or to previous page
    navigate(-1); // Goes back to previous page
    // Or navigate to specific route: navigate("/tours");
  };

  // Format date for input field (YYYY-MM-DD)
  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  return (
    <div className="px-4 md:px-12 lg:px-24 py-10 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-10 mt-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Update Your Package
        </h1>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Refine and perfect your travel package. Update the details to create
          even more memorable experiences for travelers seeking extraordinary
          adventures.
        </p>
      </div>

      <form
        onSubmit={handleUpdateTour}
        className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border border-gray-100"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Tour Name */}
          <fieldset className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-green-300">
            <label className="label font-semibold text-gray-700">
              Tour Name
            </label>
            <input
              type="text"
              name="tour_name"
              className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="Enchanting Bali Discovery"
              required
              defaultValue={tour_name}
            />
          </fieldset>

          {/* Image URL */}
          <fieldset className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-green-300">
            <label className="label font-semibold text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="https://example.com/scenic-view.jpg"
              required
              defaultValue={image}
            />
          </fieldset>

          {/* Duration */}
          <fieldset className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-green-300">
            <label className="label font-semibold text-gray-700">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="5 Days 4 Nights"
              required
              defaultValue={duration}
            />
          </fieldset>

          {/* Departure Location */}
          <fieldset className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-green-300">
            <label className="label font-semibold text-gray-700">
              Departure Location
            </label>
            <input
              type="text"
              name="departure_location"
              className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="Jakarta International Airport"
              required
              defaultValue={departure_location}
            />
          </fieldset>

          {/* Destination */}
          <fieldset className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-green-300">
            <label className="label font-semibold text-gray-700">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="Bali, Indonesia"
              required
              defaultValue={destination}
            />
          </fieldset>

          {/* Price */}
          <fieldset className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-green-300">
            <label className="label font-semibold text-gray-700">Price</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                name="price"
                className="input input-bordered w-full bg-white pl-8 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="899"
                min="0"
                step="0.01"
                required
                defaultValue={price}
              />
            </div>
          </fieldset>

          {/* Departure Date */}
          <fieldset className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-green-300">
            <label className="label font-semibold text-gray-700">
              Departure Date
            </label>
            <input
              type="date"
              name="departure_date"
              className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              required
              defaultValue={formatDateForInput(departure_date)}
            />
          </fieldset>

          {/* Contact No */}
          <fieldset className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-green-300">
            <label className="label font-semibold text-gray-700">
              Contact No
            </label>
            <input
              type="tel"
              name="guide_contact_no"
              className="input input-bordered w-full bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="+1 (555) 123-4567"
              required
              defaultValue={guide_contact_no}
            />
          </fieldset>

          {/* Package Details */}
          <fieldset className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 col-span-1 sm:col-span-2 lg:col-span-3">
            <label className="label font-semibold text-gray-700">
              Package Details
            </label>
            <textarea
              name="package_details"
              className="textarea textarea-bordered w-full bg-white h-32 md:h-40 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="Describe the amazing experiences, accommodations, activities, and inclusions that make this tour special..."
              required
              defaultValue={package_details}
            />
          </fieldset>
        </div>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            type="submit"
            className="btn bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-none px-8 md:px-12 py-3 md:py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Update Tour Package
            </span>
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="btn bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white border-none px-8 md:px-12 py-3 md:py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Cancel
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePackage;
