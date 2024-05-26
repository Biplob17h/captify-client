/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavbarLinksForBigdevice from "./NavbarLinksForBigdevice";

const Navbar = () => {
  const [showNav, setShowNav] = useState("");
  return (
    <div>
      {/* navbar */}
      <div>
        {/* navbar for big device */}
        <div className="flex justify-between items-center mx-[3%] h-[100px] ">
          <Link to={"/"} className="text-4xl font-bold">
            Captify
          </Link>
          <div className="flex text-[17px]">
            <div
              onClick={() => {
                showNav === "" || setShowNav === "are"
                  ? setShowNav("do")
                  : setShowNav("");
              }}
              className="ml-5 hover:text-gray-400"
            >
              <Link className="flex items-center">
                <span>What we do</span> <FaAngleDown className="pl-2" />
              </Link>
            </div>
            <div className="ml-5 hover:text-gray-400">
              <Link>What we think</Link>
            </div>
            <div
              onClick={() => {
                showNav === "" || setShowNav === "do"
                  ? setShowNav("are")
                  : setShowNav("");
              }}
              className="ml-5 hover:text-gray-400 "
            >
              <Link className="flex items-center">
                <span>What we are</span> <FaAngleDown className="pl-2" />
              </Link>
            </div>
          </div>
          <div className="text-[17px] font-semibold">
            <Link to={"/auth/login"} className="mr-5 hover:text-gray-400">
              Login
            </Link>
            <Link to={"/auth/signup"} className="mr-5 hover:text-gray-400">
              Sign Up
            </Link>
          </div>
        </div>
        {/* navbar for small device */}
        <div className="flex justify-between items-center mx-[3%]"></div>
      </div>
      {/* navbar links */}
      <NavbarLinksForBigdevice showNav={showNav}></NavbarLinksForBigdevice>
    </div>
  );
};

export default Navbar;
