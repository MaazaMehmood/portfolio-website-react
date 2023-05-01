import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./Experience.css";


const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <motion.div 
        transition={{duration: 1, type: "spring", stiffness: 50, yoyo:Infinity}}
        whileInView={{scale:.9}}
        className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</motion.div>
        <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <motion.div 
        transition={{duration: 1, type: "spring", stiffness: 50, yoyo:Infinity}}
        whileInView={{scale:.9}}
        className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</motion.div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <motion.div 
        transition={{duration: 1, type: "spring", stiffness: 50, yoyo:Infinity}}
        whileInView={{scale:.9}}
        className="circle" style={{color: darkMode?'var(--orange)':''}}>1</motion.div>
        <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
