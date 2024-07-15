// src/App.js
import React from 'react';
import './App.css';
import Stopwatch from './stopwatch';

function App() {
  return (
    <div className="App">
      <div className='col1'>
        <header className="App-header">
          <h1>Stopwatch</h1>
          <Stopwatch />
        </header>
      </div>
      <div className='col2'>
      </div>
    </div>
  );
}

export default App;
