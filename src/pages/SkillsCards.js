import React from "react";
import "../styles/SkillsCards.css";

const SkillsCard = ({ skillName, progress, skills }) => {
  const progressBarStyle = {
    width: `${progress}%`,
    background: `linear-gradient(to right, #3C3C43 ${progress}%, rgba(0, 0, 0, 0.2) ${progress}%)`,
    borderRadius: "5px",
    height: "5px",
  };

  return (
    <div className="card">
      <h5 className="skill-name">{skillName}</h5>
      <div className="progress-bar" style={progressBarStyle}></div>
      <div className="progress-text">{`${progress}/${100}`}</div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
