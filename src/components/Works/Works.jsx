import React, { useContext, useEffect, useRef } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion, useSpring } from "framer-motion";
import {Link} from 'react-scroll';
import { FaLaptop, FaLaptopCode } from 'react-icons/fa';
import { FaLaptopHouse } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';


const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
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
        {/* dark Mode */}
        <span style={{ color: darkMode ? "white" : "" }}>
          Work For 
        </span>
        <span> Companies & Clients</span>
      </div>

      {/* right side */}
      <motion.div className="w-right" 
      variants={container}
      initial="hidden"
      whileInView="visible">
        <motion.div className="div"
          variants={item}>
          <h2>company 1</h2>
          <hr/>
          <FaLaptop style={{height:'1.6rem', width:'1.6rem', color:'#9a095d7a', marginBottom:'.3rem'}}/>
          <div className="desc">
            <p>Lorem ispum is simpley dummy text of printing of printing Lorem 
              ispum is simpley dummy text of printing of printing Lorem</p>
            <a><p>reviews</p></a>
          </div>
        </motion.div>
        <motion.div className="div"
          variants={item}>
          <h2>company 2</h2>
          <hr/>
          <FaLaptopHouse style={{height:'1.6rem', width:'1.6rem', color:'#9a095d7a', marginBottom:'.3rem'}}/>
          <div className="desc">
            <p>Lorem ispum is simpley dummy text of printing of printing dvvdfgfbdf fd fdfgdLorem jvjs ldjvsdvd  dvvdfgfbdf fd fdfgdLorem </p>
            <a><p>certificate</p></a>
          </div>
        </motion.div>
        <motion.div className="div"
          variants={item}>
          <h2>company 3</h2>
          <hr/>
          <FaBriefcase style={{height:'1.6rem', width:'1.6rem', color:'#9a095d7a', marginBottom:'.3rem'}}/>
          <div className="desc">
            <p>Lorem ispum is simpley dummy text of printing of printing Loremnd kvnj dvdkvnkdsj</p>
            <a><p>reviews</p></a>
          </div>
        </motion.div>
        <motion.div className="div"
          variants={item}>
          <h2>company 4</h2>
          <hr/>
          <FaLaptopCode style={{height:'1.6rem', width:'1.6rem', color:'#9a095d7a', marginBottom:'.3rem'}}/>
          <div className="desc">
            <p>Lorem ispum is simpley dummy text of printing of printing Lorem asjkasf</p>
            <a><p>certificate</p></a>
          </div>
        </motion.div>
        <motion.div className="div"
          variants={item}>
          <h2>company 5</h2>
          <hr/>
          <FaDatabase style={{height:'1.6rem', width:'1.6rem', color:'#9a095d7a', marginBottom:'.3rem'}}/>
          <div className="desc">
            <p>Lorem ispum is simpley dummy text of printing of printing Lorem asjkasf</p>
            <a><p>certificate</p></a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Works;
