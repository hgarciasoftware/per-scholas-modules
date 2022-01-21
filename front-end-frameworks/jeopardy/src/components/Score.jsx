import { useState } from 'react';

function Score() {
  const [score, setScore] = useState(0);

  return (
    <div className="text-center">
      <h2><span>Score:</span> <span>{score}</span></h2>
      <div>
        <button onClick={() => setScore(score - 1)}>Decrease</button>
        <button onClick={() => setScore(score + 1)}>Increase</button>
      </div>
    </div>
  );
}

export default Score;
