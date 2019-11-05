import React, { Component } from 'react';

import './Palette.css';             /* Due to specificity, has to come after rc-slider css import */
import Swatch from './Swatch';
import NavBar from './NavBar';

class Palette extends Component {
    state = {
        level: 500
    }

    changeLevel = (level) => {
        this.setState({ level });
    }

    render() {
        const colours = this.props.palette.colors;
        const { level } = this.state;
        const swatches = colours[level].map(colour => (
            <Swatch background={ colour.hex } name={ colour.name }/>
        ));
        
        return (
            <div className="Palette">
                <NavBar level={ level } onChangeLevel={ this.changeLevel }/>
                <div className="Palette-colours">
                    { swatches }
                </div>
                {/* Footer goes here ....*/}
            </div>
        );        
    }
}

export default Palette;