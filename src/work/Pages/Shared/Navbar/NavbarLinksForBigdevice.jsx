/* eslint-disable react/prop-types */
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarLinksForBigdevice = ({ showNav }) => {
  return (
    <div className="relative">
      {/* show what we do section */}
      <div
        className={`${
          showNav === "do" ? "customDiv1 " : "customDiv2"
        } px-[10%] `}
      >
        <div className="">
          {/* what we do button */}
          <Link className="pt-[50px]  hover-underline-animation ">
            <div className="flex items-center justify-center">
              <h1 className="text-3xl font-semibold">What we do</h1>
              <button className="customBtn2 ml-3 mt-2">
                <FaAngleRight />
              </button>
            </div>
          </Link>
          {/* nav links start */}
          <div>
            <h1 className="opacity-70 mt-10">Services</h1>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-5">
            {/* row 1 */}
            <div className="flex flex-col">
              <Link className="mt-4 text-[17px] hover-underline-animation w-[290px]">
                Transcript Summarisation and Analysis
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[170px]">
                Real-Time Transcripts
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[285px]">
                Transcript Synchronisation with Video
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[190px]">
                Predictive Case Analytics
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[205px]">
                Automated Legal Research
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[238px]">
                Document Review and Analysis
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[170px]">
                E-Discovery Solutions
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[273px]">
                Contract Analysis and Management
              </Link>
            </div>
            {/* row 2 */}
            <div className="flex flex-col">
              <Link className="mt-4 text-[17px] hover-underline-animation w-[167px]">
                Legal Risk Assessment
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[176px]">
                Virtual Legal Assistants
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[280px]">
                Sentiment Analysis for Jury Selection
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[242px]">
                Fraud Detection and Prevention
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[245px]">
                Intellectual Property Monitoring
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[190px]">
                Compliance Automation
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[200px]">
                Legal Process Automation
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[245px]">
                Litigation Strategy Optimization
              </Link>
            </div>
            {/* row 3 */}
            <div className="flex flex-col">
              <Link className="mt-4 text-[17px] hover-underline-animation w-[205px]">
                Data-Driven Legal Insights
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[195px]">
                Expert Witness Matching
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[300px]">
                Predictive Modeling for Case Outcomes
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[280px]">
                AI-Powered Brief and Memo Writing
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[265px]">
                Client Communication Automation
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[220px]">
                Litigation Cost Management
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[225px]">
                AI-Based Settlement Analysis
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* show what we do section */}
      <div
        className={`${
          showNav === "are" ? "customDiv3 " : "customDiv4"
        } px-[10%]  `}
      >
        <div className="">
          {/* what we do button */}
          <Link className="pt-[50px]  hover-underline-animation ">
            <div className="flex items-center justify-center">
              <h1 className="text-3xl font-semibold">
                About Bradley Reporting
              </h1>
              <button className="customBtn2 ml-3 mt-2">
                <FaAngleRight />
              </button>
            </div>
          </Link>
          {/* nav links start */}
          <div>
            <h1 className="opacity-70 mt-10">Under Leaders</h1>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-5">
            {/* row 1 */}
            <div className="flex flex-col">
              <Link className="mt-4 text-[17px] hover-underline-animation w-[110px]">
                Jason Bradley
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[100px]">
                Helen Lubke
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[120px]">
                Samuel Bradley
              </Link>
              <Link className="mt-4 text-[17px] hover-underline-animation w-[110px]">
                Sharny Leung
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLinksForBigdevice;
