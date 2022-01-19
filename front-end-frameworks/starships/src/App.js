import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import swapi from './services/sw-api';
import Header from './components/Header';
import Starships from './components/Starships';
import About from './components/About';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    swapi.getAllStarships(setStarships);
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
