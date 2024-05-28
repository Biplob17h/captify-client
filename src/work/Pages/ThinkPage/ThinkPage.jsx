/* eslint-disable no-unused-vars */
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
          Stay ahed of change
        </div>
        <p className="text-lg md:text-3xl font-semibold my-8 text-center md:text-left">
          Explore our research, insights, and examples of real client impact,
          designed to
          <br className="hidden md:block" />
          help you embrace the key forces of change and get to value faster.
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
        <div className="flex gap-5 mt-4 ml-2.5">
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
        } px-4 md:px-8`}
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

      {/* BOTTOM */}
      <div className="my-24 px-4 md:px-8">
        <div className="h1 text-5xl font-bold text-center md:text-left">
          Get Foresight on the go
        </div>
        <p className="text-lg md:text-xl font-semibold my-8 text-center md:text-left">
          Download the Accenture Foresight app to read, watch, or listen to our
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
