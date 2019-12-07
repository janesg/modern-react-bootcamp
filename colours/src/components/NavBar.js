import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import 'rc-slider/assets/index.css';
import styles from 'styles/NavBarStyles';

class NavBar extends Component {

    state = {
        format: "hex",
        snackbarOpen: false
    }

    changeFormat = (e) => {
        // setState is async, so we use callback form of setState
        // to pass back updated state to parent
        this.setState(
            { format: e.target.value, snackbarOpen: true },
            () => this.props.changeFormat(this.state.format)
        );
    }

    closeSnackbar = () => {
        this.setState({ snackbarOpen: false });
    }

    render() {
        const { level, changeLevel, showLevelSlider, classes } = this.props;
        const { format, snackbarOpen } = this.state;

        return (
            <header className={ classes.NavBar }>
                <div className={ classes.logo }>
                    <Link to="/">Palette Schmalette</Link>
                </div>
                { showLevelSlider && (
                    <div>
                        <span>Level {level}</span>
                        <div className={ classes.slider }>
                            <Slider defaultValue={level} min={100} max={900} step={100}
                                onAfterChange={changeLevel} />
                        </div>
                    </div>
                )}
                <div className={ classes.selectContainer }>
                    <Select value={format} onChange={this.changeFormat}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={snackbarOpen}
                    onClose={this.closeSnackbar}
                    autoHideDuration={2000}
                    message={<span id="message-id">Format changed to : {format.toUpperCase()}</span>}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    action={[
                        <IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        );
    }
}

export default withStyles(styles)(NavBar);