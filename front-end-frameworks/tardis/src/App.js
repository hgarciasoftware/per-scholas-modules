import { Component } from 'react';
import './App.css';
import DivOne from './components/DivOne';

const tardis = {
  name: 'Time and Relative Dimension in Space',
  caps: false
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <DivOne tardis={tardis} />
      </div>
    );
  }
}

export default App;
