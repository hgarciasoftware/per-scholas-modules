function Bath(props) {
  return (
    <figure className={`room ${props.size}-bath`}>
      <figcaption className="room-caption">{props.size} Bath</figcaption>
    </figure>
  );
}

export default Bath;
