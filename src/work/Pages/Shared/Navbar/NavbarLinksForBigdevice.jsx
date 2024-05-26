/* eslint-disable react/prop-types */
import React from "react";

const NavbarLinksForBigdevice = ({ showNav }) => {
  return (
    <div className="relative">
      {/* show what we do section */}
      <div
        className={`${
          showNav === "do" ? "customDiv1 " : "customDiv2"
        } px-[10%] border `}
      >
        <div className="border">
          <div>
            <h1>What we do</h1>
            <button></button>
          </div>
        </div>
      </div>
      {/* show what we do section */}
      <div className={`${showNav === "are" ? "" : "hidden"}`}></div>
    </div>
  );
};

export default NavbarLinksForBigdevice;
