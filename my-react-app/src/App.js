import React, {useState} from 'react';
import TitleBanner from './components/TitleBanner';
import GameBoard from './components/GameBoard';
import StartScreen from './components/StartScreen';

import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [theme, setTheme] = useState("");
  const [difficulty, setDifficulty] = useState("")

  const handleStart = (selectedTheme, selectedDifficulty) => {
    setTheme(selectedTheme);
    setDifficulty(selectedDifficulty);
    setGameStarted(true);
    setGameWon(false);
  }

  const handleWin = () => {
    setGameWon(true);
    setGameStarted(false);
  }

  const handleReset = () => {
    setTheme("");
    setDifficulty("");
    setGameStarted(false);
    setGameWon(false);
  }






  return (
    <div className="App">
      <TitleBanner />

      {!gameStarted && !gameWon && (
        <StartScreen onStart = {handleStart} />
      )}

      {gameStarted && (
        <GameBoard
          theme = {theme}
          level = {difficulty}
          onWin = {handleWin}
          onReset = {handleReset}
        />
      )}

      {gameWon && (
        <div className = "win-message">
          <h2>You won!</h2>
          <button onClick = {handleReset}>Play Again</button>
        </div>
      )}

      <footer>
        <p>© 2025 Memory Game ♥</p>
      </footer>
    </div>
  );
}

export default App;