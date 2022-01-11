import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h2><center> Hello {this.props.name}</center></h2>
      </div>
    );
  }
} // end of a class

export default Hello;
