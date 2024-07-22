import React from "react";
import "../styles/AboutMe.css"; // Import your CSS file for styling
import aboutImage from "../assets/aboutme.png"; // Replace with your actual image path

const AboutMe = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">y Story So far......</h1>
      <div className="about-content">
        <div className="about-left">
          <img src={aboutImage} alt="About Me" className="about-image" />
        </div>
        <div className="about-right">
          <p className="about-description">
            <strong>Hey, I'm Anmol Tiwari 👋🏻 </strong>
          </p>
          <br />
          <p className="about-description">
            A final year B.Tech student in Computer Science and Engineering at{" "}
            <strong>Vellore Institute of Technology, Vellore Campus</strong>,
            where I'm on a quest to master the art of Web Development and UI/UX
            Design.
          </p>
          <br />
          <p className="about-description">
            At VIT, I'm not just studying computer science—I'm crafting digital
            experiences that blend elegance with functionality. As a{" "}
            <strong>Microsoft Learn Student Ambassador</strong>, I ignite
            curiosity and spark innovation through tech events that defy the
            ordinary.
          </p>
          <br />
          <p className="about-description">
            Certified in <strong>Microsoft Azure Administration</strong> and
            fluent in Python, C++, React.js, and MySQL, I thrive on unraveling
            complex challenges with creativity and precision. UI/UX design isn't
            just a skill—it's my passion for sculpting digital landscapes that
            users love to navigate.
          </p>
          <br />
          <p className="about-description">
            Beyond the screen, you'll find me sketching out new ideas in
            digital illustration and uncovering the next big thing in tech
            trends. Whether it's refining code or envisioning the future of
            user interfaces, I'm always pushing boundaries and seeking out new
            inspirations.
          </p>
          <br />
          <p className="about-description">
            Ready to explore, innovate, and shape the future of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
