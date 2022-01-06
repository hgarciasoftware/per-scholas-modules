
function City(props) {
  const {cityData} = props;

  return (
    <div>
      <p>Capital: {cityData.capitol}</p>
      <p>Country: {cityData.country}</p>
      <p>Population: {cityData.population}</p>
      <p>Language: {cityData.language}</p>
    </div>
  );
}

export default City;
