import React from "react";
import "./Works.css";
import { motion} from "framer-motion";
// import {Link} from 'react-scroll';
import { FaLaptop, FaLaptopCode } from 'react-icons/fa';
import { FaLaptopHouse } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';


const Works = () => {
  
  // animation
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2
      }
    }
  }  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <span >
          Work For 
        </span>
        <span> Companies & Clients</span>
      </div>

      {/* right side */}
      <motion.div className="w-right" 
        variants={container}
        initial="hidden"
        whileInView="visible">

        <motion.div className="cookieCard"
          variants={item}>
          <div className="">
            <p className="cookieHeading">Company</p>
            <FaLaptop style={{height:'1.3rem', width:'1.6rem', color:'#8b446b9e', marginBottom:'.3rem'}}/>
            <p className="cookieDescription">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              laboriosam at voluptas minus culpa deserunt delectus sapiente
              inventore pariatur
            </p>
            <button className="acceptButton">Read more</button>
          </div>
          {/* </div> */}
        </motion.div>
        <motion.div className="cookieCard"
          variants={item}>
          <div className="">
            <p className="cookieHeading">Company</p>
            <FaLaptopHouse style={{height:'1.3rem', width:'1.6rem', color:'#8b446b9e', marginBottom:'.3rem'}}/>
            <p className="cookieDescription">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              laboriosam at voluptas minus culpa deserunt delectus sapiente
              inventore pariatur
            </p>
            <button className="acceptButton">Read more</button>
          </div>
        </motion.div>
        <motion.div className="cookieCard"
          variants={item}>
          <div className="">
            <p className="cookieHeading">Company</p>
            <FaBriefcase style={{height:'1.3rem', width:'1.6rem', color:'#8b446b9e', marginBottom:'.3rem'}}/>
            <p className="cookieDescription">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              laboriosam at voluptas minus culpa deserunt delectus sapiente
              inventore pariatur
            </p>
            <button className="acceptButton">Read more</button>
          </div>
        </motion.div>
        {/* <motion.div className="work-card"
          variants={item}>
          <div className="work-content">
            <p className="work-heading">Card Hover Effect</p>
            <FaLaptopCode style={{height:'1.6rem', width:'1.6rem', color:'#9e3452ad', marginBottom:'.3rem'}}/>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              laboriosam at voluptas minus culpa deserunt delectus sapiente
              inventore pariatur
            </p>
            <button className="work-btn">Read more</button>
          </div>
        </motion.div>
        <motion.div className="work-card"
          variants={item}>
          <div className="work-content">
            <p className="work-heading">Card Hover Effect</p>
            <FaDatabase style={{height:'1.6rem', width:'1.6rem', color:'#9e3452ad', marginBottom:'.3rem'}}/>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              laboriosam at voluptas minus culpa deserunt delectus sapiente
              inventore pariatur
            </p>
            <button className="work-btn">Read more</button>
          </div>
        </motion.div> */}
        
      </motion.div>
    </div>
  );
};

export default Works;
