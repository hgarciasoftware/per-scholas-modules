function Receipt(props) {
  const {person, order} = props.receipt;

  return (
    <section className="receipt">
      <h2 className="person">{person}</h2>
      <ul className="order text-bold">
        <li className="order-item">
          <span className="text-purple">Main:</span> {order.main}
        </li>
        <li className="order-item">
          <span className="text-purple">Protein:</span> {order.protein}
        </li>
        <li className="order-item">
          <span className="text-purple">Rice:</span> {order.rice}
        </li>
        <li className="order-item">
          <span className="text-purple">Sauce:</span> {order.sauce}
        </li>
        <li className="order-item">
          <span className="text-purple">Drink:</span> {order.drink}
        </li>
        <li className="order-item">
          <span className="text-purple">Cost:</span> {order.cost}
        </li>
      </ul>
    </section>
  );
}

export default Receipt;
