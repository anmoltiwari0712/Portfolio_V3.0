// SkillsPage.js

import React from "react";
import SkillsCard from "./SkillsCards";
import "../styles/SkillsPage.css"; // Import your CSS file for styling
import img from "../assets/scope.png";

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <h1 className="skills-heading">My Tech Toolkit</h1>

      <div className="skills-container">
        <div className="skills-section">
          <SkillsCard
            skillName="Front-End Development"
            progress={80}
            skills={[
              "HTML/css",
              "JavaScript",
              "Reactjs",
              "Bootstrap",
              "CSS Frameworks",
              "Version Control",
            ]}
          />
        </div>

        <div className="image-section">
          <img src={img} alt="Skills Image" className="skills-image" />
        </div>

        <div className="skills-section">
          <SkillsCard
            skillName="Design and Multimedia Tools"
            progress={90}
            skills={[
              "Adobe Creative Suite",
              "Sketch",
              "Figma",
              "Canva",
              "After Effects",
            ]}
          />
        </div>
      </div>
      <div className="additional-skills-section">
        <SkillsCard
          skillName="Programming and Other Skills"
          progress={75}
          skills={[
            "Data Structures",
            "C++",
            "Python",
            "Flask",
            "Mysql",
            "Problem Solving & Algorithms",
          ]}
        />
      </div>
    </div>
  );
};

export default SkillsPage;
