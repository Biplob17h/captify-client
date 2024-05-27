import React from "react";
import HomeValueSlider from "./HomeValueSlider";



const HomeValueSection = () => {
  
  return (
    <div className="mt-10 md:mt-40">
      {/* home value text */}
      <div>
        <h1 className="text-center text-[40px] md:text-[120px] font-semibold">
          360&deg; VALUE
        </h1>
        <h1 className="text-center text-[17px] md:text-[32px] mx-[2%] md:mx-[19%]">
          Every day, we embrace change and create value for all our
          stakeholders, in every part of the world.
        </h1>
      </div>
      <HomeValueSlider></HomeValueSlider>
    </div>
  );
};

export default HomeValueSection;
