import React from 'react';
// import { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    // CSS properties have to be in camel case
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colours: {
        backgroundColor: "#dae1e4",
        height: "100px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColour: {
        width: "20%",   // 5 items horizontally
        height: "25%",  // 4 items vertically
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    }
}

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