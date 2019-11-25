import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import NavBar from './NavBar';
import Swatch from './Swatch';
import PaletteFooter from './PaletteFooter';

const styles = {
    SingleColourPalette: {
        height: "100vh",
        overflow: "hidden",       /* Prevents scrollbars from momentarily appearing */
        "& Swatch": {
            height: "50%"
        }
    },
    paletteColours: {
        height: "89vh"           /* 100vh - NavBar (6vh) - Footer (5vh) */
    },    
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",        /* Reduce adjoining borders */
        opacity: 1,
        backgroundColor: "black",
        "& a": {
            color: "white",
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",         /* Offset by half of width */
            marginTop: "-15px",          /* Offset by half of height */
            border: "none",
            textAlign: "center",
            outline: "none",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase",
            textDecoration: "none"
        }
    }
}

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
        const { classes } = this.props;
        const { paletteName, emoji, id } = this.props.palette;

        const swatches = this._shades.map(c =>
            <Swatch key={ c.name }
                    background={ c[format] } 
                    name={ c.name } 
                    showFullPalette={ false } />
        );

        return (
            <div className={ classes.SingleColourPalette }>
                <NavBar changeFormat={ this.changeFormat } showLevelSlider={ false } />
                <div className={ classes.paletteColours }>
                    { swatches }
                    <div className={ classes.goBack }>
                        <Link to={ `/palette/${id}` }>Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={ paletteName } emoji={ emoji } />
            </div>
        );
    }
}

export default withStyles(styles)(SingleColourPalette);