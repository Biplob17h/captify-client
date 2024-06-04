/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const ExpandableDiv = () => {
  const [scroll, setScroll] = useState(0);
  const [showScrollNumber, setShowScrollNumber] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setShowScrollNumber(scroll);
    }
  }, []);

  console.log(scroll, showScrollNumber);
  //   useEffect(() => {
  //     if (inView) {
  //       const handleScroll = () => {
  //         const scrollInView = window.scrollY;
  //         const realScroll = window.scrollY - scrollInView;
  //         console.log(scrollInView, realScroll);
  //       };

  //       window.addEventListener("scroll", handleScroll);
  //       return () => window.removeEventListener("scroll", handleScroll);
  //     } else {
  //       controls.start({ width: "100%" });
  //     }
  //   }, [inView, controls]);

  useEffect(() => {
    const handleScrollSet = () => {
      const scrollInView = window.scrollY;
      setScroll(scrollInView);
    };
    window.addEventListener("scroll", handleScrollSet);
    return () => window.removeEventListener("scroll", handleScrollSet);
  }, [window.scrollY]);

  return (
    <div className="container">
      <motion.div
        id="expand"
        ref={ref}
        animate={controls}
        initial={{ width: "100%" }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      ></motion.div>
      <div id="show"></div>
    </div>
  );
};

export default ExpandableDiv;
