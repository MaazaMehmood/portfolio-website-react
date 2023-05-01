import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring", stiffness: 50
  };

  return (
    <div className="services" id="services">
      {/* right */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My </span>
        <span>Services</span>
        <span>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>
        <a href={Resume} download>
          <motion.button className="button s-button"
           initial={{x: '100vw'}}
           animate={{x: 0}}
           transition={transition}
           whileHover={{scale: 1.1}}
          >
            Resume
          </motion.button>
        </a>
      </div>

      {/* left side */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "15rem" }}
          whileInView={{ left: "13rem" }}
          transition={transition}
        >
          <Card
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-2rem", top: "7rem" }}
          whileInView={{ left: "-1rem" }}
          transition={transition}
        >
          <Card
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd card*/}
        <motion.div
          initial={{ top: "14rem", left: "15rem" }}
          whileInView={{ left: "13rem" }}
          transition={transition}
        >
          <Card
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <motion.p  initial={{y: '70vh'}}
        whileInView={{y: 0}}
        transition={transition}
        >Services</motion.p>
      </div>
    </div>
  );
};

export default Services;
