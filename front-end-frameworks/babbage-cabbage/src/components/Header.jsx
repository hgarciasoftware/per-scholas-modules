function Header(props) {
  return (
    <div>
      <h1>{props.companyName}</h1>
      <h2>{props.eventName}</h2>
      <h3>{props.eventDate}</h3>
      <img src={props.image} alt={props.eventName} />
    </div>
  );
}

export default Header;
