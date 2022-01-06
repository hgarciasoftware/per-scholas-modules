function Header(props) {
  return (
    <div className="header">
      <h1>{props.companyName}</h1>
      <img src={props.image} alt={props.eventName} />
      <h2>{props.eventName}</h2>
      <h3>{props.eventDate}</h3>
    </div>
  );
}

export default Header;
