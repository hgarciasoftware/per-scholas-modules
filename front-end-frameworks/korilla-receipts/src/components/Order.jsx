import OrderItem from './OrderItem';

function toString(val) {
  if (Array.isArray(val)) {
    return val.join(', ');
  }

  return val;
}

function Order(props) {
  return (
    <ul className="order text-bold">
      {Object.entries(props.order).map(entry => {
        return <OrderItem itemProp={entry[0]} itemVal={toString(entry[1])} />
      })}
    </ul>
  );
}

export default Order;
