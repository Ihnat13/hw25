import React, { useState } from 'react';
import counter from './counter.css'

const Counter = (props) => {
  const [count, setCount] = useState(props.initialValue);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(props.initialValue);
  };

  return (
    <div className='counter'>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <div className='counter-container'>
        <button style={{ alignSelf: 'flex-start' }} onClick={decrement}>-</button>
        <button style={{ alignSelf: 'flex-end' }} onClick={increment}>+</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
