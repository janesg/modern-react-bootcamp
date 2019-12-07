import React from 'react';
// import { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import styles from 'styles/MiniPaletteStyles';

// ****************************************************
// As a functional component defined inline with export
// ****************************************************
// withStyles is a HOC that wraps MiniPalette (a functional component)
//  - the 'styles' get passed down to MiniPalette as props
export default withStyles(styles)(function MiniPalette(props) {
    const { classes, colors, paletteName, emoji, navToPalette } = props;
    const miniColours = colors.map(c => (
        <div className={ classes.miniColour } style={{ backgroundColor: c.color }} key={ c.name } />
    ));

    return (
        <div className={ classes.root } onClick={ navToPalette }>
            <div className={ classes.colours }>
                { miniColours }
            </div>
            <h5 className={ classes.title }>{ paletteName } <span className={ classes.emoji }>{ emoji }</span></h5>
        </div>
    );
})

// ********************
// As a class component
// ********************
// class MiniPalette extends Component {
//     render() {
//         const { classes, colors, paletteName, emoji, navToPalette } = this.props;
//         const miniColours = colors.map(c => (
//             <div className={ classes.miniColour } style={{ backgroundColor: c.color }} key={ c.name } />
//         ));
    
//         return (
//             <div className={ classes.root } onClick={ navToPalette }>
//                 <div className={ classes.colours }>
//                     { miniColours }
//                 </div>
//                 <h5 className={ classes.title }>{ paletteName } <span className={ classes.emoji }>{ emoji }</span></h5>
//             </div>
//         );    
//     }
// }

// export default withStyles(styles)(MiniPalette);