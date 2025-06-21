import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../App.css';

const GameBoard = () => {
  const [cards, setCards] = useState(['owl', 'sloth', 'owl', 'deer', 'giraffe', 'deer', 'giraffe', 'sloth']);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    // Shuffle cards on component mount
    const shuffledCards = [...cards].sort(() => 0.5 - Math.random());
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      setGameWon(true);
    }
  }, [matchedPairs, cards.length]);

  const flipCard = (index) => {
    // Don't allow flipping if already flipped or if two cards are already flipped
    if (flippedCards.length >= 2 || flippedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setTimeout(() => checkForMatch(newFlippedCards), 500);
    }
  };

  const checkForMatch = (currentFlippedCards) => {
    const [firstIndex, secondIndex] = currentFlippedCards;
    
    if (cards[firstIndex] === cards[secondIndex]) {
      setMatchedPairs(prev => prev + 1);
      setFlippedCards([]);
    } else {
      setTimeout(() => {
        setFlippedCards([]);
      }, 500);
    }
  };

  if (gameWon) {
    return (
      <div className="win-message">
        <h2>You won!</h2>
        <button onClick={() => window.location.reload()}>Play Again</button>
      </div>
    );
  }

  return (
    <div id="game-board">
      {cards.map((card, index) => (
        <Card
          key={index}
          value={card}
          isFlipped={flippedCards.includes(index)}
          onClick={() => flipCard(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;