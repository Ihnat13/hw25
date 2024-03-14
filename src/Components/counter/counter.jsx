import React, { Component } from 'react';
import './counter.css'
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  reset = () => {
    this.setState({
      count: this.props.initialValue
    });
  };

  render() {
    return (
      <div className='counter'>
        <h2>Counter</h2>
        <p>Count: {this.state.count}</p>
        <div className='counter-container'>
            <button style={{ alignSelf: 'flex-start' }} onClick={this.decrement}>-</button>
            <button style={{ alignSelf: 'flex-end' }} onClick={this.increment}>+</button>
        </div>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}



export default Counter;
