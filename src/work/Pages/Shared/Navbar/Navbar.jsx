import React, { useContext, useState } from "react";
import { FaAngleDown, FaAngleRight, FaBars, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavbarLinksForBigdevice from "./NavbarLinksForBigdevice";
import { AuthContext } from "../../../ContextApi/UserContext";
import logo from "../../../../assets/photos/logo.png";

const Navbar = () => {
  const [showNav, setShowNav] = useState("");
  const [isMobileNavVisible, setIsMobileNavVisible] = useState("");

  const { user } = useContext(AuthContext);

  const toggleMobileNav = () => {
    if (isMobileNavVisible === "") {
      return setIsMobileNavVisible("nav");
    } else {
      setIsMobileNavVisible("");
    }
  };

  return (
    <div className="z-[1000] relative">
      {/* navbar */}
      <div>
        {/* navbar for big device */}
        <div className=" justify-between items-center mx-[3%] h-[100px] hidden md:flex z-[100] relative">
          <Link to={"/"} className="customLogo">
            <img className="" src={logo} alt="" />
            <h1 className="customLogoText">Bradley Reporting</h1>
          </Link>
          <Link className=""></Link>
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
            <Link to="/think" className="ml-5 hover:text-gray-400">
              <div>What we think</div>
            </Link>
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
          <div>
            {user?.email ? (
              <Link
                to={"/dashboard/userDashboard"}
                className="dropdown dropdown-end"
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
              </Link>
            ) : (
              <div>
                <div className="text-[17px] font-semibold">
                  <Link to={"/auth/login"} className="mr-5 hover:text-gray-400">
                    Login
                  </Link>
                  <Link
                    to={"/auth/signup"}
                    className="mr-5 hover:text-gray-400"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* navbar for small device */}
        <div className="w-full relative z-[1000]">
          <div className="md:hidden">
            <div className="flex justify-between items-center py-3 px-3 bg-black text-white">
              <FaBars
                className="text-xl cursor-pointer"
                onClick={toggleMobileNav}
              />
              <Link to="/" className="text-2xl font-bold">
                <img className="w-[30px] rounded-lg" src={logo} alt="" />
              </Link>
              <Link to="/dashboard/userDashboard" className="text-xl">
                <FaUser />
              </Link>
            </div>
            <div
              className={` text-white px-4 py-2  ${
                isMobileNavVisible === "nav" ? "customDiv5" : "customDiv6"
              }`}
            >
              <div className="flex flex-col">
                <Link
                  onClick={() => {
                    setIsMobileNavVisible("do");
                  }}
                  className="py-4 flex items-center justify-between"
                >
                  What we do <FaAngleRight className="ml-1" />
                </Link>
                <Link className="py-4 flex items-center justify-between">
                  What we think
                </Link>
                <Link
                  onClick={() => {
                    setIsMobileNavVisible("are");
                  }}
                  className="py-4 flex items-center justify-between"
                >
                  What we are <FaAngleRight className="ml-1" />
                </Link>
              </div>
            </div>
            <div
              className={` text-white text-[16px]  ${
                isMobileNavVisible === "do" ? "customDiv7" : "customDiv8"
              }`}
            >
              {isMobileNavVisible === "do" && (
                <div className=" text-white px-10 py-2">
                  <div className="mt-6 pb-3">
                    <h1 className="opacity-70 mt-4">Services</h1>
                    <div className="mt-4 grid grid-cols-1 gap-4">
                      <Link className="text-[17px] hover-underline-animation w-[290px]">
                        Transcript Summarisation and Analysis
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[165px]">
                        Real-Time Transcripts
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[285px]">
                        Transcript Synchronisation with Video
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[185px]">
                        Predictive Case Analytics
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[200px]">
                        Automated Legal Research
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[240px]">
                        Document Review and Analysis
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[170px]">
                        E-Discovery Solutions
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[270px]">
                        Contract Analysis and Management
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[170px]">
                        Legal Risk Assessment
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[180px]">
                        Virtual Legal Assistants
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[280px]">
                        Sentiment Analysis for Jury Selection
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[240px]">
                        Fraud Detection and Prevention
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[240px]">
                        Intellectual Property Monitoring
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[190px]">
                        Compliance Automation
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[200px]">
                        Legal Process Automation
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[240px]">
                        Litigation Strategy Optimization
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[200px]">
                        Data-Driven Legal Insights
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[190px]">
                        Expert Witness Matching
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[310px]">
                        Predictive Modeling for Case Outcomes
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[280px]">
                        AI-Powered Brief and Memo Writing
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[270px]">
                        Client Communication Automation
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[220px]">
                        Litigation Cost Management
                      </Link>
                      <Link className="text-[17px] hover-underline-animation w-[220px]">
                        AI-Based Settlement Analysis
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              className={` text-white  ${
                isMobileNavVisible === "are" ? "customDiv7" : "customDiv8"
              }`}
            >
              {isMobileNavVisible === "are" && (
                <div className=" text-white px-5 py-2">
                  <div className="mt-6">
                    <h1 className="opacity-70 mt-4">Under Leaders</h1>
                    <div className="mt-4 grid grid-cols-1 gap-4">
                      <Link className="text-[17px] hover-underline-animation">
                        Jason Bradley
                      </Link>
                      <Link className="text-[17px] hover-underline-animation">
                        Helen Lubke
                      </Link>
                      <Link className="text-[17px] hover-underline-animation">
                        Samuel Bradley
                      </Link>
                      <Link className="text-[17px] hover-underline-animation pb-20">
                        Sharny Leung
                      </Link>
                      {/* Other links */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* navbar links */}
      <NavbarLinksForBigdevice showNav={showNav}></NavbarLinksForBigdevice>
    </div>
  );
};

export default Navbar;
