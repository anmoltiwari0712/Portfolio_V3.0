import React from 'react';
import '../styles/GameCard.css';

const GameCard = ({ bannerUrl, title, description, youtubeLink }) => {
  return (
    <div className="game-card">
      <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
        <img src={bannerUrl} alt="Banner Game" className="banner__image" />
      </a>
    </div>
  );
};

export default GameCard;
