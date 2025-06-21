import React from 'react';
import '../App.css';

const Card = ({ value, isFlipped, onClick }) => {
  return (
    <div 
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={onClick}
      style={isFlipped ? { backgroundImage: `url(images/${value}.png)` } : {}}
    >
      {isFlipped && <span>{value}</span>}
    </div>
  );
};

export default Card;