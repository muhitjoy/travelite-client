import React, { useState, useEffect, use } from "react";
import { Menu, Search } from "lucide-react";
import tourImage from "../../assets/logo-dark.webp";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("sign out user");
        toast.info(" Logout Successfully!", {
          position: "top-right",
          autoClose: 2000,
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/all-packages", text: "All Packages" },

    ...(user ? [{ href: "/add-package", text: "Add Package" }] : []),
    ...(user ? [{ href: "/my-bookings", text: "My Bookings" }] : []),
    ...(user
      ? [
          {
            href: `/manage-my-package`,
            text: "Manage My Packages",
          },
        ]
      : []),
    { href: "/about-us", text: "About Us" },
  ];

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-600/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8  flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-5">
            <div className="flex items-center justify-center">
              <img className="h-8" src={tourImage} alt="" />
            </div>
          </a>

          {/* Desktop Nav + Actions on the right */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.href}
                className={({ isActive }) =>
                  `relative pb-1 font-medium transition-all duration-300
     after:content-[''] after:absolute after:left-0 after:bottom-0 
     after:h-[2px] after:bg-emerald-500 after:transition-[width] after:duration-300
     ${
       isActive
         ? "text-emerald-400 after:w-full"
         : "text-white after:w-0 hover:after:w-full"
     }`
                }
              >
                {link.text}
              </NavLink>
            ))}

            {user ? (
              // 🟢 If user is logged in — show profile photo with hover dropdown
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="h-10 w-10 rounded-full border-2 border-emerald-400 cursor-pointer object-cover"
                />

                {/* Dropdown on hover */}
                <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform transition-all duration-300 z-50">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700 text-center">
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="h-14 w-14 mx-auto rounded-full object-cover border"
                    />
                    <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {user.displayName}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {user.email}
                    </p>
                  </div>

                  <div className="p-2">
                    <Link to="/add-package">
                      <button className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                        Add Package
                      </button>
                    </Link>
                    <Link to="/manage-my-package">
                      <button className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                        Manage My Packages
                      </button>
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-1 w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                    >
                      <MdLogout /> Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // 🔵 If user not logged in — show login/register buttons
              <></>
            )}

            {/* theme-controller and login-register button */}
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="dark"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-10 w-10 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {user ? (
              <button
                onClick={handleSignOut}
                className="cursor-pointer px-4 py-2 text-sm font-medium rounded-lg transition-colors shadow-sm bg-emerald-600 text-white hover:bg-emerald-700"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-4  py-2 text-sm font-medium rounded-lg transition-colors shadow-sm ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-700"
                  }`
                }
              >
                Login
              </NavLink>
            )}

            {user ? (
              ""
            ) : (
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-lg transition-colors shadow-sm ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "bg-blue-400 text-white hover:bg-blue-700"
                  }`
                }
              >
                Register
              </NavLink>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex space-x-1 md:hidden">
            <div className="mr-3">
              {user ? (
                // 🟢 If user is logged in — show profile photo with hover dropdown
                <div className="relative group">
                  <img
                    src={user.photoURL || "https://i.ibb.co/YPXktqs/avatar.png"}
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full border-2 border-emerald-400 cursor-pointer object-cover"
                  />

                  {/* Dropdown on hover */}
                  <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform transition-all duration-300 z-50">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700 text-center">
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="h-14 w-14 mx-auto rounded-full object-cover border"
                      />
                      <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {user.displayName || "User"}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {user.email}
                      </p>
                    </div>

                    <div className="p-2">
                      <button className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                        Add Package
                      </button>
                      <button className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                        Manage My Packages
                      </button>
                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-1 w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                      >
                        <MdLogout></MdLogout> Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // 🔵 If user not logged in — show login/register buttons
                <></>
              )}
            </div>
            <div>
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="dark"
                />

                {/* sun icon */}
                <svg
                  className="swap-off h-10 w-10 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>

            {!isMenuOpen && (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              >
                <Menu className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm z-50 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <a href="#" className="flex items-center space-x-2">
              <div className="flex items-center justify-center">
                <img className="h-8" src={tourImage} alt="" />
              </div>
            </a>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-grow p-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.text}
                  href={link.href}
                  className={`px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transform transition-all duration-300 ease-out delay-${
                    index * 75
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Login Register Button */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            {user ? (
              <NavLink
                onClick={handleSignOut}
                to="/login"
                className={({ isActive }) =>
                  `w-full block text-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-700 text-white shadow-md"
                      : "bg-blue-400 text-white hover:bg-blue-700"
                  }`
                }
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `w-full block text-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-700 text-white shadow-md"
                      : "bg-blue-400 text-white hover:bg-blue-700"
                  }`
                }
              >
                Login
              </NavLink>
            )}
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            {user ? (
              ""
            ) : (
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `w-full block text-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-700 text-white shadow-md"
                      : "bg-blue-400 text-white hover:bg-blue-700"
                  }`
                }
              >
                Register
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
