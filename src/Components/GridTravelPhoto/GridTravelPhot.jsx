import React from "react";

const GridTravelPhoto = () => {
  const photos = [
    {
      src: "https://promo-theme.com/travelite/wp-content/uploads/2024/07/travelite-51-616x1024.webp",
      location: "Bali, Indonesia",
    },
    {
      src: "https://promo-theme.com/travelite/wp-content/uploads/2024/07/travelite-52-1024x810.webp",
      location: "Switzerland",
    },
    {
      src: "https://promo-theme.com/travelite/wp-content/uploads/2024/07/travelite-53-1024x810.webp",
      location: "Dubai, UAE",
    },
    {
      src: "https://promo-theme.com/travelite/wp-content/uploads/2024/07/travelite-54.webp",
      location: "Amazon Rainforest, Brazil",
    },
    {
      src: "https://promo-theme.com/travelite/wp-content/uploads/2024/07/travelite-55-1024x810.webp",
      location: "Tokyo, Japan",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <p className="text-sm text-blue-600 font-semibold mb-2">Our Gallery</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Journey Of A Lifetime:{" "}
            <br className="hidden md:block" />
            <span>Create Unforgettable Memories</span>
          </h2>
        </div>
        <button className="mt-6 md:mt-0 bg-blue-100 text-blue-700 font-medium px-6 py-2 rounded-full hover:bg-blue-200 transition">
          Go To Gallery
        </button>
      </div>

      {/* Main Image Grid */}
      <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-6">
        {/* Left Big Image */}
        <div className="rounded-2xl overflow-hidden shadow-md h-full relative group cursor-pointer">
          <img
            src={photos[0].src}
            alt="Big travel"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay with location */}
          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition duration-500" />
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition duration-500">
            <p className="text-white text-xl font-semibold drop-shadow-lg">
              {photos[0].location}
            </p>
          </div>
        </div>

        {/* Right 4 Small Images (2x2 grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6">
          {photos.slice(1).map((photo, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-md relative group cursor-pointer"
            >
              <img
                src={photo.src}
                alt={`Gallery ${index + 2}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition duration-500" />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white text-lg font-semibold drop-shadow-lg">
                  {photo.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridTravelPhoto;
