import React  from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { motion } from "framer-motion";
import MusicApp from "../../img/musicapp.png";
import Website from "../../img/photoshop-website";
import Formdesign from "../../img/formPage";
import Design from "../../img/design";


const Portfolio = () => {

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <div className="portfolio-head">
        <motion.span 
        initial={{ x: -200}}
        whileInView={{ x: 0}}
        transition={{ duration: 1, type: "spring", stiffness: 50}}
        >Recent Collaborations:</motion.span>
        <motion.span
         initial={{ x: -200}}
         whileInView={{ x: 0}}
         transition={{ duration: 2, type: "spring", stiffness: 50}}
        >Demonstrating Our Expertise</motion.span>
      </div>

      {/* slider */}
      {/* <Swiper
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
      </Swiper> */}
      <div className="card">
          <p><span><a herf="#"><img src={Formdesign} alt="form-design" /></a></span></p>
          <p><span><a><img src={Website} alt="portfolio-website" /></a></span></p>
          <p><span><a><img src={MusicApp} alt="music-app" /></a></span></p>
          <p><span><a><img src={Design} alt="ecommerce-website" /></a></span></p>
          {/* <p><span><img src={Formdesign} alt="form-design" /></span></p>
          <p><span><img src={Website} alt="portfolio-website" /></span></p>
          <p><span><img src={MusicApp} alt="music-app" /></span></p>
          <p><span><img src={Design} alt="ecommerce-website" /></span></p> */}
      </div>
     
    </div>
  );
};

export default Portfolio;
