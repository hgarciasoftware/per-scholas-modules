import { Component } from 'react';
import DivThree from './DivThree';

class DivTwo extends Component {
  render() {
    return (
      <div>
        <DivThree tardis={this.props.tardis} onClick={this.props.onClick} />
        <DivThree tardis={this.props.tardis} onClick={this.props.onClick} />
      </div>
    );
  }
}

export default DivTwo;
