import { useState, useEffect } from 'react';
import './App.css';
import Score from './components/Score';
import Clue from './components/Clue';

function App() {
  const [clues, setClues] = useState([]);
  const [currentClue, setCurrentClue] = useState(null);

  function isCompleteClue(clue) {
    return clue.answer && clue.question && clue.value && clue.category.title;
  }

  function getClue() {
    setCurrentClue(clues[0]);
    setClues(clues.slice(1));
  }

  useEffect(() => {
    if (clues.length > 1) return;

    fetch('https://jservice.io/api/random?count=20')
      .then(response => response.json())
      .then(data => {
        const newClues = [clues, ...data];

        setClues(newClues.filter(isCompleteClue));
      });
  }, [clues]);

  return (
    <div className="App">
      <h1>This Is Jeopardy!</h1>
      <Score />
      <button onClick={getClue}>Get a new clue</button>
      {(currentClue ?? null) ? <Clue clue={currentClue} /> : null}
    </div>
  );
}

export default App;
