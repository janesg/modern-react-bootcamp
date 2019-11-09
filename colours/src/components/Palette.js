import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import './Palette.css';
import Swatch from './Swatch';
import NavBar from './NavBar';

class Palette extends Component {
    state = {
        level: 500,
        format: "hex",
        snackbarOpen: false
    }

    changeLevel = (level) => {
        this.setState({ level });
    }

    changeFormat = (format) => {
        this.setState({ format, snackbarOpen: true });
    }

    closeSnackbar = () => {
        this.setState({ snackbarOpen: false });
    }

    render() {
        const colours = this.props.palette.colors;
        const { paletteName, emoji } = this.props.palette;
        const { level, format, snackbarOpen } = this.state;
        const swatches = colours[level].map(colour => (
            <Swatch key={ colour.id } background={ colour[format] } name={ colour.name }/>
        ));
        
        return (
            <div className="Palette">
                <NavBar level={ level } 
                        changeLevel={ this.changeLevel }
                        changeFormat={ this.changeFormat } />
                <div className="Palette-colours">
                    { swatches }
                </div>
                <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left" }} 
                        open={ snackbarOpen }
                        onClose={ this.closeSnackbar }
                        autoHideDuration={ 2000 }
                        message={ <span id="message-id">Format changed to : { format.toUpperCase() }</span> } 
                        ContentProps={{
                            "aria-describedby": "message-id"
                        }}
                        action={[
                            <IconButton onClick={ this.closeSnackbar } color="inherit" key="close" aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        ]} />
                <footer className="Palette-footer">
                    { paletteName }
                    <span className="emoji">{ emoji }</span>
                </footer>
            </div>
        );        
    }
}

export default Palette;