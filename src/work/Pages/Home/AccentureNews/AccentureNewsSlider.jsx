import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const AccentureNewsSlider = () => {
  const slider1Ref = useRef(null);

  const myData = [
    {
      id: 1,
      subTitle:
        "Currys Selects Bradley Reporting and Microsoft to Accelerate Adoption of Generative Al ",
      date: "2024 May 09 ",
    },
    {
      id: 2,
      subTitle:
        "Bradley Reporting Named Official Business and Technology Consulting Partner of the National Football League",
      date: "2024 May 06 ",
    },
    {
      id: 3,
      subTitle:
        "Bradley Reporting Appoints Karalee Close as Global Talent & Organization Lead to Help Power Clients' Reinvention with Technology and Talent",
      date: "2024 April 03 ",
    },
    {
      id: 4,
      subTitle:
        "Bradley Reporting Invests in Sanctuary Al to Bring Al-Powered, Humanoid Robotics to Work Alongside Humans ",
      date: "2024 March 27 ",
    },
    {
      id: 5,
      subTitle:
        "Bradley Reporting and Adobe to Co-Develop Industry-Specific Generative Al Solutions to Accelerate Marketing Transformation",
      date: "2024 March 25",
    },
    {
      id: 6,
      subTitle:
        "Bradley Reporting Teams with NVIDIA to Showcase AI-Powered Immersive Client Experiences for Defender ",
      date: "2024 March 18 ",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // mobile portrait
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="h-full relative text-white">
      <div className="lg:block">
        <Slider {...settings} ref={slider1Ref} className="">
          {myData.map((data) => (
            <div
              key={data.id}
              className="text-white  text-start relative hover:opacity-60"
            >
              <div className="flex flex-col align-bottom  mt-20 pl-[5%]">
                <p className="text-2xl">{data.subTitle}</p>
                <p className="text-sm mt-2">{data.date}</p>
                <div></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AccentureNewsSlider;
