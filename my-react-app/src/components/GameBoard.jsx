import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../App.css';

const GameBoard = () => {
  const cardTypes = ['owl', 'sloth', 'deer', 'giraffe'];
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // Initialize game
  useEffect(() => {
    const initialCards = [...cardTypes, ...cardTypes]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ id: index, type: card }));
    setCards(initialCards);
  }, []);

  // Check for win condition
  useEffect(() => {
    if (matchedCards.length === cardTypes.length * 2) {
      setGameWon(true);
    }
  }, [matchedCards, cardTypes.length]);

  const handleCardClick = (id) => {
    // Don't allow clicks if:
    // - Card is already flipped or matched
    // - Two cards are already flipped
    // - Game is disabled during animation
    if (
      flippedCards.includes(id) ||
      matchedCards.includes(id) ||
      flippedCards.length === 2 ||
      disabled
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    // If two cards are flipped, check for a match
    if (newFlippedCards.length === 2) {
      setDisabled(true);
      setTimeout(() => checkForMatch(newFlippedCards), 1000);
    }
  };

  const checkForMatch = (flippedIds) => {
    const [firstId, secondId] = flippedIds;
    const firstCard = cards.find(card => card.id === firstId);
    const secondCard = cards.find(card => card.id === secondId);

    if (firstCard.type === secondCard.type) {
      setMatchedCards(prev => [...prev, firstId, secondId]);
    }

    setFlippedCards([]);
    setDisabled(false);
  };

  const resetGame = () => {
    setCards([]);
    setFlippedCards([]);
    setMatchedCards([]);
    setDisabled(false);
    setGameWon(false);
    
    // Reinitialize game
    const initialCards = [...cardTypes, ...cardTypes]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ id: index, type: card }));
    setCards(initialCards);
  };

  if (gameWon) {
    return (
      <div className="win-message">
        <h2>You won!</h2>
        <button onClick={resetGame}>Play Again</button>
      </div>
    );
  }

  return (
    <div id="game-board">
      {cards.map((card) => (
        <Card
          key={card.id}
          value={card.type}
          isFlipped={flippedCards.includes(card.id) || matchedCards.includes(card.id)}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default GameBoard;