import React from 'react';

import seedPalettes from './seedPalettes';
import Palette from './components/Palette';
import { generatePalette } from './utils/ColourHelpers';

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedPalettes[4])} />
    </div>
  );
}

export default App;
