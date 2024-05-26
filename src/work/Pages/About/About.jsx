import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 px-40 w-full">
      <div className="bg-black text-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-6xl  font-bold mb-8 text-center text-purple-800">
          About Captify
        </h2>
        <p className="text-lg md:text-xl text-white mb-6">
          Captify revolutionizes live captions, delivering precise AI-powered
          captions in real-time, transcending language barriers, and enhancing
          accessibility worldwide.
        </p>
        <p className="text-lg md:text-xl text-white mb-6">
          Our cutting-edge technology ensures accurate transcription, enabling
          seamless communication and engagement for your audience.
        </p>
        <p className="text-lg md:text-xl text-white mb-8">
          With Captify, captivate your audience, deliver dynamic presentations,
          meetings, and events with confidence and clarity.
        </p>
        <div className="text-center">
          <button className="bg-purple-800 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:bg-purple-900 transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

