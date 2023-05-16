import React from "react";
import "./Intro.css";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Link } from "react-scroll";


const Intro = () => {

  // Transition
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [.8, 0.0]);
  const transition = { duration: 1, type: "spring", stiffness: 50
  };

  return (
    <>
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name" >
          <span >Hy! I Am</span>
          <motion.span transition={transition}>
            MAAZA MEHMOOD
          </motion.span>
          <motion.span transition={transition} whileHover={{scale:1.1}}>
            Frontend Developer with mid level of experience in web designing
            and development,<br/>  I am committed to delivering high-quality work and code
            user-centric solutions<br/> that exceed client expectations.
          </motion.span>
        </div>
        <div>
          <Link to="contact" smooth={true} spy={true}>
            <motion.div className="i-button"
            initial={{x: '-100vw'}}
            animate={{x: -80}}
            transition={transition}
            whileHover={{scale: 1.1}}
            >_____________HireMe
            </motion.div>
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
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Intro;
