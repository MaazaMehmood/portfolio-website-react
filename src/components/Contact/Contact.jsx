import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaMailBulk, FaPhoneAlt } from 'react-icons/fa';


const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="left">
        <div className="info">
          <motion.span 
          initial={{ x: 200}}
          whileInView={{ x: 0}}
          transition={{ duration: 1, type: "spring", stiffness: 50}}
          >Let's Connect!</motion.span>
          <motion.span 
           initial={{ x: 200}}
           whileInView={{ x: 0}}
           transition={{ duration: 2, type: "spring", stiffness: 50}}
          >Reach Out to Me and Get Started..</motion.span>
          <div className="connect">
            <FaMailBulk className='ico' /> 
            <p>maazamehmood831@gmail.com</p>
          </div>
          <div className="connect">
            <FaPhoneAlt className="ico"/> 
            <p>01234567890</p>
          </div>
        </div>
      </div>

      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <button>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
          <span>{done && "Thanks for Contacting me"}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
