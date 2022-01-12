import React, { Component } from 'react';

class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome to this website!!',
      msg: 'Hello'
    };
  }

  changeMsg() {
    this.setState({
      message: 'Thank you for subscribing!!'
    });
  }

  render() {
    return (
      <div>
        <center>
          <h2>Hello {this.props.name}</h2>
          <h3>{this.state.message}</h3>
          <button onClick={() => this.changeMsg()}>Subscribe</button>
        </center>
      </div>
    );
  }
}

export default Greeting;
