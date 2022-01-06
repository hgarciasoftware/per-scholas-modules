function Item(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.discountedPrice}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Item;
