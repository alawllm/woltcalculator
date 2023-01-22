import React from 'react';
import logo from './logo.svg';
import './App.css';
import Abc from './components/Abc'
import Calculator from './components/Calculator'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Calculator />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Abc />
      </header>
    </div>
  );
}

export default App;
