function Header(props) {
  return (
    <div className="header">
      <div>
        <h1>{props.companyName}</h1>
        <img src={props.image} alt={props.eventName} />
        <h2>{props.eventName}</h2>
        <h3>{props.eventDate}</h3>
      </div>
    </div>
  );
}

export default Header;
