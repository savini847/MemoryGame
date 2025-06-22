import React, {useState} from 'react';
import TitleBanner from './TitleBanner';
import '../App.css'


const StartScreen = ({ onStart }) => {
    const [theme, setTheme] = React.useState('');
    const [difficulty, setDifficulty] = useState('');

    const handleStart = () => {
        if (theme && difficulty) {
            onStart(theme, difficulty);
        }

    }

    return (
        <div className = "start-options">
            <h2>Select Game Settings</h2>
            <div className="option-group">
                <label htmlFor="theme-select">Theme:</label>
                <select
                    id = "theme-select"
                    value = {theme}
                    onChange = {(e) => setTheme(e.target.value)}
                >
                    <option value = "">Choose Theme</option>
                    <option value = "animal">Animal</option>
                    <option value = "nature">Nature</option>  
                </select>
            </div>

            <div className="option-group">
                <label htmlFor="difficulty-select">Difficulty:</label>
                <select
                    id = "difficulty-select"
                    value = {difficulty}
                    onChange = {(e) => setDifficulty(e.target.value)}
                >
                    <option value = "">Choose Difficulty</option>
                    <option value = "easy">Easy</option>
                    <option value = "medium">Medium</option>  
                    <option value = "hard">Hard</option>  
                </select>
            </div>

            <button
                className="button"
                onClick = {handleStart}
                disabled = {!theme || !difficulty}
            >
                Start Game
            </button>

        </div>
    )
}

export default StartScreen;