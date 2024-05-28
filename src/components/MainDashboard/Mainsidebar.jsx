/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Mainsidebar = ({ setActiveOption }) => {
  const [activeOption, setActiveOptionState] = useState("dashboard");

  const options = [
    { id: "home", label: "Home" },
    { id: "dashboard", label: "Dashboard" },
    { id: "live-transcript", label: "Live Transcript" },
    { id: "audio-transcript", label: "Audio Transcript" },
    { id: "resyncing-ai", label: "Resyncing AI" },
    { id: "logout", label: "Logout" },
  ];

  const handleOptionClick = (optionId) => {
    setActiveOptionState(optionId);
    setActiveOption(optionId);
  };

  return (
    <div className="h-screen sm:w-64 w-[150px] bg-gray-800 text-white">
      <Link className="sm:flex sm:gap-[100px] items-center flex "  to="/update">
        <div className="p-4 text-sm sm:font-bold sm:text-lg">John Doe</div>
        <img className="w-[30px] h-[30px] rounded mr-[5px]" src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="" />
      </Link>
      <hr />
      <ul className="space-y-2">
        {options.map((option) => (
          <li
            key={option.id}
            className={`p-4 cursor-pointer ${
              activeOption === option.id ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => handleOptionClick(option.id)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mainsidebar;
