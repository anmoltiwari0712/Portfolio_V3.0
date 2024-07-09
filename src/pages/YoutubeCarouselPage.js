import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameCard from "./GameCard.js";
import "../styles/YoutubeCarouselPage.css";
import mlsat from "../assets/MLSA THUMBNAIL.png";
import ai from "../assets/AI ASSISTANT.png";
import git from "../assets/git.webp";

// Define game data
const games = [
  {
    title: "Mlsa video",
    bannerUrl: mlsat,
    youtubeLink: "https://youtu.be/5xFL48Pb-tM?si=kYeWH_ygxxymx3cn",
  },
  {
    title: "Python ai video",
    bannerUrl: ai,
    youtubeLink: "https://youtu.be/a7dZ2h-M_x0?si=-USoXic3qOkyR6ky",
  },
  {
    title: "GITHUB ONESHOT",
    bannerUrl: git,
    youtubeLink: "https://youtu.be/5NmDmdn8YPM?si=_XjRWynwsNUxKOjR",
  },
  // Add more games as needed
];

const YouTubeCarouselPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 1 card per slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="youtube-carousel-page">
      <h1 className="heading-title">
        " Lights, Camera, Action (and Hopefully Likes!) 😎"
      </h1>
      <div className="carousel-container2">
        <Slider {...settings}>
          {games.map((game, index) => (
            <div key={index}>
              <GameCard
                title={game.title}
                bannerUrl={game.bannerUrl}
                youtubeLink={game.youtubeLink}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default YouTubeCarouselPage;
