/* eslint-disable no-unused-vars */
import React from "react";

const Maindashboard = () => {

  return (
    <div className="maindashboard flex flex-col md:flex-row items-baseline gap-3">
    <div className="mainsection ml-[20px] flex-1 h-screen">
      <h1 className="text-3xl font-bold">May 29, 2024</h1>
      <h3 className="border mt-[20px] py-3 px-[10px] text-lg md:text-[20px]">
        No Audio & Video Files Yet
      </h3>
    </div>
    <div className="sidesection w-full md:w-[400px] mt-4 md:mt-0">
      <div className="mainsection  ml-[20px] flex-1 h-screen hidden md:block">
        <h1 className="text-xl font-bold ml-[-20px] ">Summary</h1>
        <h3 className="border mt-[20px] py-3 pl-[10px] text-lg md:text-[20px] text-[12px] mr-[20px] ml-[-20px]">
        There is no summary
      </h3>
      </div>
    </div>
  </div>
  );
};

export default Maindashboard;
