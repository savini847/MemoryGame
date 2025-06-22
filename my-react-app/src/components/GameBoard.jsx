import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../App.css';

const GameBoard = ( {theme, level, onWin, onReset }) => {
  const cardTypes = {
    animal: ['owl', 'sloth', 'deer', 'giraffe', 'cat', 'elephant', 'lion', 'tiger'],
    nature: ['beach', 'cloud', 'flower', 'forest', 'mountain', 'ocean', 'sun', 'tree']
  }

  //initalize easy, medium, and hard levels with 4, 6, 8 pairs respectively
  const levels = {
    easy: 4, //4 pairs 
    medium: 6, //6 pairs
    hard: 8, //8 pairs
  }

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);

  // Initialize game
  useEffect(() => {
    const pairCount = levels[level];
    const selected = cardTypes[theme].slice(0, pairCount);
    const initialCards = [...selected, ...selected]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ id: index, type: card }));
    setCards(initialCards);
  }, [theme, level]);

  // Check for win condition
  useEffect(() => {
    const totalPairs = levels[level]
    if (matchedCards.length === totalPairs * 2) {
      onWin();
    }
  }, [matchedCards, level, onWin]);

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

  return (
    <div id = "game-board-container">
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

      <div className = "game-controls">
        <button onClick = {onReset} className = "button">
          New Game
        </button>
      </div>
    </div>

  );
};

export default GameBoard;