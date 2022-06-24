import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const increase = ()=> setCount(count+1) 
  const reset = ()=> setCount(0)
  const decrease = ()=> setCount(count-1)
    
  return (
    <div className="app">
      <div id='display'>
          <p>
            Counter;<span>{count}</span>

          </p>
        </div>
        <div id='buttons'>
          <button id='increase-button' onClick={increase}   >Increase </button>
          <button id='reset' onClick={reset}>Reset </button>
          <button id='decrease-button' onClick={decrease}>Decrease </button>
        </div>
    </div>
  );
}

export default App;
