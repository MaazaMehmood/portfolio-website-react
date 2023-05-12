import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { motion, useSpring } from "framer-motion";
import MusicApp from "../../img/musicapp.png";
import Website from "../../img/photoshop-website";
import Formdesign from "../../img/formPage";
import Design from "../../img/design";
import { themeContext } from "../../Context";


const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <div className="portfolio-head">
        <motion.span 
        initial={{ x: -200}}
        whileInView={{ x: 0}}
        transition={{ duration: 1, type: "spring", stiffness: 50}}
        style={{color: darkMode?'white': ''}}>Recent Collaborations:</motion.span>
        <motion.span
         initial={{ x: -200}}
         whileInView={{ x: 0}}
         transition={{ duration: 2, type: "spring", stiffness: 50}}
        >Demonstrating Our Expertise</motion.span>
      </div>

      {/* slider */}
      <Swiper
        spaceBetween={9}
        slidesPerView={1}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Formdesign} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Website} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Design} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
