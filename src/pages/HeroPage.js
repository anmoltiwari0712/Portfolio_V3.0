// HeroPage.js

import React from "react";
import "../styles/HeroPage.css"; // Import your CSS file for styling
import img1 from "../assets/tele.webp";
import img2 from "../assets/profile.png";
import img3 from "../assets/podcast.png";
import Navbar from "./navbar";
import anmol  from "../assets/anmol.png"

const HeroPage = () => {
  return (
    <div className="top-div">
      <Navbar></Navbar>
      <div className="hero-container">
        <div className="hero-left">
          <img src={img1} alt="Left Image" className="hero-image" />
        </div>
        <div className="hero-center">
          <div className="hero-text">
            <p class="heading1">Hi there, I’m Anmol ..</p>
            <p class="heading-title2">
              a frontend developer and User Experience Designer passionate about
              creating intuitive, impactful experiences.
            </p>
          </div>
          <div className="pod-img">
            <img src={img3} alt="Center Image" className="hero-image-center" />
          </div>
        </div>
        <div className="hero-right">
          <img src={anmol} alt="Right Image" className="hero-image2" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;