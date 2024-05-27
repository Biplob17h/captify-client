/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextApi/UserContext";

const Signup = () => {
  const { refresh, setRefresh } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUserSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = JSON.stringify({
      email,
      password,
    });

    localStorage.setItem("captify-user", user);

    toast.success("user sign up successful");
    navigate("/auth/userDashboard");
    setRefresh(refresh + 1);
  };
  return (
    <div className="flex justify-center min-h-screen items-center mx-5 md:mx-0">
      <div className="border border-[#460073]  rounded shadow md:w-[500px] md:h-[580px]">
        <h1 className="font-bold  text-center pt-5 md:text-3xl text-[#460073]">
          User Sign up
        </h1>
        <form onSubmit={handleUserSignUp} action="" className="mx-10">
          <label className="input input-bordered flex items-center gap-2 mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              name="email"
              defaultValue={"user@gmail.com"}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              name="password"
              defaultValue={"123456"}
            />
          </label>
          {/* toggle to sign up */}
          <div className="m-3 mt-3">
            <span className="">
              Already have an account?{" "}
              <Link
                to={"/auth/login"}
                className="hover-underline-animation hover:opacity-70"
              >
                Login
              </Link>
            </span>
          </div>
          <button type="submit" className="customBtn1 w-full mt-10">
            Sign Up
          </button>
        </form>
        <div className="text-center my-3">
          <h1>Or</h1>
        </div>
        <div className="mx-10">
          <button
            type="button"
            className="w-full my-3 bg-[#353434] text-white py-2 px-4 rounded hover:bg-gray-600 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24"
              height="24"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.22 0 5.17 1.38 6.35 2.55l4.61-4.61C31.37 4.91 28.09 3 24 3 17.73 3 12.46 6.9 10.05 12.02l5.39 4.19C16.9 12.62 20.19 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.16 24.5c0-1.36-.12-2.72-.36-4.05H24v7.66h12.61c-.55 2.96-2.21 5.45-4.73 7.11l5.39 4.19c3.12-2.88 5.45-7.1 5.45-14.91z"
              />
              <path
                fill="#FBBC05"
                d="M10.05 24c0-1.58.27-3.1.75-4.51l-5.39-4.19C3.83 18.26 3 21.05 3 24s.83 5.74 2.41 8.7l5.39-4.19c-.48-1.41-.75-2.93-.75-4.51z"
              />
              <path
                fill="#34A853"
                d="M24 46c4.09 0 7.62-1.35 10.16-3.65l-5.39-4.19c-1.49 1.01-3.37 1.62-5.77 1.62-3.81 0-7.09-2.9-8.25-6.85l-5.39 4.19C12.46 41.1 17.73 46 24 46z"
              />
              <path fill="none" d="M0 0h48v48H0z" />
            </svg>
            Continue with Google
          </button>
          <button
            type="button"
            className="w-full my-3 bg-[#353434]  text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24"
              height="24"
            >
              <path
                fill="#3B5998"
                d="M24 4C12.95 4 4 12.95 4 24c0 9.85 7.36 18 17 19.7v-13.9h-5.13v-5.8H21V21.1c0-5.12 3.1-7.9 7.62-7.9 2.18 0 4.04.16 4.59.23v5.32h-3.15c-2.47 0-2.95 1.18-2.95 2.9v3.8H33.5l-.89 5.8H27.1v13.9c9.64-1.7 17-9.85 17-19.7 0-11.05-8.95-20-20-20z"
              />
            </svg>
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
