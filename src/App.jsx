import React, {Component} from 'react';
import './App.css';

const App = () => {
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
}


export default App