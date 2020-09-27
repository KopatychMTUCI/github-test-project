import React from 'react';
import logo from './mtuic_logo.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Добро пожаловать в МТУСИ
        </p>
        <a
          className="App-link"
          href="http://mtuci.ru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Заходите на наш сайт
        </a>
      </header>
    </div>
  );
}

export default App;
