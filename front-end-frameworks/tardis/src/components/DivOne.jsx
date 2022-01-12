import { Component } from 'react';
import DivTwo from './DivTwo';

class DivOne extends Component {
  render() {
    return (
      <div>
        <DivTwo tardis={this.props.tardis} />
      </div>
    );
  }
}

export default DivOne;
