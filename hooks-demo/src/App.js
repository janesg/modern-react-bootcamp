import React from 'react';
import './App.css';
import Toggler from "./Toggler";
import SimpleFormHooks from "./SimpleFormHooks";
import Clicker from "./Clicker";
import SWMovies from "./SWMovies";

function App() {
  return (
    <div className="App">
      <Toggler />
      <hr></hr>
      <SimpleFormHooks />
      <hr></hr>
      <Clicker />
      <hr></hr>
      <SWMovies />
    </div>
  );
}

export default App;
