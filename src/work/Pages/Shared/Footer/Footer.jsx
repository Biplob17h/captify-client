import { Link } from "react-router-dom";

const Footer = () => {
  const texts = ["e", "g", "n", "a", "h", "c"];
  return (
    <footer className="bg-black text-white p-10">
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
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
                  to={"/contact"}
                  className="hover:text-gray-300 hover-underline-animation mt-2 w-[130px]" 
                >
                  Preference Center
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/3 ">
              <div className="flex flex-col space-y-2">
                <Link href="#" className="hover-underline-animation w-[130px]">
                  Privacy Statement
                </Link>
                <Link href="#" className="hover-underline-animation w-[145px]">
                  Terms & Conditions
                </Link>
                <Link href="#" className="hover-underline-animation w-[160px]">
                  Cookie Policy/Settings
                </Link>
                <Link href="#" className="hover-underline-animation w-[164px]">
                  Accessibility Statement
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-start ml-[8%]">
            <p className="text-sm">© 2024 Captify. All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex gap-20 justify-center opacity-50 w-1/2">
          <div>
            {texts.map((text, i) => (
              <div
                key={i}
                className="text-white text-[50px] font-bold tracking-tight"
              >
                {text}
              </div>
            ))}
          </div>
          <div>
            {texts.map((text, i) => (
              <div
                key={i}
                className="text-white text-[50px] font-bold tracking-tight"
              >
                {text}
              </div>
            ))}
          </div>
          <div>
            {texts.map((text, i) => (
              <div
                key={i}
                className="text-white text-[50px] font-bold tracking-tight"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
