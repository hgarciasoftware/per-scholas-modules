function OrderItem(props) {
  return (
    <li className="order-item">
      <span className="text-capitalize text-purple">{props.field}:</span> {props.value}
    </li>
  );
}

export default OrderItem;
