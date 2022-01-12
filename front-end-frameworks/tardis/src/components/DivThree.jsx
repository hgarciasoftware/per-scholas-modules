import { Component } from 'react';

class DivThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tardis: props.tardis
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
    return (
      <div>
        <h3 onClick={() => this.changeIt(this.state.tardis.name)}>{this.state.tardis.name}</h3>
      </div>
    );
  }
}

export default DivThree;
