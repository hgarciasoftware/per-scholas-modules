
function Product(props) {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  );
}

export default Product;
