import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/ProjectsPage.css"; // Import your CSS file
import codifyquest from "../assets/codifyquest.png";
import healthsyncc from "../assets/healthsyncc.png";
import divineconnect from "../assets/priest.png";
import smartserve from "../assets/smartserve.png";
import portfolio from "../assets/Portfolio-img.png";
import bluelearn from "../assets/bluelearn.png";
import usability from "../assets/usability.png";
import revolt from "../assets/revolt.png";
import simon from "../assets/simon.png";
import drum from "../assets/drum.png";
import virtual from "../assets/virtual.png";
import employee from "../assets/employee.jpg";
import aptiquest from "../assets/aptiquest.png"


const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleBoxClick = (link) => {
    window.location.href = link;
  };

  const cards = [
    {
      title: "AptiQuest",
      category: "Development",
      description:
        "aptiquest.in, a MERN app for aptitude preparation. Engaging questions and puzzles to sharpen logical and numerical skills, comprehensive study materials including formulas and explanations, and intuitive progress tracking to improve performance",
      link: "https://aptiquest.in",
      image: aptiquest, // Add your image path here
    },
    {
      title: "Healthsyncc",
      category: "Design",
      description:
        "A comprehensive case study to revolutionize healthcare data management. Empowering hospitals with secure, wireless access to patient records while ensuring compliance.",
      link: "https://www.figma.com/design/pbTwjhVcaK4r47AzHYxIES/HealthSyncc_UI%2FUX-CaseStudy?node-id=0-1",
      image: healthsyncc, // Add your image path here
    },
    {
      title: "Divine Connect",
      category: "Design",
      description:
        "An app simplifying priest bookings for ceremonies and poojas, fostering seamless connections between seekers and spiritual guides resulting in fostering spiritual harmony and ease of booking.  ",
      link: "https://www.figma.com/design/AGE1ZiQt6wKy6KiGOsOLQc/DivineConnect?node-id=0-1&t=jbZuRdpnobNJiRD0-1",
      image: divineconnect, // Add your image path here
    },
    {
      title: "Codify Quest",
      category: "Design",
      description:
        "Codify Quest is an innovative coding platform, offering a comprehensive suite of features including test assessments, online courses, an integrated compiler, and a myriad of tools.",
      link: "https://www.figma.com/design/mX1qgG171qMq4Vi4ZmtFor/CodifyQuest?node-id=0-1&t=xTlwZsfJpfy5oBSM-1",
      image: codifyquest, // Add your image path here
    },

    {
      title: "Virtual Assistant",
      category: "Others",
      description:
        "A virtual assistant application developed using Python, designed to assist users with tasks and commands, utilizing AI and machine learning capabilities for seamless interaction and support.",
      link: "https://github.com/anmoltiwari0712/Virtual-Assistant",
      image: virtual, // Add your image path here
    },
    // {
    //   title: "Employee System",
    //   category: "Others",
    //   description:
    //     "An integrated employee database management system designed to streamline HR processes, organizing and managing employee information efficiently within a centralized platform.",
    //   price: "345.67",
    //   image: employee, // Add your image path here
    // },

    {
      title: "SmartServe",
      category: "Design",
      description:
        "A comprehensive AI-driven phone service platform providing tools for store location, device selling quotes, and self-help analysis, simplifying device management and support.",
      link: "https://www.figma.com/design/EI3QWCbB64bLwOJXO5fqut/Devsoc-Home-Page?node-id=0-1&t=IVboo1EXQUZBRSM6-1",
      image: smartserve, // Add your image path here
    },
    {
      title: "Portfolio Website",
      category: "Design",
      description:
        "A sleek and versatile portfolio website template crafted to showcase professional profiles, projects, and achievements with elegance and efficiency.",
      link: "https://www.figma.com/design/ncPsFCKvARub1oT5LhqyQn/Portfolio-website?node-id=0-1&t=Mip2Eb0Sd3sSqjfB-1",
      image: portfolio, // Add your image path here
    },
    {
      title: "Blue Learn Clone",
      category: "Development",
      description:
        "A website clone of BlueLearn.in, featuring a comprehensive learning platform with a mirrored interface, offering similar functionalities and content as the original site.",
      link: "https://anmoltiwari0712.github.io/BLUELEARN_CLONE.github.io/",
      image: bluelearn, // Add your image path here
    },
    {
      title: "Usability Hub Clone",
      category: "Development",
      description:
        "A replication of UsabilityHub.com, a remote user research platform empowering designers with real user insights to validate design choices, eliminating guesswork from the decision-making process.",
      link: "https://anmoltiwari0712.github.io/usabilityhubclone.github.io/",
      image: usability, // Add your image path here
    },
    {
      title: "SmartServe",
      category: "Development",
      description:
        "SmartServe is an AI-driven customer service web application offering chat-based assistance, YouTube video recommendations, service center locators, and price predictions through a custom ML model tailored for phones and tablets.",
      link: "https://github.com/anmoltiwari0712/SmartServe_DevSoc23",
      image: smartserve, // Add your image path here
    },
    {
      title: "Revolt Motorbikes",
      category: "Development",
      description:
        "Revolt Motorbikes website showcasing essential services and information related to motorbikes, providing a comprehensive overview of offerings and functionalities.",
      link: "https://anmoltiwari0712.github.io/motorbikecomp.github.io/",
      image: revolt, // Add your image path here
    },
    {
      title: "Simon Game",
      category: "Development",
      description:
        "A digital recreation of the classic Simon Game, challenging users' memory and reflexes through pattern sequences and interactive gameplay.",
      link: "https://anmoltiwari0712.github.io/simongame.github.io/",
      image: simon, // Add your image path here
    },
    {
      title: "Drum Kit",
      category: "Development",
      description:
        "An interactive drum kit website allowing users to play and experiment with various percussion sounds and rhythms in a virtual environment.",
      link: "https://anmoltiwari0712.github.io/drumkit.github.io/",
      image: drum, // Add your image path here
    },
    // Add more cards as needed
  ];

  const filteredCards =
    selectedCategory === "All"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2, // Adjusted to display 2 cards on mobile
    },
  };

  return (
    <div className="projects-page">
      <h1 className="projects-heading">Aha! Moment 🥳</h1>
      <p className="heading-title">
        " When the value of a product becomes clear."
      </p>

      {/* Category buttons */}
      <div className="buttons">
        <button
          onClick={() => handleCategoryChange("All")}
          className={selectedCategory === "All" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryChange("Design")}
          className={selectedCategory === "Design" ? "active" : ""}
        >
          Design
        </button>
        <button
          onClick={() => handleCategoryChange("Development")}
          className={selectedCategory === "Development" ? "active" : ""}
        >
          Development
        </button>
        <button
          onClick={() => handleCategoryChange("Others")}
          className={selectedCategory === "Others" ? "active" : ""}
        >
          Others
        </button>
      </div>

      {/* Carousel */}
      <Carousel
        responsive={responsive}
        containerClass="carousel-container2"
        itemClass="carousel-item"
        arrows
        infinite
      >
        {filteredCards.map((card, index) => (
          <div className="card2" key={index}>
            <div className="card2-img">
              <img className="img" src={card.image} alt={card.title} />{" "}
              {/* Use the image property here */}
            </div>
            <div className="card2-title">{card.title}</div>
            <div className="card2-subtitle">{card.description}</div>
            <hr className="card2-divider" />
            <div className="card2-footer">
              <div className="box" onClick={() => handleBoxClick(card.link)}>
                <div class="arrow right"></div>
                <div class="text">Learn More</div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectsPage;
