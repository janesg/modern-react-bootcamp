import React, { Component } from 'react';

import './Palette.css';
import PaletteFooter from './PaletteFooter';
import Swatch from './Swatch';
import NavBar from './NavBar';

class Palette extends Component {
    state = {
        level: 500,
        format: "hex"
    }

    changeLevel = (level) => {
        this.setState({ level });
    }

    changeFormat = (format) => {
        this.setState({ format });
    }

    render() {
        const colours = this.props.palette.colors;
        const { id, paletteName, emoji } = this.props.palette;
        const { level, format } = this.state;
        const swatches = colours[level].map(colour => (
            <Swatch key={ colour.id }
                    background={ colour[format] } 
                    name={ colour.name }
                    showMore={ true }
                    moreUrl={`/palette/${ id }/${ colour.id }`} />
        ));
        
        return (
            <div className="Palette">
                <NavBar level={ level } 
                        changeLevel={ this.changeLevel }
                        changeFormat={ this.changeFormat }
                        showLevelSlider />
                <div className="Palette-colours">
                    { swatches }
                </div>
                <PaletteFooter paletteName={ paletteName } emoji={ emoji } />
            </div>
        );        
    }
}

export default Palette;