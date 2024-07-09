import React from "react";
import "../styles/WorkCard.css";
import arrow from "../assets/right-arrow.png";

const WorkCard = ({ imageUrl, title, description, link, logoUrl, startDate, endDate }) => {
  return (
    <div className="work-card">
      <img src={logoUrl} alt={title} className="company-logo" />
      <div className="work-details">
        <h3 className="title-w">{title}</h3>
        <div className="dates">
          <p className="date">( {startDate} - {endDate} )</p>
        </div>
        <p className="description-w">{description}</p>
      </div>
      <div className="learn-more-btn flex">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-txt"
        >
          Learn More
        </a>
        <img src={arrow} alt={title} className="right-arrow mr-txt" />
      </div>
    </div>
  );
};

export default WorkCard;
