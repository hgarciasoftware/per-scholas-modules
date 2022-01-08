function Bedroom(props) {
  return (
    <figure className={`room bedroom-${props.bedNum}`}>
      <figcaption className="room-caption">Bedroom {props.bedNum}</figcaption>
    </figure>
  );
}

export default Bedroom;
