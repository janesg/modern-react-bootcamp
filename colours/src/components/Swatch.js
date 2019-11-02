import React, { Component } from 'react';

import './Swatch.css'

class Swatch extends Component {
    render() {
        return (
            <div className="Swatch" style={{ backgroundColor: this.props.background }}>
                { this.props.name }<span>MORE</span>
            </div>
        );
    }
}

export default Swatch;