import React from 'react';
import './App.css';

import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      {/* JSX comment - numeric values have to be passed in brackets...or quotes as string */}
      {/* <Pokecard id={4} name="Charmander" type="fire" exp={62} /> */}
      <Pokedex />
    </div>
  );
}

export default App;
