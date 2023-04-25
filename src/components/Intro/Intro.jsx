import React, { useContext } from "react";
import "./Intro.css";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { themeContext } from "../../Context";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Link } from "react-scroll";


const Intro = () => {
  // Transition
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [.8, 0.0]);
  const transition = { duration: 1, type: "spring", stiffness: 50
  //  yoyo:Infinity
  }

  // contex
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
    <div className="Intro" id="Intro">

      {/* left name side */}
      <div className="i-left">
        <div className="i-name" >
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <motion.span transition={transition} whileHover={{scale:1.1}}>
            MAAZA MEHMOOD
          </motion.span>
          <motion.span transition={transition} whileHover={{scale:1.1}}>
            Frontend Developer with high mid of experience in web designing
            and development,<br/> producing the Quality work 
          </motion.span>
        </div>
        <div>
          <Link to="contact" smooth={true} spy={true}>
            <motion.button className="button i-button"
            initial={{x: '-100vw'}}
            animate={{x: 0}}
            transition={transition}
            whileHover={{scale: 1.1}}
            >Hire me
            </motion.button>
          </Link>
        </div>
        {/* social icons */}
        <motion.div className="i-icons"
         initial={{y: '100vw'}}
         animate={{y: 0}}
         transition={{ type: 'spring', stiffness: 50}}
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

      {/* right circle img side */}
      <div className="i-right">
        <motion.div className="container"
        style={{ scale }}
        >
          <motion.div className="circles"  style={{height:1000, width: 1000}} 
          initial={{ left: "40%" }}
          whileInView={{ left: "20%" , top: '25%'}}
          transition={transition}></motion.div>
          {/* <motion.div className="circles"  style={{height:300, width: 300}}
          initial={{ top: "-5%", left: "74%" }}
          whileInView={{ left: "-15%", top: '60%'}}
          transition={transition} ></motion.div>         
          <motion.div className="circles"  style={{height:300, width: 300}}
          initial={{ left: "16rem", top: "16.2rem" }}
          whileInView={{top: '-12%' , left: "-15%" }}
          transition={transition}></motion.div> */}
        </motion.div>
      </div>

    </div>
    </>
  );
};

export default Intro;
