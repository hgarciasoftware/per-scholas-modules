import { Component } from 'react';
import './App.css';
import DivOne from './components/DivOne';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tardis: {
        name: 'Time and Relative Dimension in Space',
        caps: false
      }
    };
  }

  changeIt(text) {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      });
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      });
    }
  }

  render() {
    const { tardis } = this.state;

    return (
      <div className="App">
        <DivOne tardis={this.state.tardis} onClick={this.changeIt} />
      </div>
    );
  }
}

export default App;
