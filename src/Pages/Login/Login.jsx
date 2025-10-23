import React, { use } from "react";
import Lottie from "lottie-react";
import loginLottie from "../../assets/lotties/Login.json";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);
const navigate = useNavigate()
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);

        toast.success(" Login Successfully!", {
          position: "top-right",
          autoClose: 2000,
        })
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Sign in user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        toast.success(" Login Successfully!", {
          position: "top-right",
          autoClose: 2000,
        })
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, {
          position: "bottom-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen py-8 sm:py-12 lg:py-5">
      <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 w-full px-4 md:px-8 lg:px-12">
        {/* Lottie Animation */}
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[900px] flex justify-center px-4 sm:px-6 lg:px-8">
          <Lottie
            animationData={loginLottie}
            loop={true}
            className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Registration Form */}
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl rounded-xl mx-4 sm:mx-6 lg:mx-8">
          <div className="card-body p-6 sm:p-8 lg:p-10">
            <h1 className="text-3xl sm:text-4xl lg:text-3xl font-bold mb-6 text-center lg:text-left bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-2">
              Login Your Account!
            </h1>

            <form onSubmit={handleSignIn}>
              <fieldset className="space-y-6 border-0 p-0">
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

                {/* Password Field */}
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
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Password
                    </span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="input input-bordered input-lg focus:input-primary transition-all duration-300 px-4"
                    placeholder="Enter your Password"
                    required
                  />
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
                    login
                  </button>
                </div>
                {/* divider */}
                <div className="divider">OR</div>
                {/* Google Login Button */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="cursor-pointer w-full flex items-center justify-center px-4 py-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                >
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
                  Don&apos;t have an account?{" "}
                  <Link
                    to="/register"
                    className="text-primary font-semibold hover:underline"
                  >
                    Please Register
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

export default Login;
