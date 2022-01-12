import { Component } from 'react';
import DivThree from './DivThree';

class DivTwo extends Component {
  render() {
    return (
      <div>
        <DivThree tardis={this.props.tardis} />
        <DivThree tardis={this.props.tardis} />
      </div>
    );
  }
}

export default DivTwo;
