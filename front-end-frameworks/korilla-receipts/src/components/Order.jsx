import OrderItem from './OrderItem';

function Order(props) {
  const { order } = props;

  return (
    <ul className="order text-bold">
      <OrderItem field="main" value={order.main} />
      <OrderItem field="protein" value={order.protein} />
      <OrderItem field="rice" value={order.rice} />
      <OrderItem field="sauce" value={order.sauce} />
      <OrderItem field="toppings" value={order.toppings.join(', ')} />
      <OrderItem field="drink" value={order.drink} />
      <OrderItem field="cost" value={order.cost} />
    </ul>
  );
}

export default Order;
