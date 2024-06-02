import React from "react";
import heroVideo from "../../../../assets/videos/custom-rad-hero-bg-video.mp4";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Link to={"/"} className="relative z-0">
      <div className="relative overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover "
        ></video>
      </div>
      <div className="absolute top-1/4 px-4 lg:px-20 w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl lg:text-7xl font-bold text-center lg:text-left">
            Bradley Reporting
          </h1>
          <h1 className="text-2xl lg:text-7xl font-bold text-center lg:text-right pr-8 mt-3 md:mt-10">
            Powered by Captify.Live
          </h1>
        </div>
        <div className="w-full lg:w-1/3 lg:pl-8">
          <div className="w-[60px] h-[5px] bg-[#a100ff] mb-5 mx-auto mt-5 md:mt-0 lg:mx-0" />
          <p className="text-left mx-5">
            Bradley Reporting has revolutionized litigation support with its
            Captify.Live AI technology. From managing documents to analyzing
            evidence, our solutions ensure precision and success. Imagine
            seamless courtroom efficiency and AI-driven insights. Just as we
            trust in advanced tech for daily life, trust Captify.Live to be your
            loyal litigation wingman. Embrace the future of litigation and win
            with Captify.Live.
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
