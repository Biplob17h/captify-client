import './think.scss'
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ThinkPage = () => {
  const [hovered, setHovered] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
    } else {
      setOpenDropdownIndex(index);
    }
  };

  return (
    <div className="my-[100px] ">
      <h1 className="text-[80px] font-semibold my-[30px]">
        Stay ahead of change
      </h1>
      <h3 className="text-[35px] ">
        Explore our research, insights, and examples of real client impact,
        designed to <br /> help you embrace the key forces of change and get to
        value faster.
      </h3>

      <div className="flex justify-around mt-[50px] bordered-red">
        {["Topic", "Industry", "Content Type"].map((buttonLabel, index) => (
          <div key={index} className="relative mr-4" ref={dropdownRef}>
            <button
              className=" text-white text-2xl font-bold px-4 py-2 rounded focus:outline-none "
              onClick={() => toggleDropdown(index)}
            >
             + {buttonLabel}
            </button>
            <div
              className={`dropdown-content ${
                openDropdownIndex === index
                  ? "dropdown-open"
                  : "dropdown-closed"
              }`}
            >
              <ul>
                {buttonLabel === "Topic" && (
                  <>
                    <li className="py-2 px-4  cursor-pointer">
                      Topic 1
                    </li>
                    <li className="py-2 px-4  cursor-pointer">
                      Topic 2
                    </li>
                    <li className="py-2 px-4  cursor-pointer">
                      Topic 3
                    </li>
                  </>
                )}
                {buttonLabel === "Industry" && (
                  <>
                    <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                      Industry 1
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                      Industry 2
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                      Industry 3
                    </li>
                  </>
                )}
                {buttonLabel === "Content Type" && (
                  <>
                    <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                      Type 1
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                      Type 2
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                      Type 3
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center h-screen ">
        <div
          className={`w-full max-w-[370px] h-auto sm:h-[570px] bg-black shadow-lg rounded-lg overflow-hidden relative transition-transform duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h1 className="text-xl sm:text-2xl  font-bold text-center p-4">
            What We Think
          </h1>
          <div className="relative">
            <img
              src="https://awsimages.detik.net.id/community/media/visual/2019/07/09/e3e4f888-6094-49b0-9234-e6762cf69800_43.jpeg?w=600&q=90"
              alt="Placeholder"
              className={`w-full h-auto sm:h-full object-cover transition-all duration-1000 ${
                hovered ? "blur-20xl" : "blur-0"
              }`}
            />
            <div
              className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 transition-all duration-1000 transform ${
                hovered
                  ? "translate-x-5 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <p className="text-base sm:text-lg font-semibold text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, repudiandae ut? Expedita eligendi autem nam
                dignissimos dolorum, commodi veniam dolore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThinkPage;
