import { Link } from "react-router-dom";
import footerSvg from "../../../../assets/photos/2365f8ec-fc4f-4f9e-b609-d361d99a24c1.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
        <h2 className="text-3xl font-semibold ml-[13%]">Let there be change</h2>
      </div>
      <div className="flex items-center">
        <div className="w-1/2 ">
          <div className="container mx-auto flex flex-wrap justify-around items-start  ">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="flex flex-col space-y-2">
                <Link
                  to={"/about"}
                  className="hover:text-gray-300 hover-underline-animation w-[70px]"
                >
                  About Us
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <Link
                  to={"/contact"}
                  className="hover:text-gray-300 hover-underline-animation mt-2 w-[78px]"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <Link
                  to={"/preference"}
                  className="hover:text-gray-300 hover-underline-animation mt-2 w-[130px]"
                >
                  Preference Center
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/3 ">
              <div className="flex flex-col space-y-2">
                <Link to="/privacy" className="hover-underline-animation w-[130px]">
                  Privacy Statement
                </Link>
                <Link to="/term" className="hover-underline-animation w-[145px]">
                  Terms & Conditions
                </Link>
               
              </div>
            </div>
          </div>
          <div className="mt-8 text-start ml-[8%]">
            <p className="text-sm">© 2024 Captify. All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex gap-20 justify-center opacity-50 w-1/2 h-[500px]">
          
          <img src={footerSvg}></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
