import { useEffect, useState } from 'react';
import swapi from './services/sw-api';
import './App.css';
import StarshipCard from './components/StarshipCard';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(async () => setStarships(await swapi.getAllStarships()), []);

  return (
    <div className="App">
      <main>
        {/* ?. is the optional chaining operator */}
        {starships.results?.map((starship, index) => {
          return <StarshipCard starship={starship} key={index} />;
        })}
      </main>
    </div>
  );
}

export default App;
