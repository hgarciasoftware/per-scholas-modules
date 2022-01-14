import { Component } from 'react'

class GroceryItemForm extends Component {
  render() {
    return (
      <form className="form" onSubmit={event => this.props.handleSubmit(event)} noValidate>
        <div className="flex-grow-1">
          <label>Item</label>
          <input name="item" type="text" />
        </div>
        <div>
          <label>Units</label>
          <input className="input-width-10" name="units" type="text" />
        </div>
        <div>
          <label>Quantity</label>
          <input className="input-width-5" name="quantity" type="number" />
        </div>
        <div className="text-center">
          <label>Is Purchased</label>
          <input name="is-purchased" type="checkbox" />
        </div>
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default GroceryItemForm;
