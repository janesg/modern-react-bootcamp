import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SingleColourPalette.css';

import NavBar from './NavBar';
import Swatch from './Swatch';
import PaletteFooter from './PaletteFooter';

class SingleColourPalette extends Component {

    state = {
        format: 'hex'
    }

    constructor(props) {
        super(props);
        // As we don't intend to change or update the 9 colour shades, we add
        // them as a new instance property instead of adding to component state
        this._shades = this.getShades(props.palette, props.colourId);
    }

    // Get all shades of a given colour
    getShades(palette, colourId) {
        const allColours = palette.colors;
        let shades = [];

        for (let key in allColours) {
            shades.push(...allColours[key].filter(cl => cl.id === colourId));
        }

        // Remove the '50' weight (1st array item) that was added 
        // purely to satisfy colour generation algo
        return shades.slice(1);
    }

    changeFormat = val => {
        this.setState({ format: val });
    }

    render() {
        const { format } = this.state;

        const { paletteName, emoji, id } = this.props.palette;

        const swatches = this._shades.map(c =>
            <Swatch key={ c.name }
                    background={ c[format] } 
                    name={ c.name } 
                    showMore={ false } />
        );

        return (
            <div className="SingleColourPalette">
                <NavBar changeFormat={ this.changeFormat } showLevelSlider={ false } />
                <div className="Palette-colours">
                    { swatches }
                    <div className="Swatch GoBack">
                        <Link to={ `/palette/${id}` } className="back-button">Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={ paletteName } emoji={ emoji } />
            </div>
        );
    }
}

export default SingleColourPalette;