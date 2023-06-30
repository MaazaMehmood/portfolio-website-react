import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";
import { FaDownload } from "react-icons/fa";


const Services = () => {

  // transition
  const transition = { duration: 1, type: "spring", stiffness: 50};

  return (
    <div className="services" id="services">
      {/* right */}
      <div className="awesome">
        <motion.span 
        initial={{x: 200}}
        whileInView={{x: 0}}
        transition={transition}
        >My Cutting-Edge</motion.span>
        <motion.span
        initial={{ x: 200}}
        whileInView={{ x: 0}}
        transition={{ duration: 2, type: "spring", stiffness: 50}}>Services Offering</motion.span>
        <span>
          Lorem ipsum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>
        <a href={Resume} download>
          <button>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <FaDownload/>
              </div>
            </div>
            <span>Resume</span>
          </button>
        </a>
      </div>

      {/* left side */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "12rem" }}
          whileInView={{ left: "10rem" }}
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
          initial={{ top: "14rem", left: "12rem" }}
          whileInView={{ left: "10rem" }}
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
