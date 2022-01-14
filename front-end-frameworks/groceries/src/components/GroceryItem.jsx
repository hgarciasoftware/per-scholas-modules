import { Component } from 'react'

class GroceryItem extends Component {
  render() {
    const { item, quantity, units, isPurchased } = this.props.groceryItem;
    const jsx = <li>{quantity} × {item} ({units})</li>;

    return !isPurchased ? <>{jsx}</> : <s>{jsx}</s>;
  }
}

export default GroceryItem;
