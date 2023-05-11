import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import "./Experience.css";


const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.5]);

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <motion.div 
        style={{ scale }}
        className="circle">1+</motion.div>
        <span  style={{color: darkMode?'white':''}}>Years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <motion.div 
       style={{ scale }}
        className="circle">5+</motion.div>
        <span  style={{color: darkMode?'white':''}}>Completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <motion.div 
        // transition={{duration: 1, type: "spring", stiffness: 50, yoyo:Infinity}}
        // whileInView={{scale:.99}}
        className="circle" style={{color: darkMode?'var(--orange)':'', scale}}>1</motion.div>
        <span  style={{color: darkMode?'white':''}}>Companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
