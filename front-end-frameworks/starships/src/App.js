import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Starships from './components/Starships';
import About from './components/About';

const swapiURL = 'https://swapi.dev/api';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    fetch(swapiURL + '/starships')
      .then(res => res.json())
      .then(data => setStarships(data.results));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Starships starships={starships} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
