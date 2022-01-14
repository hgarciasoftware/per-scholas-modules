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

  handleSubmit = event => {
    event.preventDefault();

    const formData = {
      item: event.target.item.value,
      units: event.target.units.value,
      quantity: event.target.quantity.value,
      isPurchased: event.target['is-purchased'].checked
    };

    this.setState({ groceries: [ ...this.state.groceries, formData ] });
  };

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.groceries.map((groceryItem, index) => (
            <GroceryItem groceryItem={groceryItem} key={index} />
          ))}
          <GroceryItemForm handleSubmit={this.handleSubmit} />
        </ul>
      </div>
    );
  }
}

export default App;
