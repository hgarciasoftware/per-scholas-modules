import { Component } from 'react';
import './App.css';
import GroceryItem from './components/GroceryItem';
import GroceryItemForm from './components/GroceryItemForm';

class App extends Component {
  state = {
    groceries: [
      {
        item: 'Apple',
        units: '3 lbs',
        quantity: 1,
        isPurchased: true
      },
      {
        item: 'Banana',
        units: '3 lbs',
        quantity: 1,
        isPurchased: false
      },
      {
        item: 'Lemon',
        units: '5 lbs',
        quantity: 1,
        isPurchased: false
      }
    ]
  };

  static clearForm(form) {
    form.item.value = '';
    form.units.value = '';
    form.quantity.value = '';
    form['is-purchased'].checked = false;
  }

  handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const formData = {
      item: form.item.value,
      units: form.units.value,
      quantity: form.quantity.value,
      isPurchased: form['is-purchased'].checked
    };

    this.setState({ groceries: [ ...this.state.groceries, formData ] });
    App.clearForm(form);
  };

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.groceries.map((groceryItem, index) => (
            <GroceryItem groceryItem={groceryItem} key={index} />
          ))}
        </ul>
        <GroceryItemForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
