import React, {Component} from 'react';
import './App.css';
import Counter from './Components/counter/counter.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Counter initialValue={0} />
      </div>
    );
  }
}


export default App