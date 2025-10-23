import React from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import ErrorLottie from "../../src/assets/lotties/ErrorPage.json";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white text-center px-4">
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[600px] flex flex-col justify-center items-center">
        <Lottie animationData={ErrorLottie} loop={true} className="w-full" />

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mt-4">
          Oops! You seem lost in the Himalayas 🏔️
        </h1>
        <p className="text-gray-600 mt-2 text-base sm:text-lg">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg transition duration-300 shadow-md"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
