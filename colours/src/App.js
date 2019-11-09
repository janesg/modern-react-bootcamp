import React from 'react';
import { Route, Switch } from 'react-router-dom';

import seedPalettes from './seedPalettes';
import PaletteList from './components/PaletteList';
import Palette from './components/Palette';
import { generatePalette } from './utils/ColourHelpers';

function App() {

  // const findPalette = id => {
  //   return seedPalettes.find(palette => {
  //     return palette.id === id;
  //   });
  // };

  // Above reduced to...
  const findPalette = id => seedPalettes.find(palette => palette.id === id);  

  return (
    <Switch>
      <Route exact path="/" render={ routeProps => 
        <PaletteList palettes={ seedPalettes } {...routeProps} />
      } />
      <Route exact path="/palette/:id" render={ routeProps => 
        <Palette palette={ generatePalette(findPalette(routeProps.match.params.id)) } />
      } />
    </Switch>
  );
}

export default App;
