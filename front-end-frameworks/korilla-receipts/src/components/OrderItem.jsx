function OrderItem(props) {
  return (
    <li className="order-item">
      <span className="text-capitalize text-purple">{props.itemProp}:</span> {props.itemVal}
    </li>
  );
}

export default OrderItem;
