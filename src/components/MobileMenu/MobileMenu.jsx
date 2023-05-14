import React, { useState } from 'react';
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaBackspace, FaBars } from 'react-icons/fa';
import './MobileMenu.css';


const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-menu">
      <p className="menu-toggle" onClick={handleMenuToggle}>
        {isMenuOpen ? <FaBackspace/> :  <FaBars/>}
      </p>

      {isMenuOpen && (
        <div className="n-list2">
            <motion.ul 
            initial={{x: 100}}
            animate={{x: 0}}
            transition={{ duration: 1, type: "spring", stiffness: 50}}
            style={{ listStyleType: "none" }}>
                <motion.li initial={{x: 100}}
                whileInView={{x: 0}} 
                whileHover={{scale: 1.2}}  transition={{ duration: 1, type: "spring"}}>
                    <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                    Home
                    </Link>
                </motion.li>
                <motion.li initial={{x: 120}}
                whileInView={{x: 0}}
                whileHover={{scale: 1.2}} transition={{ duration: 1.1, type: "spring"}}>
                    <Link to="services" spy={true} smooth={true}>
                    Serivces
                    </Link>
                </motion.li>
                <motion.li initial={{x: 120}}
                whileInView={{x: 0}}
                whileHover={{scale: 1.2}} transition={{ duration: 1.2, type: "spring"}} >
                    <Link to="works" spy={true} smooth={true}>
                    Work
                    </Link>
                </motion.li>
                <motion.li  initial={{x: 120}}
                whileInView={{x: 0}}
                whileHover={{scale: 1.2}} transition={{ duration: 1.3, type: "spring"}}>
                    <Link to="experience" spy={true} smooth={true}>
                    Experience
                    </Link>
                </motion.li>
                <motion.li initial={{x: 120}}
                whileInView={{x: 0}}
                whileHover={{scale: 1.2}} transition={{ duration: 1.4, type: "spring"}}>
                    <Link to="portfolio" spy={true} smooth={true}>
                    Projects
                    </Link>
                </motion.li>
                <motion.li initial={{x: 120}}
                whileInView={{x: 0}} 
                whileHover={{scale: 1.2}} transition={{ duration: 1.5, type: "spring"}} >
                    <Link to="contact" spy={true} smooth={true}>
                    Contact
                    </Link>
                </motion.li>
            </motion.ul>
      </div>
      )}
    </div>
  );
};

export default MobileMenu;
