import React from 'react';
import './App.css';
import ClickMeWithoutBabelMagic from './components/ClickMeWithoutBabelMagic';
import ClickMe from './components/ClickMe';

function App() {
  return (
    <div className="App">
      <h1>No Babel Magic involved...</h1>
      <ClickMeWithoutBabelMagic />
      <hr></hr>
      <h1>With that ol' Babel Magic!</h1>
      <ClickMe />
    </div>
  );
}

export default App;
