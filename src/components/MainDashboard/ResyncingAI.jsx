import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaFileLines, FaRegFileAudio } from "react-icons/fa6";

const ResyncingAI = () => {
  return (
    <div className="bg-black bg-opacity-50 flex justify-center items-center z-50 px-2 md:px-0 mt-[200px]">
  <div className="bg-gray-900 text-white p-6 rounded-md shadow-md max-w-md w-full relative">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold flex items-center">
        <FaFileAlt className="mr-2" /> Upload Files
      </h2>
      <button className="text-gray-400 hover:text-gray-200">
      </button>
    </div>
    <div className="flex flex-col md:flex-row cursor-pointer">
      <div className="mb-4 h-full cursor-pointer md:mr-3">
        <div className="bg-gray-800 p-4 rounded-md flex flex-col items-center justify-center w-full md:w-[200px] cursor-pointer">
          <input
            type="file"
            accept="audio/*"
            className="hidden"
            id="audio-upload"
          />
          <label
            htmlFor="audio-upload"
            className="w-full h-full text-center flex flex-col justify-center items-center cursor-pointer"
          >
            <span>Upload Audio File</span>
            <FaRegFileAudio size={40} className="cursor-pointer" />
          </label>
        </div>
      </div>
      <div className="mb-4 h-full cursor-pointer">
        <div className="bg-gray-800 p-4 rounded-md flex flex-col items-center justify-center w-full md:w-[200px] cursor-pointer">
          <input
            type="file"
            accept=".txt,.pdf"
            className="hidden"
            id="text-upload"
          />
          <label
            htmlFor="text-upload"
            className="w-full h-full text-center flex flex-col justify-center items-center cursor-pointer"
          >
            <span>Upload Text File</span>
            <FaFileLines size={40} className="cursor-pointer" />
          </label>
        </div>
      </div>
    </div>
    <button className="customBtn1 w-full">Resync</button>
  </div>
</div>

  );
};

export default ResyncingAI;
