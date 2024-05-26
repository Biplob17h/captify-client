/* eslint-disable react/no-unescaped-entities */
// src/AboutUs.js

import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-purple-700 to-indigo-900 flex items-center justify-center p-4"
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-purple-800">
          About Captify
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Captify is revolutionizing the way live captions are delivered,
          providing remarkably precise AI-powered captions in real-time,
          transcending language barriers and enhancing accessibility for
          audiences worldwide.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our cutting-edge technology ensures that every word spoken is
          accurately transcribed into your audience's language, enabling
          seamless communication and engagement.
        </p>
        <p className="text-lg text-gray-700">
          With Captify, you can captivate your audience like never before,
          delivering dynamic presentations, meetings, and events with
          confidence and clarity.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutUs;
