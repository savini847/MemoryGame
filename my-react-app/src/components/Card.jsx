import React from 'react';
import '../App.css';

const Card = ({ value, isFlipped, onClick }) => {
  return (
    <div 
      className={`memory-card ${isFlipped ? 'flipped' : ''}`}
      onClick={onClick}
    >
      <div className="memory-card-face memory-card-back"></div>
      <div 
        className="memory-card-face memory-card-front"
        style={{ backgroundImage: `url(images/${value}.png)` }}
      ></div>
    </div>
  );
};

export default Card;