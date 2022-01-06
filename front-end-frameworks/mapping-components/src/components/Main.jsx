import cities from '../Data';
import City from './City';

function Main() {
  return (
    <div>
      {cities.map((cityData, index) => {
        return <City cityData={cityData} key={index} />;
      })}
    </div>
  );
}

export default Main;

// map through an array of objects
// we want to be sure to render the City Component
// pass the data down as props
