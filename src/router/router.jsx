import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/Rootlayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AllPackages from "../Pages/All Packages/AllPackages";
import AboutUs from "../Pages/About Us/AboutUs";
import ErrorPage from "../ErrorPage/ErrorPage";
import MyBookings from "../Pages/My Bookings/MyBookings";
import AddPackage from "../Pages/Add Package/AddPackage";
import ManageMyPackage from "../Pages/Manage My Package/ManageMyPackage";
import axios from "axios";
import SingleCardDetails from "../Components/FeaturedPackage/SingleCardDetails";
import Loader from "../Components/Loader/Loader";
import PrivateRoute from "../contexts/AuthContext/PrivateRoute";
import UpdatePackage from "../Pages/UpdatePackage/UpdatePackage";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsandConditions from "../Pages/TermsandConditions/TermsandConditions";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-packages",
        loader: () =>
          axios(`${import.meta.env.VITE_API_URL}/tours`).then(
            (res) => res.data
          ),
        Component: AllPackages,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "featured-tour-details/:id",
        loader: () =>
          axios(`${import.meta.env.VITE_API_URL}/tours`).then(
            (res) => res.data
          ),
        element: (
          <PrivateRoute>
            <SingleCardDetails></SingleCardDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "about-us",
        Component: AboutUs,
      },
      {
        path: "my-bookings",
        Component: MyBookings,
      },
      {
        path: "add-package",
        Component: AddPackage,
      },
      {
        path: "manage-my-package",
        Component: ManageMyPackage,
      },
      {
        path: "updatePackage/:id",
        loader: ({ params }) =>
          axios
            .get(`${import.meta.env.VITE_API_URL}/tours/${params.id}`)
            .then((res) => res.data),
        element: <UpdatePackage />,
      },

      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: 'privacy-policy',
        Component: PrivacyPolicy
      },
      {
        path: 'terms-conditions',
        Component: TermsandConditions
      }
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
