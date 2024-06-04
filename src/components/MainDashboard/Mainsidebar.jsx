/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../work/ContextApi/UserContext";

const Mainsidebar = ({ setActiveOption }) => {
  const [activeOption, setActiveOptionState] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const handleToggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const LogOutFunction = () => {};


  const { refresh, setRefresh } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOptionClickForHome = () => {
    navigate("/");
  };
  const handleOptionClickForDashboard = () => {
    setActiveOptionState("dashboard");
    setActiveOption("dashboard");
  };
  const handleOptionClickForLive = () => {
    setActiveOptionState("live-transcript");
    setActiveOption("live-transcript");
  };
  const handleOptionClickForAudio = () => {
    setActiveOptionState("audio-transcript");
    setActiveOption("audio-transcript");
  };
  const handleOptionClickForResyncing = () => {
    setActiveOptionState("resyncing-ai");
    setActiveOption("resyncing-ai");
  };

  const handleLogout = () => {
    localStorage.removeItem("captify-user");
    navigate("/auth/login");
    setRefresh(setRefresh(refresh + 1));
  };

  return (
    <div>
      {isSidebarVisible ? (
        <div className="h-screen sm:w-64 w-[150px] bg-gray-800 text-white">
          <button
            className="p-2 m-2 text-gray-400 hover:text-white focus:outline-none"
            onClick={handleToggleSidebar}
          >
            X
          </button>
          <Link className="sm:flex sm:gap-[100px] items-center flex " to="/dashboard/update">
            <div className="p-4 text-sm sm:font-bold sm:text-lg">John Doe</div>
            <img
              className="w-[30px] h-[30px] rounded mr-[5px]"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt=""
            />
          </Link>
          <hr />
          <ul className="space-y-2">
           <Link to="/">
           <li
              className={`p-4 cursor-pointer ${
                activeOption === "home" ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
              onClick={() => handleOptionClick("home")}
            >
              Home
            </li>
           </Link>
            <li
              className={`p-4 cursor-pointer ${
                activeOption === "dashboard" ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
              onClick={() => handleOptionClick("dashboard")}
            >
              Dashboard
            </li>
            <li
              className={`p-4 cursor-pointer ${
                activeOption === "live-transcript"
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => handleOptionClick("live-transcript")}
            >
              Live Transcript
            </li>
            <li
              className={`p-4 cursor-pointer ${
                activeOption === "audio-transcript"
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => handleOptionClick("audio-transcript")}
            >
              Audio Transcript
            </li>
            <li
              className={`p-4 cursor-pointer ${
                activeOption === "resyncing-ai"
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => handleOptionClick("resyncing-ai")}
            >
              Resyncing AI
            </li>
            <li
              className={`p-4 cursor-pointer ${
                activeOption === "logout"
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => handleOptionClick("logout")}
            >
              Logout
            </li>
          </ul>
        </div>
      ) : (
        <button
          className="p-2 m-2 text-gray-400 hover:text-white focus:outline-none"
          onClick={handleToggleSidebar}
        >
          ☰
        </button>
      )}
    </div>
  );
  
};

export default Mainsidebar;
