import React from 'react';
import { Route, Switch } from 'react-router-dom';

import seedPalettes from './seedPalettes';
import PaletteList from './components/PaletteList';
import Palette from './components/Palette';
import SingleColourPalette from './components/SingleColourPalette';
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
      <Route exact path="/palette/:paletteId" render={ routeProps => 
        <Palette palette={ generatePalette(findPalette(routeProps.match.params.paletteId)) } />
      } />
      <Route exact path="/palette/:paletteId/:colourId" render={ routeProps => 
        <SingleColourPalette 
              palette={ generatePalette(findPalette(routeProps.match.params.paletteId)) }
              colourId={ routeProps.match.params.colourId } />
      } />
    </Switch>
  );
}

export default App;
