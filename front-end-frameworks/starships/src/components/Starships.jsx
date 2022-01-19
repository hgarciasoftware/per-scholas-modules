import StarshipCard from './StarshipCard';

function Starships(props) {
  return (
    <>
      {props.starships.map((starship, index) => <StarshipCard starship={starship} key={index} />)}
    </>
  );
}

export default Starships;
