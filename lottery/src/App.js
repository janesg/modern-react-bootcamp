import React from 'react';
import './App.css';
import Lottery from './components/Lottery';

function App() {
  return (
    <div className="App">
      <Lottery title="National Lottery" numBalls={6} maxValue={49} />
      <Lottery title="Mini-Lotto" numBalls={4} maxValue={10} />
    </div>
  );
}

export default App;
