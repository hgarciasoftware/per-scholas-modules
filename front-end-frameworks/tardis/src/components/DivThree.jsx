import { Component } from 'react';

class DivThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tardis: props.tardis
    };
    this.onClick = this.props.onClick.bind(this);
  }

  render() {
    const { tardis } = this.state;

    return (
      <div>
        <h3 onClick={() => this.onClick(tardis.name)}>{tardis.name}</h3>
      </div>
    );
  }
}

export default DivThree;
