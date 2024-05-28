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

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/think", element: <ThinkPage></ThinkPage> },
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
