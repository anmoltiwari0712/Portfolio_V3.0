import React from "react";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import HeroPage from "./pages/HeroPage";
// import Navbar from "./pages/navbar";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import WorkExperiencePage from "./pages/WorkExperiencePage";
import YouTubeCarouselPage from "./pages/YoutubeCarouselPage";
// import Connect from "./pages/Connect";
// import Form from "./pages/Form";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <div className="app-container">
      <section className="section">
        <HeroPage />
      </section>
      <section className="section" id="about">
        <AboutMe />
      </section>
      <section className="section" id="skills">
        <SkillsPage />
      </section>
      <section className="section" id="projects">
        <ProjectsPage></ProjectsPage>
      </section>
      <section className="section" id="experience">
        <WorkExperiencePage></WorkExperiencePage>
      </section>
      <section className="section" id="youtube">
        <YouTubeCarouselPage></YouTubeCarouselPage>
      </section>
      <section className="section" id="contact">
        <ContactUsPage></ContactUsPage>
      </section>
    </div>
  );
}

export default App;
