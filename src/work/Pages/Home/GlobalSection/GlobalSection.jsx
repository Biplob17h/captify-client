/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const GlobalSection = () => {
  return (
    <div className="text-white mt-44 backgroundImg1">
      <div className="pt-[100vh] pb-[50vh]">
        <div className="flex flex-col lg:flex-row px-[10%]">
          {/* card 1 */}
          <div className="bg-[#460073] w-full lg:w-1/2 h-[330px] relative customGlobalDiv2 mb-10 lg:mb-0 lg:mr-5">
            <div className="div1 ">
              <h1 className="text-3xl font-semibold absolute bottom-8 mx-8">
                An Ethical Business Leader
              </h1>
            </div>
            <div className="div2  text-[17px]  px-5 pt-5 bg-[#460073]">
              <p className="font-semibold text-[18px]">
                17 consecutive years as one of Ethisphere's World's Most Ethical
                Companies.
              </p>
              <p className="font-semibold  mt-1">
                We strive to do the right thing and act as a powerful force for
                good.
              </p>
              <button className="flex items-center justify-end text-[17px] text-right w-full mt-[27%]">
                <span className="hover-underline-animation">Expand</span>{" "}
                <FaAngleRight />
              </button>
            </div>
          </div>
          {/* card 2 */}
          <div className="bg-[#e2062e] w-full lg:w-1/2 h-[330px] relative customGlobalDiv2 mb-10 lg:mb-0 lg:mt-[480px]">
            <div className="div1 ">
              <h1 className="text-3xl font-semibold absolute bottom-8 mx-8">
                A Great Place To Work
              </h1>
            </div>
            <div className="div2  text-[17px]  px-5 pt-5 bg-[#e2062e]">
              <p className="font-semibold text-[18px]">
                Number 10 on the world best workplace work list
              </p>
              <p className="font-semibold mt-1">
                The recognition is based on Facebook our people measuring the
                level of Trust, Pride commodities at work
              </p>
              <button className="flex items-center justify-end text-[17px] text-right w-full mt-[27%]">
                <span className="hover-underline-animation">Expand</span>{" "}
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="bg-[#0041f0] w-full lg:w-[42%] h-[330px] mt-10 lg:mt-[10%] lg:ml-[29%] relative customGlobalDiv2">
          <div className="div1 ">
            <h1 className="text-3xl font-semibold absolute bottom-8 mx-8">
              An Influential Innovator
            </h1>
          </div>
          <div className="div2  text-[17px]  px-5 pt-5 bg-[#0041f0]">
            <p className="font-semibold text-[18px]">
              Julie Sweet, our chair and CEO, is one of the TIME100 Most
              Influential People of 2024.
            </p>
            <p className="font-semibold mt-1">
              Every day, Julie and all of us at Accenture help the world’s
              leading companies embrace continuous reinvention, with innovation
              and people at the center.
            </p>
            <button className="flex items-center justify-end text-[17px] text-right w-full mt-[23%]">
              <span className="hover-underline-animation">Expand</span>{" "}
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSection;
