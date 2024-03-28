import ReactDOM from 'react-dom/client';
import React from 'react';
import './Components/counter/counter.css'; // Обратите внимание, что я убрал 'client' из пути

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'; // Импортируем Provider и connect

const increment = () => ({
  type: 'INCREMENT'
});

const decrement = () => ({
  type: 'DECREMENT'
});

const reset = () => ({
  type: 'RESET'
});



const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};


const store = createStore(reducer);

const Counter = ({ count, increment, decrement, reset }) => (
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

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
const root = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(root)
// rootContainer.render( 
//     <App/>
// );
rootContainer.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
);