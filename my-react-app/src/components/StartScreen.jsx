import React, {useState} from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const StartScreen = ({ onStart }) => {
    const [theme, setTheme] = React.useState('');
    const [difficulty, setDifficulty] = useState('');

    const handleStart = () => {
        if (theme && difficulty) {
            onStart(theme, difficulty);
        }
    }

    return (
        <div className="start-screen container text-center">
            <h2 className="mb-4">Select Game Settings</h2>

            <div className="mb-4">
                <h5 className="mb-2">Pick a Theme!</h5>
                <select
                className="form-select"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                >
                <option value="">Choose Theme</option>
                <option value="animal">Animal</option>
                <option value="nature">Nature</option>
                </select>
            </div>

            <div className="mb-4">
                <h5 className="mb-2">Choose Difficulty</h5>
                <select
                className="form-select"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                >
                <option value="">Choose Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                </select>
            </div>

            {/* <button
                className="btn btn-primary px-4 py-2"
                onClick={handleStart}
                disabled={!theme || !difficulty}
                style={{
                background: 'linear-gradient(45deg, var(--space-cadet) 0%, var(--prussian-blue-2) 100%)',
                border: 'none'
                }}
            >
                Start Game
            </button> */}

            <button
                className="btn custom-btn px-4 py-2"
                onClick={handleStart}
                disabled={!theme || !difficulty}
            >
                Start Game
            </button>
        </div>
    )
}

export default StartScreen;