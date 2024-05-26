/* eslint-disable react/no-unescaped-entities */
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = JSON.stringify({
      email,
      password,
    });

    localStorage.setItem("captify-user", user);

    toast.success("User login successful");
    navigate("/auth/userDashboard");
  };
  return (
    <div className="flex justify-center min-h-screen items-center mx-5 md:mx-0">
      <div className="border border-[#460073]  rounded shadow md:w-[500px] md:h-[420px]">
        <h1 className="font-bold  text-center pt-5 md:text-3xl text-[#460073]">
          User Login
        </h1>
        <form onSubmit={handleUserLogin} action="" className="mx-10">
          <label className="input input-bordered flex items-center gap-2 mt-10">
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
          {/* Forgot section */}
          <div className="flex flex-col mx-2 pl-3 mt-3 md:flex-row md:justify-between md:items-center ">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id=""
                className="cursor-pointer"
              />
              <p className="text-[16px]  ml-3">Remember Me</p>
            </div>
            <div className="flex md:justify-end items-center -mt-2 md:mt-2 ">
              <Link className="text-[16px] hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>
          {/* toggle to sign up */}
          <div className="m-3 mt-3">
            <span className="">
              Don't have an account?{" "}
              <Link to={'/auth/signup'} className="hover-underline-animation hover:opacity-70">
                Sign Up
              </Link>
            </span>
          </div>
          <button type="submit" className="customBtn1 w-full mt-10">
             Login
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
