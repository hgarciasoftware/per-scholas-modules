import Person from './Person';
import Order from './Order';

function Receipt(props) {
  return (
    <section className="receipt">
      <Person person={props.receipt.person} />
      <Order order={props.receipt.order} />
    </section>
  );
}

export default Receipt;
