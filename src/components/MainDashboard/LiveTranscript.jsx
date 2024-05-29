import React from "react";

const LiveTranscript = () => {
  
  return (
    <div className="mt-[200px] ">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full mx-auto mt-4 ">
    <h2 className="sm:text-xl sm:font-bold mb-4 text-black flex items-center justify-center">You want Live Transcript for</h2>
    <button className="w-full bg-blue-500 text-white p-2 rounded mb-2 hover:bg-blue-600">
      Online Meeting
    </button>
    <button className="w-full bg-green-500 text-white p-2 rounded mb-2 hover:bg-green-600">
      Physical Meeting
    </button>
    <button className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
      Cancel
    </button>
  </div>
    </div>
  );
};

export default LiveTranscript;
