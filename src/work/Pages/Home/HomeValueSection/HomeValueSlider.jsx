/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import manWorking from "../../../../assets/photos/man-working.webp";
import girlWithGlass from "../../../../assets/photos/girl-with-glass.webp";
import ciber from "../../../../assets/photos/ciber.webp";
import ciberData from "../../../../assets/photos/ciber-data.jpeg";
import eating from "../../../../assets/photos/eat.webp";
import girlWithSmile from "../../../../assets/photos/girl-with-smile.webp";
import full from "../../../../assets/photos/full.webp";
import tower from "../../../../assets/photos/tower.webp";
import {
  FaAngleRight,
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaStop,
} from "react-icons/fa";

const HomeValueSlider = () => {
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const [autoplay, setAutoplay] = useState(true);

  const myData = [
    {
      id: 1,
      title: "Accenture’s responsible AI blueprint",
      subTitle:
        "Accenture has operationalized ethical AI in our company. Now, our responsible AI program is also helping clients around the world use AI intelligently and responsibly.",
    },
    {
      id: 2,
      title: "The metaverse meets public good",
      subTitle:
        "The World Economic Forum, Accenture and Microsoft have built a purpose-driven platform in the metaverse to drive action and cooperation and to revolutionize progress.",
    },
    {
      id: 3,
      title: "Cybersecurity in orbit",
      subTitle:
        "As outer space gets more crowded and contested, QuSecure is protecting communications and data transmission with the agility required for the world of post-quantum computing.",
    },
    {
      id: 4,
      title: "Generative AI transforming customer service",
      subTitle:
        "Sifting through thousands of emails daily is tedious work, but generative AI makes it easy. A multinational bank is using generative AI to quickly process and respond to client emails used for the settling, asset servicing and reconciliation of trades – normally a massive manual task. It directs emails to the right teams and drafts responses for employees to check. The result? Faster and more enjoyable customer service, a boost in worker efficiency and more cost-effective operations.",
    },
    {
      id: 5,
      title: "Mondelēz International’s Data and AI Transformation",
      subTitle:
        "The global snacking giant is laying a tasty foundation for reinvention and growth. Accenture is helping Mondelēz International to embrace the power of data and AI, build a strong digital core and implement interoperable cloud-enabled technology.",
    },
    {
      id: 6,
      title: "Creating a sense of belonging",
      subTitle:
        "A global retailer and Accenture co-created a multiyear inclusion and diversity strategy to facilitate a greater sense of belonging for their people.",
    },
    {
      id: 7,
      title: "Egg gives electric vehicle charging a jolt",
      subTitle:
        "Seeking sustainability, more people are buying electric vehicles. To keep them powered up, Liberty Global and Accenture developed Egg, a renewable energy brand that makes installing home EV chargers easy and affordable.",
    },
    {
      id: 8,
      title: "Reimagining Saudi Arabia’s economy",
      subTitle:
        "In just five years, the Saudi Data and Artificial Intelligence Authority, in partnership with Accenture, has built a strong foundation for a globally competitive, data- and AI-driven economy.",
    },
  ];

  const myPhotos = [
    {
      id: 1,
      img: manWorking,
    },
    {
      id: 2,
      img: girlWithGlass,
    },
    {
      id: 3,
      img: ciber,
    },
    {
      id: 4,
      img: ciberData,
    },
    {
      id: 5,
      img: eating,
    },
    {
      id: 6,
      img: girlWithSmile,
    },
    {
      id: 7,
      img: full,
    },
    {
      id: 8,
      img: tower,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: autoplay,
    pauseOnHover: false,
    autoplaySpeed: 4000, // autoplay interval in milliseconds
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    pauseOnHover: false,
    autoplaySpeed: 4000, // autoplay interval in milliseconds
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleOpNext = () => {
    slider1Ref.current.slickNext();
    slider2Ref.current.slickNext();
  };

  const handleOpPrev = () => {
    slider1Ref.current.slickPrev();
    slider2Ref.current.slickPrev();
  };

  const toggleAutoplay = () => {
    setAutoplay((prevAutoplay) => !prevAutoplay);
  };

  useEffect(() => {
    if (autoplay) {
      slider1Ref.current.slickPlay();
      slider2Ref.current.slickPlay();
    } else {
      slider1Ref.current.slickPause();
      slider2Ref.current.slickPause();
    }
  }, [autoplay]);

  return (
    <div className="h-[70vh] mt-20 relative text-white">
      <div className="hidden lg:block">
        <Slider {...settings} ref={slider1Ref} className="">
          {myData.map((data) => (
            <div
              key={data.id}
              className="text-white h-[500px] text-start relative"
            >
              <div className="flex flex-col align-bottom absolute bottom-[5%] px-[10%] pl-[30%]">
                <h1 className="font-bold text-2xl">{data.title}</h1>
                <p className="text-xl">{data.subTitle}</p>
                <div>
                  <div className="flex items-center pt-[20px] text-[20px]">
                    <span>Read more</span>{" "}
                    <button className="customBtn2 h-[25px] rounded-sm ml-3 mt-1">
                      <FaAngleRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Slider
          {...settings2}
          ref={slider2Ref}
          className="w-1/2 absolute top-0"
        >
          {myPhotos.map((data) => (
            <div
              key={data.id}
              style={{ width: 100 }}
              className="text-white h-[500px] w-[100px] text-start"
            >
              <div className="">
                <img className="customPhoto1" src={data.img} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="lg:hidden">
        <div className="flex overflow-x-scroll scrollbar-hide">
          {myData.map((data, index) => (
            <div key={data.id} className="min-w-[300px] p-4">
              <img
                src={myPhotos[index]?.img}
                alt=""
                className="w-full h-40 object-cover"
              />
              <h1 className="font-bold text-xl mt-4">{data.title}</h1>
              <p className="text-lg">{data.subTitle.slice(0, 150)}</p>
              <div className="flex items-center pt-2 text-lg">
                <span>... Read more</span>
                <button className="customBtn2 h-[25px] rounded-sm ml-3 mt-1">
                  <FaAngleRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex items-center mt-10 h-[30px]">
        <h1 onClick={toggleAutoplay}>
          {autoplay ? (
            <FaStop size={25} className="w-[100px] h-[30px] cursor-pointer" />
          ) : (
            <FaPlay size={25} className="w-[100px] h-[30px] cursor-pointer" />
          )}
        </h1>
        <div className="flex h-full ">
          <FaArrowLeft
            size={25}
            className="w-[100px] h-[30px] cursor-pointer"
            onClick={handleOpPrev}
          />
          <FaArrowRight
            size={25}
            className="w-[100px] h-[30px] cursor-pointer"
            onClick={handleOpNext}
          />
        </div>
      </div>
    </div>
  );
};

// Custom arrow components for the next and previous buttons
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="hidden" onClick={onClick}>
      next
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return <div className="hidden" onClick={onClick}></div>;
};

export default HomeValueSlider;
