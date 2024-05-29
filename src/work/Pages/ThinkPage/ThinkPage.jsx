/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { FaAngleRight } from "react-icons/fa";
import "./think.scss";
import { useState } from "react";

const data = [
  "Cloud",
  "Cybersecurity",
  // "Digital Emerging Technology",
  // "Enterprise Platforms",
  "Learning",
  // "Marketing & Experience",
  "Metaverse",
  // "Private Equity",
  "Strategy",
  // "Supply Chain",
  // "Sustainability",
  // "Sales & Commerce",
];

const industryData = [
  "Aerspace & Defense",
  "Automotive",
  "Banking",
  "Capital Markets",
  "Chemicals",
  // "Communication & Media",
  // "Consumer Goods & Services",
  "Energy",
  // "Health",
  // "High Teach",
  // "Industrial",
  // "Insurances",
  // "Life Sciences",
  // "Natural Resources",
  // "Public Service",
  // "Retail",
  // "Travel",
  // "Utilities",
];

const contentData = [
  "Blog",
  "Case Study",
  "Live Interview",
  "Perspective",
  "Podcast",
  "Research Report",
];

const ThinkPage = () => {
  const [hovered, setHovered] = useState(false);
  const [showDiv, setShowDiv] = useState("");
  const [showIndustry, setshowIndustry] = useState("");
  const [showContent, setshowContent] = useState("");
  const [topic, setTopic] = useState(false);
  const [industry, setIndustry] = useState(false);
  const [content, setContent] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((o) => o !== option)
        : [...prevSelectedOptions, option]
    );
  };

  const handleShowTopic = () => {
    setTopic(!topic);

    if (showDiv === "") {
      return setShowDiv("topic");
    }
    if (showDiv !== "" && showDiv !== "topic") {
      return setShowDiv("topic");
    }
    if (showDiv === "topic") {
      setShowDiv("");
    }
  };

  const handleShowIndustry = () => {
    setIndustry(!industry);

    if (showIndustry === "") {
      return setshowIndustry("industry");
    }
    if (showIndustry !== "" && showIndustry !== "industry") {
      return setshowIndustry("industry");
    }
    if (showIndustry === "industry") {
      setshowIndustry("");
    }
  };

  const handleShowContent = () => {
    setContent(!content);

    if (showContent === "") {
      return setshowContent("content");
    }
    if (showContent !== "" && showContent !== "content") {
      return setshowContent("content");
    }
    if (showContent === "content") {
      setshowContent("");
    }
  };

  return (
    <div className="my-[100px] ">
      {/* HEADER */}
      <div className="my-24 px-4 md:px-8">
        <div className="h1 text-7xl font-bold text-center md:text-left">
          Leverage AI insights
        </div>
        <p className="text-lg md:text-2xl font-semibold my-8 text-center md:text-left">
          Discover our insights and real client success stories showcasing how
          our AI-driven legal technology
          <br className="hidden md:block" />
          helps you navigate key changes in litigation and achieve faster, more
          efficient results.'
        </p>
      </div>

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row relative mt-24">
        <button
          onClick={handleShowTopic}
          className={`w-full text-2xl flex pl-5 border-white text-white py-4 bg-transparent border-l-0 ${
            showDiv === "topic" ? "border-t border-y-0" : "border-y"
          }`}
        >
          {topic ? "- " : "+ "}
          Topic
        </button>

        <button
          onClick={handleShowIndustry}
          className={`w-full text-2xl flex pl-5 border-white text-white py-4 bg-transparent border-l-0 ${
            showIndustry === "industry"
              ? "border-t border-l"
              : "border-y border-l"
          }`}
        >
          {industry ? "- " : "+ "}
          Industry
        </button>

        <button
          onClick={handleShowContent}
          className={`w-full text-2xl flex pl-5 border-white text-white py-4 bg-transparent border-l-0 ${
            showContent === "content"
              ? "border-t border-l"
              : "border-y border-l"
          }`}
        >
          {content ? "- " : "+ "}
          Content Type
        </button>
      </div>
      <div
        className={`${
          showDiv === "topic" ? "customDiv9" : "customDiv10"
        } px-4 md:px-8`}
      >
        <div className="flex flex-wrap justify-start w-full gap-5 mt-4 ml-4">
          {data.map((option) => (
            <button
              key={option}
              onClick={() => toggleOption(option)}
              className="border border-slate-100 border-opacity-25 text-white bg-transparent text-xl hover:bg-gray-800 hover:text-white py-2 px-4 rounded"
            >
              {selectedOptions.includes(option) && (
                <span className="text-white">✔️</span>
              )}
              <span>{option}</span>
            </button>
          ))}
        </div>
        <div className="flex  text-2xl justify-end mt-[80px] sm:mt-32 mr-16 sm:mr-2.5 gap-5 ">
          <button className="mt-[-50px]  text-xl sm:text-2xl">Clear All</button>
          <button className="bg-purple-700 w-[150px] text-xl sm:text-2xl sm:w-[150px]  mt-[-50px] z-10">
            Show Result
          </button>
        </div>
      </div>
      <div
        className={`${
          showIndustry === "industry" ? "customDiv9" : "customDiv10"
        } px-4 md:px-8`}
      >
        <div className="flex gap-5 mt-4 ml-2.5 z-20">
          <div className="flex flex-wrap justify-start w-full gap-5 mt-4 ml-4">
            {industryData.map((option) => (
              <button
                key={option}
                onClick={() => toggleOption(option)}
                className="border border-slate-100 border-opacity-25 text-white bg-transparent text-xl hover:bg-gray-800 hover:text-white py-2 px-4 rounded"
              >
                {selectedOptions.includes(option) && (
                  <span className="text-white">✔️</span>
                )}
                <span>{option}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex  text-2xl justify-end mt-[80px] sm:mt-32 mr-16 sm:mr-2.5 gap-5 ">
          <button className="mt-[-50px]  text-xl sm:text-2xl">Clear All</button>
          <button className="bg-purple-700 w-[150px] text-xl sm:text-2xl sm:w-[150px]  mt-[-50px] z-10">
            Show Result
          </button>
        </div>
      </div>
      <div
        className={`${
          showContent === "content" ? "customDiv9" : "customDiv10"
        } px-4 md:px-8 `}
      >
        <div className="flex gap-5 mt-4 ml-2.5">
          <div className="flex flex-wrap justify-start w-full gap-5 mt-4 ml-4">
            {contentData.map((option) => (
              <button
                key={option}
                onClick={() => toggleOption(option)}
                className="border border-slate-100 border-opacity-25 text-white bg-transparent text-xl hover:bg-gray-800 hover:text-white py-2 px-4 rounded"
              >
                {selectedOptions.includes(option) && (
                  <span className="text-white">✔️</span>
                )}
                <span>{option}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex  text-2xl justify-end mt-[80px] sm:mt-32 mr-16 sm:mr-2.5 gap-5 ">
          <button className="mt-[-50px]  text-xl sm:text-2xl">Clear All</button>
          <button className="bg-purple-700 w-[150px] text-xl sm:text-2xl sm:w-[150px]  mt-[-50px] z-10">
            Show Result
          </button>
        </div>
      </div>

      {/* CARD SECTION */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center   sm:justify-between ">
        <div className="AnimateDiv mt-[100px]">
          <img
            className="w-100%"
            src="https://dynamicmedia.Accenture.com/is/image/Accenture/MandA-TL-GlanceSkim-600x848%3Arad-card-full?fit=constrain&ts=1715034032700"
            alt=""
          />
          <div className="absolute top-0 box-border p-3 z-50">
            <h1 className="font-semibold text-white text-[16px]">CASE STUDY</h1>
            <h1 className="font-semibold text-white text-xl pt-5">
              {" "}
              Generative Al in the driver's seat: BMW
            </h1>
          </div>
          <div className="AnimateDivContent ">
            <p className="mt-32">
            Bradley Reporting and BMW teamed up to create a new platform that uses
              generative AI to drive decisions across North America,
              accelerating productivity and experiences.
            </p>
          </div>
          <div className="AnimateDivButton w-full">
            <button className="flex items-center justify-end text-[17px] text-right w-full">
              <span className="hover-underline-animation">Expand</span>{" "}
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="AnimateDiv mt-[100px]">
          <img
            className="w-100%"
            src="https://dynamicmedia.Accenture.com/is/image/Accenture/Commercial-Banking-Top-Trends-2024-Glance-600x848%3Arad-card-full?fit=constrain&ts=1712710344494"
            alt=""
          />
          <div className="absolute top-0 box-border p-3 z-50">
            <h1 className="font-semibold text-white text-[16px]">CASE STUDY</h1>
            <h1 className="font-semibold text-white text-xl pt-5">
              {" "}
              Car buying in hyperdrive:smart
            </h1>
          </div>
          <div className="AnimateDivContent ">
            <p className="mt-32">
            Bradley Reporting and BMW teamed up to create a new platform that uses
              generative AI to drive decisions across North America,
              accelerating productivity and experiences.
            </p>
          </div>
          <div className="AnimateDivButton w-full">
            <button className="flex items-center justify-end text-[17px] text-right w-full">
              <span className="hover-underline-animation">Expand</span>{" "}
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="AnimateDiv mt-[100px]">
          <img
            className="w-100%"
            src="https://dynamicmedia.Accenture.com/is/image/Accenture/Accenture-Elevate-Your-Business-With-A-Platform-Strategy%3Arad-card-full?fit=constrain&ts=1712865095473"
            alt=""
          />
          <div className="absolute top-0 box-border p-3 z-50">
            <h1 className="font-semibold text-white text-[16px]">CASE STUDY</h1>
            <h1 className="font-semibold text-white text-xl pt-5">
              {" "}
              Generative Al in the driver's seat: BMW
            </h1>
          </div>
          <div className="AnimateDivContent ">
            <p className="mt-32">
            Bradley Reporting and BMW teamed up to create a new platform that uses
              generative AI to drive decisions across North America,
              accelerating productivity and experiences.
            </p>
          </div>
          <div className="AnimateDivButton w-full">
            <button className="flex items-center justify-end text-[17px] text-right w-full">
              <span className="hover-underline-animation">Expand</span>{" "}
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="AnimateDiv mt-[100px]">
          <img
            className="w-100%"
            src="https://dynamicmedia.Accenture.com/is/image/Accenture/Accenture-Gen-AI-Customer-Glance-Skim-600x848%3Arad-card-full?fit=constrain&ts=1716817928838"
            alt=""
          />
          <div className="absolute top-0 box-border p-3 z-50">
            <h1 className="font-semibold text-white text-[16px]">RESEARCH REPORT</h1>
            <h1 className="font-semibold text-white text-xl pt-5">
              {" "}
              Reinventing M&A with generative AI
            </h1>
          </div>
          <div className="AnimateDivContent ">
            <p className="mt-32">
            Bradley Reporting and BMW teamed up to create a new platform that uses
              generative AI to drive decisions across North America,
              accelerating productivity and experiences.
            </p>
          </div>
          <div className="AnimateDivButton w-full">
            <button className="flex items-center justify-end text-[17px] text-right w-full">
              <span className="hover-underline-animation">Expand</span>{" "}
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="AnimateDiv mt-[100px]">
          <img
            className="w-100%"
            src="https://dynamicmedia.Accenture.com/is/image/Accenture/Accenture-Gen-AI-Customer-Glance-Skim-600x848%3Arad-card-full?fit=constrain&ts=1716817928838"
            alt=""
          />
          <div className="absolute top-0 box-border p-3 z-50">
            <h1 className="font-semibold text-white text-[16px]">PODCAST</h1>
            <h1 className="font-semibold text-white text-xl pt-5">
              {" "}
             Generative AI fluency:shaping learning into a user-centered experience
            </h1>
          </div>
          <div className="AnimateDivContent ">
            <p className="mt-32">
            Bradley Reporting and BMW teamed up to create a new platform that uses
              generative AI to drive decisions across North America,
              accelerating productivity and experiences.
            </p>
          </div>
          <div className="AnimateDivButton w-full">
            <button className="flex items-center justify-end text-[17px] text-right w-full">
              <span className="hover-underline-animation">Expand</span>{" "}
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div className="AnimateDiv mt-[100px]">
          <img
            className="w-100%"
            src="https://dynamicmedia.Accenture.com/is/image/Accenture/Glance-Tile_Smart_v1%3Arad-card-full?fit=constrain&ts=1715484557627"
            alt=""
          />
          <div className="absolute top-0 box-border p-3 z-50">
            <h1 className="font-semibold text-white text-[16px]">RESEARCH REPORT</h1>
            <h1 className="font-semibold text-white text-xl pt-5">
              {" "}
              Top commercial banking trnds for 2024
            </h1>
          </div>
          <div className="AnimateDivContent ">
            <p className="mt-32">
            Bradley Reporting and BMW teamed up to create a new platform that uses
              generative AI to drive decisions across North America,
              accelerating productivity and experiences.
            </p>
          </div>
          <div className="AnimateDivButton w-full">
            <button className="flex items-center justify-end text-[17px] text-right w-full">
              <span className="hover-underline-animation">Expand</span>{" "}
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div className="AnimateDiv mt-[100px]">
          <img
            className="w-100%"
            src="https://dynamicmedia.Accenture.com/is/image/Accenture/MandA-TL-GlanceSkim-600x848%3Arad-card-full?fit=constrain&ts=1715034032700"
            alt=""
          />
          <div className="absolute top-0 box-border p-3 z-50">
            <h1 className="font-semibold text-white text-[16px]">PERSPECTIVE</h1>
            <h1 className="font-semibold text-white text-xl pt-5">
              {" "}
              Supply chain networks in the afe of generative AI
            </h1>
          </div>
          <div className="AnimateDivContent ">
            <p className="mt-32">
            Bradley Reporting and BMW teamed up to create a new platform that uses
              generative AI to drive decisions across North America,
              accelerating productivity and experiences.
            </p>
          </div>
          <div className="AnimateDivButton w-full">
            <button className="flex items-center justify-end text-[17px] text-right w-full">
              <span className="hover-underline-animation">Expand</span>{" "}
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div className="AnimateDiv mt-[100px]">
          <img
            className="w-100%"
            src="https://dynamicmedia.Accenture.com/is/image/Accenture/Accenture-Elevate-Your-Business-With-A-Platform-Strategy%3Arad-card-full?fit=constrain&ts=1712865095473"
            alt=""
          />
          <div className="absolute top-0 box-border p-3 z-50">
            <h1 className="font-semibold text-white text-[16px]">RESEACH REPORT</h1>
            <h1 className="font-semibold text-white text-xl pt-5">
              {" "}
              Level ip:Elevant your business with a platform strategy
            </h1>
          </div>
          <div className="AnimateDivContent ">
            <p className="mt-32">
            Bradley Reporting and BMW teamed up to create a new platform that uses
              generative AI to drive decisions across North America,
              accelerating productivity and experiences.
            </p>
          </div>
          <div className="AnimateDivButton w-full">
            <button className="flex items-center justify-end text-[17px] text-right w-full">
              <span className="hover-underline-animation">Expand</span>{" "}
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>

      <button className="ml-[40%] md:ml-[50%] md:my-[50px] mt-[10px] px-3 sm:py-4 py-2 border-2 border-white bg-black text-xl md:text-2xl text-white rounded transition">
        Load More
      </button>

      {/* BOTTOM */}
      <div className="my-24 px-4 md:px-8">
        <div className="h1 text-5xl font-bold text-center md:text-left">
          Get Foresight on the go
        </div>
        <p className="text-lg md:text-xl font-semibold my-8 text-center md:text-left">
          Download the Bradley Reporting Foresight app to read, watch, or listen to our
          best thinking—and join
          <br className="hidden md:block" />
          our exclusive “Foresight in 15” live digital events for quick takes on
          big ideas.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="customBtn1  z-10">Get Foresight</button>
        </div>
      </div>
    </div>
  );
};

export default ThinkPage;
