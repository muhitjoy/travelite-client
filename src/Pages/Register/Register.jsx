import Lottie from "lottie-react";
import React, { use, useState } from "react";
import registerLottie from "../../assets/lotties/Login and Sign up.json";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    return "";
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const error = validatePassword(password);
    setPasswordError(error);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo_url = form.photo_url.value;
    const password = form.password.value;

    // Validate password before submission
    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      toast.error(passwordValidationError, {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    console.log(name, email, photo_url, password);

    // create user
    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        updateProfile(newUser, {
          displayName: name,
          photoURL: photo_url
        })
        toast.success(" Registration Successful!", {
          position: "top-right",
          autoClose: 2000,
        })
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen py-5 sm:py-5 lg:py-5">
      <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 w-full px-4 md:px-8 lg:px-12">
        {/* Lottie Animation */}
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[800px] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <Lottie
            animationData={registerLottie}
            loop={true}
            className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
          />

          {/* Related Text */}
          <div className=" text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
              Join Our Community
            </h2>
            <p className="text- text-base sm:text-lg max-w-2xl mx-auto">
              Create your account in just a few steps and enjoy seamless access
              to our exclusive features, resources, and services.
            </p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="card bg-base-100 w-full  max-w-md shrink-0 shadow-2xl rounded-xl mx-4 sm:mx-6 lg:mx-8 md:p-4">
          <div className="card-body p-6  sm:p-8 lg:p-10 ">
            <h1 className="text-3xl sm:text-4xl lg:text-3xl font-bold mb-6 text-center lg:text-left bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-2">
              Create Your Account!
            </h1>

            <form onSubmit={handleRegister}>
              <fieldset className="space-y-4 border-0 p-0">
                <legend className="sr-only">Registration Information</legend>

                {/* Name Field */}
                <div className="form-control">
                  <label className="label pl-1">
                    <span className="label-text text-lg font-semibold flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Full Name
                    </span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="input input-bordered input-lg focus:input-primary transition-all duration-300 px-4"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="form-control">
                  <label className="label pl-1">
                    <span className="label-text text-lg font-semibold flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Email Address
                    </span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="input input-bordered input-lg focus:input-primary transition-all duration-300 px-4"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* Photo URL Field */}
                <div className="form-control">
                  <label className="label pl-1">
                    <span className="label-text text-lg font-semibold flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Profile Photo URL
                    </span>
                  </label>
                  <input
                    name="photo_url"
                    type="url"
                    className="input input-bordered input-lg focus:input-primary transition-all duration-300 px-4"
                    placeholder="https://example.com/photo.jpg"
                  />
                </div>

                {/* Password Field with Show/Hide */}
                <div className="form-control">
                  <label className="label pl-1">
                    <span className="label-text text-lg font-semibold flex items-center gap-2">
                      Password
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="input input-bordered input-lg focus:input-primary transition-all duration-300 w-full px-4 pr-12"
                      placeholder="Create a strong password"
                      required
                      onChange={handlePasswordChange}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200 bg-transparent border-none p-2 rounded-lg hover:bg-base-200"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                            clipRule="evenodd"
                          />
                          <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  
                  {/* Password Requirements */}
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-2 font-medium">
                      Password must contain:
                    </p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li className={`flex items-center ${passwordError.includes("6 characters") ? "text-error" : ""}`}>
                        <svg className={`w-3 h-3 mr-2 ${passwordError.includes("6 characters") ? "text-error" : "text-success"}`} fill="currentColor" viewBox="0 0 20 20">
                          {passwordError.includes("6 characters") ? (
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          ) : (
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          )}
                        </svg>
                        At least 6 characters
                      </li>
                      <li className={`flex items-center ${passwordError.includes("lowercase") ? "text-error" : ""}`}>
                        <svg className={`w-3 h-3 mr-2 ${passwordError.includes("lowercase") ? "text-error" : "text-success"}`} fill="currentColor" viewBox="0 0 20 20">
                          {passwordError.includes("lowercase") ? (
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          ) : (
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          )}
                        </svg>
                        One lowercase letter
                      </li>
                      <li className={`flex items-center ${passwordError.includes("uppercase") ? "text-error" : ""}`}>
                        <svg className={`w-3 h-3 mr-2 ${passwordError.includes("uppercase") ? "text-error" : "text-success"}`} fill="currentColor" viewBox="0 0 20 20">
                          {passwordError.includes("uppercase") ? (
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          ) : (
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          )}
                        </svg>
                        One uppercase letter
                      </li>
                    </ul>
                    
                    {/* Error Message */}
                    {passwordError && (
                      <div className="mt-2 p-2 bg-error/10 border border-error/20 rounded-lg">
                        <p className="text-error text-xs flex items-center">
                          <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {passwordError}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="text-left pt-2 pr-1">
                  <a className="link link-hover text-sm text-primary hover:text-secondary transition-colors duration-300">
                    Forgot your password?
                  </a>
                </div>

                {/* Submit Button */}
                <div className="form-control mt-8">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-full text-lg font-semibold hover:btn-secondary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl py-4"
                    disabled={!!passwordError}
                  >
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
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    Create Account
                  </button>
                 
                </div>
                {/* divider */}
                <div className="divider">OR</div>
                {/* Google Login Button */}
                <button type="button" className="cursor-pointer w-full flex items-center justify-center px-4 py-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="ml-3 text-[15px]">Continue with Google</span>
                </button>
                <p className="text-center text-sm mt-4">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary font-semibold hover:underline"
                  >
                    Please Login
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;