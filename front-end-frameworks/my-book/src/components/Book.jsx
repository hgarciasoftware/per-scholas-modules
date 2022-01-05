
function Book(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title} />
      <p>{props.description}</p>
    </article>
  );
}

export default Book;
