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

        <motion.div className="div"
          variants={item}>
          <h2>company 1</h2>
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
          <FaLaptopHouse style={{height:'1.6rem', width:'1.6rem', color:'#9a095d7a', marginBottom:'.3rem'}}/>
          <div className="desc">
            <p>Lorem ispum is simpley dummy text of printing of printing dvvdfgfbdf fd fdfgdLorem jvjs ldjvsdvd  dvvdfgfbdf fd fdfgdLorem </p>
            <a><p>certificate</p></a>
          </div>
        </motion.div>
        <motion.div className="div"
          variants={item}>
          <h2>company 3</h2>
          <FaBriefcase style={{height:'1.6rem', width:'1.6rem', color:'#9a095d7a', marginBottom:'.3rem'}}/>
          <div className="desc">
            <p>Lorem ispum is simpley dummy text of printing of printing Loremnd kvnj dvdkvnkdsj</p>
            <a><p>reviews</p></a>
          </div>
        </motion.div>
        <motion.div className="div"
          variants={item}>
          <h2>company 4</h2>
          <FaLaptopCode style={{height:'1.6rem', width:'1.6rem', color:'#9a095d7a', marginBottom:'.3rem'}}/>
          <div className="desc">
            <p>Lorem ispum is simpley dummy text of printing of printing Lorem asjkasf</p>
            <a><p>certificate</p></a>
          </div>
        </motion.div>
        <motion.div className="div"
          variants={item}>
          <h2>company 5</h2>
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
