const swapiURL = 'https://swapi.dev/api/';

const swapi = {
  async getAllStarships() {
    const response = await fetch(swapiURL + '/starships/');

    return response.json();
  }
};

export default swapi;
