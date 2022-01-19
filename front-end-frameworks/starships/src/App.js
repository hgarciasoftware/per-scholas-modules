import { useEffect, useState } from 'react';
import './App.css';
import swapi from './services/sw-api';
import Header from './components/Header';
import StarshipCard from './components/StarshipCard';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    swapi.getAllStarships(setStarships);
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {starships.map((starship, index) => <StarshipCard starship={starship} key={index} />)}
      </main>
    </div>
  );
}

export default App;
