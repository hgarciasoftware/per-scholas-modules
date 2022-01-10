function Contact(props) {
  return (
    <article className="contact">
      <img className="profile" src={props.contactInfo.picture.large} alt={props.contactInfo.name.first} loading="lazy" />
      <div className="bold text-center">
        <h1>{props.contactInfo.name.first} {props.contactInfo.name.last}</h1>
        <p>Home: <a href={`tel:+${props.contactInfo.phone}`}>{props.contactInfo.phone}</a></p>
        <p>Mobile: <a href={`tel:+${props.contactInfo.cell}`}>{props.contactInfo.cell}</a></p>
      </div>
      <div className="bold">&#62;</div>
    </article>
  );
}

export default Contact;
