import React from 'react';

import seedPalettes from './seedPalettes';
import Palette from './components/Palette';

function App() {
  return (
    <div>
      { /* 
          Instead of defining a new prop : 
              <Palette palette = {seedPalettes[4]} />
          destructure array element to add each individual field as separate prop 
      */ }
      <Palette {...seedPalettes[4]} />
    </div>
  );
}

export default App;
