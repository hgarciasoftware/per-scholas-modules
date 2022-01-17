const swapiURL = 'https://swapi.dev/api';

const swapi = {
  async getAllStarships(setStarships) {
    const response = await fetch(swapiURL + '/starships/');
    const data = await response.json();

    setStarships(data.results);
  }
};

export default swapi;
