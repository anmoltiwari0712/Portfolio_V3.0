import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WorkCard from "./WorkCard";
import "../styles/WorkExperiencePage.css";
import mlsa from "../assets/mlsa.png";
import sedin from "../assets/sedin.png";
import orom from "../assets/orom.png";
import codingminutes from "../assets/codingminutes.png";
import moreficent from "../assets/moreficent.webp";
import aee from "../assets/aee.png";

const WorkExperiencePage = () => {
  const workExperiences = [
    {
      title: "Student Ambassador @Microsoft",
      logoUrl: mlsa,
      description:
        "Selected as a Microsoft Learn Student Ambassador (MLSA), grateful to Microsoft for this opportunity!",
      link: "https://mvp.microsoft.com/en-US/studentambassadors/profile/5aaeb8e7-dc2e-4814-bd47-3440aa47aaf3",
      startDate: "April 2023",
      endDate: "Present",
    },
    {
      title: "Design Intern @Sedin ",
      logoUrl: sedin,
      description:
        "Completed In-house training at Sedin Technologies Pvt Ltd, specializing in Design over a five-week duration.",
      link: "https://drive.google.com/file/d/1Lsa9-po8U59PfyevFr7dV0hgbXz2YCPu/view?usp=drive_link",
      startDate: "August 2023",
      endDate: "September 2023",
    },
    {
      title: "Frontend Developer @Orom",
      logoUrl: orom,
      description:
        "Contributed as a Front-End Web Developer at Orom Corporation, specializing in crafting engaging and responsive web interfaces.",
      link: "https://drive.google.com/file/d/1yr0rMlJ4OCAMSccF7A_cw_rRSaJI6yfz/view?usp=sharing",
      startDate: "October 2022",
      endDate: "January 2022",
    },
    {
      title: "Campus Captain @Coding Minutes",
      logoUrl: codingminutes,
      description:
        "Served as Campus Captain at Coding Minutes, fostering coding proficiency and community engagement through initiatives.",
      link: "https://www.linkedin.com/posts/anmol-tiwari-0bbb14227_im-happy-to-share-that-im-starting-a-new-activity-6921097823283273728-r49v?utm_source=share&utm_medium=member_desktop",
      startDate: "March 2022",
      endDate: "February 2023",
    },
    {
      title: "Community Advocate @Moreficent",
      logoUrl: moreficent,
      description:
        "As a Community Advocate at Moreficent, I drive student engagement and gather feedback to optimize our cloud application.",
      link: "https://www.linkedin.com/posts/anmol-tiwari-0bbb14227_connections-activity-6967825358469431297-yRBF?utm_source=share&utm_medium=member_desktop",
      startDate: "August 2022",
      endDate: "October 2022",
    },
    {
      title: "Design Head @AEE",
      logoUrl: aee,
      description:
        "Led design initiatives as the Design Head at AEE, enhancing the user experience and branding efforts of the organization.",
      link: "https://www.linkedin.com/school/aee-vit/mycompany/",
      startDate: "January 2024",
      endDate: "current",
    },
    // Add more work experiences as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="work-experience-page">
      <h1 className="work-experience-heading">Experience Matters :</h1>
      <p className="heading-title">" It's Okay to Brag Sometimes 😉"</p>
      <div className="carousel-container">
        <Slider {...settings}>
          {workExperiences.map((experience, index) => (
            <div key={index}>
              <WorkCard
                title={experience.title}
                description={experience.description}
                link={experience.link}
                logoUrl={experience.logoUrl}
                startDate={experience.startDate}
                endDate={experience.endDate}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WorkExperiencePage;
