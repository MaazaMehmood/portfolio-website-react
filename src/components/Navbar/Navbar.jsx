import React, { useState , useContext} from 'react';
import { themeContext } from "../../Context";
import Toggle from "../Toggle/Toggle";
import { motion } from "framer-motion";
import "./Navbar.css";
import { Link } from "react-scroll";



const Navbar = () => {
  
  //context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [showMenu, setMenu] = useState(false);
 
  //mob menu
  const toggleMenu = () => {
    setMenu(!showMenu)
  }

  return (
    <div className="n-wrapper" id="Navbar">

      {/* left */}
      <div className="n-left">
        <Toggle />
        <div 
        style={{ color: darkMode ? "white" : "" }} 
        className="n-name">PORTFOLIO</div>
      </div>
      
      {/* right */}
      <div className="n-right">
        {/* <button className="mob-toggle" onClick={toggleMenu}>menu</button> */}
        <div className="n-list">
          <motion.ul style={{ listStyleType: "none" }}
          //  initial={{x: '100vw'}}
          //  animate={{x: 0}}
          //  transition={{ type: 'spring', stiffness: 50}}
          >
            <motion.li whileHover={{scale: 1.2}} >
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.2}} >
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.2}} >
              <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.2}} >
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.2}} >
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.2}} >
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
