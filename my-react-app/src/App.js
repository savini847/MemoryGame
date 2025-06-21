import React from 'react';
import TitleBanner from './components/TitleBanner';
import GameBoard from './components/GameBoard';
import './App.css';

function App() {
  return (
    <div className="App">
      <TitleBanner />
      <div id="game-container">
        <GameBoard />
      </div>
      <footer>
        <p>© 2025 Memory Game ♥</p>
      </footer>
    </div>
  );
}

export default App;