import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './Swatch.css'

class Swatch extends Component {
    state = { copied: false };

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1200)
        });
    }

    render() {
        const { name, background } = this.props;
        const { copied } = this.state;

        return (
            /* Click anywhere on swatch to copy background colour to clipboard */
            <CopyToClipboard text={ background } onCopy={ this.changeCopyState }>
                <div className="Swatch" style={{ backgroundColor: background }}>
                    <div className={ `copy-overlay ${ copied && "show" }` } 
                         style={{ backgroundColor: background }}
                    />
                    <div className={ `copy-msg ${ copied && "show" }` }>
                        <h1>Copied</h1>
                        <p>{ background }</p>
                    </div>
                    <div className="copy-container">
                        <div className="content">
                            { name }
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    <span className="show-more">More</span>
                </div>
            </CopyToClipboard>
        );
    }
}

export default Swatch;