import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login/Login";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import AuthLayout from "../Layouts/AuthLayout";
import Signup from "../Pages/Authentication/Signup/Signup";
import UserDashbord from "../Pages/Dashbord/UserDashbord";
import ThinkPage from "../Pages/ThinkPage/ThinkPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Preference from "../Pages/Preference/Preference";
import Privacy from "../Pages/Privacy/Privacy";
import TermPage from "../Pages/TermPage/TermPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/privacy", element: <Privacy></Privacy> },
      { path: "/preference", element: <Preference></Preference> },
      { path: "/term", element: <TermPage></TermPage> },
      { path: "/think", element: <ThinkPage></ThinkPage> },
      { path: "/dashboard", element: <Dashboard></Dashboard> },
      { path: "/update", element: <UpdateProfile></UpdateProfile> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      { path: "/auth/login", element: <Login></Login> },
      { path: "/auth/signup", element: <Signup></Signup> },
      { path: "/auth/userDashboard", element: <UserDashbord></UserDashbord> },
    ],
  },
]);

export default Routes;
