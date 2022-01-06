function Item(props) {
  return (
    <div className="item">
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <p>{props.discountedPrice}</p>
    </div>
  );
}

export default Item;
