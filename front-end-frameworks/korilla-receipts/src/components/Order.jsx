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
      {Object.entries(props.order).map(([prop, {val, key}]) => {
        return <OrderItem itemProp={prop} itemVal={toString(val)} key={key} />
      })}
    </ul>
  );
}

export default Order;
