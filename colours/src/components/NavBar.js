import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import './NavBar.css';

class NavBar extends Component {

    state = {
        format: "hex"
    }

    changeFormat = (e) => {
        // setState is async, so use callback do pass back updated state to parent
        this.setState(
            { format: e.target.value },
            () => this.props.changeFormat(this.state.format)
        );
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state;

        return (
            <header className="NavBar">
                <div className="logo">
                    <Link to="/">Palette Schmalette</Link>
                </div>
                <div className="slider-container">
                    <span>Level { level }</span>
                    <div className="slider">
                        <Slider defaultValue={ level } min={ 100 } max={ 900 } step={ 100 }
                                onAfterChange={ changeLevel }/>
                    </div>
                </div>
                <div className="select-container">
                    <Select value={ format } onChange={ this.changeFormat }>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}

export default NavBar;