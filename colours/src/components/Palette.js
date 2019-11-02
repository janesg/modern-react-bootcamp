import React, { Component } from 'react';

import './Palette.css';
import Swatch from './Swatch';

class Palette extends Component {
    render() {
        const swatches = this.props.colors.map(colour => (
            <Swatch background={ colour.color } name={ colour.name }/>
        ));
        
        return (
            <div className="Palette">
                {/* NavBar goes here ....*/}
                <div className="Palette-colours">
                    { swatches }
                </div>
                {/* Footer goes here ....*/}
            </div>
        );        
    }
}

export default Palette;