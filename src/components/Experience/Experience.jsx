import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { FaCode, FaWarehouse } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import "./Experience.css";


const Experience = () => {

  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.5]);

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        <motion.div 
        initial={{ left: "-8rem" }}
        whileInView={{ left: "0rem" }}
        transition={{duration: 1, type: "spring", stiffness: 50}}
        style={{ scale }}
        className="circle"><h3>1+</h3><FaCode style={{height:'1.6rem', width:'1.6rem', color:'#9a095d7a', marginBottom:'.3rem'}}/>
        </motion.div>
        <span>Years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <motion.div 
        initial={{ top: "-5rem" }}
        whileInView={{ top: "0rem" }}
        transition={{duration: 2, type: "spring", stiffness: 50}}
        style={{ scale }}
        className="circle"><h3>5+</h3><FaCheckCircle style={{height:'1.6rem', width:'1.6rem', color:'#9a095d7a', marginBottom:'.3rem'}}/>
        </motion.div>
        <span>Completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <motion.div
        initial={{ right: "-8rem" }}
        whileInView={{ right: "0rem" }}
        transition={{duration: 1,  type: "spring", stiffness: 50}}
        className="circle" style={{scale}}><h3>2+</h3><FaWarehouse style={{height:'1.6rem', width:'1.6rem', color:'#9a095d7a', marginBottom:'.3rem'}}/>
        </motion.div>
        <span>Companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
