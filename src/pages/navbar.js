import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const downloadCV = () => {
    const cvUrl =
      "https://dl.dropboxusercontent.com/scl/fi/ol4ob9f2yn2pwxciy2t3g/Anmol_Tiwari_Resume2.0.pdf?rlkey=4tk569gws8onx2khxpbgpdye3&st=40bgkia9&dl=1";
    fetch(cvUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Anmol_Tiwari_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Download failed:", error);
      });
  };

  return (
    <nav className="nav">
      <div className="logo">
        <a class="company-logo">Portfolio</a>
      </div>
      <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-ul">
          <li>
            <a href="#about" class="hover-links">
              About
            </a>
          </li>
          <li>
            <a href="#skills" class="hover-links">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" class="hover-links">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" class="hover-links">
              Experience
            </a>
          </li>
          <li>
            <a href="#youtube" class="hover-links">
              Videos
            </a>
          </li>
          <li>
            <a href="#contact" class="hover-links">
              Get In Touch
            </a>
          </li>
        </ul>
        <div className="rightIcons">
          <button
            type="button"
            onClick={downloadCV}
            className="download-btn-hover"
          >
            Download CV
          </button>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
