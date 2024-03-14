import React, {Component} from 'react';
import './App.css';
import Counter from './Components/counter/counter.jsx';

const App = () => {
    return (
      <div>
        <Counter initialValue={0} />
      </div>
    );
}


export default App