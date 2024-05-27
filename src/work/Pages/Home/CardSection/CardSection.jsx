/* eslint-disable react/no-unescaped-entities */
import React from "react";
import world from "../../../../assets/photos/world.webp";
import girlInCar from "../../../../assets/photos/girl-in-car.webp";
import bmw from "../../../../assets/photos/bmw.webp";
import mans from "../../../../assets/photos/mans.webp";
import doller from "../../../../assets/photos/doller.webp";
import girlInLaptop from "../../../../assets/photos/girl-in-laptop.webp";
import bag from "../../../../assets/photos/bag.webp";
import { FaAngleRight } from "react-icons/fa";

const CardSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 pt-[105%] md:grid md:mx-16 md:pt-20  md:grid-cols-4 md:gap-16">
      {/* card 1 */}
      <div className="AnimateDiv">
        <img src={world} alt="" />
        <div className="absolute top-0 box-border p-3 z-50">
          <h1 className="font-semibold text-white text-[16px]">CASE STUDY</h1>
          <h1 className="font-semibold text-white text-xl pt-5">
            {" "}
            Creating a five star associate experience: Bradley Reporting
          </h1>
        </div>
        <div className="AnimateDivContent ">
          <p className="mt-32">
            Bradley Reporting International create a new Global HR hub that
            deliver employee expenses and exceptional as the guest experience
            that make marriott, marriott
          </p>
        </div>
        <div className="AnimateDivButton w-full">
          <button className="flex items-center justify-end text-[17px] text-right w-full">
            <span className="hover-underline-animation">Expand</span>{" "}
            <FaAngleRight />
          </button>
        </div>
      </div>
      {/* card 2 */}
      <div className="AnimateDiv">
        <img src={girlInCar} alt="" />
        <div className="absolute top-0 box-border p-3 z-50">
          <h1 className="font-semibold text-white text-[16px]">
            RESEARCH REPORT
          </h1>
          <h1 className="font-semibold text-white text-xl pt-5">
            {" "}
            Reinvention in the age of generative Al
          </h1>
        </div>
        <div className="AnimateDivContent ">
          <p className="mt-32">
            Five imperatives the C-suite must address to reinvent in the age of
            generative Al.
          </p>
        </div>
        <div className="AnimateDivButton w-full">
          <button className="flex items-center justify-end text-[17px] text-right w-full">
            <span className="hover-underline-animation">Expand</span>{" "}
            <FaAngleRight />
          </button>
        </div>
      </div>
      {/* card 3 */}
      <div className="AnimateDiv">
        <img src={bmw} alt="" />
        <div className="absolute top-0 box-border p-3 z-50">
          <h1 className="font-semibold text-white text-[16px]">CASE STUDY</h1>
          <h1 className="font-semibold text-white text-xl pt-5">
            {" "}
            Generative Al in the driver's seat: BMW
          </h1>
        </div>
        <div className="AnimateDivContent ">
          <p className="mt-32">
            Accenture and BMW teamed up to create a new platform that uses
            generative AI to drive decisions across North America, accelerating
            productivity and experiences.
          </p>
        </div>
        <div className="AnimateDivButton w-full">
          <button className="flex items-center justify-end text-[17px] text-right w-full">
            <span className="hover-underline-animation">Expand</span>{" "}
            <FaAngleRight />
          </button>
        </div>
      </div>
      {/* card 4 */}
      <div className="AnimateDiv bg-[#39005e]">
        <div className="absolute top-0 box-border p-3 z-50">
          <h1 className="font-semibold text-white text-[16px]">
            ANNOUNCEMENT{" "}
          </h1>
          <h1 className="font-semibold text-white text-xl pt-5">
            {" "}
            Accenture takes new steps to help clients scale generative Al
            responsibly
          </h1>
        </div>
        <div className="AnimateDivContent ">
          <p className="mt-32">
            Accenture appoints Arnab Chakraborty as Chief Responsible Al
            Officer, and expands its capability to assess, design, implement,
            scale and monitor Al systems in a responsible way to help clients
            drive growth and value.
          </p>
        </div>
        <div className="AnimateDivButton w-full">
          <button className="flex items-center justify-end text-[17px] text-right w-full">
            <span className="hover-underline-animation">Expand</span>{" "}
            <FaAngleRight />
          </button>
        </div>
      </div>
      {/* card 5 */}
      <div className="AnimateDiv">
        <img src={mans} alt="" />
        <div className="absolute top-0 box-border p-3 z-50">
          <h1 className="font-semibold text-white text-[16px]">
            RESEARCH REPORT{" "}
          </h1>
          <h1 className="font-semibold text-white text-xl pt-5">
            {" "}
            Turn disruption into value creation
          </h1>
        </div>
        <div className="AnimateDivContent ">
          <p className="mt-32">
            In an era of permacrisis, companies are embracing reinvention and
            turning to their CFOs. To meet the moment, CFOs need to transform
            their finance function to better support the organization's
            reinvention and growth ambitions.
          </p>
        </div>
        <div className="AnimateDivButton w-full">
          <button className="flex items-center justify-end text-[17px] text-right w-full">
            <span className="hover-underline-animation">Expand</span>{" "}
            <FaAngleRight />
          </button>
        </div>
      </div>
      {/* card 6 */}
      <div className="AnimateDiv">
        <img src={doller} alt="" />
        <div className="absolute top-0 box-border p-3 z-50">
          <h1 className="font-semibold text-white text-[16px]">CASE STUDY</h1>
          <h1 className="font-semibold text-white text-xl pt-5">
            {" "}
            Banking on happy customers: BBVA
          </h1>
        </div>
        <div className="AnimateDivContent ">
          <p className="mt-32">
            BBVA worked with Accenture to become one of the world's most
            customer-centric banks. Using digital technology to reach people
            where they are has helped them see massive growth.
          </p>
        </div>
        <div className="AnimateDivButton w-full">
          <button className="flex items-center justify-end text-[17px] text-right w-full">
            <span className="hover-underline-animation">Expand</span>{" "}
            <FaAngleRight />
          </button>
        </div>
      </div>
      {/* card 7 */}
      <div className="AnimateDiv">
        <img src={girlInLaptop} alt="" />
        <div className="absolute top-0 box-border p-3 z-50">
          <h1 className="font-semibold text-white text-[16px]">
            RESEARCH REPORT
          </h1>
          <h1 className="font-semibold text-white text-xl pt-5">
            {" "}
            The empowered consumer
          </h1>
        </div>
        <div className="AnimateDivContent ">
          <p className="mt-32">
            Information overload is impacting people's confidence in their
            decisions — big or small. Al tools can help companies deliver
            hyper-personalized experiences that cut through the noise, deepening
            loyalty in the process.
          </p>
        </div>
        <div className="AnimateDivButton w-full">
          <button className="flex items-center justify-end text-[17px] text-right w-full">
            <span className="hover-underline-animation">Expand</span>{" "}
            <FaAngleRight />
          </button>
        </div>
      </div>
      {/* card 8 */}
      <div className="AnimateDiv">
        <img src={bag} alt="" />
        <div className="absolute top-0 box-border p-3 z-50">
          <h1 className="font-semibold text-white text-[16px]">CASE STUDY</h1>
          <h1 className="font-semibold text-white text-xl pt-5">
            {" "}
            Travel to the metaverse: Changi Airport Group
          </h1>
        </div>
        <div className="AnimateDivContent ">
          <p className="mt-32">
            Changi Airport has been ranked the World's Best Airport twelve
            times. To take the traveler experience to new heights, we created
            ChangiVerse, an immersive metaverse experience.
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
  );
};

export default CardSection;
