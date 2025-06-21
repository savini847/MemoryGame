import React from 'react';
import '../App.css';

const Card = ({ value, isFlipped, onClick }) => {
  return (
    <div 
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={onClick}
    >
      <div className="card-face card-back"></div>
      <div 
        className="card-face card-front"
        style={{ backgroundImage: `url(images/${value}.png)` }}
      ></div>
    </div>
  );
};

export default Card;