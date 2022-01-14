import { Component } from 'react'

class GroceryItem extends Component {
  render() {
    const { item, quantity, units, isPurchased } = this.props.groceryItem;
    const fragment = <>{quantity} × {item} ({units})</>;

    return <li>{!isPurchased ? fragment : <s>{fragment}</s>}</li>;
  }
}

export default GroceryItem;
