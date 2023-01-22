import React from 'react';
import './App.css';

import Calculator from './components/Calculator'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-calculator">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
