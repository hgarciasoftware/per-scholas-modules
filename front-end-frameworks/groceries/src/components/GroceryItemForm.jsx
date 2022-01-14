import { Component } from 'react'

class GroceryItemForm extends Component {
  render() {
    return (
      <form style={{ alignItems: 'center', display: 'flex', columnGap: '1rem' }} onSubmit={event => this.props.handleSubmit(event)} noValidate>
        <div>
          <label style={{ display: 'block' }}>Item</label>
          <input name="item" />
        </div>
        <div>
          <label style={{ display: 'block' }}>Units</label>
          <input name="units" />
        </div>
        <div>
          <label style={{ display: 'block' }}>Quantity</label>
          <input name="quantity" type="number" />
        </div>
        <div>
          <label style={{ display: 'block' }}>Is Purchased</label>
          <input name="is-purchased" type="checkbox" />
        </div>
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default GroceryItemForm;
