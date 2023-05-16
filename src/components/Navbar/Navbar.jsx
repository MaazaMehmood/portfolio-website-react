import React from 'react';
import { motion } from "framer-motion";
import "./Navbar.css";
import MobileMenu from '../MobileMenu/MobileMenu';
import { Link } from "react-scroll";



const Navbar = () => {
  
  //transition
  const transition = { duration: 1, type: "spring", stiffness: 50}

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
      <div
        className="n-name">PORTFOLIO</div>
      </div>
      
      {/* right */}
      <div className="n-right">
        <MobileMenu/>
        <div className="n-list">
          <motion.ul style={{ listStyleType: "none" }}>
            <motion.li whileHover={{scale: 1.2}}  transition={transition}>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.2}} transition={transition}>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.2}} transition={transition} >
              <Link to="works" spy={true} smooth={true}>
                Work
              </Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.2}} transition={transition}>
              <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.2}} transition={transition}>
              <Link to="portfolio" spy={true} smooth={true}>
                Projects
              </Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.2}} transition={transition} >
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
