import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import MiniPalette from './MiniPalette';

import styles from 'styles/PaletteListStyles';

class PaletteList extends Component {

    goToPalette = id => {
        this.props.history.push(`/palette/${id}`)
    }

    render() {
        const { palettes, classes } = this.props;
        const miniPalettes = palettes.map(p => (
            /* Pass all Pallette properties down to MiniPalette */
            <MiniPalette { ...p } key={ p.id } navToPalette={ () => this.goToPalette(p.id) }/>
        ));

        return (
            <div className={ classes.root }>
                <div className={ classes.container }>
                    <nav className={ classes.nav }>
                        <h1>Palette Schmalette</h1>
                    </nav>
                    <div className={ classes.palettes }>
                        { miniPalettes }
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);