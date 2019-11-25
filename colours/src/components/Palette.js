import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import PaletteFooter from './PaletteFooter';
import Swatch from './Swatch';
import NavBar from './NavBar';

const styles = {
    Palette: {
        height: "100vh",
        overflow: "hidden"       /* Prevents scrollbars from momentarily appearing */
    },
    paletteColours: {
        height: "89vh"           /* 100vh - NavBar (6vh) - Footer (5vh) */
    }    
}

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
        const { classes } = this.props;
        const { level, format } = this.state;
        const swatches = colours[level].map(colour => (
            <Swatch key={ colour.id }
                    background={ colour[format] } 
                    name={ colour.name }
                    showFullPalette={ true }
                    moreUrl={`/palette/${ id }/${ colour.id }`} />
        ));
        
        return (
            <div className={ classes.Palette }>
                <NavBar level={ level } 
                        changeLevel={ this.changeLevel }
                        changeFormat={ this.changeFormat }
                        showLevelSlider />
                <div className={ classes.paletteColours }>
                    { swatches }
                </div>
                <PaletteFooter paletteName={ paletteName } emoji={ emoji } />
            </div>
        );        
    }
}

export default withStyles(styles)(Palette);