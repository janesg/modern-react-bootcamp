import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './NavBar.css';

class NavBar extends Component {
    render() {
        const { level, onChangeLevel } = this.props;

        return (
            <header className="NavBar">
                <div className="logo">
                    <a href="#">Palette Schmalette</a>
                </div>
                <div className="slider-container">
                    <span>Level { level }</span>
                    <div className="slider">
                        <Slider defaultValue={ level } min={ 100 } max={ 900 } step={ 100 }
                                onAfterChange={ onChangeLevel }/>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavBar;