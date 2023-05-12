import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaGithub, FaCopyright } from 'react-icons/fa';
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <div className="f-icons">
          <motion.div className="i-icons"
          initial={{y: '10vw'}}
          animate={{y: 0}}
          transition={{ duration:1 , type: 'spring', stiffness: 50}}
          >
            <a href="https://www.instagram.com" target="blank">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="blank">
              <FaLinkedin />
            </a>
            <a href="https://www.github.com" target="blank">
              <FaGithub />
            </a>
          </motion.div>
        </div>
        <motion.span
        transition={{duration: 1, type: "spring", stiffness: 50, yoyo:Infinity}}
        whileHover={{scale:1.1}}>Copyright <FaCopyright/> design by Maaza Mehmood</motion.span>
      </div>
    </div>
  );
};

export default Footer;
