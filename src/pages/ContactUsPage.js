import React from "react";
import "../styles/ContactUsPage.css";
import mouse from "../styles/mouse.webp"; // Replace with your image path
import contactImage from "../assets/contactus.png"; 
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png'; // Replace with your contact image path

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-subdiv contact-subdiv-1">
        <p className="Heading-1">Let's connect</p>
        <p className="heading-title">
          " Feel free to reach out to me for any questions or opportunities! "
        </p>
      </div>
      <div className="contact-image-container">
        <img src={mouse} alt="Contact Us" className="contact-image" />
      </div>
      <div className="contact-subdiv contact-subdiv-2">
        <div className="contact-form-container">
          <div className="form-div">
            <p>Drop your Queries Below: </p>
            <br />
            <form
              action="https://formspree.io/f/mvojeozn"
              method="POST"
              className="contact-inputs"
            >
              <input
                className="name-btn"
                type="text"
                name="username"
                placeholder="Enter Your Name"
                autoComplete="off"
                required
              />
              <input
                className="email-btn"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                autoComplete="off"
                required
              />
              <textarea
                className="txt-btn"
                name="message"
                placeholder="Enter Your Message...."
                cols="30"
                rows="6"
                autoComplete="off"
                required
              ></textarea>
              <input className="submit-btn" type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <div className="contact-image-right">
          <img src={contactImage} alt="Contact Us" className="contact-right-image" />
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/anmol-tiwari-0bbb14227/">
              <img src={linkedin} alt="LinkedIn" className="social-imgs" />
            </a>
            <a href="https://github.com/anmoltiwari0712">
              <img src={github} alt="GitHub" className="social-imgs" />
            </a>
            <a href="https://www.instagram.com/oanmoltiwari7/">
              <img src={instagram} alt="Instagram" className="social-imgs" />
            </a>
            <a href="https://twitter.com/oanmoltiwari7">
              <img src={twitter} alt="Twitter" className="social-imgs" />
            </a>
            <a href="https://www.youtube.com/channel/UCOxXIz9W47IIwGDQb6JEt9w">
              <img src={youtube} alt="YouTube" className="social-imgs" />
            </a>
          </div>
          <p className="txt">© 2024 | Anmol Tiwari</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
