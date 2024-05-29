/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../work/ContextApi/UserContext";

const Mainsidebar = ({ setActiveOption }) => {
  const [activeOption, setActiveOptionState] = useState("dashboard");

  const LogOutFunction = () => {};

  const options = [
    { id: "home", label: "Home" },
    { id: "dashboard", label: "Dashboard" },
    { id: "live-transcript", label: "Live Transcript" },
    { id: "audio-transcript", label: "Audio Transcript" },
    { id: "resyncing-ai", label: "Resyncing AI" },
    { id: "logout", label: "Logout", function: LogOutFunction },
  ];

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
    <div className="h-screen sm:w-64 w-[150px] bg-gray-800 text-white">
      <Link className="sm:flex sm:gap-[100px] items-center flex " to="/update">
        <div className="p-4 text-sm sm:font-bold sm:text-lg">John Doe</div>
        <img
          className="w-[30px] h-[30px] rounded mr-[5px]"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt=""
        />
      </Link>
      <hr />
      <ul className="space-y-2">
        <li
          className={`p-4 cursor-pointer ${
            activeOption === "home" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
          onClick={() => {
            handleOptionClickForHome();
          }}
        >
          Home
        </li>
        <li
          className={`p-4 cursor-pointer ${
            activeOption === "dashboard" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
          onClick={() => {
            handleOptionClickForDashboard();
          }}
        >
          Dashboard
        </li>
        <li
          className={`p-4 cursor-pointer ${
            activeOption === "live-transcript"
              ? "bg-gray-700"
              : "hover:bg-gray-700"
          }`}
          onClick={() => {
            handleOptionClickForLive();
          }}
        >
          Live Transcript
        </li>
        <li
          className={`p-4 cursor-pointer ${
            activeOption === "audio-transcript"
              ? "bg-gray-700"
              : "hover:bg-gray-700"
          }`}
          onClick={() => {
            handleOptionClickForAudio();
          }}
        >
          Audio Transcript
        </li>
        <li
          className={`p-4 cursor-pointer ${
            activeOption === "resyncing-ai"
              ? "bg-gray-700"
              : "hover:bg-gray-700"
          }`}
          onClick={() => {
            handleOptionClickForResyncing();
          }}
        >
          Resyncing AI
        </li>
        <li
          className={`p-4 cursor-pointer ${
            activeOption === "resyncing-ai"
              ? "bg-gray-700"
              : "hover:bg-gray-700"
          }`}
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Mainsidebar;
