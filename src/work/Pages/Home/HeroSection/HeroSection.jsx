import React from "react";
import heroVideo from "../../../../assets/videos/custom-rad-hero-bg-video.mp4";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Link to={"/"} className="relative">
      <div className="relative overflow-hidden">
        <video src={heroVideo} autoPlay muted loop className="w-full" style={{ minWidth: '100%' }}></video>
      </div>
      <div className="absolute top-1/4 px-4 lg:px-20 w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl lg:text-7xl font-bold text-center lg:text-left">LITIGATION SUPPORT</h1>
          <h1 className="text-4xl lg:text-7xl font-bold text-center lg:text-right pr-8 mt-5">
            REIN<div className="text-[#a100ff] rotated-v mr-2">V</div>ENTED
          </h1>
        </div>
        <div className="w-full lg:w-1/3 lg:pl-8">
          <div className="w-[60px] h-[5px] bg-[#a100ff] mb-5 mx-auto lg:mx-0" />
          <p className="text-left mx-5">
            At Captify.Live, we revolutionise litigation support with AI technology. From managing documents to analysing evidence, our solutions ensure precision and success. Imagine seamless courtroom efficiency and AI-driven insights. Just as we trust in advanced tech for daily life, trust Captify.Live to elevate your legal practice. Embrace the future and win with AI.
          </p>
          <button className="mt-10 text-xl font-semibold flex items-center mx-auto lg:mx-0">
            See what we do <FaAngleRight className="customBtn2 ml-3 mt-2" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HeroSection;
