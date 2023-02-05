import React from 'react';
import './App.css';

import Calculator from './components/Calculator'
import Navbar from './components/Navbar'
import FooterBottom from './components/FooterBottom'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-calculator">
        <Calculator />
      </div>
      <FooterBottom />
    </div>
  );
}

export default App;
